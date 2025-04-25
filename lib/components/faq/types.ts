export interface FAQProps {
  className?: string;
  language: Language;
  topic: ShopperTopic;
}

export interface FaqJson<Keys extends string = string> {
  title: string;
  question: Record<Keys, string>;
  answer: Record<Keys, string>;
}

export type Language = "en" | "de";

export type ShopperTopic = "paying" | "cashback" | "security";
