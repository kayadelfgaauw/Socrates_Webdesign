import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = '', as = 'button', ...rest }) {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        let ctx = gsap.context(() => {
            const move = (e) => {
                const { left, top, width, height } = button.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) * 0.3;
                const y = (e.clientY - top - height / 2) * 0.3;

                gsap.to(button, {
                    x, y,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            };

            const leave = () => {
                gsap.to(button, {
                    x: 0, y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            };

            const enter = () => {
                gsap.to(button, {
                    scale: 1.03,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            };

            button.addEventListener('mousemove', move);
            button.addEventListener('mouseleave', leave);
            button.addEventListener('mouseenter', enter);

            return () => {
                button.removeEventListener('mousemove', move);
                button.removeEventListener('mouseleave', leave);
                button.removeEventListener('mouseenter', enter);
            };
        }, buttonRef);

        return () => ctx.revert();
    }, []);

    const Component = as;

    return (
        <Component
            ref={buttonRef}
            {...rest}
            className={`relative inline-flex items-center justify-center px-8 py-4 bg-volt text-matte font-data text-sm font-bold tracking-widest uppercase transition-colors hover:bg-white rounded-fluid ${className}`}
        >
            {children}
        </Component>
    );
}
