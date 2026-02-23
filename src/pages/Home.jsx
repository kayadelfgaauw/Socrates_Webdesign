import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, name: 'Atelier Goudkust', url: 'https://ateliergoudkust.nl', speed: '3.2s', stack: 'React, GSAP, Tailwind', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop' },
    { id: 2, name: 'Dehypno', url: 'https://dehypno.nl', speed: '2.8s', stack: 'Next.js, Framer Motion', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop' },
    { id: 3, name: 'Op Dreef Motoren', url: 'https://opdreefmotoren.nl', speed: '4.1s', stack: 'Vue 3, Three.js', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop' }
];

export default function Home() {
    const horizontalRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Horizontal Scroll
            const track = trackRef.current;
            if (track) {
                // Only run horizontal scroll on larger screens
                let isMobile = window.innerWidth < 768;

                if (!isMobile) {
                    const amountToScroll = track.scrollWidth - window.innerWidth;

                    gsap.to(track, {
                        x: -amountToScroll,
                        ease: "none",
                        scrollTrigger: {
                            trigger: horizontalRef.current,
                            start: "top top",
                            end: `+=${amountToScroll}`,
                            pin: true,
                            scrub: 1,
                        }
                    });
                }
            }

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
            {/* S1: Hero - De Windtunnel */}
            <section className="hero-section relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center pt-24 pb-12 px-6">
                <div
                    className="hero-bg absolute inset-0 bg-cover bg-center opacity-[0.15] z-0 scale-110"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541415664-9d564ceb3aa1?q=80&w=2000&auto=format&fit=crop')" }}
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
                            <MagneticButton as={Link} to="/contact">System Engage</MagneticButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* S2: De Machinekamer */}
            <section className="machine-section relative py-32 md:py-48 px-6 border-t border-ash/10 overflow-hidden bg-carbon/50 backdrop-blur-sm">
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 border-l border-ash/5 font-data text-[10px] md:text-xs leading-none text-ash/20 overflow-hidden opacity-30 select-none">
                    <div className="data-stream-content flex flex-col gap-1 p-2 md:p-4 break-all">
                        {Array.from({ length: 150 }).map((_, i) => (
                            <span key={i}>{Math.random().toString(36).substring(2, 12)} [OK]</span>
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

            {/* S3: De Telemetrie (Horizontal Scroll) */}
            <section ref={horizontalRef} className="bg-matte h-auto md:h-screen flex flex-col relative overflow-hidden py-24 md:py-0">
                <div className="md:absolute top-12 left-6 md:left-12 z-20 mix-blend-difference mb-12 md:mb-0 px-6 md:px-0">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-ash">
                        Uitgelicht Werk <span className="text-volt">/</span> Telemetrie
                    </h2>
                </div>

                {/* On mobile, stack vertically. On desktop, horizontal scroll track */}
                <div ref={trackRef} className="flex flex-col md:flex-row h-full md:w-[300vw] items-center px-6 md:px-12 gap-12 md:gap-24 md:pt-20">
                    {projects.map((project) => (
                        <div key={project.id} className="w-full md:w-[60vw] h-[50vh] md:h-[70vh] shrink-0 relative group rounded-fluid md:rounded-fluid-lg overflow-hidden bg-carbon-light">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-matte via-matte/20 to-transparent opacity-90 md:opacity-80"></div>

                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 md:group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.img})` }}
                                loading="lazy"
                            ></div>

                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-12">
                                <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-0">
                                    <div>
                                        <div className="font-data text-volt mb-4 space-x-4 text-xs md:text-sm">
                                            <span>SYS_LATENCY: {project.speed}</span>
                                            <span className="hidden md:inline">STACK: {project.stack}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-ash mix-blend-normal md:mix-blend-overlay">
                                            {project.name}
                                        </h3>
                                    </div>

                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full border border-volt/30 flex items-center justify-center text-volt hover:bg-volt hover:text-matte transition-all duration-500"
                                    >
                                        <span className="font-data tracking-tighter text-sm">→</span >
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="w-full md:w-[30vw] h-[30vh] md:h-[70vh] shrink-0 flex items-center justify-center relative">
                        <MagneticButton as={Link} to="/portfolio">Bekijk Alle Projecten</MagneticButton>
                    </div>
                </div>
            </section>

            {/* S4: Outro CTA to Contact */}
            <section className="py-32 md:py-48 px-6 text-center border-t border-ash/10 bg-carbon">
                <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-12">
                    Klaar voor <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-ash to-volt">Lancering?</span>
                </h2>
                <MagneticButton as={Link} to="/contact" className="!px-12 !py-6 text-lg">
                    Override & Engage
                </MagneticButton>
            </section>
        </div>
    );
}
