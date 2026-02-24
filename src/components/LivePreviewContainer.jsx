import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

/**
 * LivePreviewContainer
 * Mac-style browser mockup met live iFrame preview.
 * Features: weighted hover (desktop), iframe scaling (mobile), Midnight Luxe esthetic.
 *
 * Mobile strategy: the iframe renders at 1280px internal width and gets scaled down
 * via CSS transform so the site looks like a zoomed-out desktop preview, avoiding
 * the "zoomed-in unreadable mobile" problem.
 */
export default function LivePreviewContainer({
    url,
    name,
    type,
    year,
    speed,
    className = '',
}) {
    const containerRef = useRef(null);
    const iframeRef = useRef(null);
    const frameRef = useRef(null);
    const viewportRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [iframeDims, setIframeDims] = useState({ width: 1280, scale: 1 });

    // Strip protocol for address bar display
    const displayUrl = url.replace(/^https?:\/\//, '');

    // --- Calculate iframe scale for mobile ---
    useEffect(() => {
        const calculateScale = () => {
            const viewport = viewportRef.current;
            if (!viewport) return;
            const containerWidth = viewport.offsetWidth;

            // Always render iframe at 1280px wide, scale down to fit
            const iframeWidth = 1280;
            const scale = containerWidth / iframeWidth;
            setIframeDims({ width: iframeWidth, scale: Math.min(scale, 1) });
        };

        calculateScale();
        window.addEventListener('resize', calculateScale);
        return () => window.removeEventListener('resize', calculateScale);
    }, []);

    // --- GSAP: Weighted Hover (Magnetic tilt) — desktop only ---
    useEffect(() => {
        const frame = frameRef.current;
        if (!frame) return;

        // Skip on touch devices
        if (window.matchMedia('(hover: none)').matches) return;

        const handleMove = (e) => {
            const { left, top, width, height } = frame.getBoundingClientRect();
            const xPos = (e.clientX - left) / width - 0.5;
            const yPos = (e.clientY - top) / height - 0.5;

            gsap.to(frame, {
                rotateY: xPos * 5,
                rotateX: -yPos * 5,
                x: xPos * 10,
                y: yPos * 6,
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

    // Height of the iframe in its own coordinate space
    const iframeHeight = Math.round(iframeDims.width * (10 / 16)); // 16:10 aspect ratio

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
                <div className="browser-chrome relative flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2.5 md:py-3.5 bg-white/[0.04] backdrop-blur-xl border-b border-white/[0.06]">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                        <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.4)]" />
                        <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_rgba(254,188,46,0.4)]" />
                        <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28C840] shadow-[0_0_6px_rgba(40,200,64,0.4)]" />
                    </div>

                    {/* Address Bar */}
                    <div className="flex-1 mx-1.5 md:mx-3 flex items-center justify-center">
                        <div className="address-bar flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1 md:py-1.5 rounded-lg bg-white/[0.06] backdrop-blur-md border border-white/[0.08] max-w-md w-full">
                            <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-volt/60 shrink-0" viewBox="0 0 16 16" fill="none">
                                <path d="M8 1L8 1C4.134 1 1 4.134 1 8V8C1 11.866 4.134 15 8 15V15C11.866 15 15 11.866 15 8V8C15 4.134 11.866 1 8 1Z" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                            <span className="font-data text-[10px] md:text-[11px] text-ash/50 tracking-wide truncate select-none">
                                {displayUrl}
                            </span>
                        </div>
                    </div>

                    {/* Live indicator */}
                    <div className="flex items-center gap-1 md:gap-1.5 shrink-0">
                        <span className={`w-1.5 h-1.5 rounded-full ${isLoaded ? 'bg-[#28C840] animate-pulse' : 'bg-ash/30'}`} />
                        <span className="font-data text-[8px] md:text-[9px] text-ash/30 uppercase tracking-widest">
                            {isLoaded ? 'Live' : 'Laden...'}
                        </span>
                    </div>
                </div>

                {/* ── iFrame Viewport ── */}
                <div
                    ref={viewportRef}
                    className="iframe-viewport relative w-full bg-midnight overflow-hidden"
                    style={{
                        // Container height = scaled iframe height
                        height: `${iframeHeight * iframeDims.scale}px`,
                    }}
                >
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
                        className={`border-0 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            width: `${iframeDims.width}px`,
                            height: `${iframeHeight}px`,
                            transform: `scale(${iframeDims.scale})`,
                            transformOrigin: 'top left',
                        }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>

                {/* ── Bottom Info Bar ── */}
                <div className="flex items-center justify-between px-3 md:px-5 py-2.5 md:py-3 bg-white/[0.03] border-t border-white/[0.06]">
                    <div className="flex items-center gap-2 md:gap-4 min-w-0">
                        <h3 className="text-sm md:text-xl font-bold uppercase tracking-tighter text-ash truncate">
                            {name}
                        </h3>
                        {type && (
                            <span className="hidden md:inline font-data text-[10px] text-ash/40 uppercase tracking-widest shrink-0">
                                {type}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 shrink-0">
                        {speed && (
                            <span className="hidden md:inline font-data text-[10px] text-volt/60">
                                LATENCY: {speed}
                            </span>
                        )}
                        {year && (
                            <span className="hidden md:inline font-data text-volt border border-volt/30 px-3 py-0.5 rounded-full text-[10px]">
                                {year}
                            </span>
                        )}
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-volt/10 border border-volt/20 text-volt font-data text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-volt hover:text-matte transition-all duration-400"
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
