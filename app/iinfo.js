// iInfo (c) 2022 Baltasar MIT License <baltasarq@gmail.com>
/*
    generado por FI.JS@txtMap, v0.1/ v0.6 20140612
    Wed Jun 22 10:52:59 2022
*/

// -------------------------------------------------- ctrl.creaExtLink
const URL_INFO = {
    "ESEI": {
        "URL": "http://esei.uvigo.es/",
        "DESC": "ESEI (Escuela Superior de Ingeniería Informática)",
    },
    "PERSONAL": {
        "URL": "http://baltasarq.info/",
        "DESC": "Web personal"
    },
    "PROFESIONAL": {
        "URL": "http://jbgarcia.webs.uvigo.es/",
        "DESC": "Web profesional"
    },
    "PROFESIONAL_UVIGO": {
        "URL": "https://www.uvigo.gal/es/universidad/administracion-personal/pdi/jose-baltasar-garcia-perez-schofield",
        "DESC": "Perfil profesional en la UVigo"
    },
    "AMAZON": {
        "URL": "https://www.amazon.es/Baltasar-Garc%C3%ADa/e/B0788QDVLV",
        "DESC": "Publicaciones en Amazon",
    },
    "PRYS": {
        "URL": "http://github.com/baltasarq/",
        "DESC": "Proyectos",
    },
    "TECH_BOOKS": {
        "URL": "https://jbgarcia.webs.uvigo.es/libros/",
        "DESC": "Libros técnicos"
    },
    "THESIS": {
        "URL": "https://www.researchgate.net/publication/285512303_Persistence_schema_evolution_and_performance_in_the_container-based_model",
        "DESC": "Tesis Doctoral"
    },
};

ctrl.creaExtLink = function(urlInfo) {
    url = urlInfo.URL;
    desc = urlInfo.DESC;
    return `<a href='${url}' target='_blank'>\
            ${desc}&nbsp;<img width='16px' src='res/extlink.svg'/></a>`;
};


// ---------------------------------------------------- locBeforeTable
const locBeforeTable = ctrl.places.creaLoc(
    "Frente a la mesa",
    [ "frente a la mesa" ],
    "A tu alrededor puedes ver los habituales muebles \
     de un despacho de la ${ESEI, ex esei}, \
     destacando una ${mesa, ex mesa} \
     con su correspondiente ${silla, ex silla}, \
     un ordenador con ${teclado, ex teclado}, \
     ${monitor, ex monitor} e ${impresora, ex impresora}, \
     dos ${estanterías, n} pegadas contra la pared contraria a la mesa, \
     y dos ${pizarras, ex pizarra}.\
     <br/>La ${puerta de entrada, ex puerta} se sitúa frente al \
     ${ventanal, ex ventana} \
     que permite ver el patio central del ${edificio, ex esei}, \
     del que en realidad solo puede abrirse una ${ventana, ex ventana}. \
     Muy cerca de ella, el puesto de la otra \
     ${ocupante de la oficina, ex puesto}."
);

locBeforeTable.ini = function() {
    this.pic = "res/post.jpg";
};

const objDoor = ctrl.creaObj(
    "puerta",
    [],
    "Pues sí, la puerta del despacho.",
    locBeforeTable,
    Ent.Scenery
);

objDoor.preOpen = function() {
    return "Aún no está lista la representación interactiva \
            del resto del mundo. Ni siquiera del resto del \
            edificio. Quien sabe, quizás próximamente.";
};

const objPuesto = ctrl.creaObj(
    "puesto",
    [ "otro" ],
    "El puesto de la otra persona que ocupa este despacho. \
     Por desgracia, no ha querido ceder sus derechos de imagen \
     y representación, así que no aparece aquí.",
    locBeforeTable,
    Ent.Scenery
);

const objESEI = ctrl.creaObj(
    "esei",
    [ "escuela", "facultad", "edificio" ],
    "La " + ctrl.creaExtLink( URL_INFO.ESEI )
        + " es donde está situado el despacho 307.",
    locBeforeTable,
    Ent.Scenery
);

const objTable = ctrl.creaObj(
    "mesa",
    [],
    "La mesa de trabajo, mantenida tan despejada como es posible. \
     Sobre ella hay ${unos libros, ex libros}, \
     también ${unos folios, ex folios}, \
     y en un extremo, ${una placa, ex placa}.",
    locBeforeTable,
    Ent.Scenery
);

const objSheets = ctrl.creaObj(
    "folios",
    [ "folio", "papel", "papeles" ],
    "Unos papeles sobre el trabajo diario: "
     + ctrl.creaExtLink( URL_INFO.PROFESIONAL ),
    locBeforeTable,
    Ent.Scenery
)

const objStories = ctrl.creaObj(
    "libros",
    [ "relatos" ],
    "Varios libros de relatos en un pequeño montón: "
    + ctrl.creaExtLink( URL_INFO.AMAZON ),
    locBeforeTable,
    Ent.Scenery
);

const objComputer = ctrl.creaObj(
    "ordenador",
    [ "pantalla", "monitor" ],
    "Hay varios proyectos en pantalla: "
     + ctrl.creaExtLink( URL_INFO.PRYS ),
    locBeforeTable,
    Ent.Scenery
);

objComputer.preStart = function() {
    return "Arrancado, y funcionando.";
};

const objBadge = ctrl.creaObj(
    "placa",
    [ "placa" ],
    "En ella se lee: \"Baltasar García Perez-Schofield\" "
    + ctrl.creaExtLink( URL_INFO.PERSONAL ),
    locBeforeTable,
    Ent.Scenery
);

const objChair = ctrl.creaObj(
    "silla",
    [ "silla" ],
    "La típica silla de oficina con ruedas en las patas. \
     Típica pero también muy cómoda. A estas alturas, ciertas partes \
     anatómicas están ya marcadas para siempre...",
    locBeforeTable,
    Ent.Scenery
);

objChair.prePush = function() {
    return "La eṕoca de hacer carreras de sillas por los pasillos ya pasó.";
};

const objKeyboard = ctrl.creaObj(
    "teclado",
    [ "teclado" ],
    "En realidad, ya estás interactuando con un ordenador ahora mismo. \
     Si utilizaras este ordenador dentro de esta historia, \
     sería una meta interacción... o una meta-meta interacción... \
     ¿no? ...puff... Créeme, eso es peor que ir más allá de una \
     doble indirección de punteros.",
    locBeforeTable,
    Ent.Scenery
);

const objPrinter = ctrl.creaObj(
    "impresora",
    [],
    "Sirve para imprimir exámenes, básicamente.",
    locBeforeTable,
    Ent.Scenery
);

objPrinter.ini = function() {
    this.isOn = false;
    ctrl.addDaemon( "PRINTER::BLINK_IF_ON", function() {
        if ( objPrinter.isOn ) {
            ctrl.print( "El led de la impresora parpadea." );
        }
    });
};

objPrinter.preExamine = function() {
    let toret = this.desc + " Está ";

    if ( this.isOn ) {
        toret += "encendida. Podrías ${apagarla, apaga impresora}.";
    } else {
        toret += "apagada.";
    }

    return toret;
};

objPrinter.prePush = function() {
    return "La impresora funciona cuando es necesario, \
            mejor no tentar a la suerte.";
};

objPrinter.preStart = function() {
    this.isOn = true;
    return "Has encendido la impresora.";
};

objPrinter.preShutdown = function() {
    this.isOn = false;
    return "Has apagado la impresora.";
};

const objBlackboard = ctrl.creaObj(
    "pizarra",
    [ "encerado", "pizarras", "encerados" ],
    "Aquí hay esquemas de explicaciones para alumnos en tutoría.",
    locBeforeTable,
    Ent.Scenery
);

const objWindow = ctrl.creaObj(
    "ventana",
    [ "ventanal" ],
    "La ventana se abre en guillotina al patio de la "
        + ctrl.creaExtLink( URL_INFO.ESEI ),
    locBeforeTable,
    Ent.Scenery
);


// -------------------------------------------------- locBeforeLibrary
const locBeforeLibrary = ctrl.places.creaLoc(
    "Frente a la estanteria",
    [ "frente a la estanteria" ],
    "En la estantería puedes ver una ${Tesis Doctoral, ex tesis}, \
    la ${documentación de una plaza, ex documentacion}, \
    y varios ${libros técnicos, ex libros}. \
    A un lado hay un ${perchero, ex perchero}. \
    Tras de tí está tu ${puesto, s}."
);

locBeforeLibrary.ini = function() {
    this.pic = "res/library.jpg";
    this.setExitBi( "sur", locBeforeTable );
};

const objHook = ctrl.creaObj(
    "perchero",
    [ "percha" ],
    "Del perchero cuelga un ${traje académico, ex traje} \
     en su funda.",
    locBeforeLibrary,
    Ent.Scenery
);

const objSuit = ctrl.creaObj(
    "traje académico",
    [ "traje" ],
    "Es una túnica dorada, con casco de flequillo a juego. \
     Resumiendo, quien se lo pone, parece una mesa-camilla.",
    locBeforeLibrary,
    Ent.Scenery
);

objSuit.preWear = function() {
    return "No, ni hablar. Lo dicho, pareces una mesa-camilla.";
};

const objTechBooks = ctrl.creaObj(
    "libros técnicos",
    [ "libros" ],
    "Libros escritos sobre diferentes lenguajes de programación \
     aplicados a varios aspectos del desarrollo informático. "
     + ctrl.creaExtLink( URL_INFO.TECH_BOOKS ),
    locBeforeLibrary,
    Ent.Scenery
);

const objDocs = ctrl.creaObj(
    "documentación",
    [ "documentacion", "docs", "documentos", "tomos" ],
    "Documentación de la plaza: "
    + ctrl.creaExtLink( URL_INFO.PROFESIONAL_UVIGO ),
    locBeforeLibrary,
    Ent.Scenery
);

const objThesis = ctrl.creaObj(
    "tesis doctoral",
    [ "tesis", "doctorado", "memoria" ],
    "Trabajo de investigación: " + ctrl.creaExtLink( URL_INFO.THESIS ),
    locBeforeLibrary,
    Ent.Scenery
);


// ============================================================ Player
const player = ctrl.personas.creaPersona(
    "Baltasar",
    [],
    "Estás interactuando como si fueras Baltasar.",
    locBeforeTable,
);

const objClothes = ctrl.creaObj(
    "prendas",
    [ "ropa", "ropaje", "ropas", "ropajes", "prendas" ],
    "Ropa informal: pantalones, camiseta...",
    player,
    Ent.Portable
);

objClothes.preDisrobe = function() {
    return "Verás, yo es que soy muy tímido... \
            y este despacho no es individual.";
};

player.updateCmdObjs = function() {
    const loc = ctrl.places.getCurrentLoc();
    const dvCmdObjs = document.getElementById( "dvCmdObjs" );
    const pObjs = document.createElement( "p" );
    const objTemplate = "<a href='#' onclick=\"\
                         ctrl.addTerm('$id')\">$id</a> "

    dvCmdObjs.style = "display: none; text-align: center";
    dvCmdObjs.innerText = "";

    this.objs.forEach( obj => {
        pObjs.innerHTML += objTemplate.replaceAll( "$id", obj.id );;
    });

    loc.objs.forEach( obj => {
        pObjs.innerHTML += objTemplate.replaceAll( "$id", obj.id );;
    });

    dvCmdObjs.appendChild( pObjs );
    ctrl.clearAnswers();
}

player.postAction = function() {
    this.updateCmdObjs();
};

player.ini = function() {
    objClothes.setWorn();
    this.updateCmdObjs();
};

ctrl.ini = function() {
    ctrl.setTitle( "iInfo Baltasar" );
    ctrl.setAuthor( "Baltasarq" );
    ctrl.setVersion( "0.1 20220621" );
    ctrl.setIntro( "Información interactiva baltasarq<br/>\
                    Frente al despacho 307" );
    ctrl.setPic( "res/office307.jpg" );
    ctrl.lugares.setStart( locBeforeTable );
    ctrl.personas.changePlayer( player );
};
