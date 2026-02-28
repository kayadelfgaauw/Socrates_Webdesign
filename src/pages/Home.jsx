import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';
import LivePreviewContainer from '../components/LivePreviewContainer';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, name: 'Atelier Goudkust', url: 'https://ateliergoudkust.nl', speed: '3.2s', stack: 'React, GSAP, Tailwind' },
    { id: 2, name: 'Dehypno', url: 'https://dehypno.nl', speed: '2.8s', stack: 'Next.js, Framer Motion' },
    { id: 3, name: 'Op Dreef Motoren', url: 'https://opdreefmotoren.nl', speed: '4.1s', stack: 'Vue 3, Three.js' }
];

export default function Home() {
    // Generate stable random stream data using state initializer (safe from render purity rules)
    const [streamData] = useState(() => {
        return Array.from({ length: 150 }).map(() => ({
            id: Math.random().toString(36).substring(2, 12)
        }));
    });

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Parallax
            gsap.to('.hero-bg', {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Data stream
            const dataStream = document.querySelector('.data-stream-content');
            if (dataStream) {
                gsap.to(dataStream, {
                    y: -1000,
                    ease: "none",
                    scrollTrigger: {
                        trigger: '.machine-section',
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }

        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full">
            <Helmet>
                <title>Socrates Webdesign | High-End Webdesign & AI Ontwikkeling</title>
                <meta name="description" content="Dé partner voor cinemastische websites en AI-gedreven webontwikkeling. Wij bouwen razendsnelle, performante digitale ervaringen die indruk maken." />
                <link rel="canonical" href="https://socrates-webdesign.nl/" />
            </Helmet>
            {/* S1: Hero - De Windtunnel */}
            <section className="hero-section relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center pt-24 pb-12 px-6">
                <div
                    className="hero-bg absolute inset-0 bg-cover bg-[75%_center] md:bg-center opacity-[0.15] z-0 scale-110"
                    style={{ backgroundImage: "url('/images/Hero.2.webp')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col h-full justify-between">
                    <div className="mt-16 md:mt-24">
                        <h1 className="text-[12vw] md:text-[8vw] lg:text-[7rem] leading-[0.95] font-bold uppercase tracking-tighter flex flex-col items-start gap-1">
                            <TextReveal text="Adembenemend" delay={0.2} />
                            <TextReveal text="Webdesign." className="text-volt drop-shadow-md pb-4" delay={0.4} />
                            <TextReveal text="Razendsnel" delay={0.6} />
                            <TextReveal text="door AI." delay={0.8} />
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-4 md:pb-12">
                        <div className="font-drama text-xl md:text-3xl max-w-md italic text-ash/80">
                            <TextReveal text="Wij bouwen de websites van morgen in een fractie van de tijd." delay={1} />
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="hidden md:block h-[1px] w-24 bg-volt"></div>
                            <MagneticButton as={Link} to="/contact">Project Starten</MagneticButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* S2: De Machinekamer */}
            <section className="machine-section relative py-32 md:py-48 px-6 border-t border-ash/10 overflow-hidden bg-carbon/50 backdrop-blur-sm">
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 border-l border-ash/5 font-data text-[10px] md:text-xs leading-none text-ash/20 overflow-hidden opacity-30 select-none">
                    <div className="data-stream-content flex flex-col gap-1 p-2 md:p-4 break-all">
                        {streamData.map((data, i) => (
                            <span key={i}>{data.id} [OK]</span>
                        ))}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-8 font-data text-volt tracking-widest text-xs md:text-sm">
                        <span className="w-2 h-2 rounded-full bg-volt animate-pulse"></span>
                        INTRODUCTIE_PROTOCOL
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-[1.1] mb-12">
                        <TextReveal text="Socrates stelde de juiste vragen." />
                        <span className="block text-ash/40"><TextReveal text="Wij doen hetzelfde," delay={0.2} /></span>
                        <TextReveal text="maar gebruiken de technologie van morgen voor de antwoorden." delay={0.4} />
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-base md:text-xl font-drama italic text-ash/80">
                        <div>
                            <TextReveal text="Door onze AI-first workflow combineren we adembenemend design met een ontwikkelsnelheid die vroeger onmogelijk was." delay={0.6} />
                        </div>
                        <div>
                            <TextReveal text="Jij krijgt je website sneller, en hij is direct klaar voor de toekomst. Geen compromissen, enkel pure vooruitgang." delay={0.8} />
                        </div>
                    </div>
                </div>
            </section>

            {/* S3: Uitgelicht Werk — Live Preview Containers */}
            <section className="relative bg-matte py-24 md:py-32 overflow-hidden">
                {/* Section Header */}
                <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
                    <div className="flex items-center gap-4 mb-4 font-data text-volt tracking-widest text-xs">
                        <span className="w-2 h-2 rounded-full bg-volt animate-pulse"></span>
                        LIVE_PREVIEW_MODUS
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-ash">
                        Uitgelicht Werk <span className="text-volt">/</span> Telemetrie
                    </h2>
                    <p className="font-drama text-lg text-ash/50 italic mt-4 max-w-xl">
                        Interactieve live previews — scroll door de sites alsof je er bent.
                    </p>
                </div>

                {/* Preview Cards */}
                <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32">
                    {projects.map((project) => (
                        <LivePreviewContainer
                            key={project.id}
                            url={project.url}
                            name={project.name}
                            speed={project.speed}
                            stack={project.stack}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="max-w-6xl mx-auto px-6 md:px-12 mt-24 flex justify-center">
                    <MagneticButton as={Link} to="/werk">Bekijk Alle Projecten</MagneticButton>
                </div>
            </section>

            {/* S4: Outro CTA to Contact */}
            <section className="py-32 md:py-48 px-6 text-center border-t border-ash/10 bg-carbon">
                <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-12">
                    Klaar voor <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-ash to-volt">Lancering?</span>
                </h2>
                <MagneticButton as={Link} to="/contact" className="!px-12 !py-6 text-lg">
                    Start de Lancering
                </MagneticButton>
            </section>
        </div>
    );
}
