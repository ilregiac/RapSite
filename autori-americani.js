document.addEventListener("DOMContentLoaded", () => {
    const diapositiveWrapper = document.getElementById("diapositive-wrapper");
    const diapositiveContainer = document.getElementById("diapositive-container");
    const epochButtons = document.querySelectorAll(".epoch-button");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const data = {
        "old-school": [
            { name: "Grandmaster Flash", description: "Grandmaster Flash, born Joseph Saddler in 1958 in Bridgetown, Barbados, is a pioneer of hip-hop and DJing. He revolutionized mixing by inventing techniques like the 'Clock Theory,' marking vinyl to pinpoint sound segments for scratching, 'cutting' to switch tracks on beat, 'back-spinning' to repeat sound fragments, and 'phasing' to manipulate turntable speeds. He formed Grandmaster Flash and the Furious Five, a legendary group whose iconic track 'The Adventures of Grandmaster Flash on the Wheels of Steel' introduced the cutting technique. Their 1982 album The Message brought social commentary to hip-hop. After the group's split in 1983, Flash pursued solo work, releasing albums like They Said It Couldn't Be Done. In 2007, he and the Furious Five were inducted into the Rock and Roll Hall of Fame.", bgImage: "grandmaster_flash.png" },
            { name: "Kurtis Blow", description: "Kurtis Walker, conosciuto come Kurtis Blow, nasce il 9 agosto 1959 a New York. Cresce ad Harlem, immergendosi nella cultura hip-hop emergente. Nel 1979, diventa il primo rapper a firmare un contratto con una major discografica, Mercury Records. Il suo singolo del 1980, 'The Breaks', è uno dei primi successi commerciali del rap, contribuendo a portare il genere al grande pubblico. Oltre alla carriera musicale, Blow lavorava come produttore e DJ, influenzando profondamente la scena hip-hop degli anni '80.", bgImage: "kurtis_blow.png" }
        ],
        "golden-age": [
            { name: "Rakim", description: "Rakim è il rapper di partenza per comprendere l'evoluzione dell'hip-hop, avendo introdotto l'uso pionieristico di rime interne e multisillabiche, testi complessi e flussi elaborati che hanno trasformato il rap da semplice a sofisticato. Insieme a Eric B., suo compagno di Long Island, ha formato il duo Eric B. & Rakim, producendo album classici come Paid in Full (1987) e Follow the Leader (1988) con singoli come 'Eric B. Is President' e 'Microphone Fiend'. L’influenza di Rakim si sente ovunque nell’hip-hop: A$AP Rocky, DMX, Eminem e artisti come 50 Cent e Lil Wayne lo considerano una fonte d’ispirazione.", bgImage: "rakim.png" },
            { name: "Eazy-E", description: "Eric Lynn Wright, noto come Eazy-E, nasce il 7 settembre 1964 a Compton, California. Negli anni '80, fonda la Ruthless Records e il gruppo N.W.A, pionieri del gangsta rap. Con l'album 'Straight Outta Compton' del 1988, il gruppo porta alla ribalta le realtà delle strade di Los Angeles. Dopo lo scioglimento dei N.W.A, Eazy-E prosegue la carriera solista con album come 'Eazy-Duz-It'. Nel 1995, annuncia di essere affetto da AIDS e muore poco dopo, il 26 marzo dello stesso anno, lasciando un'eredità duratura nel mondo del rap.", bgImage: "eazy_e.png" },
            { name: "Ice Cube", description: "Prima di diventare un gigante di Hollywood e proprietario di una lega di basket, Ice Cube, nato O’Shea Jackson, scriveva versi per i suoi compagni di gruppo N.W.A (Dr. Dre, Eazy-E, Arabian Prince, DJ Yella e MC Ren) e per se stesso nel classico debutto del gruppo del 1988, Straight Outta Compton. L'album, che funge da piattaforma fondante per il gangsta rap, includeva gli inni controversi 'Fuck Tha Police' e 'Gangsta Gangsta', ed è stato certificato triplo disco di platino nonostante una promozione minima in radio o su MTV. Dopo aver scritto testi che hanno attirato l'attenzione dell'FBI e ricevuto divieti radiofonici, Ice Cube ha lanciato una carriera solista straordinaria con album come AmeriKKKa’s Most Wanted e Death Certificate, che restano alcuni dei lavori più provocatori del rap. Nel 1993, ha bilanciato la critica sociale con lo storytelling leggero e positivo del suo intramontabile successo It Was a Good Day.", bgImage: "ice_cube.png" },
            { name: "Dr. Dre", description: "Dr. Dre è uno dei più grandi produttori dell’hip-hop, ma anche un rapper iconico con tre album fondamentali: Straight Outta Compton con gli N.W.A., The Chronic e 2001. La sua voce autorevole e il suo flow impeccabile, come dimostrato in 'Forgot About Dre,' sono tra i più riconoscibili nel genere. La sua influenza si estende oltre la musica, grazie al lancio di artisti come Snoop Dogg, Eminem e Kendrick Lamar.", bgImage: "dr_dre.png" },
            { name: "Snoop Dogg", description: "Snoop Doggy Dogg. Snoop Lion. Snoop Dogg. Qualunque sia il nome, Calvin Broadus Jr. è un pilastro del West Coast rap e uno dei padri fondatori del gangsta rap. Insieme al mentore Dr. Dre, Snoop ha debuttato con il flow rilassato e l’attitudine cool nel singolo 'Deep Cover' del 1992. Successivamente, l'album di Dre The Chronic e il debutto solista di Snoop, Doggystyle, hanno ridefinito il rap degli anni '90, producendo classici come 'Gin and Juice' e 'Who Am I? (What’s My Name?)'. Nel corso degli anni, Snoop ha dimostrato una versatilità senza pari, passando dal G-Funk al reggae come Snoop Lion, fino a sperimentare gospel con Bible of Love. Nel 2022 ha riportato la sua carriera al punto di partenza acquistando l’etichetta Death Row.", bgImage: "snoop_dogg.png" },
            { name: "Methon Man", description: "Clifford Smith Jr., conosciuto come Method Man, nasce il 2 marzo 1971 a Hempstead, New York. È membro del Wu-Tang Clan, distinguendosi per il suo flow distintivo e la voce profonda. Nel 1994, pubblica il suo album solista di debutto, 'Tical', che ottiene grande successo. La collaborazione con Mary J. Blige nel brano 'I'll Be There for You/You're All I Need to Get By' gli vale un Grammy. Oltre alla musica, Method Man intraprende una carriera attoriale, apparendo in film e serie TV, consolidando la sua presenza nell'industria dell'intrattenimento.", bgImage: "method_man.png" },
            { name: "The GZA", description: "Gary Grice, conosciuto come The GZA o The Genius, è nato il 22 agosto 1966 a Brooklyn, New York. È un membro fondatore del Wu-Tang Clan e riconosciuto per il suo stile lirico intellettuale e complesso. Il suo album solista del 1995, Liquid Swords, è considerato un classico dell'hip-hop, apprezzato per le sue liriche intricate e le produzioni atmosferiche. GZA è spesso definito il 'cervello' del Wu-Tang Clan per la profondità dei suoi testi.", bgImage: "the_gza.png" },
            { name: "Raekwon", description: "Nato Corey Woods il 12 gennaio 1970 a Brooklyn, New York, Raekwon è un membro fondatore del Wu-Tang Clan, gruppo hip-hop di Staten Island formatosi nel 1992. Nel 1995, ha pubblicato il suo album solista di debutto, Only Built 4 Cuban Linx..., considerato uno dei migliori album rap degli anni '90 e pioniere del sottogenere 'mafioso rap'. Successivamente, ha rilasciato album come Immobilarity (1999) e The Lex Diamond Story (2003). Raekwon è noto per il suo lirismo complesso e le narrazioni dettagliate. ", bgImage: "raekwon.png" },
            { name: "Ghostface Killah", description: "Con una collezione di brillanti album solisti e uno degli stili più inconfondibili nella storia dell'hip-hop, Ghostface Killah è probabilmente il rapper più realizzato all'interno del Wu-Tang Clan, che già di per sé merita un posto in qualsiasi lista dei migliori gruppi rap di sempre. Il liricista di Staten Island attinge a uno slang unico, profili di personaggi colorati, beni di lusso e flow per creare storie. Ha sviluppato una chimica speciale con il compagno del Wu-Tang Raekwon quando i due hanno adottato ruoli prominenti nei rispettivi debutti classici degli anni '90, Ironman e Only Built 4 Cuban Linx. Ghost ha continuato a vincere anche nel 21° secolo, prima con il suo capolavoro del 2000 Supreme Clientele e poi con lavori come il brillante Fishscale del 2006 e il 'fumetto su disco' Twelve Reasons to Die del 2013.", bgImage: "ghostface_killah.png" },
            { name: "Ol' Dirty Bastard", description: "Russell Tyrone Jones, noto come Ol' Dirty Bastard (ODB), nasce il 15 novembre 1968 a Brooklyn, New York. È uno dei membri fondatori del Wu-Tang Clan, collettivo hip-hop che debutta nel 1993 con l'album 'Enter the Wu-Tang (36 Chambers)'. Nel 1995, ODB avvia la carriera solista con 'Return to the 36 Chambers: The Dirty Version', caratterizzato da uno stile unico e imprevedibile. Nonostante il talento, la sua carriera è segnata da numerosi problemi legali e personali. Muore il 13 novembre 2004 a Manhattan per un'overdose accidentale, lasciando un'impronta indelebile nella storia dell'hip-hop.", bgImage: "ol_dirty_bastard.png" },
            { name: "Scarface", description: "Qualsiasi argomento trattato da un altro rapper, probabilmente Scarface l'ha trattato per primo. Rime su una crisi di salute mentale? Ci sono 'Mind Playing Tricks on Me', il suo classico del 1991 con i Geto Boys, o 'I’m Dead' dal suo album di debutto Mr. Scarface Is Back. Versi sull'investimento e sul risparmio di denaro? C’è 'Safe' dal suo album del 2002 The Fix. Tra il periodo con i Geto Boys alla fine degli anni ’80 e la sua illustre carriera solista negli anni 2010, Scarface ha mostrato i pericoli della vita di strada con un approccio pragmatico e stoico al 'hustling', diverso dalle immagini glamour promosse da altri artisti. È stato una delle prime vere star del rap del Sud, dimostrando complessità lirica e profondità emotiva in una regione una volta sottovalutata.", bgImage: "scarface.png" },
            { name: "LL Cool J", description: "LL Cool J ha firmato con Def Jam Records come primo artista dell’etichetta nel 1984 e ha pubblicato 'I Need a Beat' dal suo album di debutto Radio, interamente prodotto da Rick Rubin. Durante l'età dell'oro del rap, 'I Need a Beat' ha aperto la strada allo stile b-boy, con un'energia ineguagliabile e un lirismo aggressivo che è diventato un marchio del genere. Radio è stato il primo album dell’etichetta a entrare nella top 50, restando 38 settimane nella Billboard 200 e conquistando il disco di platino nel 1989. LL ha trascorso tutta la sua carriera con Def Jam, diventando un tuttofare, un hitmaker per le donne e un pioniere in ambiti come televisione e filantropia.", bgImage: "ll_cool_j.png" }
        ],
        "gangsta-rap": [
            { name: "Notorious B.I.G", description: "Christopher 'The Notorious B.I.G.' Wallace è il fenomeno definitivo del rap. Dopo il suo debutto con 'Party and Bullshit' nel 1993, firmò con Bad Boy Records di Diddy, costruendo una reputazione con storie crude raccontate con stile rilassato. Con 16 successi nella Hot 100 e due classici album solisti (Ready to Die del 1994 e Life After Death del 1997), Biggie dimostrò di essere un maestro nel mixare rime di strada con cuore e ironia. Nonostante la sua brillante carriera, fu tragicamente interrotta dalla sua morte in una sparatoria nel 1997, solo sei mesi dopo quella di Tupac Shakur. Anche con solo pochi album, la sua influenza è ancora tangibile dopo quasi 30 anni.", bgImage: "notoriousbig.png" },
            { name: "Tupac Shakur", description: "Poeta, attore, attivista e rapper, Tupac Amaru Shakur era un autentico polimata negli anni ’90. Dopo essere stato un membro dei Digital Underground, Tupac divenne una presenza troppo imponente per restare in secondo piano, soprattutto dopo il suo memorabile verso in 'Same Song' del 1991. La sua dualità come artista solista era straordinaria: da un lato, creava classici empatici come 'Dear Mama' e 'Keep Your Head Up'; dall'altro, era esplosivo con brani come 'Hit ‘Em Up' e 'Hail Mary.' Oltre a essere uno dei migliori parolieri, la sua voce e i suoi messaggi riuscivano a colpire anche i gangster più duri. Dopo essere stato rilasciato dal carcere nel 1995, firmò con Death Row Records, formando un trio leggendario con Dr. Dre e Snoop Dogg. Il suo capolavoro fu All Eyez on Me, un doppio album ricco di successi come 'California Love' e 'How Do You Want It.' Nonostante le sue vittorie, la sua faida con The Notorious B.I.G. culminò tragicamente nella sua morte nel 1996. Anche dopo la sua scomparsa, il suo impatto continua, con sette album post mortem, un posto nella Rock Hall of Fame e il riconoscimento di 'Dear Mama' nella Library of Congress.", bgImage: "tupac.png" },
            { name: "Nas", description: "I fan del rap conoscono bene il percorso di Nas verso la grandezza. Nel 1991, con un’apparizione memorabile in 'Live at the Barbeque' di Large Professor, Nasir Jones si è subito distinto come una promessa del rap. Con aspettative altissime sulle spalle, Nas ha mantenuto la pressione pubblicando nel 1994 il suo debutto Illmatic, considerato uno dei capolavori assoluti del genere e un punto di riferimento per i liricisti di ogni generazione. Ancora oggi, Illmatic è un classico indiscusso, ma Nas ha continuato a evolversi, pubblicando album numero 1 anche negli anni 2010. La sua narrativa vivida ('Black Girl Lost') e la sua abilità lirica ('Nas Is Like') sono leggendarie, e la sua resilienza è stata dimostrata quando ha risposto a Jay-Z con il diss Ether nel 2001, aggiungendo un nuovo termine al vocabolario del rap. Negli ultimi anni, la collaborazione con Hit-Boy nella serie di album King’s Disease gli ha fatto vincere il suo primo Grammy, dimostrando che la sua abilità lirica è ancora affilata come sempre.", bgImage: "nas.png" },
            { name: "Jay-Z", description: "'Non perderò.' La dichiarazione fiduciosa di Shawn 'Jay-Z' Carter, originario di Brooklyn, si è rivelata vera durante la sua carriera leggendaria. La storia è dalla sua parte: Hov vanta 14 album al numero 1 della Billboard 200 (il record tra gli artisti solisti) e oltre 140 milioni di dischi venduti. Co-fondatore della Roc-A-Fella Records, vincitore di 24 Grammy, ex presidente della leggendaria Def Jam Records e mentore di Rihanna e Ye, che ha guidato verso lo status di miliardari, Jay-Z ha costruito un impero con Roc Nation e marchi come D’ussé e Armand de Brignac. Nonostante tutto, riesce ancora a pubblicare versi di quattro minuti che fanno esplodere internet, come dimostrato in 'God Did' di DJ Khaled nel 2022. Marito di Beyoncé, Jay-Z ha prosperato in ogni epoca, raccontando il sogno americano con rime regali che parlano delle difficoltà e dell'opulenza di una grandezza autodidatta. Primo rapper a entrare nella Songwriters Hall of Fame, Jay-Z è convinto che tutti abbiano un talento di livello geniale. Per fortuna, ha scoperto il suo presto, diventando il 'rapper preferito dei tuoi rapper preferiti'. Magari altri artisti possono competere con Jay nel suo momento migliore, ma nessuno può eguagliare la sua carriera completa: la longevità, l'ampiezza dei suoi successi e il suo impatto culturale e musicale per oltre tre decenni.", bgImage: "jay_z.png" },
            { name: "Busta Rhymes", description: "Trevor George Smith Jr., noto come Busta Rhymes, nasce il 20 maggio 1972 a Brooklyn, New York. Inizia la carriera con il gruppo Leaders of the New School, ma raggiunge la fama come solista negli anni '90. Il suo album di debutto, 'The Coming' (1996), include il singolo di successo 'Woo-Hah!! Got You All in Check'. Conosciuto per il suo stile energico e i video musicali innovativi, Busta Rhymes collabora con numerosi artisti e pubblica diversi album di successo, consolidando la sua posizione nella scena rap.", bgImage: "busta_rhymes.png" },
            { name: "Lil' Kim", description: "Kimberly Denise Jones, conosciuta come Lil' Kim, nasce l'11 luglio 1974 a Brooklyn, New York. Scoperta da The Notorious B.I.G., entra a far parte del gruppo Junior M.A.F.I.A. prima di lanciare la carriera solista. Il suo album di debutto, 'Hard Core' (1996), è noto per i testi espliciti e l'immagine provocatoria, rompendo barriere per le donne nel rap. Con brani di successo come 'Crush on You' e 'Not Tonight', Lil' Kim diventa una figura di spicco nell'hip-hop, influenzando molte artiste successive.", bgImage: "lil_kim.png" },
            { name: "Big Pun", description: "Christopher Lee Rios, noto come Big Pun, nasce il 10 novembre 1971 nel Bronx, New York. Diventa il primo rapper latino a ottenere un album di platino con 'Capital Punishment' nel 1998. Rinomato per la sua abilità lirica e il flow complesso, Big Pun collabora con artisti come Fat Joe e Jennifer Lopez. Purtroppo, la sua carriera è interrotta prematuramente dalla sua morte il 7 febbraio 2000, a causa di problemi di salute legati all'obesità. Nonostante la breve carriera, la sua influenza sul rap è ancora evidente.", bgImage: "big_pun.png" },
            { name: "Fat Joe", description: "Joseph Antonio Cartagena, noto come Fat Joe, è nato il 19 agosto 1970 nel Bronx, New York. Di origini cubane e portoricane, ha iniziato la sua carriera negli anni '90 come membro del gruppo D.I.T.C. Ha ottenuto successo commerciale con brani come 'What's Luv?' e 'Lean Back'. Oltre alla carriera musicale, Fat Joe ha fondato l'etichetta Terror Squad e ha scoperto talenti come Big Pun.", bgImage: "fat_joe.png" },
            { name: "Mobb Deep.", description: "Duo hip-hop composto da Prodigy (Albert Johnson) e Havoc (Kejuan Muchita), formatosi nel Queensbridge, New York, nei primi anni '90. Il loro album del 1995, The Infamous, è considerato un classico dell'hip-hop hardcore, con tracce come 'Shook Ones Pt. II' che hanno definito il suono del rap della East Coast. Sono noti per le loro liriche oscure e le produzioni grintose che riflettono la vita di strada.", bgImage: "mobb_deep.png" },
            { name: "Big L", description: "Lamont Coleman, conosciuto come Big L, è nato il 30 maggio 1974 a Harlem, New York. Rinomato per il suo wordplay e le sue punchline, ha pubblicato il suo album di debutto, Lifestylez ov da Poor & Dangerous, nel 1995. Nonostante una carriera interrotta dalla sua tragica morte nel 1999, Big L è ricordato come uno dei liricisti più talentuosi della sua generazione.", bgImage: "big_l.png" },
            { name: "Puff Daddy", description: "Sean Combs, noto anche come Puff Daddy, P. Diddy o Diddy, è nato il 4 novembre 1969 a Harlem, New York. Imprenditore, rapper e produttore discografico, ha fondato la Bad Boy Records, lanciando le carriere di artisti come The Notorious B.I.G. Ha ottenuto successo come artista solista con brani come 'I'll Be Missing You' e ha ampliato il suo impero con linee di abbigliamento e altre iniziative imprenditoriali.", bgImage: "puff_daddy.png" },
            { name: "Eminem", description: "Dopo essere emerso nelle battaglie di freestyle, Eminem ha usato il microfono per abbattere chiunque si mettesse sulla sua strada. Con testi controversi, macabri ma spesso ironici, e schemi di rime impareggiabili, si è ritagliato il ruolo nella storia del rap. Eminem è noto anche per la sua velocità: ha stabilito il Guinness World Record per il rap più veloce in una hit con 'Godzilla,' dove ha rappato 225 parole in 30 secondi. Con 15 Grammy, 10 album al primo posto e tre singoli certificati Diamond ('Lose Yourself,' 'Love the Way You Lie' e 'Not Afraid'), Eminem rappresenta una delle storie di successo più sorprendenti nella musica. Il film autobiografico 8 Mile racconta la sua lotta per essere accettato come rapper bianco in un genere dominato da artisti neri. Grazie alle sue straordinarie capacità tecniche e ai suoi album classici, Slim Shady è considerato uno dei più grandi rapper di tutti i tempi.", bgImage: "eminem.png" },
            { name: "Tech N9ne", description: "Aaron Dontez Yates, conosciuto come Tech N9ne, è nato l'8 novembre 1971 a Kansas City, Missouri. Rinomato per il suo stile di rap veloce e tecnico, ha co-fondato l'etichetta indipendente Strange Music nel 1999. Ha costruito una solida base di fan attraverso tour estensivi e una discografia prolifica, diventando uno degli artisti indipendenti di maggior successo nella scena hip-hop.", bgImage: "tech_n9ne.png" }
        ],
        "modern": [
            { name: "Drake", description: "Drizzy Drake Rogers ha previsto la sua ascesa a superstar quando era Wheelchair Jimmy nella popolare serie adolescenziale degli anni 2000 Degrassi: The Next Generation. Dal suo mixtape di svolta del 2009 So Far Gone, l'abilità di Drake di muoversi agilmente tra i generi, mescolando melodie accattivanti con versi taglienti, lo ha reso inarrestabile. Ogni progetto a cui ha lavorato si è trasformato in oro o platino. Con un successo commerciale è attualmente il leader assoluto nella storia della Billboard Hot 100 con quasi 300 brani in classifica – Drake continua a dominare la scena musicale con album iconici come Take Care (2011) e Nothing Was The Same (2013). Che stia cantando il suo dolore su gemme come 'Marvin’s Room' o distruggendo MC con pezzi come '5 AM in Toronto', Drake è una delle figure più versatili e influenti nella storia della musica.", bgImage: "drake.png" },
            { name: "50 Cent", description: "Dopo essere sopravvissuto a un tentativo di omicidio che gli ha lasciato nove proiettili nel corpo, Curtis Jackson III ha intrapreso una rinascita. Il suo mixtape del 2002 Guess Who’s Back? ha portato alla firma con la Shady Records di Eminem sotto l’etichetta Aftermath Entertainment di Dr. Dre, seguito dal debutto al primo posto nella Billboard 200 con Get Rich or Die Tryin’ nel 2003. L’album ha offerto rime crude, humor nero e alcuni dei ritornelli più memorabili dell’anno, grazie ai due successi numero uno della Hot 100, 'In da Club' e '21 Questions' con Nate Dogg. Prima di dedicarsi al suo impero televisivo con Power, 50 Cent ha continuato a dominare le classifiche con album come The Massacre e Curtis, lanciando allo stesso tempo le carriere dei membri della sua etichetta G-Unit, tra cui Lloyd Banks, Young Buck e The Game.", bgImage: "50_cent.png" },
            { name: "Kanye West", description: "Partendo dai primi anni 2000 come produttore di successi per artisti come Jay-Z e Talib Kweli, Kanye West ha preso il microfono nel 2003 con il suo debutto solista 'Through the Wire', seguito dal suo primo numero uno nella Hot 100, 'Slow Jamz', insieme a Twista e Jamie Foxx. Da allora ha sfornato una serie di album amati, tra cui Graduation, 808s & Heartbreak e My Beautiful Dark Twisted Fantasy. L'ascesa di Kanye da produttore a artista è stata straordinaria, così come il suo ruolo di pioniere nella moda e negli affari con la sua azienda Yeezy. Tuttavia, negli ultimi anni è diventato una figura divisiva, con dichiarazioni controverse su politica e società. Nonostante il suo declino pubblico, Kanye rimane un'icona per il suo contributo monumentale all'arte e alla cultura.", bgImage: "kanye_west.png" },
            { name: "Lil Wayne", description: "Lil Wayne è uno dei più abili parolieri del nostro tempo. Dopo aver lasciato la scuola a 14 anni per concentrarsi sulla musica, entrò nei The Hot Boys, pubblicando l’album Guerilla Warfare, che segnò il primo di dodici album in cima alle classifiche. Con Tha Carter III nel 2008, contenente le hit 'A Milli' e 'Lollipop,' Wayne si affermò nel mainstream, aprendo la strada a star come Drake e Nicki Minaj. Oltre al successo commerciale, Wayne ha mantenuto una forte connessione con i fan, grazie a mixtape come Da Drought e No Ceilings. La sua influenza culturale, sonora e lirica è indiscutibile.", bgImage: "lil_wayne.png" },
            { name: "Travis Scott", description: "Jacques Berman Webster II, noto come Travis Scott, è nato il 30 aprile 1991 a Houston, Texas. Rapper, cantante e produttore discografico, ha guadagnato fama con mixtape come Owl Pharaoh e album come Rodeo e Astroworld. È noto per le sue produzioni atmosferiche e le esibizioni dal vivo energiche.", bgImage: "travis_scott.png" },
            { name: "King Von", description: "Dayvon Daquan Bennett, conosciuto come King Von, è nato il 9 agosto 1994 a Chicago, Illinois. Ha guadagnato attenzione con brani come 'Crazy Story' e ha pubblicato il suo album di debutto, Welcome to O'Block, nel 2020. La sua carriera promettente è stata tragicamente interrotta dalla sua morte il 6 novembre 2020.", bgImage: "king_von.png" },
            { name: "Lil Uzi Vert", description: "Symere Bysil Woods, conosciuto come Lil Uzi Vert, è nato il 31 luglio 1995 a Filadelfia, Pennsylvania. Ha ottenuto successo con brani come 'XO Tour Llif3' e l'album", bgImage: "lil_uzi_vert.png" },
            { name: "Playboy Carty", description: "Jordan Terrell Carter, noto come Playboi Carti, è nato il 13 settembre 1996 ad Atlanta, Georgia. Conosciuto per il suo stile vocale unico e le produzioni minimaliste, ha guadagnato fama con brani come 'Magnolia' e l'album Die Lit. Il suo seguito di culto lo ha reso una figura di spicco nella scena trap contemporanea.", bgImage: "playboy_carti.png" },
            { name: "Kendrick Lamar", description: "Originario di Compton, Kendrick Lamar è diventato uno degli artisti più influenti della musica grazie ai suoi testi vividi e provocatori, il suo coraggio nel sperimentare con i generi e il suo flow. Dopo aver attirato l'attenzione con mixtape da adolescente come K.Dot, Lamar ha pubblicato il suo primo album in studio, Section.80, nel 2011 sotto l'etichetta indie Top Dawg Entertainment. Firmato con Aftermath Entertainment di Dr. Dre, ha raggiunto il successo con good kid, m.A.A.d City nel 2012, segnando una rinascita del rap della West Coast. L’album, acclamato dalla critica, ha prodotto successi commerciali come 'Swimming Pools (Drank)' e 'Bitch, Don’t Kill My Vibe. 'Nel 2015, To Pimp a Butterfly ha spinto ulteriormente i confini del rap con influenze jazz, mentre il suo successivo album, DAMN., ha introdotto sonorità R&B e soul, producendo il suo primo singolo numero 1, 'HUMBLE,' e vincendo il Premio Pulitzer per la Musica nel 2018, un traguardo mai raggiunto prima da un album non jazz o classico. Kendrick ha anche contribuito alla colonna sonora del film Black Panther e ha continuato a spingere la sua arte con Mr. Morale & the Big Steppers. Con 17 Grammy e un Emmy, Lamar continua a essere considerato il miglior rapper della sua generazione, con un’eredità costruita su testi consapevoli e una costante evoluzione artistica.", bgImage: "kendrick_lamar.png" },
            { name: "Nicki Minaj", description: "Originaria di South Jamaica, Queens, per via di Trinidad e Tobago, Nicki Minaj ha guadagnato il titolo di Regina del Rap moderno con il suo spirito sicuro di sé. Con il mixtape del 2009 Beam Me Up Scotty, si è affermata come una forza lirica, prima di emergere come First Lady della Young Money, completando la trinità con Lil Wayne e Drake. Attraverso album sperimentali come Pink Friday e The Pinkprint e versi iconici come quello su 'Monster' di Kanye West, Nicki ha difeso il suo regno per oltre un decennio. Con flow animati, alter ego memorabili e un impatto che va oltre l’hip-hop, Nicki ha aperto la strada a una nuova generazione di MC femminili. Tra i suoi riconoscimenti, più di 100 ingressi nella Billboard Hot 100 e l’MTV Video Vanguard Award del 2022 per i suoi video provocatori.", bgImage: "nicki_minaj.png" },
            { name: "Future", description: "Abbracciando il soprannome di 'toxic king' del rap, Future e i suoi flow hanno rappresentato una forza trainante per l'ascesa di Atlanta come capitale dell'hip-hop negli anni 2010. La trilogia epica di mixtape Monster, Beast Mode e 56 Nights, seguita dall'acclamato DS2 e dal progetto collaborativo What a Time to Be Alive con Drake, tutti pubblicati nel 2015, potrebbe essere il miglior utilizzo di 365 giorni nella storia del rap. Questo era solo l'inizio: con l'uscita di I Never Liked You nel 2022, contenente la hit 'Wait for U' con Drake e Tems, Future vanta ora otto album al primo posto e dieci successi nella top 10 della Hot 100. Oltre un decennio dopo l'inizio della sua carriera prolifica, Future Hendrix è più rilevante che mai, diventando l'unico artista a comparire nella Hot 100 ogni settimana del 2022.", bgImage: "future.png" }
        ]
    };

    let currentEpoch = "old-school";
    let currentIndex = 0;
    let currentData = data[currentEpoch];

    function renderDiapositive(artists) {
        const slidesHTML = artists.map((artist, index) => `
            <div class="diapositiva" data-index="${index}">
                <div class="background" style="background-image: url('${artist.bgImage}');"></div>
                <div class="panel">
                    <h2>${artist.name}</h2>
                    <p>${artist.description}</p>
                </div>
            </div>
        `).join("");
        diapositiveWrapper.innerHTML = slidesHTML;
        currentIndex = 0;
        updateSlide();
    }    

    // Aggiorna la diapositiva visibile (traslazione dello slider)
    function updateSlide() {
        const offset = -currentIndex * 100;
        diapositiveWrapper.style.transform = `translateX(${offset}%)`;
    }        

    // Gestione dei pulsanti epoca
    epochButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentEpoch = button.dataset.epoch;
        currentData = data[currentEpoch] || [];
        renderDiapositive(currentData);
        // Scrolla verso lo slider centrando la vista
        diapositiveContainer.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    });

    // Navigazione con frecce
    leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentData.length) % currentData.length;
    updateSlide();
    });
    
    rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentData.length;
    updateSlide();
    });

    // Inizializza con la prima epoca
    renderDiapositive(currentData);
});