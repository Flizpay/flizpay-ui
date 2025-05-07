import { cn } from "../../utils/cn";
import * as enShopperTermsAndConditions from "@locales/en/shoppers/terms-and-conditions.json";
import * as deShopperTermsAndConditions from "@locales/de/shoppers/terms-and-conditions.json";

const DATA = {
  en: enShopperTermsAndConditions,
  de: deShopperTermsAndConditions,
} as const;

type Language = keyof typeof DATA; // "en" | "de"

function orderedValues(obj: Record<string, string> | undefined) {
  if (!obj) return [] as string[];
  return Object.keys(obj)
    .sort((a, b) => +a - +b)
    .map((k) => obj[k]);
}

export interface ShopperTermsAndConditionsProps {
  language: Language;
  className?: string;
  containerClassName?: string;
}

export function ShopperTermsAndConditions({
  language,
  className,
  containerClassName,
}: ShopperTermsAndConditionsProps) {
  const module = DATA[language];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tc = (module as { default?: any }).default ?? module;

  return (
    <div className={cn(containerClassName)}>
      <div>
        {/* ----------------------------------------------------------------- */}
        {/*   TITLE & PREAMBLE                                                */}
        {/* ----------------------------------------------------------------- */}

        <h1 className={cn("text-3xl font-bold mb-4", className)}>
          {tc.title.one}
        </h1>
        <p className={cn("text-lg mb-6", className)}>{tc.title.two}</p>
        <p className={cn("mb-8", className)}>{tc.subtitle}</p>

        {/* ----------------------------------------------------------------- */}
        {/*   1 · Scope                                                       */}
        {/* ----------------------------------------------------------------- */}

        <Section title={tc.scope.title} className={className}>
          {orderedValues(tc.scope.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/*   2 · Conditions of use                                           */}
        {/* ----------------------------------------------------------------- */}

        <Section title={tc.conditions.title} className={className}>
          {orderedValues(tc.conditions.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/*   3 · Registration                                                */}
        {/* ----------------------------------------------------------------- */}

        <Section title={tc.registration.title} className={className}>
          {orderedValues(tc.registration.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/*   4 · Our services                                               */}
        {/* ----------------------------------------------------------------- */}

        <Section title={tc.ourServices.title} className={className}>
          {orderedValues(tc.ourServices.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/*   5 · Terms of use                                               */}
        {/* ----------------------------------------------------------------- */}

        <Section title={tc.termsOfUse.title} className={className}>
          {orderedValues(tc.termsOfUse.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ul className={cn("list-disc pl-6 mt-2", className)}>
            {orderedValues(tc.termsOfUse.subtext).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/*   6 · Limitations of liability                                    */}
        {/* ----------------------------------------------------------------- */}

        <Section title={tc.limits.title} className={className}>
          {orderedValues(tc.limits.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ul className={cn("list-disc pl-6 mt-2", className)}>
            {orderedValues(tc.limits.subtext).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
          {orderedValues(tc.limits.bottomText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/*   7 · Termination of contract                                     */}
        {/* ----------------------------------------------------------------- */}

        <Section title={tc.terminationOfContract.title} className={className}>
          {orderedValues(tc.terminationOfContract.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/*   8 · Applicable law                                             */}
        {/* ----------------------------------------------------------------- */}

        <Section title={tc.applicableLaw.title} className={className}>
          {orderedValues(tc.applicableLaw.text).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, children, className }: SectionProps) {
  return (
    <section className="mb-20">
      <h2
        className={cn("text-2xl font-semibold mb-4 text-[#1F2937]", className)}
      >
        {title}
      </h2>
      <div className={cn("space-y-4 text-[#374151]", className)}>
        {children}
      </div>
    </section>
  );
}
