import { cn } from "../../utils/cn";
import * as enBusinessTermsAndConditions from "@/locales/en/businesses/terms-and-conditions.json";
import * as deBusinessTermsAndConditions from "@/locales/de/businesses/terms-and-conditions.json";

const DATA = {
  en: enBusinessTermsAndConditions,
  de: deBusinessTermsAndConditions,
} as const;

type Language = keyof typeof DATA; // "en" | "de"

interface TermsAndConditionsProps {
  language: Language;
  className?: string;
  containerClassName?: string;
}

export function BusinessTermsAndConditions({
  language,
  className,
  containerClassName,
}: TermsAndConditionsProps) {
  const module = DATA[language];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tc = (module as { default?: any }).default ?? module;

  return (
    <div className={cn(containerClassName)}>
      <div>
        {/* Title */}
        <h1 className={cn("text-3xl font-bold mb-4", className)}>
          {tc.page.title.one}
        </h1>
        <h2 className={cn("text-2xl font-semibold mb-6", className)}>
          {tc.page.title.two}
        </h2>

        {/* Subtitle */}
        <div className="mb-12">
          <p className={cn("text-lg mb-2", className)}>
            {tc.page.subtitle.one}
          </p>
          <p className={cn("text-lg whitespace-pre-line", className)}>
            {tc.page.subtitle.two}
          </p>
        </div>

        {/* --- Background --- */}
        <Section className={className} title={tc.background.title}>
          {orderedValues(tc.background.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- Contract --- */}
        <Section className={className} title={tc.contract.title}>
          {orderedValues(tc.contract.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ol className="list-decimal pl-6 space-y-2">
            {orderedValues(tc.contract.numberText).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ol>
          {orderedValues(tc.contract.bottomLetterText).map((txt, i) => (
            <p className="pt-4" key={i}>
              {txt}
            </p>
          ))}
        </Section>

        {/* --- Contractual Partner --- */}
        <Section title={tc.contractualPartner.title} className={className}>
          {orderedValues(tc.contractualPartner.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- Service Description --- */}
        <Section title={tc.serviceDescription.title} className={className}>
          {orderedValues(tc.serviceDescription.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- Obligations --- */}
        <Section className={className} title={tc.obligations.title}>
          {orderedValues(tc.obligations.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ol className="list-decimal pl-6 space-y-2">
            {orderedValues(tc.obligations.numberText).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ol>
        </Section>

        {/* --- Changes --- */}
        <Section className={className} title={tc.changes.title}>
          {orderedValues(tc.changes.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ol className="list-decimal pl-6 space-y-2">
            {orderedValues(tc.changes.numberText).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ol>
        </Section>

        {/* --- Compensation and Billing --- */}
        <Section title={tc.compensationAndBilling.title} className={className}>
          {orderedValues(tc.compensationAndBilling.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- Rights of Use --- */}
        <Section title={tc.rightsOfUse.title} className={className}>
          {orderedValues(tc.rightsOfUse.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- Warranty --- */}
        <Section title={tc.warranty.title} className={className}>
          {orderedValues(tc.warranty.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- Liability --- */}
        <Section title={tc.liability.title} className={className}>
          {orderedValues(tc.liability.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- Data Protection --- */}
        <Section title={tc.dataProtection.title} className={className}>
          {orderedValues(tc.dataProtection.text).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- Contract Termination --- */}
        <Section title={tc.contractTermination.title} className={className}>
          {orderedValues(tc.contractTermination.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          {orderedValues(tc.contractTermination.text).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          {orderedValues(tc.contractTermination.bottomLetterText).map(
            (txt, i) => (
              <p key={i}>{txt}</p>
            )
          )}
        </Section>

        {/* --- Final Provisions --- */}
        <Section title={tc.finalProvisions.title} className={className}>
          {orderedValues(tc.finalProvisions.letterText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>
      </div>
    </div>
  );
}

function orderedValues(obj: Record<string, string> | undefined) {
  if (!obj) return [] as string[];

  return Object.keys(obj) // ["1", "2", …]
    .sort((a, b) => +a - +b) // keep numeric order
    .map((k) => obj[k]); // ["…first", "…second"]
}

/* small helper to avoid repetition */

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, children, className }: SectionProps) {
  return (
    <section className="mb-8">
      <h2
        className={cn("text-2xl font-semibold mb-4 text-[#1F2937]", className)}
      >
        {title}
      </h2>
      <div className="space-y-4 text-[#374151]">{children}</div>
    </section>
  );
}
