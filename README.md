# MoveSafe Packers and Movers Website

This is the website for **MoveSafe Packers and Movers**, built with Next.js, React, TypeScript, and Tailwind CSS.

You do not need to be an experienced programmer to run or edit this project. Follow the steps below in order.

## Business Details

- Business: MoveSafe Packers and Movers
- Phone: +91 88844 55199
- Address: No. 45, 3rd Cross, HSR Layout, Sector 2, Bangalore, Karnataka 560102

The shared business details are stored in `src/lib/site.ts`. Change them there instead of editing every page separately.

## Requirements

Install these programs before starting:

- [Node.js](https://nodejs.org/) version 20.9 or newer
- npm, which is included with Node.js
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

Check your installed versions:

```bash
node --version
npm --version
```

## First-Time Setup

Open a terminal in the project folder and install the dependencies:

```bash
npm install
```

You normally only need to do this after downloading the project or when `package.json` changes.

## Start the Website

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Keep the terminal open while working. Press `Ctrl+C` in the terminal to stop the server.

Changes usually appear in the browser automatically after you save a file.

## Useful Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local development server |
| `npm run lint` | Check TypeScript for programming errors |
| `npm run typecheck` | Run the same TypeScript check |
| `npm run build` | Create and verify a production build |
| `npm run start` | Start a production build after running `npm run build` |
| `npm run zip` | Build and create a deployable ZIP file |
| `npm run zip-project` | ZIP the complete project, including `.git` |

Run `npm run lint` and `npm run build` before publishing important changes.

## Project Structure

```text
src/
  app/                         Website pages and global styles
    page.tsx                   Home page
    about/page.tsx             About page
    contact/page.tsx           Contact page
    locations/page.tsx         Areas served page
    request-quote/page.tsx     Quote page
    services/                  Service pages
    blog/                      Blog pages
    globals.css                Shared website styles
    layout.tsx                 Shared page layout and metadata
  components/
    common/                    Header, footer, and contact buttons
    forms/                     Quote form
    sections/                  Reusable page sections
  lib/
    site.ts                    Business details and services
    blog.ts                    Blog article content
    schema-markup.ts           Search-engine structured data
scripts/
  create-zip.mjs               Cross-platform ZIP creation script
```

In Next.js, a file named `page.tsx` creates a page. For example, `src/app/contact/page.tsx` creates the `/contact` page.

## Common Edits

### Change the Phone Number or Address

Open `src/lib/site.ts` and update the values in `SITE`:

```ts
export const SITE = {
  name: 'MoveSafe Packers and Movers',
  phone: '8884455199',
  phoneDisplay: '+91 88844 55199',
  phoneHref: 'tel:+918884455199',
  whatsappNumber: '918884455199',
  // ...
};
```

Use digits only for `whatsappNumber`. Include the country code `91` but do not include `+`, spaces, or dashes.

### Edit Services

The service names, descriptions, and features are in the `SERVICES` list inside `src/lib/site.ts`.

Each `slug` must match its folder under `src/app/services/`. For example:

```text
slug: domestic-relocation
folder: src/app/services/domestic-relocation/
URL: /services/domestic-relocation
```

Do not change a slug unless you also rename its page folder and update any related links.

### Edit Blog Articles

Open `src/lib/blog.ts`. Each object in `POSTS` is one article.

The `slug` becomes the article URL. For example:

```text
slug: moving-day-checklist-bangalore
URL: /blog/moving-day-checklist-bangalore
```

Keep every slug unique and use lowercase words separated by hyphens.

### Edit Colors and Shared Button Styles

Open `src/app/globals.css` for shared styles such as:

- `.page-shell`
- `.eyebrow`
- `.primary-button`
- `.secondary-button`

Most page styling uses Tailwind CSS class names directly inside `.tsx` files.

## Links and the Future Domain

Internal website links use relative paths such as `/services` and `/contact`. They will continue to work when a domain is selected.

The domain has not been configured yet. When a domain is chosen, you can add domain-dependent metadata, a canonical URL, and a sitemap.

Phone links use `tel:` and WhatsApp links use `https://wa.me/`. These are contact links, not website-domain links.

## Quote Form

The quote form does not require a database or email server. When a visitor submits it, the website opens WhatsApp with the entered moving details and sends them to the business number.

The form is located at `src/components/forms/QuoteForm.tsx`.

## Create ZIP Files

The ZIP scripts use the popular cross-platform `archiver` library. They do not depend on an operating system's `zip` command.

### Deployable Build ZIP

```bash
npm run zip
```

This command:

1. Creates a fresh production build.
2. Packages the standalone Next.js server and static assets.
3. Creates `movesafe-packers-and-movers-build.zip`.

After extracting the build ZIP on a server, start it with:

```bash
node server.js
```

The server uses port `3000` by default. A hosting service can set the `PORT` environment variable when another port is required.

### Complete Project ZIP

```bash
npm run zip-project
```

This creates `movesafe-packers-and-movers-project.zip`.

The project archive keeps `.git` and source files. It ignores files that should be regenerated, including:

- `node_modules`
- `.next`
- `.turbo`
- `coverage`
- `dist`
- Existing `.zip` files
- TypeScript build cache files

After extracting the project ZIP on another computer, run `npm install` before starting development.

## Before Publishing

Use this checklist:

1. Run `npm install` if dependencies changed.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Test the desktop and mobile navigation.
5. Test phone and WhatsApp buttons on a mobile device.
6. Check the business name, phone number, and address.
7. Run `npm run zip` if you need the deployable archive.

## Troubleshooting

### `npm` Is Not Recognized

Install Node.js, close the terminal, open a new terminal, and try again.

### Port 3000 Is Already in Use

Stop the other development server with `Ctrl+C`, or start this project on another port:

```bash
npm run dev -- --port 3001
```

Then open [http://localhost:3001](http://localhost:3001).

### The Page Does Not Update

Save the edited file and refresh the browser. If that does not work, stop the development server with `Ctrl+C` and run `npm run dev` again.

### A Build Fails

Read the first error shown in the terminal. It normally includes the affected file and line number. Run this command for a shorter TypeScript check:

```bash
npm run lint
```

### Dependencies Behave Strangely

Reinstall them:

```bash
npm install
```

Do not manually edit files inside `node_modules` because npm replaces them.
