import { ClassValue } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX } from 'react';
import { RefAttributes } from 'react';
import { TVReturnType } from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

export declare function BusinessFAQ({ language, className, titleClassName, topic, value, onValueChange, registerRef, }: BusinessFAQProps): JSX.Element;

declare interface BusinessFAQProps extends FAQProps {
    topic: BusinessTopic;
    titleClassName?: string;
    value?: string;
    onValueChange: React.Dispatch<React.SetStateAction<string | undefined>>;
    registerRef?: (id: string) => (node: HTMLElement | null) => void;
}

export declare function BusinessTermsAndConditions({ language, className, containerClassName, }: TermsAndConditionsProps): JSX.Element;

declare type BusinessTopic = "payment" | "general" | "instructions" | "security";

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?: VariantProps<typeof buttonVariants>;
    loading?: boolean;
    asChild?: boolean;
}

export declare const buttonVariants: TVReturnType<    {
intent: {
primary: string;
secondary: string;
tertiary: string;
icon: string;
nav: string;
error: string;
};
size: {
xs: string;
sm: string;
lg: string;
base: string;
};
width: {
fit: string;
fluid: string;
};
}, undefined, "relative inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium leading-5 shadow-sm outline-none transition duration-150 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-450 disabled:text-blue-40 disabled:shadow-none data-[loading=true]:border-slate-200 data-[loading=true]:bg-slate-100 data-[loading=true]:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 [&:active:not(:disabled)]:scale-[0.98] [&:active:not(:disabled)]:opacity-90", {
intent: {
primary: string;
secondary: string;
tertiary: string;
icon: string;
nav: string;
error: string;
};
size: {
xs: string;
sm: string;
lg: string;
base: string;
};
width: {
fit: string;
fluid: string;
};
}, undefined, TVReturnType<    {
intent: {
primary: string;
secondary: string;
tertiary: string;
icon: string;
nav: string;
error: string;
};
size: {
xs: string;
sm: string;
lg: string;
base: string;
};
width: {
fit: string;
fluid: string;
};
}, undefined, "relative inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium leading-5 shadow-sm outline-none transition duration-150 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-450 disabled:text-blue-40 disabled:shadow-none data-[loading=true]:border-slate-200 data-[loading=true]:bg-slate-100 data-[loading=true]:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 [&:active:not(:disabled)]:scale-[0.98] [&:active:not(:disabled)]:opacity-90", unknown, unknown, undefined>>;

/**
 * @description
 * A utility function to merge tailwind classes.
 * Used for conditional merging of Tailwind CSS classes.
 * @param inputs - A variadic list of Tailwind CSS class names or `undefined`/`false` values
 * @returns A string of tailwind classes.
 * @example
 * cn('text-red-500', 'text-red-600') => text-red-600
 * cn('text-red-500', undefined, 'bg-red-500')
 * **/
export declare function cn(...inputs: ClassValue[]): string;

/**
 * Displays a dismissible cookie consent banner.
 *
 * The banner fades out once the user accepts or declines the consent
 * request, or when {@link CookieConsentProps.onResolveCookieConsent}
 * indicates that consent was already handled.
 *
 * @prop `language` - Language for localization (default: `de`).
 * @prop `show` - Whether to show the banner (default: `true`).
 * @prop `className` - Additional class names for the banner.
 * @prop `acceptButtonClassName` - Additional class names for the accept button.
 * @prop `declineButtonClassName` - Additional class names for the decline button.
 * @prop `title` - Custom title for the banner.
 * @prop `description` - Custom description for the banner.
 * @prop `acceptButtonText` - Custom text for the accept button.
 * @prop `declineButtonText` - Custom text for the decline button.
 * @prop `onAccept` - Callback when the user accepts the consent.
 * @prop `onDecline` - Callback when the user declines the consent.
 * @prop `onResolveCookieConsent` - Callback to check if consent was already handled.
 * @returns A cookie consent banner UI component.
 */
export declare function CookieConsent({ show, language, className, acceptButtonClassName, declineButtonClassName, title, description, acceptButtonText, declineButtonText, onAccept, onDecline, onResolveCookieConsent, }: CookieConsentProps): JSX.Element | null;

/**
 * Props for the {@link CookieConsent} component.
 */
declare interface CookieConsentProps {
    language: Language_3;
    show?: boolean;
    className?: string;
    acceptButtonClassName?: string;
    declineButtonClassName?: string;
    title?: string;
    description?: string;
    acceptButtonText?: string;
    declineButtonText?: string;
    onAccept?: () => void;
    onDecline?: () => void;
    onResolveCookieConsent?: () => boolean;
}

declare const DATA: {
    readonly en: {
        page: {
            title: {
                one: string;
                two: string;
            };
            subtitle: {
                one: string;
                two: string;
            };
        };
        background: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
            };
        };
        contract: {
            title: string;
            letterText: {
                one: string;
                two: string;
            };
            numberText: {
                one: string;
                two: string;
            };
            bottomLetterText: {
                one: string;
            };
        };
        contractualPartner: {
            title: string;
            letterText: {
                one: string;
                two: string;
            };
        };
        serviceDescription: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
            };
        };
        obligations: {
            title: string;
            letterText: {
                one: string;
            };
            numberText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
            };
        };
        changes: {
            title: string;
            letterText: {
                one: string;
                two: string;
            };
            numberText: {
                one: string;
                two: string;
                three: string;
            };
        };
        compensationAndBilling: {
            title: string;
            letterText: {
                one: string;
            };
        };
        rightsOfUse: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
            };
        };
        warranty: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
            };
        };
        liability: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
            };
        };
        dataProtection: {
            title: string;
            text: {
                one: string;
            };
        };
        contractTermination: {
            title: string;
            letterText: {
                one: string;
            };
            text: {
                one: string;
            };
            bottomLetterText: {
                one: string;
                two: string;
            };
        };
        finalProvisions: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
            };
        };
    };
    readonly de: {
        page: {
            title: {
                one: string;
                two: string;
            };
            subtitle: {
                one: string;
                two: string;
            };
        };
        background: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
            };
        };
        contract: {
            title: string;
            letterText: {
                one: string;
                two: string;
            };
            numberText: {
                one: string;
                two: string;
            };
            bottomLetterText: {
                one: string;
            };
        };
        contractualPartner: {
            title: string;
            letterText: {
                one: string;
                two: string;
            };
        };
        serviceDescription: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
            };
        };
        obligations: {
            title: string;
            letterText: {
                one: string;
            };
            numberText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
            };
        };
        changes: {
            title: string;
            letterText: {
                one: string;
                two: string;
            };
            numberText: {
                one: string;
                two: string;
                three: string;
            };
        };
        compensationAndBilling: {
            title: string;
            letterText: {
                one: string;
            };
        };
        rightsOfUse: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
            };
        };
        warranty: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
            };
        };
        liability: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
            };
        };
        dataProtection: {
            title: string;
            text: {
                one: string;
            };
        };
        contractTermination: {
            title: string;
            letterText: {
                one: string;
            };
            text: {
                one: string;
            };
            bottomLetterText: {
                one: string;
                two: string;
            };
        };
        finalProvisions: {
            title: string;
            letterText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
            };
        };
    };
};

declare const DATA_2: {
    readonly en: {
        title: {
            one: string;
            two: string;
        };
        subtitle: string;
        scope: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        conditions: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        registration: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
            };
        };
        ourServices: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
            };
        };
        termsOfUse: {
            title: string;
            topText: {
                one: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
            };
        };
        limits: {
            title: string;
            topText: {
                one: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
            };
            bottomText: {
                one: string;
                two: string;
                three: string;
            };
        };
        terminationOfContract: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
            };
        };
        applicableLaw: {
            title: string;
            text: {
                one: string;
            };
        };
    };
    readonly de: {
        title: {
            one: string;
            two: string;
        };
        subtitle: string;
        scope: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        conditions: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        registration: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
            };
        };
        ourServices: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
            };
        };
        termsOfUse: {
            title: string;
            topText: {
                one: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
            };
        };
        limits: {
            title: string;
            topText: {
                one: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
            };
            bottomText: {
                one: string;
                two: string;
                three: string;
            };
        };
        terminationOfContract: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
            };
        };
        applicableLaw: {
            title: string;
            text: {
                one: string;
            };
        };
    };
};

declare interface FAQProps {
    className?: string;
    language: string;
}

declare type Language = keyof typeof DATA;

declare type Language_2 = keyof typeof DATA_2;

declare type Language_3 = "en" | "de";

export declare function PrivacyPolicy({ language, className, containerClassName, }: PrivacyPolicyProps): JSX.Element;

declare interface PrivacyPolicyProps {
    language: Language_3;
    className?: string;
    containerClassName?: string;
}

export declare function ShopperFAQ({ language, className, titleClassName, topic, value, onValueChange, registerRef, }: ShopperFAQProps): JSX.Element;

declare interface ShopperFAQProps extends FAQProps {
    topic: ShopperTopic;
    titleClassName?: string;
    value?: string;
    onValueChange: React.Dispatch<React.SetStateAction<string | undefined>>;
    registerRef?: (id: string) => (node: HTMLElement | null) => void;
}

export declare function ShopperTermsAndConditions({ language, className, containerClassName, }: ShopperTermsAndConditionsProps): JSX.Element;

declare interface ShopperTermsAndConditionsProps {
    language: Language_2;
    className?: string;
    containerClassName?: string;
}

declare type ShopperTopic = "paying" | "cashback" | "security";

declare interface TermsAndConditionsProps {
    language: Language;
    className?: string;
    containerClassName?: string;
}

export { }
