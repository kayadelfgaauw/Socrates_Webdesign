import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';
import LivePreviewContainer from '../components/LivePreviewContainer';

const portfolioItems = [
    {
        id: 1,
        name: 'Atelier Goudkust',
        type: 'E-commerce',
        year: '2024',
        url: 'https://ateliergoudkust.nl',
    },
    {
        id: 2,
        name: 'Dehypno',
        type: 'Bedrijfsidentiteit',
        year: '2025',
        url: 'https://dehypno.nl',
    },
    {
        id: 3,
        name: 'Op Dreef Motoren',
        type: 'Interactief Platform',
        year: '2025',
        url: 'https://opdreefmotoren.nl',
    }
];

export default function Portfolio() {
    return (
        <div className="w-full pt-32 pb-24 px-6 md:px-12 bg-carbon">
            <Helmet>
                <title>Portfolio | Socrates Webdesign - Onze Projecten</title>
                <meta name="description" content="Bekijk onze paddock van high-end webdesign projecten. Van e-commerce tot interactieve platformen, Socrates Webdesign levert resultaat." />
                <link rel="canonical" href="https://socrates-webdesign.nl/portfolio" />
            </Helmet>
            {/* Hero Header */}
            <div className="max-w-6xl mx-auto mb-24">
                <div className="flex items-center gap-4 mb-6 font-data text-volt tracking-widest text-xs">
                    <span className="w-2 h-2 rounded-full bg-volt animate-pulse"></span>
                    PORTFOLIO_ARCHIEF
                </div>
                <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                    <TextReveal text="De Paddock" />
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-ash/20 pb-8 gap-6">
                    <p className="font-drama text-2xl md:text-3xl text-ash/80 italic max-w-lg">
                        <TextReveal text="Live previews van onze projecten. Scroll, klik en ontdek." delay={0.2} as="span" />
                    </p>
                    <div className="hidden md:flex items-center gap-4 text-xs font-data uppercase tracking-widest text-volt shrink-0">
                        <span>Scroll om te interacteren</span>
                        <span className="w-8 h-[1px] bg-volt"></span>
                    </div>
                </div>
            </div>

            {/* Live Preview Grid */}
            <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-32 relative z-10">
                {portfolioItems.map((item) => (
                    <LivePreviewContainer
                        key={item.id}
                        url={item.url}
                        name={item.name}
                        type={item.type}
                        year={item.year}
                    />
                ))}
            </div>

            {/* CTA */}
            <div className="max-w-6xl mx-auto mt-48 text-center">
                <MagneticButton as={Link} to="/contact" className="!px-12 !py-6">
                    Zelf op de Grid Staan?
                </MagneticButton>
            </div>
        </div>
    );
}
