import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
    {
        id: 1,
        name: 'Atelier Goudkust',
        type: 'E-commerce',
        year: '2024',
        url: 'https://ateliergoudkust.nl',
        image: 'https://images.unsplash.com/photo-1629198725805-4c6e9a9d7014?q=80&w=2000&auto=format&fit=crop',
        align: 'justify-start'
    },
    {
        id: 2,
        name: 'Dehypno',
        type: 'Corporate Identity',
        year: '2025',
        url: 'https://dehypno.nl',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop',
        align: 'justify-end md:-mt-48'
    },
    {
        id: 3,
        name: 'Op Dreef Motoren',
        type: 'Interactive Platform',
        year: '2025',
        url: 'https://opdreefmotoren.nl',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop',
        align: 'justify-center md:mt-24'
    }
];

export default function Portfolio() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax effect on images
            const items = gsap.utils.toArray('.portfolio-item');

            items.forEach((item, i) => {
                const img = item.querySelector('.portfolio-img');

                gsap.fromTo(img,
                    { yPercent: -15, scale: 1.1 },
                    {
                        yPercent: 15,
                        ease: "none",
                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full pt-32 pb-24 px-6 md:px-12 bg-carbon">
            <div className="max-w-7xl mx-auto mb-32">
                <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                    <TextReveal text="De Paddock" />
                </h1>
                <div className="flex justify-between items-end border-b border-ash/20 pb-8">
                    <p className="font-drama text-2xl md:text-3xl text-ash/80 italic max-w-lg">
                        <TextReveal text="Een galerie geoptimaliseerd voor snelheid. Geen onnodige laadtijden, direct resultaat." delay={0.2} as="span" />
                    </p>
                    <div className="hidden md:flex items-center gap-4 text-xs font-data uppercase tracking-widest text-volt">
                        <span>Scroll for details</span>
                        <span className="w-8 h-[1px] bg-volt"></span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-32 md:gap-48 relative z-10">
                {portfolioItems.map((item, index) => (
                    <div key={item.id} className={`flex w-full ${item.align} portfolio-item`}>
                        <a href={item.url} target="_blank" rel="noreferrer" className="group w-full md:w-[65%] block cursor-none">
                            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-fluid relative bg-carbon-light">
                                <div
                                    className="portfolio-img absolute inset-[-10%] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                ></div>

                                {/* Custom Hover Cursor / Preview Ring */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100 pointer-events-none">
                                    <div className="w-32 h-32 rounded-full border border-volt/50 bg-matte/40 backdrop-blur-sm flex items-center justify-center text-volt font-data text-xs tracking-widest uppercase animate-[spin_10s_linear_infinite]">
                                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                            <path id={`textPath-${item.id}`} fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                            <text className="fill-volt font-bold text-[10px]">
                                                <textPath href={`#textPath-${item.id}`} startOffset="0%">
                                                    • BEKIJK PROJECT • BEKIJK PROJECT •
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-between items-start">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-volt transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="font-data text-ash/60 text-sm mt-2">{item.type}</p>
                                </div>
                                <div className="font-data text-volt border border-volt px-4 py-1 rounded-full text-xs">
                                    {item.year}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto mt-48 text-center">
                <MagneticButton as="a" href="/contact" className="!px-12 !py-6">
                    Zelf op de Grid Staan?
                </MagneticButton>
            </div>
        </div>
    );
}
