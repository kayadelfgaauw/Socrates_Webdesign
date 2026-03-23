import { Helmet } from 'react-helmet-async';

export default function AlgemeneVoorwaarden() {
    return (
        <div className="w-full bg-carbon min-h-screen pt-32 pb-32 selection:bg-volt selection:text-carbon relative overflow-hidden">
            <Helmet>
                <title>Algemene Voorwaarden | Socrates Webdesign</title>
                <meta name="description" content="Algemene Voorwaarden van Socrates Webdesign. Versie 1.1 — 18 maart 2026." />
                <link rel="canonical" href="https://socrates-webdesign.nl/algemene-voorwaarden" />
            </Helmet>

            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-volt/3 to-transparent pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <header className="mb-16 md:mb-24">
                    <p className="font-data text-xs uppercase tracking-[0.3em] text-volt mb-4">Juridisch</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-6 leading-[1.1]">
                        Algemene<br />
                        <span className="text-volt">Voorwaarden</span>
                    </h1>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 font-data text-xs text-ash/40 uppercase tracking-widest">
                        <span>Versie 1.1</span>
                        <span>18 maart 2026</span>
                        <span>KvK 96468858</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-volt/40 via-ash/10 to-transparent mt-8"></div>
                </header>

                {/* Content */}
                <div className="legal-content space-y-12 font-drama text-base md:text-lg text-ash/75 leading-relaxed">

                    {/* Artikel 1 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 1 — Definities</h2>
                        <p className="mb-4">In deze Algemene Voorwaarden wordt verstaan onder:</p>
                        <p className="mb-3"><strong className="text-ash/90">1.1 Opdrachtnemer:</strong> Socrates Webdesign, eenmanszaak, ingeschreven bij de Kamer van Koophandel onder nummer 96468858.</p>
                        <p className="mb-3"><strong className="text-ash/90">1.2 Opdrachtgever:</strong> de rechtspersoon of natuurlijke persoon handelend in de uitoefening van een beroep of bedrijf, die met Opdrachtnemer een overeenkomst aangaat.</p>
                        <p className="mb-3"><strong className="text-ash/90">1.3 Overeenkomst:</strong> elke afspraak tussen Opdrachtgever en Opdrachtnemer, vastgelegd in een Opdrachtbevestiging, waarop deze Algemene Voorwaarden van toepassing zijn.</p>
                        <p className="mb-3"><strong className="text-ash/90">1.4 Website:</strong> het geheel van webpagina's, ontwerp, code en content dat door Opdrachtnemer wordt ontwikkeld of onderhouden.</p>
                        <p className="mb-3"><strong className="text-ash/90">1.5 Meerwerk:</strong> werkzaamheden die buiten de in de Opdrachtbevestiging overeengekomen Scope of Work vallen.</p>
                        <p className="mb-3"><strong className="text-ash/90">1.6 Oplevering:</strong> het moment waarop Opdrachtnemer de Website beschikbaar stelt aan Opdrachtgever voor beoordeling en acceptatie.</p>
                        <p><strong className="text-ash/90">1.7 Schriftelijk:</strong> per brief, e-mail of enig ander elektronisch communicatiemiddel, mits de inhoud voldoende bepaalbaar en toegankelijk is (art. 6:227a BW).</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 2 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 2 — Toepasselijkheid</h2>
                        <p className="mb-3"><strong className="text-ash/90">2.1</strong> Deze Algemene Voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Opdrachtnemer en Opdrachtgever.</p>
                        <p className="mb-3"><strong className="text-ash/90">2.2</strong> Afwijkingen van deze Algemene Voorwaarden zijn uitsluitend geldig indien schriftelijk overeengekomen.</p>
                        <p className="mb-3"><strong className="text-ash/90">2.3</strong> Eventuele inkoop- of andere voorwaarden van Opdrachtgever worden uitdrukkelijk van de hand gewezen.</p>
                        <p><strong className="text-ash/90">2.4</strong> Indien een bepaling van deze Algemene Voorwaarden nietig of vernietigbaar blijkt, blijven de overige bepalingen onverminderd van kracht.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 3 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 3 — Offertes en aanbiedingen</h2>
                        <p className="mb-3"><strong className="text-ash/90">3.1</strong> Alle offertes en aanbiedingen van Opdrachtnemer zijn vrijblijvend en geldig gedurende 14 dagen na dagtekening, tenzij anders vermeld.</p>
                        <p className="mb-3"><strong className="text-ash/90">3.2</strong> Een offerte bevat een omschrijving van de te verrichten werkzaamheden, de geschatte doorlooptijd en de prijs.</p>
                        <p className="mb-3"><strong className="text-ash/90">3.3</strong> Kennelijke vergissingen of fouten in de offerte binden Opdrachtnemer niet.</p>
                        <p className="mb-3"><strong className="text-ash/90">3.4</strong> Een overeenkomst komt tot stand door schriftelijke aanvaarding van de offerte door Opdrachtgever, dan wel door ondertekening van de Opdrachtbevestiging.</p>
                        <p className="mb-3"><strong className="text-ash/90">3.5</strong> Opdrachtgever staat in voor de juistheid en volledigheid van de door of namens hem aan Opdrachtnemer verstrekte eisen, specificaties en overige gegevens waarop Opdrachtnemer zijn offerte baseert. Kosten die voortvloeien uit onjuiste of incomplete informatievoorziening door Opdrachtgever vallen onder meerwerk (Artikel 5).</p>
                        <p className="mb-3"><strong className="text-ash/90">3.6</strong> Indien de offerte een prijsopgave bevat die is gebaseerd op een inschatting van het aantal uren (nacalculatie), betreft dit een richtprijs. Aan ureninschattingen kunnen geen rechten worden ontleend. Opdrachtnemer zal Opdrachtgever tijdig informeren indien de richtprijs naar verwachting met meer dan 10% zal worden overschreden.</p>
                        <p className="mb-3"><strong className="text-ash/90">3.7</strong> Indien een offerte een samengestelde prijsopgave bevat, is Opdrachtnemer niet verplicht een deel van de opdracht uit te voeren tegen een overeenkomstig deel van de opgegeven prijs. Prijzen die als pakket of als geheel zijn geoffreerd, gelden uitsluitend indien de gehele opdracht wordt verstrekt.</p>
                        <p><strong className="text-ash/90">3.8</strong> Aanbiedingen en offertes gelden niet automatisch voor toekomstige opdrachten of nabestellingen.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 4 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 4 — Uitvoering van de overeenkomst</h2>
                        <p className="mb-3"><strong className="text-ash/90">4.1</strong> Opdrachtnemer voert de overeenkomst naar beste inzicht en vermogen uit, overeenkomstig de eisen van goed vakmanschap. Alle verplichtingen van Opdrachtnemer uit hoofde van deze overeenkomst zijn inspanningsverplichtingen en geen resultaatsverplichtingen. Opdrachtnemer kan derhalve niet garanderen dat de werkzaamheden leiden tot een specifiek resultaat, zoals meer omzet, meer bezoekers of het verwerven van nieuwe klanten.</p>
                        <p className="mb-3"><strong className="text-ash/90">4.2</strong> Opdrachtnemer bepaalt de wijze waarop de opdracht wordt uitgevoerd, tenzij anders overeengekomen.</p>
                        <p className="mb-3"><strong className="text-ash/90">4.3</strong> Opdrachtgever draagt er zorg voor dat alle gegevens en materialen (teksten, afbeeldingen, logo's, inloggegevens) die Opdrachtnemer nodig heeft, tijdig en in de juiste vorm worden aangeleverd.</p>
                        <p><strong className="text-ash/90">4.4</strong> Indien Opdrachtgever niet of niet tijdig de benodigde materialen aanlevert, heeft Opdrachtnemer het recht de doorlooptijd evenredig te verlengen en eventuele meerkosten in rekening te brengen.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 5 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 5 — Meerwerk</h2>
                        <p className="mb-3"><strong className="text-ash/90">5.1</strong> Werkzaamheden die niet zijn opgenomen in de Scope of Work van de Opdrachtbevestiging gelden als meerwerk.</p>
                        <p className="mb-3"><strong className="text-ash/90">5.2</strong> Meerwerk wordt uitsluitend uitgevoerd na voorafgaand schriftelijk akkoord van Opdrachtgever over de aanvullende kosten.</p>
                        <p className="mb-3"><strong className="text-ash/90">5.3</strong> Meerwerk wordt berekend op basis van het geldende uurtarief van Opdrachtnemer (nacalculatie), tenzij partijen vooraf schriftelijk een vaste prijs voor het meerwerk overeenkomen.</p>
                        <p className="mb-3"><strong className="text-ash/90">5.4</strong> Opdrachtgever aanvaardt dat meerwerk de overeengekomen doorlooptijd kan beïnvloeden.</p>
                        <p className="mb-3"><strong className="text-ash/90">5.5</strong> Als meerwerk wordt onder meer aangemerkt:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
                            <li>Het toevoegen van extra pagina's, functionaliteiten of ontwerpaanpassingen die niet in de oorspronkelijke Scope of Work zijn opgenomen;</li>
                            <li>Extra werkzaamheden die voortvloeien uit onjuiste, onvolledige of te laat aangeleverde gegevens, materialen of instructies door Opdrachtgever;</li>
                            <li>Wijzigingen in eerder goedgekeurde ontwerpen of specificaties.</li>
                        </ul>
                        <p><strong className="text-ash/90">5.6</strong> Opdrachtnemer is niet verplicht om aan een verzoek tot meerwerk te voldoen. Indien het meerwerk naar het oordeel van Opdrachtnemer wezenlijk afwijkt van de oorspronkelijke opdracht, kan Opdrachtnemer verlangen dat hiervoor een afzonderlijke overeenkomst wordt gesloten.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 6 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 6 — Oplevering, revisierondes en acceptatie</h2>
                        <p className="mb-3"><strong className="text-ash/90">6.1</strong> Na voltooiing van de werkzaamheden stelt Opdrachtnemer de Website beschikbaar aan Opdrachtgever ter beoordeling.</p>
                        <p className="mb-3"><strong className="text-ash/90">6.2</strong> Tenzij in de Opdrachtbevestiging anders is overeengekomen, heeft Opdrachtgever recht op 2 revisierondes per ontwerpfase. Een revisieronde omvat het verzameld aanleveren van feedbackpunten, waarna Opdrachtnemer de aanpassingen in één keer doorvoert. Aanvullende revisierondes gelden als meerwerk (Artikel 5).</p>
                        <p className="mb-3"><strong className="text-ash/90">6.3</strong> Opdrachtgever heeft een testperiode van 10 werkdagen na oplevering om de Website te beoordelen en eventuele gebreken te melden.</p>
                        <p className="mb-3"><strong className="text-ash/90">6.4</strong> Gebreken dienen schriftelijk en gedetailleerd te worden gemeld aan Opdrachtnemer. Onder gebreken worden verstaan functionele afwijkingen van de overeengekomen Scope of Work; cosmetische voorkeuren of wijzigingswensen vallen hier niet onder.</p>
                        <p className="mb-3"><strong className="text-ash/90">6.5</strong> Na ondertekening van het Acceptatieprotocol, dan wel na het verstrijken van de testperiode zonder schriftelijke melding van gebreken, geldt de Website als geaccepteerd en opgeleverd.</p>
                        <p className="mb-3"><strong className="text-ash/90">6.6</strong> Na acceptatie vallen verdere wijzigingen onder meerwerk (Artikel 5).</p>
                        <p className="mb-3"><strong className="text-ash/90">6.7</strong> Door Opdrachtnemer genoemde of overeengekomen levertijden zijn indicatief en gelden nimmer als fatale termijnen in de zin van artikel 6:83 sub a BW. Opdrachtnemer is pas in verzuim na een schriftelijke ingebrekestelling waarbij een redelijke termijn van ten minste 14 werkdagen voor nakoming wordt gesteld.</p>
                        <p><strong className="text-ash/90">6.8</strong> Indien Opdrachtgever vóór afronding van de testperiode verzoekt om de Website publiek live te zetten op het definitieve domein, geldt dit verzoek als volledige acceptatie van de oplevering in de zin van lid 6.5.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 7 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 7 — Betalingsvoorwaarden</h2>
                        <p className="mb-3"><strong className="text-ash/90">7.1</strong> Tenzij anders overeengekomen in de Opdrachtbevestiging, geldt het volgende betalingsschema:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
                            <li>40% van het totaalbedrag bij aanvang van de werkzaamheden.</li>
                            <li>40% van het totaalbedrag bij oplevering van de Website op de testomgeving.</li>
                            <li>20% van het totaalbedrag bij livegang en acceptatie van de Website.</li>
                        </ul>
                        <p className="mb-3"><strong className="text-ash/90">7.2</strong> Voor hosting en onderhoud geldt een kwartaalfacturatie.</p>
                        <p className="mb-3"><strong className="text-ash/90">7.3</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum, op de door Opdrachtnemer aangegeven wijze.</p>
                        <p className="mb-3"><strong className="text-ash/90">7.4</strong> Bij overschrijding van de betalingstermijn is Opdrachtgever van rechtswege in verzuim en is hij de wettelijke handelsrente (artikel 6:119a BW) verschuldigd over het openstaande bedrag.</p>
                        <p className="mb-3"><strong className="text-ash/90">7.5</strong> Alle door Opdrachtnemer gemaakte kosten ter invordering van het verschuldigde bedrag, waaronder buitengerechtelijke incassokosten, komen voor rekening van Opdrachtgever. De buitengerechtelijke incassokosten bedragen 15% van de hoofdsom, met een minimum van € 150,-.</p>
                        <p className="mb-3"><strong className="text-ash/90">7.6</strong> Opdrachtgever doet uitdrukkelijk afstand van het recht op opschorting en verrekening van betalingsverplichtingen. Klachten, openstaande restpunten of geschillen schorten de betalingsverplichting niet op.</p>
                        <p><strong className="text-ash/90">7.7</strong> Bezwaren tegen een factuur dienen binnen 14 dagen na factuurdatum schriftelijk te worden ingediend bij Opdrachtnemer, bij gebreke waarvan de factuur als aanvaard geldt.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 8 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 8 — Opschorting en ontbinding</h2>
                        <p className="mb-3"><strong className="text-ash/90">8.1</strong> Opdrachtnemer is gerechtigd de nakoming van zijn verplichtingen op te schorten indien Opdrachtgever niet, niet tijdig of niet volledig aan zijn betalingsverplichtingen of overige verplichtingen uit de overeenkomst voldoet. Onder opschorting wordt mede verstaan het offline halen of ontoegankelijk maken van de Website. De betalingsverplichtingen van Opdrachtgever lopen gedurende de opschorting onverminderd door.</p>
                        <p className="mb-3"><strong className="text-ash/90">8.2</strong> Opdrachtnemer is gerechtigd de overeenkomst met onmiddellijke ingang te ontbinden indien:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
                            <li>Opdrachtgever ondanks schriftelijke aanmaning in gebreke blijft;</li>
                            <li>Opdrachtgever in staat van faillissement wordt verklaard, surseance van betaling aanvraagt, wordt toegelaten tot de Wet schuldsanering natuurlijke personen (WSNP), of overgaat tot liquidatie of staking van zijn onderneming;</li>
                            <li>Er gegronde vrees bestaat dat Opdrachtgever niet aan zijn verplichtingen zal voldoen.</li>
                        </ul>
                        <p className="mb-3"><strong className="text-ash/90">8.3</strong> Bij ontbinding door toedoen van Opdrachtgever zijn alle vorderingen van Opdrachtnemer op Opdrachtgever onmiddellijk opeisbaar en blijft Opdrachtgever gehouden tot betaling van de reeds verrichte werkzaamheden alsmede de daarmee samenhangende kosten.</p>
                        <p><strong className="text-ash/90">8.4</strong> Opdrachtgever is gerechtigd de overeenkomst te ontbinden indien Opdrachtnemer, na schriftelijke ingebrekestelling met een redelijke hersteltermijn van ten minste 14 dagen, in gebreke blijft met de nakoming van zijn verplichtingen.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 9 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 9 — Annulering door Opdrachtgever</h2>
                        <p className="mb-3"><strong className="text-ash/90">9.1</strong> Indien Opdrachtgever de overeenkomst wenst te annuleren vóór aanvang van de werkzaamheden, is Opdrachtgever annuleringskosten verschuldigd ter hoogte van 40% van het totale overeengekomen projectbedrag, ter dekking van de door Opdrachtnemer gereserveerde tijd en gemaakte voorbereidingskosten.</p>
                        <p className="mb-3"><strong className="text-ash/90">9.2</strong> Indien Opdrachtgever de overeenkomst annuleert tijdens de uitvoering van de werkzaamheden, is Opdrachtgever het volgende verschuldigd:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
                            <li>De kosten van alle reeds verrichte werkzaamheden, berekend op basis van de bestede uren en het overeengekomen tarief;</li>
                            <li>Aanvullend 40% van het resterende, nog niet uitgevoerde deel van het projectbedrag als annuleringsvergoeding.</li>
                        </ul>
                        <p className="mb-3"><strong className="text-ash/90">9.3</strong> Annulering dient schriftelijk te geschieden. De datum van ontvangst van de schriftelijke annulering door Opdrachtnemer geldt als annuleringsdatum.</p>
                        <p className="mb-3"><strong className="text-ash/90">9.4</strong> Reeds betaalde bedragen worden verrekend met de verschuldigde annuleringskosten. Eventuele restituties vinden plaats binnen 14 dagen na vaststelling van de definitieve afrekening.</p>
                        <p><strong className="text-ash/90">9.5</strong> De aanbetaling als bedoeld in artikel 7.1 geldt bij annulering als niet-restitueerbaar, ter dekking van de door Opdrachtnemer gereserveerde capaciteit en gemaakte voorbereidingskosten.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 10 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 10 — Aansprakelijkheid</h2>
                        <p className="mb-3"><strong className="text-ash/90">10.1</strong> De totale aansprakelijkheid van Opdrachtnemer is beperkt tot het bedrag dat door zijn beroepsaansprakelijkheidsverzekering wordt uitgekeerd in het betreffende geval. Indien de verzekeraar niet uitkeert, of de schade niet onder de dekking valt, is de aansprakelijkheid beperkt tot het bedrag dat voor de betreffende opdracht is gefactureerd. Bij doorlopende diensten (zoals hosting- en onderhoudspakketten als bedoeld in Artikel 12) is de aansprakelijkheid beperkt tot het totaal van de in de laatste 6 maanden aan Opdrachtgever gefactureerde bedragen voor de betreffende dienst. Deze beperkingen gelden niet voor schade als gevolg van opzet of bewuste roekeloosheid van Opdrachtnemer.</p>
                        <p className="mb-3"><strong className="text-ash/90">10.2</strong> Geen der partijen is aansprakelijk voor indirecte schade van de andere partij, waaronder gevolgschade, gederfde winst, gemiste besparingen of schade door bedrijfsstagnatie.</p>
                        <p className="mb-3"><strong className="text-ash/90">10.3</strong> Opdrachtnemer is daarnaast niet aansprakelijk voor:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
                            <li>Schade als gevolg van het niet of niet tijdig aanleveren van materialen door Opdrachtgever;</li>
                            <li>Schade als gevolg van het gebruik van door Opdrachtgever aangeleverde onjuiste of onvolledige gegevens;</li>
                            <li>Schade veroorzaakt door handelen of nalaten van derden, waaronder hostingproviders;</li>
                            <li>Schade als gevolg van cyberaanvallen, hacking, malware of DDoS-aanvallen, tenzij deze aantoonbaar het gevolg zijn van grove nalatigheid van Opdrachtnemer;</li>
                            <li>Schade als gevolg van het falen, beveiligingslekken of het niet meer beschikbaar zijn van plugins, thema's of software van derden die in de Website zijn geïntegreerd;</li>
                            <li>Schade als gevolg van wijzigingen aan de Website die door Opdrachtgever of door een door Opdrachtgever ingeschakelde derde zijn aangebracht in het CMS, de code of de serverconfiguratie, zonder voorafgaande schriftelijke toestemming van Opdrachtnemer.</li>
                        </ul>
                        <p className="mb-3"><strong className="text-ash/90">10.4</strong> Opdrachtgever vrijwaart Opdrachtnemer tegen aanspraken van derden die verband houden met de door Opdrachtgever aangeleverde content, mits Opdrachtnemer de Opdrachtgever onverwijld schriftelijk op de hoogte stelt van de aanspraak en Opdrachtgever de gelegenheid biedt de verdediging te voeren of te schikken.</p>
                        <p><strong className="text-ash/90">10.5</strong> Elk recht op schadevergoeding vervalt in ieder geval 12 maanden nadat Opdrachtgever bekend werd of redelijkerwijs bekend kon zijn met de gebeurtenis die aanleiding geeft tot de aansprakelijkheid.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 11 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 11 — Intellectueel eigendom</h2>
                        <p className="mb-3"><strong className="text-ash/90">11.1</strong> Het auteursrecht en alle overige intellectuele eigendomsrechten op de door Opdrachtnemer ontwikkelde Website, ontwerpen, code en documentatie berusten bij Opdrachtnemer.</p>
                        <p className="mb-3"><strong className="text-ash/90">11.2</strong> Na volledige betaling verkrijgt Opdrachtgever een niet-exclusieve licentie voor het gebruik van de Website voor het overeengekomen doel. Onder dit gebruik wordt mede verstaan het dagelijks beheren, publiceren en bijwerken van content op de Website. De licentie is niet overdraagbaar aan derden, met uitzondering van een overdracht in het kader van een bedrijfsoverdracht, fusie of splitsing van de onderneming van Opdrachtgever, mits de verkrijgende partij de verplichtingen uit deze overeenkomst overneemt en Opdrachtnemer hiervan vooraf schriftelijk op de hoogte wordt gesteld. De niet-exclusiviteit houdt in dat Opdrachtnemer het recht behoudt om de onderliggende code, structuur en technische opbouw van de Website te hergebruiken voor andere projecten. Het specifieke grafische ontwerp (de &ldquo;look &amp; feel&rdquo;) dat voor Opdrachtgever is ontwikkeld, wordt niet zonder toestemming van Opdrachtgever voor derden hergebruikt.</p>
                        <p className="mb-3"><strong className="text-ash/90">11.3</strong> Het is Opdrachtgever niet toegestaan de broncode, het ontwerp of de onderliggende structuur van de Website te verveelvoudigen, aan derden ter beschikking te stellen of te gebruiken als basis voor andere projecten, zonder voorafgaande schriftelijke toestemming van Opdrachtnemer.</p>
                        <p className="mb-3"><strong className="text-ash/90">11.4</strong> Opdrachtnemer behoudt het recht om het werk te gebruiken voor zijn eigen portfolio en promotiedoeleinden, tenzij schriftelijk anders overeengekomen.</p>
                        <p className="mb-3"><strong className="text-ash/90">11.5</strong> Bij niet-nakoming van de betalingsverplichtingen door Opdrachtgever is Opdrachtnemer gerechtigd de in lid 11.2 verleende licentie op te schorten totdat volledige betaling heeft plaatsgevonden.</p>
                        <p className="mb-3"><strong className="text-ash/90">11.6</strong> Opdrachtnemer is gerechtigd bij de uitvoering van de overeenkomst gebruik te maken van (generatieve) kunstmatige intelligentie en geautomatiseerde codeer-tools. Het eindproduct wordt opgeleverd op basis van een inspanningsverplichting. Opdrachtnemer garandeert niet dat door AI gegenereerde code vatbaar is voor exclusieve auteursrechtelijke bescherming in de zin van de Auteurswet. Opdrachtnemer spant zich in om te voorkomen dat het eindproduct inbreuk maakt op rechten van derden, maar kan dit niet uitsluiten voor zover de code door AI is gegenereerd.</p>
                        <p className="mb-3"><strong className="text-ash/90">11.7</strong> De Website kan open source software, plugins, thema's of componenten van derden bevatten. Deze onderdelen vallen onder hun eigen licentievoorwaarden (zoals GPL, MIT of Apache). De in dit artikel verleende licentie heeft uitsluitend betrekking op de door Opdrachtnemer zelf ontwikkelde onderdelen van de Website.</p>
                        <p className="mb-3"><strong className="text-ash/90">11.8</strong> Opdrachtnemer is gerechtigd om een naamsvermelding of een discreet footer-link naar zijn eigen website op te nemen in de Website, tenzij partijen schriftelijk anders overeenkomen.</p>
                        <p><strong className="text-ash/90">11.9</strong> Het is Opdrachtgever niet toegestaan om copyrightvermeldingen, bronvermeldingen of naamsaanduidingen van Opdrachtnemer te verwijderen of te wijzigen. Het aanbrengen van ingrijpende wijzigingen aan het ontwerp of de structuur van de Website zonder voorafgaand schriftelijk overleg met Opdrachtnemer is niet toegestaan.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 12 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 12 — Hosting en onderhoud</h2>
                        <p className="mb-3"><strong className="text-ash/90">12.1</strong> Indien Opdrachtgever een hosting- en/of onderhoudspakket afneemt bij Opdrachtnemer, zijn de voorwaarden zoals beschreven in de Service Level Agreement (SLA) van toepassing.</p>
                        <p className="mb-3"><strong className="text-ash/90">12.2</strong> Het hosting- en onderhoudspakket wordt per kwartaal gefactureerd.</p>
                        <p className="mb-3"><strong className="text-ash/90">12.3</strong> Opzegging van het hosting- en/of onderhoudspakket geschiedt schriftelijk met inachtneming van een opzegtermijn van 1 maand voor het einde van het lopende kwartaal.</p>
                        <p className="mb-3"><strong className="text-ash/90">12.4</strong> Bij beëindiging van het hostingpakket zal Opdrachtnemer binnen 30 dagen na beëindiging medewerking verlenen aan de overdracht van de Website naar een door Opdrachtgever aangewezen hostingomgeving, mits alle openstaande facturen zijn voldaan.</p>
                        <p className="mb-3"><strong className="text-ash/90">12.5</strong> Hosting en onderhoud worden uitgevoerd op basis van een inspanningsverplichting. Opdrachtnemer streeft naar een optimale beschikbaarheid van de Website, maar garandeert geen ononderbroken bereikbaarheid. Opdrachtnemer is niet aansprakelijk voor tijdelijke onbereikbaarheid van de Website als gevolg van gepland onderhoud, updates of storingen bij derden.</p>
                        <p className="mb-3"><strong className="text-ash/90">12.6</strong> Hosting is onderworpen aan een Fair Use-beleid. Indien het dataverkeer, de opslagcapaciteit of het servergebruik de redelijke grenzen van het afgenomen pakket overschrijdt, is Opdrachtnemer gerechtigd de meerkosten aan Opdrachtgever door te belasten of een opwaardering naar een hoger pakket te verlangen.</p>
                        <p className="mb-3"><strong className="text-ash/90">12.7</strong> Het is Opdrachtgever niet toegestaan de serverruimte te gebruiken voor het verspreiden of opslaan van illegale content, spam, malware, auteursrechtelijk beschermd materiaal van derden of overige strafbare inhoud. Bij constatering van misbruik of indien de veiligheid van de server in gevaar komt, is Opdrachtnemer gerechtigd de Website per direct en zonder voorafgaande waarschuwing offline te halen. De betalingsverplichtingen van Opdrachtgever lopen in dat geval onverminderd door.</p>
                        <p><strong className="text-ash/90">12.8</strong> Opdrachtnemer is gerechtigd tariefswijzigingen van zijn upstream-hostingprovider door te berekenen aan Opdrachtgever. Opdrachtnemer stelt Opdrachtgever hiervan ten minste 1 maand voorafgaand aan de ingangsdatum schriftelijk op de hoogte. Opdrachtnemer is niet aansprakelijk voor storingen, datalverlies of prijswijzigingen die zijn toe te rekenen aan zijn hostingprovider.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 13 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 13 — Basis-SEO</h2>
                        <p className="mb-3"><strong className="text-ash/90">13.1</strong> Indien overeengekomen in de Opdrachtbevestiging, levert Opdrachtnemer de Website op met basis zoekmachineoptimalisatie (SEO).</p>
                        <p className="mb-3"><strong className="text-ash/90">13.2</strong> Basis-SEO omvat technische optimalisatie van de websitestructuur, zoals correcte paginatitels, metabeschrijvingen en een logische koppenstructuur.</p>
                        <p className="mb-3"><strong className="text-ash/90">13.3</strong> Opdrachtnemer geeft geen garantie op een specifieke positie in zoekresultaten van zoekmachines.</p>
                        <p className="mb-3"><strong className="text-ash/90">13.4</strong> Doorlopende SEO-werkzaamheden vallen niet onder de standaarddienstverlening en worden, indien gewenst, apart overeengekomen.</p>
                        <p className="mb-3"><strong className="text-ash/90">13.5</strong> De positie van de Website in zoekresultaten wordt bepaald door algoritmes van zoekmachines die regelmatig en zonder vooraankondiging worden gewijzigd. Opdrachtnemer heeft hierop geen invloed en draagt hiervoor geen verantwoordelijkheid.</p>
                        <p className="mb-3"><strong className="text-ash/90">13.6</strong> Opdrachtnemer is niet aansprakelijk voor het dalen van de positie van de Website in de zoekresultaten, ook niet na oplevering van een nieuwe of vernieuwde Website.</p>
                        <p><strong className="text-ash/90">13.7</strong> Opdrachtgever is zich ervan bewust dat wijzigingen die hij zelf of via derden aanbrengt aan de content, URL-structuur of technische instellingen van de Website, negatieve gevolgen kunnen hebben voor de vindbaarheid. Opdrachtnemer is hiervoor niet aansprakelijk.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 14 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 14 — Geheimhouding</h2>
                        <p className="mb-3"><strong className="text-ash/90">14.1</strong> Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar hebben verkregen.</p>
                        <p className="mb-3"><strong className="text-ash/90">14.2</strong> Informatie geldt als vertrouwelijk indien dit door de andere partij is medegedeeld of indien dit voortvloeit uit de aard van de informatie.</p>
                        <p className="mb-3"><strong className="text-ash/90">14.3</strong> Deze geheimhoudingsplicht geldt niet voor informatie die reeds openbaar was op het moment van verstrekking.</p>
                        <p className="mb-3"><strong className="text-ash/90">14.4</strong> De geheimhoudingsplicht blijft van kracht gedurende de looptijd van de overeenkomst en 2 jaar na beëindiging daarvan.</p>
                        <p className="mb-3"><strong className="text-ash/90">14.5</strong> De geheimhoudingsplicht geldt niet indien een partij gehouden is vertrouwelijke informatie te verstrekken op grond van een wettelijk voorschrift, rechterlijke uitspraak of bevel van een bevoegde autoriteit. De verstrekkende partij stelt de andere partij hiervan zo spoedig mogelijk op de hoogte, voor zover dit wettelijk is toegestaan.</p>
                        <p className="mb-3"><strong className="text-ash/90">14.6</strong> Vertrouwelijke informatie wordt door de ontvangende partij uitsluitend gebruikt voor het doel waarvoor deze is verstrekt, zijnde de uitvoering van de overeenkomst.</p>
                        <p><strong className="text-ash/90">14.7</strong> Opdrachtnemer legt de in dit artikel omschreven geheimhoudingsplicht tevens op aan door hem ingeschakelde medewerkers en derden.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 15 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 15 — Gegevensbescherming</h2>
                        <p className="mb-3"><strong className="text-ash/90">15.1</strong> Indien Opdrachtnemer in het kader van de overeenkomst persoonsgegevens verwerkt namens Opdrachtgever, doen partijen dit in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en de Uitvoeringswet AVG (UAVG).</p>
                        <p className="mb-3"><strong className="text-ash/90">15.2</strong> Indien Opdrachtnemer als verwerker in de zin van artikel 4 lid 8 AVG optreedt, sluiten partijen een afzonderlijke verwerkersovereenkomst conform artikel 28 AVG.</p>
                        <p className="mb-3"><strong className="text-ash/90">15.3</strong> Opdrachtnemer treft passende technische en organisatorische maatregelen ter beveiliging van persoonsgegevens.</p>
                        <p className="mb-3"><strong className="text-ash/90">15.4</strong> Opdrachtnemer meldt een datalek zonder onredelijke vertraging na ontdekking aan Opdrachtgever, waarbij wordt gestreefd naar een melding binnen 48 uur, zodat Opdrachtgever kan voldoen aan de meldplicht van artikel 33 AVG.</p>
                        <p className="mb-3"><strong className="text-ash/90">15.5</strong> Na beëindiging van de overeenkomst zal Opdrachtnemer, naar keuze van Opdrachtgever, alle persoonsgegevens retourneren of vernietigen, tenzij bewaring wettelijk verplicht is.</p>
                        <p className="mb-3"><strong className="text-ash/90">15.6</strong> In het kader van de AVG wordt Opdrachtgever aangemerkt als verwerkingsverantwoordelijke en Opdrachtnemer als verwerker. Opdrachtgever stelt het doel en de middelen van de verwerking van persoonsgegevens vast.</p>
                        <p><strong className="text-ash/90">15.7</strong> Opdrachtgever staat ervoor in dat de verwerking van persoonsgegevens via de Website niet onrechtmatig is en geen inbreuk maakt op de rechten van betrokkenen of derden. Opdrachtgever vrijwaart Opdrachtnemer tegen alle aanspraken, boetes en kosten van betrokkenen, toezichthouders of derden als gevolg van het niet naleven door Opdrachtgever van de toepasselijke wet- en regelgeving, waaronder maar niet beperkt tot de AVG.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 16 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 16 — Overmacht</h2>
                        <p className="mb-3"><strong className="text-ash/90">16.1</strong> Opdrachtnemer is niet gehouden tot het nakomen van enige verplichting indien hij daartoe gehinderd wordt als gevolg van overmacht.</p>
                        <p className="mb-3"><strong className="text-ash/90">16.2</strong> Onder overmacht wordt verstaan, naast hetgeen daaromtrent in de wet en jurisprudentie wordt begrepen: ziekte van Opdrachtnemer, stroomuitval, internetstoring, storingen bij hostingproviders, cyberaanvallen, wanprestatie of weigering van nakoming door ingeschakelde derden of leveranciers, natuurrampen, epidemieën en overheidsmaatregelen.</p>
                        <p className="mb-3"><strong className="text-ash/90">16.3</strong> Indien de overmachtsituatie langer dan 60 dagen voortduurt, zijn beide partijen gerechtigd de overeenkomst te ontbinden zonder verplichting tot schadevergoeding.</p>
                        <p><strong className="text-ash/90">16.4</strong> Ontbinding op grond van overmacht ontslaat Opdrachtgever niet van zijn verplichting tot betaling van de werkzaamheden die vóór het intreden van de overmachtssituatie reeds zijn verricht. Opdrachtnemer is gerechtigd dit gedeelte separaat te factureren.</p>
                    </section>

                    <div className="h-px bg-ash/10"></div>

                    {/* Artikel 17 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ash uppercase tracking-tight mb-6">Artikel 17 — Slotbepalingen en geschillen</h2>
                        <p className="mb-3"><strong className="text-ash/90">17.1</strong> Op alle overeenkomsten waarop deze Algemene Voorwaarden van toepassing zijn, is Nederlands recht van toepassing.</p>
                        <p className="mb-3"><strong className="text-ash/90">17.2</strong> Geschillen worden bij voorkeur in onderling overleg opgelost.</p>
                        <p className="mb-3"><strong className="text-ash/90">17.3</strong> Indien onderling overleg niet tot een oplossing leidt, wordt het geschil voorgelegd aan de bevoegde rechter in het arrondissement van Opdrachtnemer.</p>
                        <p className="mb-3"><strong className="text-ash/90">17.4</strong> Opdrachtnemer is gerechtigd deze Algemene Voorwaarden eenzijdig te wijzigen of aan te vullen. Wijzigingen worden ten minste 30 dagen voor de beoogde ingangsdatum schriftelijk aan Opdrachtgever medegedeeld. Indien Opdrachtgever niet binnen deze termijn schriftelijk bezwaar maakt, worden de gewijzigde voorwaarden geacht te zijn aanvaard.</p>
                        <p><strong className="text-ash/90">17.5</strong> Opdrachtnemer is gerechtigd de tarieven voor doorlopende diensten (zoals hosting- en onderhoudspakketten) jaarlijks te indexeren, onder meer op basis van het consumentenprijsindexcijfer (CPI) van het CBS of op basis van aantoonbare prijsstijgingen van leveranciers. Indexatie wordt ten minste 1 maand voor de ingangsdatum schriftelijk aangekondigd.</p>
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
