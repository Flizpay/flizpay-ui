import { useState } from "react";
import { FaqJson, ShopperFAQProps, ShopperTopic } from "./types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";
import { cn } from "../../utils/cn";

// en
import * as enPayingFAQ from "@locales/en/shoppers/faq/faq.paying.json";
import * as enCashbackFAQ from "@locales/en/shoppers/faq/faq.cashback.json";
import * as enSecurityFAQ from "@locales/en/shoppers/faq/faq.security.json";
// de
import * as dePayingFAQ from "@locales/de/shoppers/faq/faq.paying.json";
import * as deCashbackFAQ from "@locales/de/shoppers/faq/faq.cashback.json";
import * as deSecurityFAQ from "@locales/de/shoppers/faq/faq.security.json";

const DATA: Record<string, Record<ShopperTopic, FaqJson>> = {
  en: {
    paying: enPayingFAQ as FaqJson,
    cashback: enCashbackFAQ as FaqJson,
    security: enSecurityFAQ as FaqJson,
  },
  de: {
    paying: dePayingFAQ as FaqJson,
    cashback: deCashbackFAQ as FaqJson,
    security: deSecurityFAQ as FaqJson,
  },
} as const;

export function ShopperFAQ({
  language,
  className,
  titleClassName,
  topic,
}: ShopperFAQProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);
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
        value={openItem}
        onValueChange={setOpenItem}
        aria-label={`${topic} frequently asked questions`}
      >
        {questions.map((_item, index) => {
          return (
            <div key={`faq-${topic}-${index}`}>
              <AccordionItem value={`item-${index}`} className={cn(className)}>
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
