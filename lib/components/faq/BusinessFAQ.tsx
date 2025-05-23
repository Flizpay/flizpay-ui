import { BusinessFAQProps, BusinessTopic, FaqJson } from "./types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";
import { cn } from "../../utils/cn";

// en
import * as enSecurityFAQ from "@/locales/en/businesses/faq/faq.security.json";
import * as enPaymentFAQ from "@/locales/en/businesses/faq/faq.payment.json";
import * as enInstructionsFAQ from "@/locales/en/businesses/faq/faq.instructions.json";
import * as enGeneralFAQ from "@/locales/en/businesses/faq/faq.general.json";

// de
import * as deSecurityFAQ from "@/locales/de/businesses/faq/faq.security.json";
import * as dePaymentFAQ from "@/locales/de/businesses/faq/faq.payment.json";
import * as deInstructionsFAQ from "@/locales/de/businesses/faq/faq.instructions.json";
import * as deGeneralFAQ from "@/locales/de/businesses/faq/faq.general.json";

const DATA: Record<string, Record<BusinessTopic, FaqJson>> = {
  en: {
    payment: enPaymentFAQ as FaqJson,
    security: enSecurityFAQ as FaqJson,
    general: enGeneralFAQ as FaqJson,
    instructions: enInstructionsFAQ as FaqJson,
  },
  de: {
    payment: dePaymentFAQ as FaqJson,
    security: deSecurityFAQ as FaqJson,
    general: deGeneralFAQ as FaqJson,
    instructions: deInstructionsFAQ as FaqJson,
  },
} as const;

export function BusinessFAQ({
  language,
  className,
  titleClassName,
  topic,
  value,
  onValueChange,
  registerRef,
}: BusinessFAQProps) {
  const { question, answer } = DATA[language][topic];
  const keys = Object.keys(question) as (keyof typeof question)[];
  const questions = keys.map((k) => question[k]);
  const answers = keys.map((k) => answer[k]);

  return (
    <div
      className="flex w-full items-start flex-col"
      role="region"
      aria-label={`${topic} FAQ`}
    >
      <h1
        className={cn(
          "text-lg font-bold border-solid border-b w-full py-4",
          titleClassName
        )}
      >
        {DATA[language][topic].title}
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={value}
        onValueChange={onValueChange}
        aria-label={`${topic} frequently asked questions`}
      >
        {questions.map((_item, index) => {
          const hashId = `business-faq-${topic}-${[index + 1]}`
            .replace(/ /g, "-")
            .toLowerCase();

          return (
            <div key={`faq-${topic}-${index}`} ref={registerRef?.(hashId)}>
              <AccordionItem value={hashId} className={cn(className)}>
                <AccordionTrigger className="group text-start text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <span>{questions[index]}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden text-gray-500 text-start">
                  {answers[index]}
                </AccordionContent>
              </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
}
