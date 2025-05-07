const LINKS = {
  goneo: "https://www.goneo.de/hilfe_kontakt/datenschutz.html",
  bfdi: "https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.htm",
  sentry: "https://sentry.io/privacy/",
  amazon: "https://aws.amazon.com/de/privacy/",
  linkedinOne: "https://www.linkedin.com/legal/privacy-policy?_l=de_DE",
  linkedinTwo:
    "https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out",
  fliz: "https://flizpay.de/privacy-policy",
} as const;

interface ReplaceLinksProps {
  text: string;
  isGerman: boolean;
}

export function replaceLinks({ text, isGerman }: ReplaceLinksProps) {
  const linkClass = "font-semibold underline text-[#111827]";
  const linkTemplate = (url: string, text: string) =>
    `<a href="${url}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${text}</a>`;

  const replacements = [
    {
      pattern: isGerman ? /\[bfdiLink: hier]/g : /\[bfdiLink: here]/g,
      replacement: linkTemplate(LINKS.bfdi, isGerman ? "hier" : "here"),
    },
    {
      pattern: isGerman ? /\[flizLink: hier]/g : /\[flizLink: here]/g,
      replacement: linkTemplate(LINKS.fliz, isGerman ? "hier" : "here"),
    },
    {
      pattern: isGerman
        ? /\[linkedinLinkOne: hier]/g
        : /\[linkedinLinkOne: here]/g,
      replacement: linkTemplate(LINKS.linkedinOne, isGerman ? "hier" : "here"),
    },
    {
      pattern: isGerman
        ? /\[goneoLink: Datenschutzerklärung]/g
        : /\[goneoLink: privacy policy]/g,
      replacement: linkTemplate(
        LINKS.goneo,
        isGerman ? "Datenschutzerklärung" : "privacy policy"
      ),
    },
    {
      pattern: isGerman
        ? /\[sentryLink: Datenschutzerklärung]/g
        : /\[sentryLink: privacy policy]/g,
      replacement: linkTemplate(
        LINKS.sentry,
        isGerman ? "Datenschutzerklärung" : "privacy policy"
      ),
    },
    {
      pattern: isGerman
        ? /\[amazonLink: Datenschutzerklärung]/g
        : /\[amazonLink: privacy policy]/g,
      replacement: linkTemplate(
        LINKS.amazon,
        isGerman ? "Datenschutzerklärung" : "privacy policy"
      ),
    },
    {
      pattern: isGerman
        ? /\[linkedinLinkTwo: Einstellungen für Werbeanzeigen]/g
        : /\[linkedinLinkTwo: settings for advertisements]/g,
      replacement: linkTemplate(
        LINKS.linkedinTwo,
        isGerman
          ? "Einstellungen für Werbeanzeigen"
          : "settings for advertisements"
      ),
    },
  ];

  return replacements.reduce(
    (result, { pattern, replacement }) => result.replace(pattern, replacement),
    text
  );
}
