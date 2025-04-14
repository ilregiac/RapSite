document.addEventListener("DOMContentLoaded", () => {
    const diapositiveWrapper = document.getElementById("diapositive-wrapper");
    const diapositiveContainer = document.getElementById("diapositive-container");
    const epochButtons = document.querySelectorAll(".epoch-button");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const data = {  
        "alborei": [  
            { name: "Sangue Misto", description: "Formati a Bologna nel 1994, i Sangue Misto erano composti da Neffa, Deda e DJ Gruff. Il loro unico album, SxM, è considerato una pietra miliare del rap italiano. Con testi profondi e basi cupe, hanno rappresentato la vita urbana e le sfide sociali dell'epoca, influenzando profondamente la scena hip-hop italiana.", bgImage: "sanguemisto.png" },  
            { name: "Jovanotti", description: "Lorenzo Cherubini, noto come Jovanotti, ha introdotto il rap al grande pubblico italiano negli anni '80. Con l'album Jovanotti for President del 1988, ha portato sonorità hip-hop nelle classifiche mainstream. Sebbene inizialmente criticato per un approccio più commerciale, il suo lavoro ha contribuito a diffondere la cultura hip-hop in Italia.", bgImage: "jovanotti.png" },
            { name: "Lou X", description: "Proveniente da Pescara, Lou X è stato una voce distintiva nel panorama rap italiano degli anni '90. Con album come Dal Basso (1993) e A volte ritorno (1995), ha affrontato temi legati alla vita di strada e al disagio sociale, offrendo una prospettiva cruda e realistica della realtà urbana italiana.", bgImage: "lou_x.png" },
            { name: "Neffa", description: "Giovanni Pellino, in arte Neffa, ha iniziato la sua carriera come membro dei Sangue Misto. Dopo lo scioglimento del gruppo, ha proseguito con una carriera solista, pubblicando Neffa & i Messaggeri della Dopa nel 1996. Questo album ha mescolato rap con influenze jazz, funk e soul, segnando una svolta innovativa nel panorama musicale italiano.", bgImage: "neffa.png" },
            { name: "Articolo 31", description: "Il duo milanese composto da J-Ax e DJ Jad ha raggiunto grande popolarità negli anni '90. Con l'album Strade di città del 1993, hanno portato il rap nelle classifiche italiane, vendendo oltre 90.000 copie. Brani come "Ohi Maria" e "Tranqi Funky" sono diventati emblematici, contribuendo a rendere il rap un fenomeno di massa in Italia.", bgImage: "articolo_31.png" }  
        ],  
        "old-school": [  
            { name: "Sacre Scuole", description: "Il gruppo Sacre Scuole, formato nel 1999 a Milano, era composto da Dargen D'Amico, Jake La Furia (alias Fame) e Gué Pequeno (alias Il Guercio). Nel 1999, hanno pubblicato il loro unico album, "3 MC's al cubo", che ha rappresentato un punto di riferimento per l'hip hop italiano dell'epoca. Nonostante la breve durata del gruppo, dovuta a contrasti interni che hanno portato allo scioglimento nel 2001, Sacre Scuole ha gettato le basi per future collaborazioni e progetti, influenzando profondamente la scena rap milanese.", bgImage: "sacre_scuole.png" },
            { name: "Club Dogo", description: "Dopo lo scioglimento delle Sacre Scuole, nel 2002, Jake La Furia e Gué Pequeno si sono uniti al produttore Don Joe per formare i Club Dogo. Il gruppo ha esordito con l'album "Mi Fist" nel 2003, caratterizzato da testi crudi e realistici che riflettevano la vita urbana milanese. Con il tempo, i Club Dogo hanno ampliato il loro pubblico, contribuendo a portare il rap italiano al grande pubblico e influenzando numerosi artisti emergenti. ", bgImage: "club_dogo.png" },
            { name: "Mondo Marcio", description: "Mondo Marcio, pseudonimo di Gian Marco Marcello, ha esordito giovanissimo nella scena rap italiana. Nel 2006, ha pubblicato l'album 'Solo un uomo', che ha ottenuto un grande successo commerciale, trainato dal singolo 'Dentro alla scatola'. La sua musica, caratterizzata da testi introspettivi e autobiografici, ha contribuito a rendere il rap più accessibile al grande pubblico, aprendo la strada a una nuova generazione di artisti.", bgImage: "mondo_marcio.png" },
            { name: "Inoki", description: "Inoki, nome d'arte di Fabiano Ballarin, è emerso come una delle figure di spicco della scena hip hop bolognese. Conosciuto per il suo stile diretto e le sue liriche impegnate, ha contribuito a diffondere la cultura hip hop nel centro Italia. Ha collaborato con numerosi artisti e ha partecipato a progetti collettivi, rafforzando la comunità hip hop italiana.", bgImage: "inoki.png" },
            { name: "Fabri Fibra", description: "Fabri Fibra, all'anagrafe Fabrizio Tarducci, ha iniziato la sua carriera negli anni '90, ma è con l'album 'Tradimento' del 2006 che ha raggiunto la notorietà nazionale. Con testi provocatori e uno stile distintivo, ha portato il rap italiano nelle classifiche mainstream, affrontando temi sociali e personali con un linguaggio diretto. La sua influenza è evidente in molti artisti successivi che hanno adottato un approccio simile.", bgImage: "fabri_fibra.png" },
            { name: "Marracash", description: "Marracash, pseudonimo di Fabio Bartolo Rizzo, è emerso dalla scena milanese con l'album omonimo nel 2008. Conosciuto per la sua abilità lirica e la profondità dei suoi testi, ha affrontato temi legati alla vita urbana e alle sfide personali. La sua musica ha contribuito a elevare il livello del rap italiano, guadagnando sia successo commerciale che riconoscimento critico.", bgImage: "marracash.png" },
            { name: "Noyz Narcos", description: "Noyz Narcos, nome d'arte di Emanuele Frasca, è una figura centrale della scena rap romana. Membro del collettivo TruceKlan, è noto per il suo stile aggressivo e le sue liriche oscure. Ha contribuito a definire il suono hardcore del rap italiano, influenzando numerosi artisti con la sua estetica distintiva e le sue produzioni innovative.", bgImage: "noyz_narcos.png" },
            { name: "Don Joe", description: "Don Joe, all'anagrafe Luigi Florio, è il produttore e beatmaker dei Club Dogo. La sua abilità nel creare basi innovative e coinvolgenti ha giocato un ruolo cruciale nel successo del gruppo. Oltre al lavoro con i Club Dogo, ha collaborato con numerosi artisti della scena italiana, contribuendo a definire il suono del rap italiano moderno.", bgImage: "don_joe.png" },
            { name: "Jake la Furia", description: "Jake La Furia, pseudonimo di Francesco Vigorelli, è uno dei membri fondatori dei Club Dogo. Conosciuto per il suo stile potente e le sue liriche taglienti, ha contribuito a portare storie di vita urbana e tematiche sociali nel rap italiano. Oltre al lavoro con il gruppo, ha intrapreso una carriera solista di successo, consolidando la sua posizione nella scena musicale italiana.", bgImage: "jake_la_furia.png" },
            { name: "Piotta", description: "Piotta, nome d'arte di Tommaso Zanello, è emerso dalla scena romana con uno stile che mescola ironia e critica sociale. Il suo singolo 'Supercafone' del 1999 è diventato un tormentone, portando il rap italiano nelle classifiche mainstream. Nonostante il tono spesso scherzoso, Piotta ha affrontato temi rilevanti, contribuendo a rendere il rap accessibile a un pubblico più ampio.", bgImage: "piotta.png" },
            { name: "Caparezza", description: "Caparezza, pseudonimo di Michele Salvemini, ha iniziato la sua carriera come Mikimix, ma è con l'adozione del nuovo nome che ha trovato il suo vero stile. Con testi ricchi di giochi di parole, riferimenti culturali e critica sociale, ha creato un ponte tra rap e cantautorato. La sua musica innovativa e il suo approccio teatrale alle performance hanno ampliato i confini del rap italiano, attirando un vasto pubblico.", bgImage: "caparezza.png" }
        ],  
        "eta-doro": [  
            { name: "Guè Pequeno", description: "Cosimo Fini, noto come Guè Pequeno, ha proseguito la sua carriera solista dopo l'esperienza con i Club Dogo. Nel 2011 ha pubblicato il suo album di debutto solista, 'Il ragazzo d'oro', che ha consolidato la sua posizione nella scena rap italiana. Con uno stile sofisticato e testi che spaziano dalla vita di strada al lusso, Guè ha influenzato una nuova generazione di rapper, contribuendo a portare il rap italiano a un pubblico più ampio.", bgImage: "gue_pequeno.png" }, 
            { name: "Emis Killa", description: "Emiliano Rudolf Giambelli, conosciuto come Emis Killa, è emerso con forza nella scena rap italiana all'inizio degli anni 2010. Il suo album di debutto, 'L'erba cattiva' (2012), ha riscosso un grande successo, grazie a brani come 'Parole di ghiaccio'. Con uno stile diretto e narrativo, Emis Killa ha saputo raccontare storie di vita quotidiana e di periferia, conquistando un vasto pubblico e contribuendo alla popolarizzazione del rap in Italia.", bgImage: "emis_killa.png" }, 
            { name: "Salmo", description: "Maurizio Pisciottu, in arte Salmo, ha rivoluzionato la scena rap italiana introducendo elementi di musica elettronica e metal. Il suo album 'The Island Chainsaw Massacre' (2011) ha segnato un punto di svolta, distinguendosi per l'energia e l'innovazione sonora. Salmo ha ampliato i confini del rap italiano, sperimentando con diversi generi e influenzando numerosi artisti successivi.", bgImage: "salmo.png"}, 
            { name: "Gemitaiz", description: "Davide De Luca, noto come Gemitaiz, si è affermato come uno dei principali esponenti della scena rap romana. Con una serie di mixtape di successo e l'album 'L'unico compromesso' (2013), ha dimostrato grande versatilità e abilità lirica. Le sue collaborazioni con altri artisti e la capacità di affrontare temi personali e sociali lo hanno reso una figura centrale nel panorama hip hop italiano.", bgImage: "gemitaiz.png" }, 
            { name: "Nitro", description: "Nicola Albera, alias Nitro, membro del collettivo Machete, ha portato una ventata di freschezza con il suo stile aggressivo e tecnico. Il suo album 'Danger' (2013) ha messo in luce le sue capacità nel freestyle e la sua abilità nel trattare temi complessi con liriche incisive. Nitro ha contribuito a mantenere viva la componente più hardcore del rap italiano, ispirando molti giovani artisti.", bgImage: "nitro.png" }, 
            { name: "Clementino", description: "Clemente Maccaro, conosciuto come Clementino, ha unito le tradizioni musicali napoletane con il rap, creando un sound unico. Con l'album 'Mea culpa' (2013), ha raggiunto una vasta popolarità, grazie a brani come 'O' Vient'. La sua capacità di mescolare dialetto napoletano e italiano standard, insieme a una presenza scenica carismatica, ha arricchito la diversità del rap italiano.", bgImage: "clementino.png" }, 
            { name: "Rocco Hunt", description: "Rocco Pagliarulo, in arte Rocco Hunt, ha portato avanti la tradizione del rap napoletano con un approccio fresco e giovanile. Vincitore della sezione Nuove Proposte del Festival di Sanremo 2014 con 'Nu juorno buono', ha saputo combinare impegno sociale e melodie accattivanti, rendendo il rap accessibile a un pubblico più ampio.", bgImage: "rocco_hunt.png" }, 
            { name: "Frah Quintale", description: "Francesco Servidei, noto come Frah Quintale, ha introdotto un mix di rap, pop e soul nella scena musicale italiana. Con l'album 'Regardez Moi' (2017), ha offerto un sound innovativo e testi introspettivi, distinguendosi per la sua versatilità e capacità di sperimentare con diversi generi.", bgImage: "frah_quintale.png" }, 
            { name: "Ghali", description: "Ghali Amdouni, semplicemente noto come Ghali, ha portato una ventata di novità con il suo stile melodico e influenze trap. Con brani come 'Ninna Nanna' e l'album 'Album' (2017), ha affrontato temi legati all'identità culturale e all'integrazione, diventando un simbolo di una nuova generazione multiculturale in Italia.", bgImage: "ghali.png" }, 
            { name: "Nayt", description: "William Mezzanotte, alias Nayt, si è distinto per la sua abilità tecnica e profondità lirica. Con la trilogia 'Raptus', ha esplorato temi personali e sociali, mostrando una maturità artistica notevole e consolidando la sua posizione nella scena rap italiana.", bgImage: "nayt.png" }, 
            { name: "Shade", description: "Vito Ventura, conosciuto come Shade, ha combinato rap e comicità, creando brani orecchiabili e ironici. Con successi come 'Bene ma non benissimo', ha saputo conquistare le classifiche, portando leggerezza e divertimento nel panorama rap italiano.", bgImage: "shade.png" }, 
            { name: "Ernia", description: "Matteo Professione, in arte Ernia, ha riportato l'attenzione sulle liriche profonde e riflessive. Con l'album '68' (2018), ha affrontato temi esistenziali e sociali, distinguendosi per la sua autenticità e capacità narrativa.", bgImage: "ernia.png" }, 
            { name: "Lazza", description: "Jacopo Lazzarini, noto come Lazza, si è affermato come uno dei rapper più tecnici della scena italiana. Con l'album 'Re Mida' (2019), ha mostrato versatilità sia come", bgImage: "lazza.png" }  
        ],  
        "moderno": [  
            { name: "Tha Supreme", description: "Davide Mattei, noto come Tha Supreme, è un giovane prodigio romano classe 2001. Si è distinto per la sua capacità di fondere rap e trap con produzioni innovative, caratterizzate da un uso distintivo dell'autotune e da beat sperimentali. Il suo album di debutto, '23 6451' (2019), ha riscosso un enorme successo, grazie a brani come 'blun7 a swishland' e 'm8nstar'. Tha Supreme ha contribuito a ridefinire il sound del rap italiano, influenzando numerosi artisti emergenti.", bgImage: "tha_supreme.png" },  
            { name: "Leon Faun", description: "Leonardo Becchetti, in arte Leon Faun, è un rapper romano classe 2001. Si è fatto notare per la sua capacità di unire rap e storytelling, creando un immaginario fantasy unico nel panorama musicale italiano. Brani come 'Oh Cacchio' e 'La follia non ha età' evidenziano la sua abilità nel creare narrazioni coinvolgenti, arricchite da videoclip curati e originali. Leon Faun ha portato una ventata di freschezza nella scena rap, distinguendosi per la sua originalità e creatività.", bgImage: "leon_faun.png" },  
            { name: "Artie 5ive", description: "Artie 5ive è un rapper emergente della scena italiana, noto per il suo stile distintivo e le collaborazioni con altri artisti di rilievo. Proveniente dal quartiere Bicocca di Milano, ha conquistato un pubblico di fan a suon di rime e genuinità. Ha partecipato a eventi di rilievo come il Follonica Summer Nights e ha collaborato con artisti come Kid Yugi e Nerissima Serpe. Artie 5ive rappresenta una delle voci più fresche e promettenti della nuova generazione del rap italiano.", bgImage: "artie_5ive.png" },  
            { name: "Nerissima Serpe", description: "Matteo Di Falco, conosciuto come Nerissima Serpe, è un rapper classe 2000 originario della provincia di Pavia. Cresciuto ascoltando artisti come Marracash e Club Dogo, ha iniziato la sua carriera pubblicando brani su SoundCloud. Ha collaborato con artisti come VillaBanks nel brano 'Guadalajara' e ha pubblicato il suo primo singolo ufficiale 'Barakkino' nel 2020. Nerissima Serpe si distingue per le sue liriche taglienti e la capacità di raccontare storie di vita quotidiana con autenticità.", bgImage: "nerissima_serpe.png" },  
            { name: "Kid Yugi", description: "Francesco Stasi, in arte Kid Yugi, è un rapper pugliese classe 2001. Ha ottenuto un grande successo con il suo album 'I nomi del Diavolo', certificato Doppio Disco di Platino. Durante il suo tour al Fabrique di Milano, ha ospitato sul palco artisti come Artie 5ive, Ernia e Nerissima Serpe. Kid Yugi è riconosciuto per la sua abilità nel mescolare sonorità trap con testi profondi e riflessivi, affrontando tematiche personali e sociali.", bgImage: "kid_yugi.png" },  
            { name: "Franco126", description: "Franco Bertollini, noto come Franco126, è un rapper e cantautore romano classe 1992. Ha iniziato la sua carriera come parte del duo Carl Brave x Franco126, pubblicando l'album 'Polaroid' nel 2017, che ha riscosso grande successo per la sua capacità di raccontare la vita quotidiana romana con uno stile fresco e innovativo. Successivamente, Franco126 ha intrapreso una carriera solista, pubblicando album come 'Stanza Singola' (2019) e 'Multisala' (2021), nei quali ha sperimentato con sonorità più pop e cantautorali, mantenendo però l'attenzione per le liriche dettagliate e narrative. Ha contribuito a portare una nuova sensibilità nel rap italiano, mescolando generi e influenze diverse.", bgImage: "franco126.png" },  
            { name: "Machete", description: "Il Machete Crew è un collettivo fondato nel 2010 da Salmo, Slait e Hell Raton. Nel corso degli anni, il collettivo ha ampliato i suoi membri, includendo artisti come Nitro, Dani Faiv e Jack The Smoker. La Machete ha avuto un impatto significativo sulla scena rap italiana, sia attraverso le produzioni musicali che con il 'Machete Mixtape', una serie di compilation che hanno messo in luce numerosi talenti emergenti. Il 'Machete Mixtape 4' (2019) ha raggiunto un successo straordinario, consolidando la posizione del collettivo come uno dei pilastri del rap italiano contemporaneo.", bgImage: "machete.png" }  
        ]  
    };

    let currentEpoch = "alborei";
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
