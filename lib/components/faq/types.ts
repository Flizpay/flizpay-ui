interface FAQProps {
  className?: string;
  language: string;
}

export interface ShopperFAQProps extends FAQProps {
  topic: ShopperTopic;
  titleClassName?: string;
  value?: string;
  onValueChange: React.Dispatch<React.SetStateAction<string | undefined>>;
  registerRef?: (id: string) => (node: HTMLElement | null) => void;
}
export interface BusinessFAQProps extends FAQProps {
  topic: BusinessTopic;
  titleClassName?: string;
  value?: string;
  onValueChange: React.Dispatch<React.SetStateAction<string | undefined>>;
  registerRef?: (id: string) => (node: HTMLElement | null) => void;
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
