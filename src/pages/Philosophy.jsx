import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax effect on images
            gsap.utils.toArray('.parallax-img').forEach((img) => {
                gsap.to(img, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

            // Fade in sections
            gsap.utils.toArray('.fade-in-section').forEach((section) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 40,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-carbon min-h-screen pt-32 pb-32 selection:bg-volt selection:text-carbon relative overflow-hidden">
            <Helmet>
                <title>Filosofie | Socrates Webdesign</title>
                <meta name="description" content="Van 100 uur gepruts naar de perfecte prompt. Lees het verhaal achter Socrates Webdesign." />
                <link rel="canonical" href="https://socrates-webdesign.nl/filosofie" />
            </Helmet>

            {/* Background Texture/Gradient */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-volt/5 to-transparent pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Intro Section */}
                <section className="min-h-[70vh] flex flex-col justify-center mb-16 md:mb-32">
                    <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter mb-8 mix-blend-difference leading-[1.1]">
                        <TextReveal text="Van 100 uur" as="span" /> <br />
                        <span className="text-volt"><TextReveal text="gepruts" delay={0.2} as="span" /></span> <br />
                        <TextReveal text="Naar de perfecte prompt" delay={0.4} as="span" />
                    </h1>
                </section>

                {/* Section 1 */}
                <section className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 fade-in-section items-center group">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl h-[400px] md:h-[600px] relative border border-ash/10">
                        <img
                            src="/images/Filosofie/Gemini_Generated_Image_acthe1acthe1acth.webp"
                            alt="Abstract AI Visual 1"
                            className="w-full h-[120%] object-cover absolute top-[-10%] parallax-img grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-carbon/20 group-hover:bg-transparent transition-all duration-700"></div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 font-drama text-lg md:text-xl text-ash/80 leading-relaxed">
                        <p>
                            Drie jaar geleden begon dit alles met een flinke dosis overmoed. Mijn vader had een website nodig en ik riep, met de grenzeloze naïviteit van een puber die dacht de hele wereld aan te kunnen: &ldquo;Ah joh, dat kan je tegenwoordig toch allang doen met AI?&rdquo; Mijn vader lachte en zei: &ldquo;Is goed, laat maar zien dan.&rdquo;
                        </p>
                        <p>
                            Het pijnlijke antwoord van de realiteit: nee. AI kon dat toen nog helemaal niet.
                        </p>
                        <p>
                            Wat een relaxed middagje werk had moeten zijn, ontaardde in een obsessie van meer dan 100 uur. Ik verloor mezelf in de duistere krochten van Elementor en WordPress, vechtend met pixels die geen millimeter wilden wijken en code die weigerde mee te werken. Pas na bloed, zweet en ontelbare frustraties stond er iets dat er &lsquo;een beetje goed&rsquo; uitzag.
                        </p>
                        <p>
                            Maar in die strijd zag ik het licht. Ik begreep dat als ik dit proces kon temmen, en de opkomende kracht van AI er wél op de juiste manier in kon vlechten, ik goud in handen had. En eerlijk is eerlijk: er speelde ook een flinke portie trots mee. Want 100 verloren uren staan een overmoedige puber simpelweg niet; ik moest en zou bewijzen dat die grote mond ergens op gebaseerd was.
                        </p>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="flex flex-col-reverse md:flex-row gap-12 md:gap-24 mb-32 fade-in-section items-center group">
                    <div className="w-full md:w-1/2 space-y-6 font-drama text-lg md:text-xl text-ash/80 leading-relaxed">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-volt uppercase tracking-tight mb-8 md:mb-12">
                            De mens achter de machine
                        </h2>
                        <p>
                            Mijn naam is Kaya. Geloof het of niet, maar tussen alle AI-gegenereerde pixels op deze website ben ik nog gewoon een mens van vlees en bloed. Ik studeer Filosofie aan de Universiteit Leiden — vandaar de naam Socrates. Ik ben zo iemand die eigenlijk altijd al vragen stelt; niet om dwars te liggen, maar omdat ik het oprecht interessant vind om te begrijpen hoe dingen in elkaar steken en mijn eigen ideeën uit te werken.
                        </p>
                        <p>
                            Diezelfde nieuwsgierigheid drijft mijn muziek. Ik rap, en in die nummers probeer ik mijn eigen gedachten een plek te geven, terwijl ik ondertussen gewoon een goede track probeer neer te zetten.
                        </p>

                        {/* Spotify Embed Placeholder */}
                        <div className="mt-12 rounded-2xl overflow-hidden border border-volt/20 shadow-[0_0_30px_rgba(223,255,0,0.05)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,255,0,0.1)] hover:border-volt/40 bg-matte/50 backdrop-blur-sm p-4">
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/track/0oinZR8DZhArcXjVjDlcj5?utm_source=generator&theme=0"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl h-[400px] md:h-[600px] relative border border-ash/10">
                        <img
                            src="/images/Filosofie/Gemini_Generated_Image_2oohl82oohl82ooh.webp"
                            alt="Abstract AI Visual 2"
                            className="w-full h-[120%] object-cover absolute top-[-10%] parallax-img grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-carbon/20 group-hover:bg-transparent transition-all duration-700"></div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="flex flex-col md:flex-row gap-12 md:gap-24 fade-in-section items-center group">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl h-[400px] md:h-[600px] relative border border-ash/10">
                        <img
                            src="/images/Filosofie/Gemini_Generated_Image_mliiqxmliiqxmlii.webp"
                            alt="Abstract AI Visual 3"
                            className="w-full h-[120%] object-cover absolute top-[-10%] parallax-img grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-carbon/20 group-hover:bg-transparent transition-all duration-700"></div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 font-drama text-lg md:text-xl text-ash/80 leading-relaxed">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-8 md:mb-12">
                            Omarming van de toekomst
                        </h2>
                        <p>
                            De wet van de natuur is simpel: wie zich niet aanpast, sterft uit. In de wereld van tech is dat niet anders.
                        </p>
                        <p>
                            Terwijl iedereen een mening heeft over AI — of het ons nu komt redden, ons komt verwoesten, of dat het slechts een hype is die overwaait — weet ik één ding zeker: AI is er, en het werkt. Ik heb AI niet alleen geaccepteerd; ik heb het volledig in mijn workflow geadopteerd.
                        </p>
                        <p className="text-volt/90 font-medium">
                            Waar ik vroeger 100 uur nodig had voor middelmatigheid, zet ik nu diezelfde tijd in voor premium luxe designs en een meedogenloze efficiëntie. Ik combineer de kritische vragen uit mijn studie met de creatieve drang uit mijn muziek om designs neer te zetten die niet alleen functioneel zijn, maar die indruk maken.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
