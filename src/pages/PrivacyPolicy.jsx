import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
    return (
        <div className="w-full bg-carbon min-h-screen pt-32 pb-32 selection:bg-volt selection:text-carbon relative overflow-hidden">
            <Helmet>
                <title>Privacyverklaring & Cookiebeleid | Socrates Webdesign</title>
                <meta name="description" content="Privacyverklaring en Cookiebeleid van Socrates Webdesign. Hoe wij omgaan met uw persoonsgegevens conform de AVG." />
                <link rel="canonical" href="https://socrates-webdesign.nl/privacy" />
            </Helmet>

            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-volt/3 to-transparent pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <header className="mb-16 md:mb-24">
                    <p className="font-data text-xs uppercase tracking-[0.3em] text-volt mb-4">Juridisch</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-6 leading-[1.1]">
                        Privacy<span className="text-volt">&shy;verklaring</span><br />
                        <span className="text-ash/60 text-3xl md:text-5xl">&amp; Cookiebeleid</span>
                    </h1>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 font-data text-xs text-ash/40 uppercase tracking-widest">
                        <span>Versie 1.0</span>
                        <span>18 maart 2026</span>
                        <span>Laatst bijgewerkt: 18 maart 2026</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-volt/40 via-ash/10 to-transparent mt-8"></div>
                </header>

                {/* Content */}
                <div className="legal-content space-y-12 font-drama text-base md:text-lg text-ash/75 leading-relaxed">

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">1. Wie is verantwoordelijk voor de verwerking van uw gegevens?</h2>
                        <p className="mb-6">Socrates Webdesign is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.</p>
                        <div className="bg-carbon-light/30 border border-ash/10 rounded-xl p-6 font-data text-sm text-ash/60 space-y-1">
                            <p className="text-volt font-bold text-base mb-2">Contactgegevens</p>
                            <p>Socrates Webdesign</p>
                            <p>Hogewoerd 34</p>
                            <p>2311 HN Leiden</p>
                            <p>E-mail: info@socrateswebdesign.nl</p>
                            <p>KvK-nummer: 96468858</p>
                        </div>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">2. Welke persoonsgegevens verzamelen wij?</h2>
                        <p className="mb-6">Socrates Webdesign verwerkt persoonsgegevens doordat u deze zelf aan ons verstrekt, bijvoorbeeld via het contactformulier op onze website of via e-mail. Wij verwerken de volgende persoonsgegevens:</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-volt/30">
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Gegeven</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Doel</th>
                                    </tr>
                                </thead>
                                <tbody className="font-data text-ash/60">
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Naam</td><td className="py-3 px-4">Identificatie en communicatie</td></tr>
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">E-mailadres</td><td className="py-3 px-4">Contact opnemen, offerte uitbrengen</td></tr>
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Telefoonnummer</td><td className="py-3 px-4">Contact opnemen (indien verstrekt)</td></tr>
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Bedrijfsnaam</td><td className="py-3 px-4">Identificatie opdrachtgever</td></tr>
                                    <tr><td className="py-3 px-4">IP-adres</td><td className="py-3 px-4">Websitebeveiliging en analytics</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">3. Waarvoor gebruiken wij uw gegevens?</h2>
                        <p className="mb-4">Socrates Webdesign verwerkt uw persoonsgegevens voor de volgende doeleinden:</p>
                        <ol className="list-decimal list-inside ml-4 space-y-3">
                            <li><strong className="text-ash/90">Communicatie</strong> — Het beantwoorden van vragen en verzoeken via het contactformulier of e-mail.</li>
                            <li><strong className="text-ash/90">Offerte en overeenkomst</strong> — Het uitbrengen van offertes en het uitvoeren van overeenkomsten.</li>
                            <li><strong className="text-ash/90">Facturatie</strong> — Het afhandelen van betalingen.</li>
                            <li><strong className="text-ash/90">Websiteanalyse</strong> — Het verbeteren van onze website (alleen met uw toestemming).</li>
                        </ol>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">4. Op welke rechtsgrond verwerken wij uw gegevens?</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-volt/30">
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Verwerking</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Rechtsgrond (AVG)</th>
                                    </tr>
                                </thead>
                                <tbody className="font-data text-ash/60">
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Contactformulier</td><td className="py-3 px-4">Art. 6(1)(b) — Noodzakelijk voor de uitvoering van een overeenkomst of het nemen van precontractuele maatregelen</td></tr>
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Facturatie</td><td className="py-3 px-4">Art. 6(1)(c) — Wettelijke verplichting (fiscale bewaarplicht)</td></tr>
                                    <tr><td className="py-3 px-4">Analytics (cookies)</td><td className="py-3 px-4">Art. 6(1)(a) — Toestemming</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">5. Hoe lang bewaren wij uw gegevens?</h2>
                        <p className="mb-6">Socrates Webdesign bewaart uw persoonsgegevens niet langer dan strikt noodzakelijk:</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-volt/30">
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Categorie</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Bewaartermijn</th>
                                    </tr>
                                </thead>
                                <tbody className="font-data text-ash/60">
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Contactgegevens (niet-klant)</td><td className="py-3 px-4">Maximaal 2 jaar na laatste contact</td></tr>
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Klantgegevens</td><td className="py-3 px-4">Duur van de overeenkomst + 2 jaar</td></tr>
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Facturen en financiële gegevens</td><td className="py-3 px-4">7 jaar (wettelijke bewaarplicht)</td></tr>
                                    <tr><td className="py-3 px-4">Analytics-gegevens</td><td className="py-3 px-4">26 maanden (Google Analytics standaard)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6">Na afloop van de bewaartermijn worden uw gegevens verwijderd of geanonimiseerd.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">6. Delen van persoonsgegevens met derden</h2>
                        <p className="mb-6">Socrates Webdesign deelt uw persoonsgegevens <strong className="text-ash/90">uitsluitend</strong> met derden indien dit noodzakelijk is voor de uitvoering van onze diensten of om te voldoen aan een wettelijke verplichting. Wij maken gebruik van de volgende diensten van derden:</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-volt/30">
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Partij</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Doel</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Locatie</th>
                                    </tr>
                                </thead>
                                <tbody className="font-data text-ash/60">
                                    <tr className="border-b border-ash/5"><td className="py-3 px-4">Hostingprovider</td><td className="py-3 px-4">Hosting van onze website</td><td className="py-3 px-4">EU/EER</td></tr>
                                    <tr><td className="py-3 px-4">Google Analytics</td><td className="py-3 px-4">Websitestatistieken (optioneel, met toestemming)</td><td className="py-3 px-4">VS (adequaatheidsbesluit EU-VS Data Privacy Framework)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6">Wij sluiten met deze partijen verwerkersovereenkomsten om de bescherming van uw persoonsgegevens te waarborgen.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">7. Uw rechten</h2>
                        <p className="mb-4">Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:</p>
                        <ul className="list-disc list-inside ml-4 space-y-3 mb-6">
                            <li><strong className="text-ash/90">Recht op inzage</strong> — U kunt opvragen welke gegevens wij van u verwerken.</li>
                            <li><strong className="text-ash/90">Recht op rectificatie</strong> — U kunt onjuiste gegevens laten corrigeren.</li>
                            <li><strong className="text-ash/90">Recht op verwijdering</strong> — U kunt verzoeken uw gegevens te verwijderen.</li>
                            <li><strong className="text-ash/90">Recht op beperking</strong> — U kunt de verwerking van uw gegevens laten beperken.</li>
                            <li><strong className="text-ash/90">Recht op dataportabiliteit</strong> — U kunt uw gegevens in een machineleesbaar formaat ontvangen.</li>
                            <li><strong className="text-ash/90">Recht van bezwaar</strong> — U kunt bezwaar maken tegen de verwerking van uw gegevens.</li>
                        </ul>
                        <p>U kunt een verzoek indienen via <a href="mailto:info@socrateswebdesign.nl" className="text-volt hover:underline transition-colors">info@socrateswebdesign.nl</a>. Wij reageren binnen <strong className="text-ash/90">30 dagen</strong> op uw verzoek.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">8. Beveiliging</h2>
                        <p className="mb-4">Socrates Webdesign neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies of misbruik. Hieronder vallen onder andere:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>Beveiligde verbinding (SSL/TLS) op onze website</li>
                            <li>Beperkte toegang tot persoonsgegevens</li>
                            <li>Versiebeheer van broncode en deployment-historie</li>
                        </ul>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">9. Klacht indienen</h2>
                        <p className="mb-6">Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan eerst contact met ons op via <a href="mailto:info@socrateswebdesign.nl" className="text-volt hover:underline transition-colors">info@socrateswebdesign.nl</a>. Komt u er met ons niet uit, dan heeft u het recht een klacht in te dienen bij de <strong className="text-ash/90">Autoriteit Persoonsgegevens</strong>:</p>
                        <div className="bg-carbon-light/30 border border-ash/10 rounded-xl p-6 font-data text-sm text-ash/60 space-y-1">
                            <p className="text-ash/80 font-bold mb-2">Autoriteit Persoonsgegevens</p>
                            <p>Postbus 93374</p>
                            <p>2509 AJ Den Haag</p>
                            <p><a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-volt hover:underline transition-colors">www.autoriteitpersoonsgegevens.nl</a></p>
                        </div>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Cookiebeleid */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-volt uppercase tracking-tight mb-8">Cookiebeleid</h2>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-ash uppercase tracking-tight mb-4">Wat zijn cookies?</h3>
                        <p className="mb-8">Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u onze website bezoekt. Zij helpen de website goed te laten functioneren en geven ons inzicht in het gebruik van de website.</p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-ash uppercase tracking-tight mb-4">Welke cookies gebruiken wij?</h3>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-volt/30">
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Type</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Cookie</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Doel</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Bewaartermijn</th>
                                        <th className="text-left py-3 px-4 font-heading uppercase tracking-wider text-volt text-xs">Toestemming?</th>
                                    </tr>
                                </thead>
                                <tbody className="font-data text-ash/60">
                                    <tr className="border-b border-ash/5">
                                        <td className="py-3 px-4 font-bold text-ash/80">Functioneel</td>
                                        <td className="py-3 px-4">Sessiecookies</td>
                                        <td className="py-3 px-4">Website correct laten functioneren</td>
                                        <td className="py-3 px-4">Sessie</td>
                                        <td className="py-3 px-4">Nee</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-ash/80">Analytisch</td>
                                        <td className="py-3 px-4">Google Analytics (_ga, _gid)</td>
                                        <td className="py-3 px-4">Websitestatistieken (geanonimiseerd)</td>
                                        <td className="py-3 px-4">26 maanden</td>
                                        <td className="py-3 px-4">Ja</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-ash uppercase tracking-tight mb-4">Functionele cookies</h3>
                        <p className="mb-8">Deze cookies zijn noodzakelijk voor het goed functioneren van de website en kunnen niet worden uitgeschakeld.</p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-ash uppercase tracking-tight mb-4">Analytische cookies</h3>
                        <p className="mb-4">Wij gebruiken Google Analytics om inzicht te krijgen in het gebruik van onze website. Hiervoor hebben wij:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                            <li>IP-anonimisering ingeschakeld</li>
                            <li>Gegevens delen met Google uitgeschakeld</li>
                            <li>Geen gebruik van andere Google-diensten in combinatie met Analytics</li>
                        </ul>
                        <p className="mb-8">Analytische cookies worden <strong className="text-ash/90">alleen geplaatst met uw toestemming</strong>.</p>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-ash uppercase tracking-tight mb-4">Cookies beheren</h3>
                        <p>U kunt uw cookievoorkeuren op elk moment wijzigen via de cookie-instellingen op onze website of via uw browserinstellingen. Het verwijderen of blokkeren van cookies kan invloed hebben op de werking van de website.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Wijzigingen */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Wijzigingen</h2>
                        <p>Socrates Webdesign behoudt zich het recht voor om deze privacyverklaring en dit cookiebeleid te wijzigen. De meest actuele versie is altijd te vinden op onze website. Bij substantiële wijzigingen zullen wij u hierover informeren.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Disclaimer */}
                    <p className="text-ash/30 text-sm font-data italic">
                        Dit document is een template ter informatie. Raadpleeg een gekwalificeerde jurist voor juridisch advies specifiek voor uw situatie.
                    </p>

                </div>
            </div>
        </div>
    );
}
