import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);

    // Generate stable random matrix data using state initializer (safe from render purity rules)
    const [matrixData] = useState(() => {
        return Array.from({ length: 20 }).map(() => ({
            marginTop: `${Math.random() * -100}%`,
            opacity: 0.1 + Math.random() * 0.4,
            chars: Array.from({ length: 40 }).map(() => ({
                isSocrates: Math.random() > 0.8,
                randomStr: Math.random().toString(36).substring(2, 8)
            }))
        }));
    });

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Matrix Rain Effect (simplified CSS/GSAP sim)
            const matrixColumns = document.querySelectorAll('.matrix-col');
            matrixColumns.forEach((col) => {
                gsap.to(col, {
                    yPercent: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: '.split-section',
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-carbon min-h-screen pt-24">
            <Helmet>
                <title>Onze Filosofie | Socrates Webdesign - Mens + Machine</title>
                <meta name="description" content="Socrates Webdesign gelooft in de symbiose tussen menselijke intuïtie en technologische efficiëntie. Lees meer over onze visie op de toekomst van het internet." />
                <link rel="canonical" href="https://socrates-webdesign.nl/filosofie" />
            </Helmet>

            <section className="split-section flex flex-col md:flex-row min-h-[90vh] relative border-t border-ash/10">

                {/* Left Side: Story */}
                <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-ash/10 bg-matte/50 z-10 relative">
                    <div className="font-data text-volt mb-8 uppercase tracking-widest text-sm">De Piloot</div>
                    <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-12 mix-blend-difference">
                        <TextReveal text="Socrates +" as="span" /> <br />
                        <span className="text-volt"><TextReveal text="De Machine" delay={0.2} as="span" /></span>
                    </h1>

                    <div className="space-y-8 font-drama text-xl md:text-2xl italic text-ash/80 max-w-xl">
                        <p>
                            <TextReveal text="Genoemd naar de grondlegger van kritische vragen, geloven wij dat de beste antwoorden beginnen bij de juiste inzichten. Wij bevragen je ambities tot in de kern." delay={0.4} />
                        </p>
                        <p>
                            <TextReveal text="Maar waar Socrates duizenden jaren geleden eindigde bij de filosofie, beginnen wij met de executie. Als designer versmelt ik klassieke esthetiek met de meedogenloze efficiëntie van moderne AI." delay={0.6} />
                        </p>
                        <p className="text-ash/60 text-lg md:text-xl">
                            <TextReveal text="Het resultaat is geen compromis tussen mens en machine, maar een naadloze symbiose. High-end, toekomstbestendige webervaringen, geproduceerd in een fractie van de voormalige productietijd." delay={0.8} />
                        </p>
                    </div>
                </div>

                {/* Right Side: Data Matrix */}
                <div className="w-full md:w-1/2 relative overflow-hidden bg-matte flex justify-center items-center">

                    {/* Subtle image overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop')" }}
                    ></div>

                    {/* Matrix Overlay */}
                    <div className="absolute inset-0 z-10 opacity-70 flex gap-2 md:gap-4 overflow-hidden mask-image-linear-gradient">
                        {matrixData.map((col, i) => (
                            <div
                                key={i}
                                className="matrix-col font-data text-volt/50 text-xs md:text-sm tracking-widest writing-vertical uppercase h-[200%]"
                                style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'mixed',
                                    marginTop: col.marginTop,
                                    opacity: col.opacity
                                }}
                            >
                                {col.chars.map((char, j) => (
                                    <span key={j} className="block my-2">
                                        {char.isSocrates ? 'SOCRATES' : char.randomStr}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-full border border-volt/30 flex items-center justify-center p-8 backdrop-blur-sm bg-carbon/40">
                        <div className="w-full h-full rounded-full border border-volt/50 flex flex-col items-center justify-center animate-pulse shadow-[0_0_30px_rgba(223,255,0,0.2)]">
                            <span className="font-data text-volt tracking-widest text-xs mb-2">SYSTEEM</span>
                            <span className="font-heading font-bold text-3xl">GEREED</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
