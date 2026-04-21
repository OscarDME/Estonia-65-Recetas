// lib/copy.js — Kogu maandumislehe (landing page) nähtav tekstisisu.
// Kõik tekstimuudatused tehakse siin.

export const copy = {
  metadata: {
    title: "365 tervislikku retsepti – suhkru- ja gluteenivabad",
    description:
      "1000 suhkru- ja gluteenivaba retsepti 365 päevaks. Söö ilma süümepiinade, keerukuse ja piiranguteta. Eripakkumine: 9,90 € + 8 kingitust.",
    lang: "et",
  },

  hero: {
    banner: "PAKKUMINE KEHTIB AINULT TÄNA!",
    timerLabels: { days: "Päeva", hours: "Tundi", minutes: "Min", seconds: "Sek" },
    headline:
      "365 päeva maitsvaid suhkru- ja gluteenivabu retsepte, et saaksid süüa süümepiinadeta!",
    bullets: [
      "Muuda oma toidukorrad tervislikumaks ja nauditavamaks ilma maitsest loobumata",
      "ILMA KEERUKUSETA",
      "ILMA PIIRANGUTETA",
      "ILMA SÜÜMEPIINADETA",
    ],
    cta: "TAHAN SÜÜA ILMA SÜÜMEPIINADETA",
    kicker: "365 päeva · 1000 retsepti",
    imageAlt: "Suhkru- ja gluteenivabade retseptide raamat 365 päevaks",
    trustChips: [
      { icon: "⭐", text: "Üle 5000 pere" },
      { icon: "🎁", text: "8 boonuskingitust" },
      { icon: "🛡️", text: "Täna 75% soodsam" },
    ],
  },

  story: {
    headlinePre: "Suhkur on vaikne vaenlane,",
    headlineHighlight: "mis hävitab sinu tervist",
    intro:
      "Seda leidub toitudes, mida sa iga päev sööd, peidetuna toodetesse, mis tunduvad täiesti kahjutud.",
    problemsLead:
      "Siin on peamised suhkru põhjustatud probleemid ja kuidas need sind praegu mõjutada võivad:",
    problems: [
      "Pidev väsimus ja seletamatu kurnatus",
      "Kaalutõus ja rasva kogunemine kõhupiirkonda",
      "Hormonaalne ja ainevahetuse tasakaalustamatus",
      "Krooniliste haiguste risk (diabeet, kõrgvererõhktõbi, rasvumine jne)",
      "Järsud meeleolumuutused ja ärevus",
      "Kiirenenud vananemine",
      "Toidusõltuvus ja pidev isu",
    ],
    solutionHeadline:
      "Lõpuks ometi lihtne ja tõhus lahendus, mis muudab sinu toitumist nii, et sa ei pea loobuma sellest, mida armastad.",
    solutionBadge: "Lahendus",
  },

  benefits: {
    stepsHeadline: "Sinu muutumiseks piisab vaid 3 sammust",
    steps: [
      {
        number: "1",
        title: "Järgi menüüd süümepiinadeta",
        desc: "Saad ligipääsu täielikule retseptimenüüle aasta igaks päevaks – kõik suhkru- ja gluteenivabad. Sa ei pea enam midagi planeerima!",
      },
      {
        number: "2",
        title: "Valmista lihtsaid ja maitsvaid toite",
        desc: "Järgi retseptides toodud lihtsaid juhiseid ja valmista imelisi roogasid, mis muudavad sinu toitumist.",
      },
      {
        number: "3",
        title: "Tunneta muutust",
        desc: "Retsepte järgides tunned erinevust oma kehas ja tervises: rohkem energiat, parem kaalukontroll ja väiksem haiguste risk.",
      },
    ],
    ctaMid: "TAHAN SÜÜA ILMA SÜÜMEPIINADETA",
    headline: "VAATA EELISEID, MIS MUUDAVAD SINU ELU",
    items: [
      {
        icon: "HeartPulse",
        title: "Veresuhkru kontroll",
        desc: "Paranda oma veresuhkru taset ja vähenda diabeediriski täisväärtuslike ja maitsvate retseptidega.",
      },
      {
        icon: "Utensils",
        title: "Toiduvabadus",
        desc: "Naudi vastupandamatuid roogi süümepiinadeta, luues toiduga positiivse suhte.",
      },
      {
        icon: "CalendarDays",
        title: "Igapäevane vaheldus",
        desc: "1000 retseptiga on sul aasta igaks päevaks uus valik.",
      },
      {
        icon: "Timer",
        title: "Praktilisus köögis",
        desc: "Valmista maitsvaid toite 30 minutiga või kiiremini, säästes aega ja vähendades igapäevast stressi.",
      },
      {
        icon: "GraduationCap",
        title: "Toitumisalane teadlikkus",
        desc: "Õpi oma toitu teadlikult valima ja kujunda tervislikud harjumused kogu eluks.",
      },
      {
        icon: "Scale",
        title: "Kaalukontroll",
        desc: "Säilita tervislik kehakaal retseptidega, mis täidavad kõhtu ja toidavad sind, tegemata järeleandmisi maitse osas.",
      },
    ],
  },

  features: {
    headline: "Sul on valmismenüüd 365 päevaks – 1 aasta igaks päevaks",
    subheadline: "Juhendame sind tervisliku toitumise igal sammul",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Hommikusöögid ja vahepalad",
        desc: "Hommikusöögiretseptid, milliseid sa pole KUNAGI varem näinud. Kiired valmistamismeetodid praktiliste ja kättesaadavate koostisosadega!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Lõuna- ja õhtusöök",
        desc: "Too oma toidulauale kõige mitmekesisemad ja maitsvamad toidud nii argipäevaks kui ka erilisteks puhkudeks! Valmistatud soodsatest koostisosadest, mis on sul juba kodus olemas.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Küpsetised ja magustoidud",
        desc: "LUGEMATUL hulgal gluteeni- ja suhkruvabu valikuid kookide ja magustoitude jaoks, et saaksid maiustada süümepiinadeta.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Kastmed ja määrded",
        desc: "Kastmed ja kreemid, mis annavad sinu toitudele imelise maitse – kiirelt ja lihtsalt!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Tervislikud supid ja püreesupid",
        desc: "Supid, püreesupid ja puljongid – kõik valmistatud toitvatest koostisosadest ja hoolikalt valitud maitseainetest.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Jahu alternatiivid",
        desc: "Kõik on gluteenivaba ja madala glükeemilise indeksiga, et saaksid muretult küpsetada kooke, leiba ja muid küpsetisi.",
      },
    ],
    ctaMid: "TAHAN SÜÜA ILMA SÜÜMEPIINADETA",
    badgesHeadline: "Kõige maitsvamad road erinevates variantides",
    badges: ["SUHKRUVABA", "GLUTEENIVABA", "MADALA KALORSUSEGA", "LAKTOOSIVABA"],
    audienceHeadline: "„Toit ilma süümepiinadeta“ on täpselt sulle, kui:",
    audience: [
      {
        title: "Sul on toitumispiirangud:",
        desc: "Inimesed, kes peavad tervislikel põhjustel, nagu diabeet või talumatus, vältima suhkrut ja gluteeni.",
      },
      {
        title: "Soovid tervet perekonda:",
        desc: "Lapsevanemad, kes soovivad pakkuda oma lastele täisväärtuslikku ja maitsvat toitu, edendades tervislikke harjumusi juba varajases eas.",
      },
      {
        title: "Järgid tervislikku eluviisi:",
        desc: "Inimesed, kes jälgivad toitumiskavu – madala süsivesikute sisaldusega (LCHF), paleo- või vegandieeti – ning otsivad nendega sobivaid retsepte.",
      },
      {
        title: "Soovid oma kaalu kontrolli all hoida:",
        desc: "Inimesed, kes soovivad kaalust alla võtta või oma kaalu säilitada, ning vajavad retsepte, mis täidavad kõhtu, kuid aitavad kaloreid kontrolli all hoida.",
      },
    ],
  },

  testimonials: {
    headline: "Vaata nende inimeste tagasisidet, kes meie retsepte juba kasutavad",
    cta: "TAHAN SÜÜA ILMA SÜÜMEPIINADETA",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Tahtsin lihtsalt öelda, et see retseptiraamat on tõeline õnnistus. Kolme väikese lapsega on mul alati ajast puudu ja see, et nii palju retsepte on ühes kohas koos, on kõike palju lihtsustanud. Nüüd sööme kodus maitsvalt ja tervislikult 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "Milline suurepärane retseptiraamat! Pärast gluteenitalumatuse diagnoosi saamist arvasin, et toidu nautimine on edaspidi võimatu, kuid teie retseptidega saan süüa muretult. Aitäh, et tegite asjad nii lihtsaks! 🙏",
        time: "19:57",
      },
      {
        text: "Tahan teid tänada, sest need retseptid muutsid mu elu. Olen diabeetik ja mul on alati olnud raske leida maitsvaid ja tervislikke valikuid. Nüüd naudin iga toidukorda hirmuta. Tõesti, suur aitäh! 🙏",
        time: "19:49",
      },
      {
        text: "Tuhat tänu retseptide eest! Jumaldan magusat ja mul on suhkruga alati probleeme olnud, aga teie retseptid andsid mulle maitsvaid ja lihtsalt valmistatavaid alternatiive.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    prevLabel: "Eelmine",
    nextLabel: "Järgmine",
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Tervislik retsept 1" },
      { src: "/carousel/categoria-8.webp", alt: "Tervislik retsept 2" },
      { src: "/carousel/categoria-9.webp", alt: "Tervislik retsept 3" },
      { src: "/carousel/categoria-10.webp", alt: "Tervislik retsept 4" },
      { src: "/carousel/categoria-11.webp", alt: "Tervislik retsept 5" },
      { src: "/carousel/categoria-1.webp", alt: "Tervislik retsept 6" },
    ],
  },

  bonuses: {
    badge: "Spetsiaalselt sulle, et oled nii kaugele jõudnud",
    headline: "KUI OSTAD 1000 RETSEPTI TÄNA, SAAD 8 EKSKLUSIIVSET KINGITUST 🎁",
    valueLabel: "Väärtus:",
    freeLabel: "TASUTA",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "KINGITUS 1", title: "Suhkruvabade magustoitude retseptid", value: "11,00 €" },
      { image: "/bonuses/bono-2.webp", tag: "KINGITUS 2", title: "Kastmete ja määrete retseptid", value: "7,80 €" },
      { image: "/bonuses/bono-3.webp", tag: "KINGITUS 3", title: "Suppide ja püreesuppide retseptid", value: "6,20 €" },
      { image: "/bonuses/bono-4.webp", tag: "KINGITUS 4", title: "Retseptid gluteenivabade jahudega", value: "4,46 €" },
      { image: "/bonuses/bono-5.webp", tag: "KINGITUS 5", title: "Gluteenivaba leiva retseptid", value: "9,41 €" },
      { image: "/bonuses/bono-6.webp", tag: "KINGITUS 6", title: "Tervislike tortiljade retseptid", value: "9,41 €" },
      { image: "/bonuses/bono-7.webp", tag: "KINGITUS 7", title: "Tervislikud pitsad", value: "9,41 €" },
      { image: "/bonuses/bono-8.webp", tag: "KINGITUS 8", title: "500 maitsvat retsepti diabeetikutele", value: "9,41 €" },
    ],
    totalLabel: "Kõik, mida saad, on väärt üle 40 €",
    footer: "Kuid täna sa seda summat ei maksa... kuigi see on iga senti väärt.",
  },

  finalCta: {
    preHeadline: "Sinu koguinvesteering 1000 retsepti ja kõigi boonuste eest...",
    urgencyTop: "Pakkumine on piiratud ajaks!",
    subUrgency:
      "Ära jäta kasutamata võimalust saada retseptiraamat 75% soodsamalt. Muuda oma tervist juba täna meie täieliku 365 päeva menüüga.",
    headline: "365 PÄEVA SUHKRU- JA GLUTEENIVABU RETSEPTE + LISABOONUSED",
    bundleList: [
      "1000 suhkru- ja gluteenivaba retsepti",
      "Boonus 1: Suhkruvabade magustoitude retseptid",
      "Boonus 2: Kastmete ja määrete retseptid",
      "Boonus 3: Suppide ja püreesuppide retseptid",
      "Boonus 4: Retseptid gluteenivabade jahudega",
      "Boonus 5: Gluteenivaba leiva retseptid",
      "Boonus 6: Tervislike tortiljade retseptid",
      "Boonus 7: Tervislikud pitsad",
      "Boonus 8: 500 maitsvat retsepti diabeetikutele",
    ],
    guaranteeText:
      "Tähelepanu: Kui oled inimene, kes soovib tõesti enda või oma pere tervise eest hoolt kanda, saavad meie suhkru- ja gluteenivabad retseptid sind kohe kindlasti aidata. Ära lase seda võimalust käest!",
    regularPriceLabel: "TAVAHIND:",
    regularPrice: "40,00 €",
    urgencyText: "PAKKUMINE KEHTIB AINULT TÄNA!",
    offerPrice: "9,90 €",
    bottomUrgency: "Viimased vabad kohad",
    discountBadge: "75% SOODSAM",
    button: "JAH, TAHAN RETSEPTE JA BOONUSEID KOHE",
    trustRow: "🔒 100% turvaline makse • ⚡ Kohene ligipääs • ✅ Eluaegne garantii",
    imageAlt: "365 tervislikku retsepti + 8 boonust",
  },

  faq: {
    authorHeadline: "Kes on Liis Kallas?",
    authorBio:
      "Liis Kallas on tervisliku toitumise ekspert, kes muudab inimeste harjumusi oma uuendusliku menüüga „Toit ilma süümepiinadeta“. Laialdase toitumisnõustaja kogemusega Liis jagab 1000 lihtsat ja kättesaadavat retsepti, mis on loodud sind toetama sinu teekonna igal sammul tervislikuma elu suunas. Lõpetanud toitumisteaduse ja dieteetika eriala, ühendab Liis oma professionaalsed teadmised praktilise lähenemisega, pakkudes maitsvaid ja tasakaalustatud retsepte, mis vastavad erinevatele vajadustele. Lisaks jagab ta väärtuslikke nõuandeid, mis aitavad sul toitu nautida ilma piirangute või kahetsuseta.",
    authorRole: "Toitumisnõustaja",
    authorImageAlt: "Liis Kallas — Toitumisnõustaja",
    worksHeadline: "MIS TÕELISELT TÖÖTAB?",
    doesntWork: [
      "VÄHE SÖÖMINE JA NÄLGIMINE",
      "KEERULISTE DIEETIDE JÄRGIMINE",
      "LOOBUMINE SELLEST, MIDA ARMASTAD",
    ],
    worksText:
      "See, mis tõeliselt töötab, on planeeritud toitumine lihtsate ja praktiliste suhkru- ja gluteenivabade retseptidega. Meie 365 päeva menüüga ei pea sa muretsema masendavate ega piiravate dieetide pärast.",
    headline: "Korduma kippuvad küsimused",
    subheadline: "Vastused enimküsitud küsimustele",
    items: [
      { q: "KUIDAS MA RETSEPTID KÄTTE SAAN?", a: "Saad kogu sisu oma e-posti aadressile." },
      { q: "KAS MA SAAN LIGIPÄÄSU KA TELEFONIST?", a: "Jah, nii telefonist, tahvelarvutist kui ka arvutist." },
      { q: "KAS KÜSIMUSTE KORRAL SAAB ABI?", a: "Jah, kogu protsessi vältel saad mulle oma küsimusi otse esitada." },
      { q: "KUI KAUA MUL LIGIPÄÄS ON?", a: "Ligipääs kogu sisule on eluaegne." },
    ],
  },

  closing: {
    kicker: "VIIMANE VÕIMALUS! ⚡ See pakkumine aegub varsti",
    headline:
      "Muuda oma tervist juba täna meie täieliku 365 päeva menüüga.",
    subheadline:
      "1000 suhkru- ja gluteenivaba retsepti + 8 boonuskingitust. Kõik see vaid ühe toidukorra hinna eest.",
    regularPrice: "40,00 €",
    offerPrice: "9,90 €",
    ctaLabel: "JAH, TAHAN RETSEPTE JA BOONUSEID KOHE",
    trustRow:
      "🔒 100% turvaline makse • ⚡ Kohene ja eluaegne ligipääs • ✅ Viimased vabad kohad",
  },

  footer: {
    brand: "Crearis",
    copyright: "2025 © Kõik õigused kaitstud. Tutvu meie privaatsuspoliitikaga.",
  },
};