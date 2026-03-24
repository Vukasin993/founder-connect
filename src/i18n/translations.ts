export const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      faq: "FAQ",
      pricing: "Pricing",
      waitlist: "Waitlist",
    },
    hero: {
      label: "PROXIMITY NETWORKING FOR FOUNDERS",
      title1: "Meet founders",
      title2: "around you.",
      description: "Real-time proximity, AI-assisted matching, and messaging in one app. Turn conferences, coworking, and city life into high-signal founder connections.",
      statusBuilding: "STATUS: BUILDING",
      freeTrial: "7-DAY FREE TRIAL",
      radarLabel1: "SCAN_ACTIVE",
      radarLabel2: "NEARBY",
      radarFooter: "RADIUS: 500M · OFFSET: ENABLED",
    },
    features: {
      label: "FEATURE_SET",
      title: "Everything in",
      titleHighlight: "one app.",
      items: [
        {
          label: "LIVE_MAP",
          title: "Live Map & Nearby Discovery",
          desc: "See who's in your area in a map-first experience. Designed around being out in the world.",
        },
        {
          label: "PROXIMITY",
          title: "Proximity-Based Matching",
          desc: "Matching tied to physical closeness. Meet people when proximity actually means something.",
        },
        {
          label: "AI_MATCH",
          title: "AI-Assisted Matching",
          desc: "LLM-powered profile analysis with human-readable 'why you match' reasons—not just a score.",
        },
        {
          label: "MATCHES",
          title: "Matches Workflow",
          desc: "See suggestions, accept or decline. Both sides opt in before heavy messaging.",
        },
        {
          label: "CHAT",
          title: "Real-Time Messaging",
          desc: "WebSocket-powered chat with conversation list, history, and instant coordination.",
        },
        {
          label: "PROFILES",
          title: "Founder Profiles",
          desc: "Company, industry, stage, interests, seeking, offering, and social links. Skip 'what do you do?'",
        },
        {
          label: "SHARE",
          title: "QR & NFC Sharing",
          desc: "QR code on profile for quick 'add me in context.' NFC tap-to-share where supported.",
        },
        {
          label: "FRIENDS",
          title: "Social Graph",
          desc: "Friend requests and a friends layer to separate known contacts from new proximity matches.",
        },
        {
          label: "SEARCH",
          title: "Search & Discovery",
          desc: "Find founders beyond the map tab when you know what you're looking for.",
        },
        {
          label: "SUBSCRIBE",
          title: "Subscription",
          desc: "Stripe-backed subscription with a 7-day free trial on signup. $9.99/month.",
        },
        {
          label: "NOTIFY",
          title: "Push Notifications",
          desc: "Match and message notifications when configured via Expo push pipeline.",
        },
        {
          label: "PRIVACY",
          title: "Location Privacy",
          desc: "Intentional location offsets before persisting. Map views use generalized positions.",
        },
      ],
    },
    howItWorks: {
      label: "PROTOCOL",
      title: "How it",
      titleHighlight: "works.",
      steps: [
        {
          num: "01",
          title: "Build Your Profile",
          desc: "Company, stage, industry, what you're seeking and offering. AI generates a match-ready summary.",
        },
        {
          num: "02",
          title: "Open the Map",
          desc: "See founders nearby with generalized positions. Privacy-first—no exact GPS exposed.",
        },
        {
          num: "03",
          title: "Match & Connect",
          desc: "Get AI-powered match suggestions with reasons. Both sides opt in before messaging.",
        },
        {
          num: "04",
          title: "Chat in Real Time",
          desc: "WebSocket-powered messaging. Coordinate meetups, share intros, build relationships.",
        },
      ],
    },
    privacy: {
      label: "TRUST_PROTOCOL",
      title: "Privacy by",
      titleHighlight: "design.",
      faqLabel: "FAQ",
      faqTitle: "Questions.",
      checks: [
        "Location offsets applied before storage",
        "Map views use generalized positions only",
        "No exact GPS stored or transmitted",
        "Mutual opt-in required for messaging",
      ],
      faqs: [
        {
          q: "Do you store my exact GPS?",
          a: "No. The backend applies intentional location offsets (~100–500m) before persisting. Map views use generalized positions. Privacy is architectural, not a toggle.",
        },
        {
          q: "Is this a dating app?",
          a: "No—Founder Field is professional founder networking with business-oriented profiles, projects, and companies.",
        },
        {
          q: "Why pay?",
          a: "Subscription supports real-time infrastructure: matching, messaging, moderation-ready architecture. The 7-day trial lets you evaluate risk-free.",
        },
        {
          q: "What providers can I sign in with?",
          a: "Google, Apple, and other supported OAuth providers. Onboarding guides you into a complete profile.",
        },
      ],
    },
    pricing: {
      label: "PRICING",
      title: "Simple",
      titleHighlight: "pricing.",
      planLabel: "FOUNDER_ACCESS",
      price: "$9.99",
      period: "/month",
      trial: "7-DAY FREE TRIAL INCLUDED",
      features: [
        "Live map & nearby discovery",
        "AI-assisted matching with reasons",
        "Unlimited real-time messaging",
        "QR & NFC profile sharing",
        "Projects & company profiles",
        "Push notifications",
        "Privacy-first location",
      ],
    },
    cta: {
      label: "REQUEST_ACCESS",
      title: "Be first in",
      titleHighlight: "your city.",
      description: "Join the waitlist. We'll email rollout details—no overpromised dates.",
      button: "JOIN_WAITLIST",
      bgText: "FOUNDER",
    },
    footer: {
      tagline: "Proximity networking for founders.",
      rights: "All rights reserved.",
      links: {
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
      },
    },
    modal: {
      title: "JOIN WAITLIST",
      description: "Enter your email to get early access",
    },
  },
  sl: {
    nav: {
      features: "Funkcije",
      howItWorks: "Kako deluje",
      faq: "Pogosta vprašanja",
      pricing: "Cenik",
      waitlist: "Pridruži se",
    },
    hero: {
      label: "OMREŽENJE NA PODLAGI BLIŽINE ZA USTANOVITELJE",
      title1: "Srečaj ustanovitelje",
      title2: "v tvoji okolici.",
      description: "Povezovanje v realnem času, ujemanje s pomočjo UI in sporočanje v eni aplikaciji. Spremeni konference, coworking prostore in mestno življenje v visokokakovostne stike z ustanovitelji.",
      statusBuilding: "STATUS: V IZDELAVI",
      freeTrial: "7-DNEVNA BREZPLAČNA PREIZKUŠNJA",
      radarLabel1: "ISKANJE_AKTIVNO",
      radarLabel2: "V BLIŽINI",
      radarFooter: "RADIJ: 500M · ZAMIK: OMOGOČEN",
    },
    features: {
      label: "NABOR_FUNKCIJ",
      title: "Vse v",
      titleHighlight: "eni aplikaciji.",
      items: [
        {
          label: "ZEMLJEVID",
          title: "Zemljevid v živo & Odkrivanje v bližini",
          desc: "Poglej, kdo je v tvoji okolici z izkušnjo, osredotočeno na zemljevid. Zasnovano za uporabo zunaj.",
        },
        {
          label: "BLIŽINA",
          title: "Ujemanje na podlagi bližine",
          desc: "Ujemanje, povezano s fizično bližino. Spoznaj ljudi, ko bližina dejansko pomeni nekaj.",
        },
        {
          label: "UI_UJEMANJE",
          title: "Ujemanje s pomočjo UI",
          desc: "Analiza profilov, ki jo poganja LLM, z razlogi 'zakaj se ujemata', ki jih je mogoče prebrati—ne le ocena.",
        },
        {
          label: "UJEMANJA",
          title: "Potek ujemanj",
          desc: "Poglej predloge, sprejmi ali zavrni. Obe strani se odločita, preden pride do intenzivnega sporočanja.",
        },
        {
          label: "KLEPET",
          title: "Sporočanje v realnem času",
          desc: "Klepet, ki ga poganja WebSocket, s seznamom pogovorov, zgodovino in takojšnjim usklajevanjem.",
        },
        {
          label: "PROFILI",
          title: "Profili ustanoviteljev",
          desc: "Podjetje, industrija, faza, interesi, kaj iščeš in ponujaš ter socialne povezave. Preskoči 'kaj delaš?'",
        },
        {
          label: "DELJENJE",
          title: "Deljenje QR in NFC",
          desc: "QR koda na profilu za hitro 'dodaj me v kontekstu.' NFC dotik za deljenje, kjer je podprto.",
        },
        {
          label: "PRIJATELJI",
          title: "Socialni graf",
          desc: "Prošnje za prijateljstvo in sloj prijateljev za ločevanje znanih stikov od novih ujemanj.",
        },
        {
          label: "ISKANJE",
          title: "Iskanje in odkrivanje",
          desc: "Najdi ustanovitelje onkraj zavihka zemljevida, ko veš, kaj iščeš.",
        },
        {
          label: "NAROČNINA",
          title: "Naročnina",
          desc: "Naročnina, podprta s Stripe, s 7-dnevno brezplačno preizkušnjo ob registraciji. 9,99 $/mesec.",
        },
        {
          label: "OBVESTILA",
          title: "Push obvestila",
          desc: "Obvestila o ujemanjih in sporočilih, ko so konfigurirana prek Expo push cevovoda.",
        },
        {
          label: "ZASEBNOST",
          title: "Zasebnost lokacije",
          desc: "Namerni zamiki lokacije pred shranjevanjem. Prikazi zemljevida uporabljajo posplošene položaje.",
        },
      ],
    },
    howItWorks: {
      label: "PROTOKOL",
      title: "Kako",
      titleHighlight: "deluje.",
      steps: [
        {
          num: "01",
          title: "Ustvari svoj profil",
          desc: "Podjetje, faza, industrija, kaj iščeš in ponujaš. UI ustvari povzetek, pripravljen za ujemanje.",
        },
        {
          num: "02",
          title: "Odpri zemljevid",
          desc: "Poglej ustanovitelje v bližini s posplošenimi položaji. Najprej zasebnost—brez izpostavljanja točnega GPS-a.",
        },
        {
          num: "03",
          title: "Ujemaj se in poveži",
          desc: "Pridobi predloge za ujemanja, ki jih poganja UI, z razlogi. Obe strani se odločita pred sporočanjem.",
        },
        {
          num: "04",
          title: "Klepetaj v realnem času",
          desc: "Sporočanje, ki ga poganja WebSocket. Uskladi srečanja, deli predstavitve, gradi odnose.",
        },
      ],
    },
    privacy: {
      label: "PROTOKOL_ZAUPANJA",
      title: "Zasebnost po",
      titleHighlight: "zasnovi.",
      faqLabel: "POGOSTA VPRAŠANJA",
      faqTitle: "Vprašanja.",
      checks: [
        "Zamiki lokacije uporabljeni pred shranjevanjem",
        "Prikazi zemljevida uporabljajo samo posplošene položaje",
        "Točen GPS ni shranjen ali prenesen",
        "Medsebojna privolitev potrebna za sporočanje",
      ],
      faqs: [
        {
          q: "Ali shranjujete moj točen GPS?",
          a: "Ne. Backend uporablja namerne zamike lokacije (~100–500 m) pred shranjevanjem. Prikazi zemljevida uporabljajo posplošene položaje. Zasebnost je arhitekturna, ne gumb.",
        },
        {
          q: "Ali je to aplikacija za zmenke?",
          a: "Ne—Founder Field je profesionalno omreženje za ustanovitelje s poslovnimi profili, projekti in podjetji.",
        },
        {
          q: "Zakaj plačati?",
          a: "Naročnina podpira infrastrukturo v realnem času: ujemanje, sporočanje, arhitekturo, pripravljeno za moderacijo. 7-dnevna preizkušnja ti omogoča ocenjevanje brez tveganja.",
        },
        {
          q: "S katerimi ponudniki se lahko prijavim?",
          a: "Google, Apple in drugi podprti OAuth ponudniki. Priprava te vodi v popoln profil.",
        },
      ],
    },
    pricing: {
      label: "CENIK",
      title: "Enostaven",
      titleHighlight: "cenik.",
      planLabel: "DOSTOP_USTANOVITELJA",
      price: "9,99 $",
      period: "/mesec",
      trial: "7-DNEVNA BREZPLAČNA PREIZKUŠNJA VKLJUČENA",
      features: [
        "Zemljevid v živo in odkrivanje v bližini",
        "Ujemanje s pomočjo UI z razlogi",
        "Neomejeno sporočanje v realnem času",
        "Deljenje profila QR in NFC",
        "Profili projektov in podjetij",
        "Push obvestila",
        "Lokacija, ki daje prednost zasebnosti",
      ],
    },
    cta: {
      label: "ZAHTEVAJ_DOSTOP",
      title: "Bodi prvi v",
      titleHighlight: "svojem mestu.",
      description: "Pridruži se seznamu čakajočih. Poslali ti bomo podrobnosti o uvedbi—brez pretiravanja z datumi.",
      button: "PRIDRUŽI_SE_SEZNAMU",
      bgText: "USTANOVITELJ",
    },
    footer: {
      tagline: "Omreženje na podlagi bližine za ustanovitelje.",
      rights: "Vse pravice pridržane.",
      links: {
        privacy: "Zasebnost",
        terms: "Pogoji",
        contact: "Kontakt",
      },
    },
    modal: {
      title: "PRIDRUŽI SE SEZNAMU ČAKAJOČIH",
      description: "Vnesi svoj e-poštni naslov za zgodnji dostop",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
