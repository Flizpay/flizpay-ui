import { cn } from "../utils/cn";
import * as enPrivacyPolicy from "@/locales/en/shared/privacy-policy.json";
import * as dePrivacyPolicy from "@/locales/de/shared/privacy-policy.json";
import { replaceLinks } from "../utils/links";
import type { Language } from "@/types";

const DATA = {
  en: enPrivacyPolicy,
  de: dePrivacyPolicy,
} as const;

interface PrivacyPolicyProps {
  language: Language;
  className?: string;
  containerClassName?: string;
}

export function PrivacyPolicy({
  language,
  className,
  containerClassName,
}: PrivacyPolicyProps) {
  const isGerman = language === "de";
  const tc =
    "default" in DATA[language]
      ? (DATA[language] as unknown as { default: (typeof DATA)[Language] })
          .default
      : DATA[language];

  return (
    <div className={cn(containerClassName)}>
      <div>
        {/* Page title */}
        <h1 className={cn("text-3xl font-bold mb-8", className)}>
          {tc.page.title}
        </h1>

        {/* --- 1. Introduction --- */}
        <Section title={tc.introduction.title} className={className}>
          {orderedValues(tc.introduction.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ul className="list-disc pl-6 space-y-2">
            {orderedValues(tc.introduction.subtext).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
          {orderedValues(tc.introduction.bottomText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 1.1 Contact Details --- */}
        <Section title={tc.contact.title} className={className}>
          {orderedValues(tc.contact.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 1.2 Scope of data processing, processing purposes and legal basis --- */}
        <Section title={tc.dataProcessing.title} className={className}>
          {orderedValues(tc.dataProcessing.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ul className="list-disc pl-6 space-y-2">
            {orderedValues(tc.dataProcessing.subtext).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
        </Section>

        {/* --- 1.3 Data processing outside the EEA --- */}
        <Section
          title={tc.dataProcessingOutsideEEA.title}
          className={className}
        >
          {orderedValues(tc.dataProcessingOutsideEEA.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 1.4 Storage period --- */}
        <Section title={tc.storagePeriod.title} className={className}>
          {orderedValues(tc.storagePeriod.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 1.5 Rights of the persons concerned --- */}
        <Section title={tc.rights.title} className={className}>
          {orderedValues(tc.rights.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ul className="list-disc pl-6 space-y-2">
            {orderedValues(tc.rights.subtext).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
          {/* bottomText contains the dynamic BfDI link */}
          {orderedValues(tc.rights.bottomText).map((txt, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{
                __html: replaceLinks({ text: txt, isGerman }),
              }}
            />
          ))}
        </Section>

        {/* --- 1.6 Obligation to provide data --- */}
        <Section title={tc.obligation.title} className={className}>
          {orderedValues(tc.obligation.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 1.7 No automatic decision-making in individual cases --- */}
        <Section title={tc.automaticDecisionMaking.title} className={className}>
          {orderedValues(tc.automaticDecisionMaking.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 1.8 Making contact --- */}
        <Section title={tc.makingContact.title} className={className}>
          {orderedValues(tc.makingContact.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 1.9 Customer surveys --- */}
        <Section title={tc.surveys.title} className={className}>
          {orderedValues(tc.surveys.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 2. Marketing Communication --- */}
        <Section title={tc.marketingCommunication.title} className={className}>
          {orderedValues(tc.marketingCommunication.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 3. Data processing on our website --- */}
        <Section title={tc.dataOnOurWebsite.title} className={className}>
          {/* just the heading – content comes in sub-sections */}
        </Section>

        {/* --- 3.1 Note for website visitors from Germany --- */}
        <Section title={tc.noteForVisitorsFromDE.title} className={className}>
          {orderedValues(tc.noteForVisitorsFromDE.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ul className="list-disc pl-6 space-y-2">
            {orderedValues(tc.noteForVisitorsFromDE.subtext).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
          {orderedValues(tc.noteForVisitorsFromDE.bottomText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 3.2 Informational use of the website --- */}
        <Section title={tc.useOfTheWebsite.title} className={className}>
          {orderedValues(tc.useOfTheWebsite.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ul className="list-disc pl-6 space-y-2">
            {orderedValues(tc.useOfTheWebsite.subtext).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
          {orderedValues(tc.useOfTheWebsite.bottomText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 3.3 Web hosting and provision of the website --- */}
        <Section title={tc.webHosting.title} className={className}>
          {orderedValues(tc.webHosting.topText).map((txt, i) =>
            i === 0 ? (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: replaceLinks({ text: txt, isGerman }),
                }}
              />
            ) : (
              <p key={i}>{txt}</p>
            )
          )}
        </Section>

        {/* --- 3.4 Email contact --- */}
        <Section title={tc.emailContact.title} className={className}>
          {orderedValues(tc.emailContact.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 3.5 Job advertisements --- */}
        <Section title={tc.jobAdvertisements.title} className={className}>
          {orderedValues(tc.jobAdvertisements.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>

        {/* --- 3.6 Third-party providers --- */}
        <Section title={tc.thirdPartyProviders.title} className={className}>
          {/* heading only */}
        </Section>

        {/* --- 3.6.1 Sentry --- */}
        <SubSection title={tc.sentry.title} className={className}>
          {orderedValues(tc.sentry.topText).map((txt, i) =>
            i === 3 ? (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: replaceLinks({ text: txt, isGerman }),
                }}
              />
            ) : (
              <p key={i}>{txt}</p>
            )
          )}
        </SubSection>

        {/* --- 3.6.2 Mongo DB Atlas --- */}
        <SubSection title={tc.mongoDBAtlas.title} className={className}>
          {orderedValues(tc.mongoDBAtlas.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </SubSection>

        {/* --- 3.6.3 Amazon Web Services (AWS Cloud) --- */}
        <SubSection title={tc.awsCloud.title} className={className}>
          {orderedValues(tc.awsCloud.topText).map((txt, i) =>
            i === 0 ? (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: replaceLinks({ text: txt, isGerman }),
                }}
              />
            ) : (
              <p key={i}>{txt}</p>
            )
          )}
        </SubSection>

        {/* --- 3.6.4 Google Analytics --- */}
        <SubSection title={tc.GoogleAnalytics.title} className={className}>
          {orderedValues(tc.GoogleAnalytics.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </SubSection>

        {/* --- 3.6.5 Google Places API --- */}
        <SubSection title={tc.GooglePlaces.title} className={className}>
          {orderedValues(tc.GooglePlaces.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </SubSection>

        {/* --- 4. Data processing during the use of our product FLIZ --- */}
        <Section
          title={tc.dataProcessingDuringUsageOfFliz.title}
          className={className}
        >
          {/* heading only */}
        </Section>

        {/* --- 4.1 Payment initiation --- */}
        <SubSection title={tc.paymentInitiation.title} className={className}>
          {orderedValues(tc.paymentInitiation.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
          <ul className="list-disc pl-6 space-y-2">
            {orderedValues(tc.paymentInitiation.subtext).map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
          {orderedValues(tc.paymentInitiation.bottomText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </SubSection>

        {/* --- 5. Data processing on social media platforms --- */}
        <Section
          title={tc.dataProcessingOnSocialMedia.title}
          className={className}
        >
          {orderedValues(tc.dataProcessingOnSocialMedia.topText).map(
            (txt, i) => (
              <p key={i}>{txt}</p>
            )
          )}
        </Section>

        {/* --- 5.1 LinkedIn --- */}
        <SubSection title={tc.linkedin.title} className={className}>
          {orderedValues(tc.linkedin.topText).map((txt, i) =>
            i === 0 ? (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: replaceLinks({ text: txt, isGerman }),
                }}
              />
            ) : (
              <p key={i}>{txt}</p>
            )
          )}
        </SubSection>

        {/* --- 6. Changes to this privacy policy --- */}
        <Section title={tc.changesToThisDocument.title} className={className}>
          {orderedValues(tc.changesToThisDocument.topText).map((txt, i) =>
            i === 0 ? (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: replaceLinks({ text: txt, isGerman }),
                }}
              />
            ) : (
              <p key={i}>{txt}</p>
            )
          )}
        </Section>

        {/* --- 7. Questions and comments --- */}
        <Section title={tc.questionsAndComments.title} className={className}>
          {orderedValues(tc.questionsAndComments.topText).map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </Section>
      </div>
    </div>
  );
}

/**
 * Helper to pick values from an object (e.g. {"1":"…","2":"…"}) in numeric
 * order. This way the JSON can stay nicely keyed, but the component still gets
 * a predictable order.
 */
function orderedValues(obj: Record<string, string> | undefined) {
  if (!obj) return [] as string[];
  return Object.keys(obj)
    .sort((a, b) => +a - +b)
    .map((k) => obj[k]);
}

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

function Section({ title, children, className }: SectionProps) {
  return (
    <section className="mb-12">
      <h2
        className={cn("text-2xl font-semibold mb-4 text-[#1F2937]", className)}
      >
        {title}
      </h2>
      <div className="space-y-4 text-[#374151]">{children}</div>
    </section>
  );
}

interface SubSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function SubSection({ title, children, className }: SubSectionProps) {
  return (
    <div className="mb-10">
      <h3
        className={cn("text-xl font-semibold mb-3 text-[#1F2937]", className)}
      >
        {title}
      </h3>
      <div className="space-y-4 text-[#374151]">{children}</div>
    </div>
  );
}
