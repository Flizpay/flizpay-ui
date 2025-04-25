import { useState } from "react";
import { FaqJson, FAQProps, Language } from "../types";

import * as enFile from "../../../locales/en/shoppers/faq/faq.paying.json";
import * as deFile from "../../../locales/de/shoppers/faq/faq.paying.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Accordion";
import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";

const data: Record<Language, FaqJson> = {
  en: enFile as FaqJson,
  de: deFile as FaqJson,
} as const;

export function PayingFAQ({ language, className }: FAQProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const { question, answer } = data[language];

  const keys = Object.keys(question) as (keyof typeof question)[];
  const questions = keys.map((k) => question[k]);
  const answers = keys.map((k) => answer[k]);

  return (
    <div className="flex w-full items-start flex-col">
      <h1 className="text-lg font-bold">{data[language].title}</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={openItem}
        onValueChange={setOpenItem}
      >
        {questions.map((_item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`} className={cn(className)}>
                <AccordionTrigger className="group text-start text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <span>{questions[index]}</span>
                    <a className="hidden p-1 group-hover:inline"></a>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden text-gray-500 text-start">
                  {answers[index]}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          );
        })}
      </Accordion>
    </div>
  );
}
