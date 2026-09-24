import { copyrightYears } from "~/utils";

import Link from "@mui/material/Link";

//================================================

export const LEGAL_EMAIL = "legal@stuxie.dev";
export const LEGAL_UPDATED = "September 2026";

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

export interface LegalDoc {
  slug: string;
  title: string;
  summary: string;
  sections: LegalSection[];
}

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link href={href} target="_blank" rel="noopener">
    {children}
  </Link>
);

const Email: React.FC = () => (
  <Link href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</Link>
);

//================================================

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    summary: "What's stored (only in your browser) and who else sees requests.",
    sections: [
      {
        heading: "The short version",
        body: (
          <>
            Infinite Fusion Playground is a static web app. There are no
            accounts, no server-side database, no analytics, and no ads. Nothing
            you do here is sent to StuxieDev.
          </>
        ),
      },
      {
        heading: "What's stored in your browser",
        body: (
          <>
            Your favourites, Multi Fusion selections and presets, Favourites
            page layout, and whether you've dismissed the welcome dialog are
            saved in your browser&apos;s <code>localStorage</code>. Responses
            from PokéAPI are cached in your browser&apos;s IndexedDB (under{" "}
            <code>pokeapi-js-wrapper</code>) so repeat lookups are faster. None
            of this leaves your device, and you can delete it at any time from
            the <Link href="#/legal/opt-out">Opt-Out Preferences</Link> page.
          </>
        ),
      },
      {
        heading: "Third-party requests",
        body: (
          <>
            To work, the app loads content from other services, which will see
            your IP address and browser details like any website request:{" "}
            <ExternalLink href="https://pokeapi.co/">PokéAPI</ExternalLink>{" "}
            (Pokémon data), <code>raw.githubusercontent.com</code> (fusion
            sprites hosted on GitHub), and{" "}
            <ExternalLink href="https://fonts.google.com/">
              Google Fonts
            </ExternalLink>{" "}
            (the Roboto typeface). Each is covered by its own privacy policy.
          </>
        ),
      },
      {
        heading: "Hosting",
        body: (
          <>
            The site is hosted on GitHub Pages. GitHub may log standard web
            server data (IP address, requested path, timestamp) under{" "}
            <ExternalLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
              its own privacy statement
            </ExternalLink>
            . That logging happens at the infrastructure level and isn&apos;t
            something this site controls or receives.
          </>
        ),
      },
      {
        heading: "Children's privacy",
        body: (
          <>
            The app doesn&apos;t knowingly collect information from anyone,
            children included. It doesn&apos;t collect information from anyone
            at all.
          </>
        ),
      },
      {
        heading: "Changes and contact",
        body: (
          <>
            If this policy changes in any meaningful way, the date above will be
            updated. Questions about privacy? Contact <Email />.
          </>
        ),
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms and Ethics",
    summary: "The rules for using the app, and using it responsibly.",
    sections: [
      {
        heading: "Using the app",
        body: (
          <>
            Infinite Fusion Playground is free to use, with no account required.
            Don&apos;t try to disrupt the site, its hosting, or the third-party
            services it relies on (for example by scripting large volumes of
            requests to PokéAPI).
          </>
        ),
      },
      {
        heading: "The code",
        body: (
          <>
            The source code is available under the{" "}
            <ExternalLink href="https://github.com/StuxieDev/pokefusion/blob/main/LICENCE.txt">
              Mozilla Public License 2.0
            </ExternalLink>
            . That license, not this page, governs what you can do with the
            code.
          </>
        ),
      },
      {
        heading: "Sprites and artwork",
        body: (
          <>
            Custom fusion sprites are made by artists in the Pokémon Infinite
            Fusion community, and auto-generated sprites originate from Japeal.
            They&apos;re shown here for personal, non-commercial browsing.
            Credit the original artists if you share them, and respect their
            wishes about reuse.
          </>
        ),
      },
      {
        heading: "Discontinued, no warranty",
        body: (
          <>
            This project is discontinued and provided as-is, with no warranty of
            any kind, express or implied. Features that depend on the
            now-offline sprite source may not work.
          </>
        ),
      },
      {
        heading: "Changes and contact",
        body: (
          <>
            These terms may be updated from time to time. Continued use of the
            site means you accept the current version. Questions? Contact{" "}
            <Email />.
          </>
        ),
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookies Policy",
    summary: "No cookies. Just local storage for your own favourites.",
    sections: [
      {
        heading: "Cookies",
        body: (
          <>
            This site sets no cookies: no session cookies, no tracking cookies,
            no third-party cookies.
          </>
        ),
      },
      {
        heading: "Local storage",
        body: (
          <>
            The app uses <code>localStorage</code> to remember your favourites,
            Multi Fusion selections and presets, your Favourites page layout,
            and that you&apos;ve seen the welcome dialog. It also uses IndexedDB
            to cache PokéAPI responses. This is strictly functional, stays on
            your device, and is never used for tracking. You can clear it from
            the <Link href="#/legal/opt-out">Opt-Out Preferences</Link> page.
          </>
        ),
      },
      {
        heading: "Third-party resources",
        body: (
          <>
            The app loads fonts from Google Fonts, data from PokéAPI, and
            sprites from GitHub. None of these are loaded in a way that sets
            cookies on this site, but each provider receives a normal web
            request from your browser. See the{" "}
            <Link href="#/legal/privacy">Privacy Policy</Link> for details.
          </>
        ),
      },
      {
        heading: "Contact",
        body: (
          <>
            Questions? Contact <Email />.
          </>
        ),
      },
    ],
  },
  {
    slug: "imprint",
    title: "Imprint",
    summary: "Who runs this site and how to reach them.",
    sections: [
      {
        heading: "Operator",
        body: (
          <>
            Infinite Fusion Playground is an independent, personal,
            non-commercial fan project operated by Leo Ridgwell (StuxieDev).
          </>
        ),
      },
      {
        heading: "Contact",
        body: (
          <>
            Email: <Email />
            <br />
            GitHub:{" "}
            <ExternalLink href="https://github.com/StuxieDev">
              github.com/StuxieDev
            </ExternalLink>
          </>
        ),
      },
      {
        heading: "Hosting",
        body: (
          <>This site is hosted on GitHub Pages, a service of GitHub, Inc.</>
        ),
      },
      {
        heading: "Responsibility",
        body: (
          <>
            Leo Ridgwell is responsible for the content of this site. Sprites,
            Pokémon data, and fonts are provided by the third parties credited
            in the <Link href="#/legal/disclaimer">Disclaimer</Link>.
          </>
        ),
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    summary: "Unofficial fan project. Accuracy, ownership, and credits.",
    sections: [
      {
        heading: "Unofficial fan project",
        body: (
          <>
            Pokémon and all related names are trademarks of Nintendo, Game
            Freak, and The Pokémon Company. Pokémon Infinite Fusion is a
            fan-made game. This site is not affiliated with, endorsed by, or
            sponsored by any of them.
          </>
        ),
      },
      {
        heading: "Copyright and credits",
        body: (
          <>
            The app is a fork of Aegide&apos;s Fusion Calculator, originally
            created by SDM0, and is licensed under the Mozilla Public License
            2.0. Copyright in the original code stays with its authors;
            StuxieDev&apos;s modifications &copy; {copyrightYears()} StuxieDev.
            Custom sprites belong to their respective artists. Pokémon data
            comes from{" "}
            <ExternalLink href="https://pokeapi.co/">PokéAPI</ExternalLink>.
          </>
        ),
      },
      {
        heading: "Accuracy",
        body: (
          <>
            Fusion typing and stats are based on game data (mostly generation 7)
            and may not match the current version of Pokémon Infinite Fusion.
            This project is discontinued and won&apos;t be updated to match
            future game changes.
          </>
        ),
      },
      {
        heading: "Third-party links",
        body: (
          <>
            Links to other sites are provided for convenience. Those sites have
            their own terms and privacy policies, and this site isn&apos;t
            responsible for their content.
          </>
        ),
      },
      {
        heading: "Contact",
        body: (
          <>
            Spotted something wrong, or want your artwork credited differently?
            Contact <Email />.
          </>
        ),
      },
    ],
  },
  {
    slug: "opt-out",
    title: "Opt-Out Preferences",
    summary: "Nothing to opt out of. Clear your local data here.",
    sections: [
      {
        heading: "No data sale, no ad targeting",
        body: (
          <>
            This site collects no personal data (see the{" "}
            <Link href="#/legal/privacy">Privacy Policy</Link>), runs no
            analytics, and shows no ads. There&apos;s no data-sharing
            arrangement to opt out of and no tracking cookie to clear.
          </>
        ),
      },
      {
        heading: "Clear your local data",
        body: (
          <>
            Your favourites, saved presets, and cached PokéAPI data live only in
            this browser. Use the button below to delete all of it. This
            can&apos;t be undone.
          </>
        ),
      },
      {
        heading: "If that ever changes",
        body: (
          <>
            If this site ever adds analytics, cookies, or any data sharing, this
            page will be updated with a real way to opt out. Questions? Contact{" "}
            <Email />.
          </>
        ),
      },
    ],
  },
];

export const getLegalDoc = (slug: string | undefined) =>
  LEGAL_DOCS.find(doc => doc.slug === slug);
