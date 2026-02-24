import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * LivePreviewContainer
 * Mac-style browser mockup met live iFrame preview.
 * Features: GSAP ScrollTrigger pinning, weighted hover, Midnight Luxe esthetic.
 */
export default function LivePreviewContainer({
    url,
    name,
    type,
    year,
    stack,
    speed,
    className = '',
    pinOnScroll = false,
}) {
    const containerRef = useRef(null);
    const iframeRef = useRef(null);
    const frameRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Strip protocol for address bar display
    const displayUrl = url.replace(/^https?:\/\//, '');

    // --- GSAP: ScrollTrigger Pin + pointer-events toggle ---
    useEffect(() => {
        if (!pinOnScroll || !containerRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 10%',
                end: '+=600',
                pin: true,
                pinSpacing: true,
                onEnter: () => setIsActive(true),
                onLeave: () => setIsActive(false),
                onEnterBack: () => setIsActive(true),
                onLeaveBack: () => setIsActive(false),
            });
        }, containerRef);

        return () => ctx.revert();
    }, [pinOnScroll]);

    // --- GSAP: Weighted Hover (Magnetic tilt) ---
    useEffect(() => {
        const frame = frameRef.current;
        if (!frame) return;

        const handleMove = (e) => {
            const { left, top, width, height } = frame.getBoundingClientRect();
            const xPos = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
            const yPos = (e.clientY - top) / height - 0.5;

            gsap.to(frame, {
                rotateY: xPos * 6,
                rotateX: -yPos * 6,
                x: xPos * 12,
                y: yPos * 8,
                duration: 0.6,
                ease: 'power2.out',
            });
        };

        const handleLeave = () => {
            gsap.to(frame, {
                rotateY: 0,
                rotateX: 0,
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)',
            });
        };

        frame.addEventListener('mousemove', handleMove);
        frame.addEventListener('mouseleave', handleLeave);

        return () => {
            frame.removeEventListener('mousemove', handleMove);
            frame.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`live-preview-wrapper w-full ${className}`}
        >
            {/* Browser Mockup Frame */}
            <div
                ref={frameRef}
                className="browser-frame relative rounded-[24px] overflow-hidden shadow-glow-deep border border-white/[0.06] bg-midnight"
                style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
                {/* ── Browser Chrome ── */}
                <div className="browser-chrome relative flex items-center gap-3 px-5 py-3.5 bg-white/[0.04] backdrop-blur-xl border-b border-white/[0.06]">
                    {/* Window Controls */}
                    <div className="flex items-center gap-2 shrink-0">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.4)]" />
                        <span className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_rgba(254,188,46,0.4)]" />
                        <span className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_6px_rgba(40,200,64,0.4)]" />
                    </div>

                    {/* Address Bar */}
                    <div className="flex-1 mx-3 flex items-center justify-center">
                        <div className="address-bar flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/[0.06] backdrop-blur-md border border-white/[0.08] max-w-md w-full">
                            <svg className="w-3.5 h-3.5 text-volt/60 shrink-0" viewBox="0 0 16 16" fill="none">
                                <path d="M8 1L8 1C4.134 1 1 4.134 1 8V8C1 11.866 4.134 15 8 15V15C11.866 15 15 11.866 15 8V8C15 4.134 11.866 1 8 1Z" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                            <span className="font-data text-[11px] text-ash/50 tracking-wide truncate select-none">
                                {displayUrl}
                            </span>
                        </div>
                    </div>

                    {/* Live indicator */}
                    <div className="flex items-center gap-1.5 shrink-0">
                        <span className={`w-1.5 h-1.5 rounded-full ${isLoaded ? 'bg-[#28C840] animate-pulse' : 'bg-ash/30'}`} />
                        <span className="font-data text-[9px] text-ash/30 uppercase tracking-widest">
                            {isLoaded ? 'Live' : 'Laden...'}
                        </span>
                    </div>
                </div>

                {/* ── iFrame Viewport ── */}
                <div className="iframe-viewport relative w-full aspect-[16/10] bg-midnight overflow-hidden">
                    {/* Loading skeleton */}
                    {!isLoaded && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-midnight">
                            <div className="w-10 h-10 border-2 border-volt/30 border-t-volt rounded-full animate-spin" />
                            <span className="font-data text-xs text-ash/30 tracking-widest uppercase">
                                Preview laden...
                            </span>
                        </div>
                    )}

                    <iframe
                        ref={iframeRef}
                        src={url}
                        title={`Live preview van ${name}`}
                        className={`w-full h-full border-0 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                        onLoad={() => setIsLoaded(true)}
                    />

                    {/* Scroll hint overlay — fades out when active */}
                    <div className={`absolute inset-0 z-20 flex items-center justify-center bg-matte/30 backdrop-blur-[2px] transition-all duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <div className="flex flex-col items-center gap-3">
                            <div className="scroll-hint-icon w-6 h-10 rounded-full border-2 border-volt/40 relative">
                                <div className="absolute left-1/2 top-2 -translate-x-1/2 w-1 h-2 rounded-full bg-volt animate-bounce" />
                            </div>
                            <span className="font-data text-[10px] text-volt/60 uppercase tracking-[0.2em]">
                                Scroll om te ontdekken
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Info Bar ── */}
                <div className="flex items-center justify-between px-5 py-3 bg-white/[0.03] border-t border-white/[0.06]">
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg md:text-xl font-bold uppercase tracking-tighter text-ash">
                            {name}
                        </h3>
                        {type && (
                            <span className="hidden md:inline font-data text-[10px] text-ash/40 uppercase tracking-widest">
                                {type}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        {speed && (
                            <span className="hidden md:inline font-data text-[10px] text-volt/60">
                                LATENCY: {speed}
                            </span>
                        )}
                        {year && (
                            <span className="font-data text-volt border border-volt/30 px-3 py-0.5 rounded-full text-[10px]">
                                {year}
                            </span>
                        )}
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-volt/10 border border-volt/20 text-volt font-data text-[10px] uppercase tracking-widest hover:bg-volt hover:text-matte transition-all duration-400"
                        >
                            Bekijk site
                            <span className="text-xs">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
