# Vue PWA Template

Detta är ett GitHub‑template‑repo för **Progressive Web Apps (PWA)** i plattformen.

Mallen tillhandahåller **teknisk infrastruktur och arkitekturprinciper** för Vue‑baserade PWA‑appar, men innehåller **ingen domänlogik**, **inga affärsregler** och **inga färdiga applikationsvyer**.

---

## Vad är denna mall?

Denna mall är:

- en teknisk grund för **Vue 3 + Vite + PWA**
- ett startläge för **installationsbara, offline‑kapabla webbappar**
- ett gemensamt ramverk för frontends i plattformen

Denna mall är **inte**:

- en färdig applikation
- bunden till någon specifik backend
- bunden till en domänmodell
- tänkt att innehålla affärslogik eller applikationsspecifika komponenter

---

## Teknisk stack

- Vue 3
- Vite
- JavaScript (ESM)
- PWA‑stöd via **service worker** och **web app manifest**
- Vue Router (infrastruktur, inga domänroutes)
- Pinia (state‑infrastruktur, inga domänstores)
- ESLint
- VERSION‑fil (semver)
- Docker‑image för produktion (Nginx)

TypeScript används endast för **genererade DTO‑typer** (t.ex. via OpenAPI). Applikationskoden är i övrigt vanlig JavaScript.

---

## Arkitekturprinciper

Mallen följer samma övergripande principer som backend‑mallarna i plattformen:

- ingen domänlogik i mallen
- inga hårdkodade API‑anrop
- inga affärsregler
- inga applikationsspecifika vyer eller komponenter

All applikations‑ och domänlogik skapas i den konkreta PWA‑appen som byggs från denna mall.

---

## Projektstruktur (översikt)

Projektet följer **vedertagna Vue‑konventioner** för att kännas igen av Vue‑utvecklare:

```shell
public/
├── manifest.webmanifest   # PWA‑manifest
├── icons/                # PWA‑ikoner
└── sw.js                 # Service worker (ren JavaScript)

src/
├── assets/               # Statiska resurser (bilder, css)
       ├── icons/         # Ikoner
       ├── base.css       # Grundläggande css för färger, dark-mode och skärmstorlekar
       └── main.css       # Bas-css med gemensamma deklarationer
├── components/           # Återanvändbara, tekniska komponenter
├── views/                # Routade vyer (platshållare)
├── router/               # Vue Router‑setup
├── stores/                # Pinia‑setup (ingen domän‑state)
├── services/             # HTTP / API / DTO‑integration
├── pwa/                  # Vue‑sidig PWA‑logik (registrering, helpers)
├── App.vue
└── main.js
````

Mallen innehåller endast **infrastruktur och tomma platshållare**. All domän‑ och applikationsspecifik kod läggs till i den färdiga appen.

***

## PWA‑stöd

Mallen är konfigurerad för:

*   installérbar PWA
*   offline‑stöd för applikations‑shell
*   automatisk uppdatering av service worker

`public/sw.js` innehåller en ren, klassisk service worker utan Vue‑beroenden. Vue‑relaterad PWA‑logik (registrering, uppdateringar, install‑prompt) ligger i `src/pwa/`.

***

## Kör lokalt

```shell
npm install
npm run dev
```

***

## Bygg för produktion

```shell
npm run build
```

Applikationen byggs som en statisk PWA och kan serveras via den medföljande Docker‑imagen (Nginx).

***

## Backend‑integration

Denna mall är inte bunden till någon specifik backend.

Den är avsedd att kunna användas tillsammans med plattformens backend‑tjänster (t.ex. Slim‑services), men kan kopplas till vilken API‑lösning som helst.

***

## Versionering

Mallen använder en VERSION‑fil enligt **semver**.

Ändringar i mallen ska vara bakåtkompatibla i möjligaste mån för att inte bryta befintliga appar som bygger på den.

