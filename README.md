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
```

***

# Design och tema

Denna mall använder en **tvålagersdesign‑modell** för färger och utseende, avsedd att vara **hållbar, konsekvent och lätt att vidareutveckla**.

## Översikt

Designen är uppdelad i två tydliga lager:

| Fil                   | Ansvar                                                   |
| --------------------- | -------------------------------------------------------- |
| `src/assets/base.css` | **Design‑tokens** (färger, typografi)                    |
| `src/assets/main.css` | **Regler** (hur tokens appliceras på element och layout) |

Komponenter ska i möjligaste mån **inte innehålla egna färgdefinitioner**, utan istället förlita sig på dessa globala regler.

***

## `base.css` – design‑tokens

`base.css` innehåller **endast CSS‑variabler (custom properties)** och inga selectors.

Här definieras:

*   färger (semantiskt, inte palett‑baserat)
*   typografi (font family + basstorlek)
*   temavärden för light och dark mode

### Semantiska färger

Färger uttrycker **roll**, inte nyans:

*   `--color-background` – basyta för hela appen
*   `--color-surface` – upphöjda ytor (inputs, kort)
*   `--color-text` – primär text
*   `--color-text-muted` – sekundär text
*   `--color-primary` – accent/interaktion
*   `--color-border` – linjer och avdelare
*   `--color-list-row-light` / `--color-list-row-dark` – pyjamasrader
*   `--color-input-bg` / `--color-input-text` – input‑element

Alla teman (**light** och **dark**) definierar **samma variabler**. Endast värdena skiljer sig.

> ⚠️ Inga färgkoder ska förekomma utanför `base.css`.

***

## `main.css` – applicerad styling

`main.css` använder tokens från `base.css` för att sätta:

*   bakgrund på `body` och layout‑ytor
*   textfärger
*   input‑utseende
*   pyjamaslistor
*   länkbeteende

All styling sker via:

```css
var(--color-…)
```

`main.css` ska:

*   aldrig känna till vilket tema som är aktivt
*   fungera identiskt i light och dark mode
*   innehålla **inga hårdkodade färger**

***

## Light & Dark theme

Teman aktiveras via `data-theme` på root‑elementet:

Skillnaden mellan teman ligger **endast i `base.css`**.

### Designprinciper

**Light theme**

*   Ljussblå basyta för hela appen
*   Marinblå text
*   Vita input‑ytor
*   Pyjamaslistor där ljus rad = bakgrund

**Dark theme**

*   Marinblå basyta (inte svart)
*   Ljus, blåtonad text
*   Mörka input‑ytor
*   Samma pyjamas‑rytm som i light theme

Dark och light mode är **samma app**, inte två olika designer.

***

## Länkar

Länkar är utformade för PWA‑känsla, inte klassisk webb.

*   Ingen underline
*   Färg = `--color-primary`
*   Hover/focus ger subtil `opacity`‑feedback
*   `.link-reset` finns för länkar i navigation och listor

Underline används **aldrig** i mallen.

***

## Vad som är låst i mallen

Följande betraktas som **design‑kontrakt** och ska inte ändras i app‑koden:

*   semantiska färgnamn
*   relation mellan light & dark theme
*   input‑utseende
*   pyjamaslistors rytm
*   länkbeteende

Vill en app avvika från detta ska det ske via:

*   nya teman
*   egna CSS‑överlager
*   egna komponenter

***

## Var man gör ändringar

| Vill du ändra…                  | Ändra här   |
| ------------------------------- | ----------- |
| Färgtema                        | `base.css`  |
| Layout‑känsla (padding, rhythm) | `main.css`  |
| Utseende på header/menu/footer  | komponenten |
| App‑specifik design             | i app‑repo  |

