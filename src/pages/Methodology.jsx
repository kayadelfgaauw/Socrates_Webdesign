import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Methodology() {
    const containerRef = useRef(null);
    const layeredPinRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Timeline Line Animation
            gsap.to('.timeline-line-glow', {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.timeline-container',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true
                }
            });

            // Layered Cards Pinning & Animation
            const cards = gsap.utils.toArray('.layer-card');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: layeredPinRef.current,
                    start: 'top top',
                    end: `+=${cards.length * 100}%`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.5,
                }
            });

            cards.forEach((card, i) => {
                if (i === 0) return; // First card is already visible

                // Previous cards slightly scale down and dim as the next one comes in
                tl.to(cards.slice(0, i), {
                    scale: 0.95 - (i * 0.02),
                    opacity: 0.4,
                    duration: 1,
                    ease: "power2.inOut"
                }, i - 0.5);

                // Current card slides up
                tl.fromTo(card,
                    { yPercent: 120, opacity: 0 },
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out"
                    },
                    i - 0.5
                );
            });

            // Counter Animation
            const counters = document.querySelectorAll('.animate-counter');
            counters.forEach(counter => {
                gsap.fromTo(counter,
                    { innerText: counter.dataset.start },
                    {
                        innerText: counter.dataset.end,
                        duration: 2,
                        snap: { innerText: 1 },
                        ease: "power2.out",
                        autoRound: true,
                        scrollTrigger: {
                            trigger: counter,
                            start: "top 80%"
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-carbon min-h-screen">
            <Helmet>
                <title>Onze Formule | Socrates Webdesign - AI-Gedreven Methode</title>
                <meta name="description" content="Ontdek hoe Socrates Webdesign AI gebruikt om razendsnel cinematische websites te bouwen. Onze unieke aanpak combineert menselijke creativiteit met technologische kracht." />
                <link rel="canonical" href="https://socrates-webdesign.nl/formule" />
            </Helmet>

            {/* Hero */}
            <section className="pt-32 pb-24 px-6 md:px-12 border-b border-ash/10">
                <div className="max-w-7xl mx-auto">
                    <div className="font-data text-volt mb-6 uppercase tracking-widest text-sm">De Formule</div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter max-w-5xl leading-none">
                        <TextReveal text="Snelheid & AI" />
                    </h1>
                    <p className="mt-12 text-2xl md:text-3xl font-drama italic text-ash/80 max-w-2xl">
                        <TextReveal text="Waarom wij sneller en beter zijn dan de rest, zonder compromissen in esthetiek." delay={0.3} />
                    </p>
                </div>
            </section>

            {/* S5: De Socrates Aanpak (Timeline) */}
            <section className="py-32 px-6 md:px-12 relative timeline-container">
                <div className="absolute left-6 md:left-1/2 top-32 bottom-32 w-px bg-ash/10 md:-translate-x-1/2">
                    <div className="timeline-line-glow w-full bg-volt h-0 shadow-[0_0_15px_rgba(223,255,0,0.8)]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-32">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-12 group">
                        <div className="md:w-1/2 md:text-right md:pr-12">
                            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:text-volt transition-colors">
                                Diepgaande <br /> Strategie
                            </h3>
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <div className="w-12 h-12 bg-carbon border-2 border-ash/20 group-hover:border-volt rounded-full flex items-center justify-center font-data text-volt absolute left-6 md:left-1/2 -translate-x-1/2 translate-y-[-50%] group-hover:shadow-[0_0_20px_rgba(223,255,0,0.5)] transition-all">
                                01
                            </div>
                            <p className="font-drama text-xl text-ash/70 italic mt-6 md:mt-0">De Socrates Aanpak: Hoe je begint met de juiste, diepgaande vragen. We analyseren je visie tot op de kern voordat we ook maar één pixel ontwerpen.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* S6: De AI-First Executie (Layered Cards) */}
            <section ref={layeredPinRef} className="py-24 px-6 md:px-12 min-h-screen relative bg-matte">
                <div className="max-w-7xl mx-auto h-full relative">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                            A.I. First Executie
                        </h2>
                        <p className="font-data text-volt mt-4">DE MOTOR VAN MORGEN</p>
                    </div>

                    <div className="relative w-full max-w-4xl mx-auto h-[60vh] md:h-[60vh]">

                        {/* Card 1 */}
                        <div className="layer-card absolute inset-0 bg-carbon rounded-fluid border border-ash/10 p-8 md:p-16 flex flex-col justify-center shadow-xl z-10 will-change-transform">
                            <div className="font-data text-volt mb-4">FASE 1: CONCEPT GENERATIE</div>
                            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Razend&shy;snel Concepten</h3>
                            <p className="font-drama text-xl text-ash/70 italic">Met behulp van geavanceerde LLM's zetten we ruwe ideeën onmiddellijk om in gedetailleerde wireframes en cinematische blauwdrukken. Wat vroeger weken duurde, gebeurt in uren.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="layer-card absolute inset-0 bg-[#0a0a0a] rounded-fluid border border-ash/20 p-8 md:p-16 flex flex-col justify-center shadow-2xl z-20 will-change-transform opacity-0">
                            <div className="font-data text-volt mb-4">FASE 2: CODE SYNTHESE</div>
                            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Foutloze Code</h3>
                            <p className="font-drama text-xl text-ash/70 italic">Onze AI-assistenten schrijven boilerplate, complexe logica en animaties met onberispelijke precisie. De menselijke architect overziet het grote geheel, de machine bouwt de motor.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="layer-card absolute inset-0 bg-[#121212] rounded-fluid border border-volt/30 p-8 md:p-16 flex flex-col justify-center shadow-[0_-10px_40px_rgba(223,255,0,0.1)] z-30 will-change-transform opacity-0">
                            <div className="font-data text-volt mb-4">FASE 3: PERFECTE BEELDEN</div>
                            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Visuals op Maat</h3>
                            <p className="font-drama text-xl text-ash/70 italic">Vergeet generieke stock foto's. We genereren hyper-realistische, esthetisch perfecte beelden die 100% aansluiten bij jouw merkidentiteit.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* S7: Jouw Voordeel (De Finish) */}
            <section className="py-32 px-6 md:px-12 bg-carbon">
                <div className="max-w-7xl mx-auto bg-carbon-light rounded-fluid p-8 md:p-24 border border-ash/10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
                                Jouw Voordeel
                            </h2>
                            <ul className="space-y-6 font-drama text-xl italic text-ash/80">
                                <li className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-volt rounded-full"></div>
                                    Snellere oplevering zonder kwaliteitsverlies
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-volt rounded-full"></div>
                                    Lagere kosten voor high-end, cinematic design
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-volt rounded-full"></div>
                                    Architectuur die direct klaar is voor de toekomst
                                </li>
                            </ul>
                        </div>

                        <div className="bg-matte p-12 rounded-fluid-lg border border-volt/20 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-volt/5 blur-3xl rounded-full"></div>
                            <div className="relative z-10">
                                <div className="font-data text-ash/50 text-sm mb-4">Verkorte Doorlooptijd</div>
                                <div className="text-8xl md:text-[8rem] font-bold text-volt tracking-tighter tabular-nums leading-none">
                                    <span className="animate-counter" data-start="12" data-end="2">12</span><span className="text-4xl text-ash/40">WEKEN</span>
                                </div>
                                <div className="mt-6 font-data tracking-widest text-sm uppercase text-volt/80">
                                    Van Maanden naar Weken
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
