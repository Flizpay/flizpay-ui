interface FAQProps {
  className?: string;
  language: string;
}

export interface ShopperFAQProps extends FAQProps {
  topic: ShopperTopic;
}
export interface BusinessFAQProps extends FAQProps {
  topic: BusinessTopic;
}

/**
+ * Interface for FAQ JSON file structure.
+ * @template Keys - The keys for question and answer records
+ */
export interface FaqJson<Keys extends string = string> {
  title: string;
  question: Record<Keys, string>;
  answer: Record<Keys, string>;
}

export type ShopperTopic = "paying" | "cashback" | "security";

export type BusinessTopic = "payment" | "general" | "instructions" | "security";
