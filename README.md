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
- tänkt att innehålla affärslogik, use‑cases eller app‑specifika komponenter

---

## Teknisk stack

- Vue 3
- Vite
- JavaScript (ESM)
- PWA‑stöd via **service worker** och **web app manifest**
- Vue Router (infrastruktur, inga domänroutes)
- Pinia (state‑infrastruktur, inga domänstores)
- ESLint + Prettier
- VERSION‑fil (semver)
- Docker‑image för produktion (Nginx)

TypeScript används endast för **genererade DTO‑typer** (t.ex. via OpenAPI). Övrig applikationskod är vanlig JavaScript.

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
├── icons/                 # PWA‑ikoner
└── sw.js                  # Service worker (ren JavaScript)

src/
├── assets/                # Statiska resurser (css, bilder, ikoner)
├── components/            # Återanvändbara, tekniska komponenter
├── views/                 # Routade vyer (platshållare)
├── router/                # Vue Router‑setup
├── stores/                # Pinia‑setup (ingen domän‑state)
├── services/              # APIService, DTO‑integration m.m.
├── pwa/                   # Vue‑sidig PWA‑logik (SW‑registrering, helpers)
├── App.vue
└── main.js