import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ text, className = '', delay = 0, as = 'span' }) {
    const containerRef = useRef(null);

    // Split words by space for animation
    const words = typeof text === 'string' ? text.split(' ') : [];

    useEffect(() => {
        if (!containerRef.current || words.length === 0) return;

        let ctx = gsap.context(() => {
            const wordElements = containerRef.current.querySelectorAll('.reveal-word');

            gsap.fromTo(wordElements,
                { y: 50, opacity: 0, rotateX: -45 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.02,
                    ease: "power3.out",
                    delay: delay,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [text, delay]);

    if (typeof text !== 'string') return <span className={className}>{text}</span>;

    const Component = as;

    return (
        <Component ref={containerRef} className={`${className}`} style={{ perspective: '400px' }}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-1">
                    <span className="reveal-word inline-block origin-bottom">{word}</span>
                </span>
            ))}
        </Component>
    );
}
