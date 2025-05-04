import { ButtonHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX } from 'react';
import { RefAttributes } from 'react';

export declare function BusinessFAQ({ language, className, titleClassName, topic, value, registerRef, }: BusinessFAQProps): JSX.Element;

declare interface BusinessFAQProps extends FAQProps {
    topic: BusinessTopic;
    titleClassName?: string;
    value?: string;
    registerRef?: (id: string) => (node: HTMLElement | null) => void;
}

declare type BusinessTopic = "payment" | "general" | "instructions" | "security";

export declare const Button: ForwardRefExoticComponent<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

declare interface FAQProps {
    className?: string;
    language: string;
}

export declare function ShopperFAQ({ language, className, titleClassName, topic, value, registerRef, }: ShopperFAQProps): JSX.Element;

declare interface ShopperFAQProps extends FAQProps {
    topic: ShopperTopic;
    titleClassName?: string;
    value?: string;
    registerRef?: (id: string) => (node: HTMLElement | null) => void;
}

declare type ShopperTopic = "paying" | "cashback" | "security";

export { }
