import { ButtonHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX } from 'react';
import { RefAttributes } from 'react';

export declare function BusinessFAQ({ language, className, topic }: BusinessFAQProps): JSX.Element;

declare interface BusinessFAQProps extends FAQProps {
    topic: BusinessTopic;
}

declare type BusinessTopic = "payment" | "general" | "instructions" | "security";

export declare const Button: ForwardRefExoticComponent<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

declare interface FAQProps {
    className?: string;
    language: string;
}

export declare function ShopperFAQ({ language, className, topic }: ShopperFAQProps): JSX.Element;

declare interface ShopperFAQProps extends FAQProps {
    topic: ShopperTopic;
}

declare type ShopperTopic = "paying" | "cashback" | "security";

export { }
