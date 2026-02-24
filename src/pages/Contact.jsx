import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const steps = [
    { id: 'start', question: 'Klaar om iets prachtigs te bouwen?', type: 'info', action: 'START PROTOCOL' },
    { id: 'vision', question: 'Wat is je visie?', prefix: 'VISIE >', type: 'input', placeholder: 'Sleutelwoorden, doelen, identiteit...' },
    { id: 'timeline', question: 'Wat is je tijdlijn?', prefix: 'TIJDLIJN >', type: 'input', placeholder: 'Binnen 2 weken, een maand, direct...' },
    { id: 'contact', question: 'Hoe kunnen we je bereiken?', prefix: 'CONTACT >', type: 'input', placeholder: 'E-mail, telefoonnummer, of bedrijfsnaam...' },
    { id: 'finish', question: 'Gegevens ontvangen. Systeem override succesvol.', type: 'terminal', action: 'TERUG NAAR BASIS' }
];

export default function Contact() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [answers, setAnswers] = useState({ vision: '', timeline: '', contact: '' });
    const [inputValue, setInputValue] = useState('');
    const [logs, setLogs] = useState(['INIT SOCRATES_PROTOCOL v1.0.0', 'BEZIG MET HET OPZETTEN VAN EEN VEILIGE VERBINDING...', '[OK] VERBONDEN']);

    const inputRef = useRef(null);
    const terminalRef = useRef(null);
    const navigate = useNavigate();

    const currentStep = steps[currentStepIndex];

    useEffect(() => {
        // Focus input on step change
        if (currentStep.type === 'input' && inputRef.current) {
            inputRef.current.focus();
        }

        // Animate terminal lines
        if (terminalRef.current) {
            gsap.fromTo(terminalRef.current.querySelectorAll('.terminal-line:last-child'),
                { opacity: 0, x: -10 },
                { opacity: 1, x: 0, duration: 0.3 }
            );
        }
    }, [currentStepIndex, logs]);

    const handleNext = () => {
        if (currentStep.type === 'input') {
            if (!inputValue.trim()) return;
            setAnswers(prev => ({ ...prev, [currentStep.id]: inputValue }));
            setLogs(prev => [...prev, `${currentStep.prefix} ${inputValue}`, '[OK] GEGEVENS GEREGISTREERD']);
            setInputValue('');
        } else if (currentStep.type === 'info') {
            setLogs(prev => [...prev, 'PROTOCOL GEÏNITIEERD / WACHTEN OP GEBRUIKERSINVOER']);
        } else if (currentStep.type === 'terminal') {
            // Simulate form submission
            navigate('/');
            return;
        }

        setCurrentStepIndex(prev => prev + 1);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleNext();
        }
    };

    return (
        <div className="w-full min-h-screen bg-matte flex flex-col pt-24 pb-12 px-6 overflow-hidden">
            <Helmet>
                <title>Contact | Socrates Webdesign - Start je Project</title>
                <meta name="description" content="Klaar om de grid op te gaan? Start het Socrates protocol en vertel ons over je visie. Wij bouwen de website van de toekomst voor je." />
                <link rel="canonical" href="https://socrates-webdesign.nl/contact" />
            </Helmet>

            {/* Terminal View */}
            <div className="max-w-4xl mx-auto w-full flex flex-col flex-grow relative z-10">

                <div className="flex justify-between items-center border-b border-volt/20 pb-4 mb-12">
                    <div className="font-data text-volt tracking-widest text-xs uppercase flex items-center gap-3">
                        <span className="w-2 h-2 bg-volt animate-pulse"></span>
                        Toegang_Verleend
                    </div>
                    <div className="text-ash/40 font-data text-xs hidden md:block">
                        {new Date().toISOString()} CPU: 12% RAM: 450MB
                    </div>
                </div>

                {/* Console Logs */}
                <div className="flex-grow flex flex-col justify-end mb-12" ref={terminalRef}>
                    <div className="space-y-4 font-data text-ash/60 text-sm md:text-base mb-8">
                        {logs.map((log, index) => (
                            <div key={index} className="terminal-line opacity-80">
                                {log}
                            </div>
                        ))}
                    </div>

                    {/* Active Prompt */}
                    <div className="relative">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-ash mb-8 select-none">
                            {currentStep.question}
                        </h2>

                        {currentStep.type === 'input' && (
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-xl md:text-2xl font-data text-volt w-full border-b border-volt/30 pb-4 group hover:border-volt/80 transition-colors">
                                <span className="shrink-0 animate-pulse">{currentStep.prefix}</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder={currentStep.placeholder}
                                    className="bg-transparent border-none outline-none w-full text-volt placeholder-volt/30 focus:ring-0"
                                    autoFocus
                                    autoComplete="off"
                                />
                            </div>
                        )}

                        {(currentStep.type === 'info' || currentStep.type === 'terminal' || (currentStep.type === 'input' && inputValue.trim().length > 0)) && (
                            <button
                                onClick={handleNext}
                                className="mt-12 group flex items-center gap-4 text-volt font-data uppercase tracking-widest text-sm"
                            >
                                <div className="w-12 h-12 border border-volt/30 group-hover:bg-volt group-hover:text-matte rounded-full flex items-center justify-center transition-all duration-300">
                                    <span className="font-data tracking-tighter">→</span>
                                </div>
                                <span>{currentStep.action || 'BEVESTIG ->'}</span>
                            </button>
                        )}

                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-full bg-carbon mt-auto relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-volt shadow-[0_0_10px_rgba(223,255,0,0.8)] transition-all duration-500 ease-out"
                        style={{ width: `${((currentStepIndex) / (steps.length - 1)) * 100}%` }}
                    ></div>
                </div>

            </div>

            {/* Background Decor */}
            <div className="absolute -bottom-1/2 -right-1/4 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] rounded-full border border-ash/5 rounded-[40%] animate-spin-slow pointer-events-none opacity-20 hidden md:block"></div>

        </div>
    );
}
