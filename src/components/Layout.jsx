import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Werk', path: '/werk' },
    { name: 'Formule', path: '/formule' },
    { name: 'Filosofie', path: '/filosofie' },
    { name: 'Gratis proefdesign aanvragen', path: '/contact' }
];

export default function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-carbon text-ash">

            <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference">
                <Link to="/" className="text-2xl font-heading font-bold tracking-tighter hover:text-volt transition-colors">
                    SOCRATES<span className="text-volt">_</span>
                </Link>
                <nav className="hidden md:flex gap-8 items-center font-data text-sm uppercase tracking-widest mt-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-volt transition-colors relative ${location.pathname === link.path ? 'text-volt after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-volt' : 'text-ash/70'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <button
                    className="md:hidden text-volt z-50 relative p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu omschakelen"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </header>

            {/* Mobile Nav Overlay */}
            <div className={`fixed inset-0 bg-matte z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-magnetic ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className="flex flex-col gap-8 text-center text-3xl font-heading">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-volt transition-colors ${location.pathname === link.path ? 'text-volt' : 'text-ash'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Global Noise */}
            <div className="noise"></div>

            <main className="flex-grow relative z-10 w-full flex flex-col">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-ash/10 py-8 px-6 md:px-12 relative z-10 mt-auto bg-carbon">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs font-data text-ash/50">
                    <p>&copy; {new Date().getFullYear()} Socrates Webdesign. Alle systemen operationeel.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link to="/algemene-voorwaarden" className="hover:text-volt transition-colors">Algemene Voorwaarden</Link>
                        <span className="text-ash/20">|</span>
                        <Link to="/privacy" className="hover:text-volt transition-colors">Privacy & Cookies</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
