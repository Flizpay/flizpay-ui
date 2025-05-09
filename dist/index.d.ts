import { ButtonHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX } from 'react';
import { RefAttributes } from 'react';

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

export declare const Button: ForwardRefExoticComponent<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

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

declare const DATA_3: {
    readonly en: {
        page: {
            title: string;
        };
        introduction: {
            title: string;
            topText: {
                one: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
            };
            bottomText: {
                one: string;
            };
        };
        contact: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        dataProcessing: {
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
        };
        dataProcessingOutsideEEA: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        storagePeriod: {
            title: string;
            topText: {
                one: string;
            };
        };
        rights: {
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
                six: string;
            };
            bottomText: {
                one: string;
            };
        };
        obligation: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        automaticDecisionMaking: {
            title: string;
            topText: {
                one: string;
            };
        };
        makingContact: {
            title: string;
            topText: {
                one: string;
            };
        };
        surveys: {
            title: string;
            topText: {
                one: string;
            };
        };
        marketingCommunication: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
            };
        };
        dataOnOurWebsite: {
            title: string;
        };
        noteForVisitorsFromDE: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
            subtext: {
                one: string;
                two: string;
            };
            bottomText: {
                one: string;
            };
        };
        useOfTheWebsite: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
                eight: string;
                nine: string;
                ten: string;
            };
            bottomText: {
                one: string;
            };
        };
        webHosting: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        emailContact: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
            };
        };
        jobAdvertisements: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
            };
        };
        thirdPartyProviders: {
            title: string;
        };
        sentry: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
            };
        };
        mongoDBAtlas: {
            title: string;
            topText: {
                one: string;
            };
        };
        awsCloud: {
            title: string;
            topText: {
                one: string;
            };
        };
        GoogleAnalytics: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
            };
        };
        GooglePlaces: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
            };
        };
        dataProcessingDuringUsageOfFliz: {
            title: string;
        };
        paymentInitiation: {
            title: string;
            topText: {
                one: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
            };
            bottomText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
                eight: string;
            };
        };
        dataProcessingOnSocialMedia: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        linkedin: {
            title: string;
            topText: {
                one: string;
            };
        };
        changesToThisDocument: {
            title: string;
            topText: {
                one: string;
            };
        };
        questionsAndComments: {
            title: string;
            topText: {
                one: string;
            };
        };
    };
    readonly de: {
        page: {
            title: string;
        };
        introduction: {
            title: string;
            topText: {
                one: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
            };
            bottomText: {
                one: string;
            };
        };
        contact: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        dataProcessing: {
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
        };
        dataProcessingOutsideEEA: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        storagePeriod: {
            title: string;
            topText: {
                one: string;
            };
        };
        rights: {
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
                six: string;
            };
            bottomText: {
                one: string;
            };
        };
        obligation: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        automaticDecisionMaking: {
            title: string;
            topText: {
                one: string;
            };
        };
        makingContact: {
            title: string;
            topText: {
                one: string;
            };
        };
        surveys: {
            title: string;
            topText: {
                one: string;
            };
        };
        marketingCommunication: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
            };
        };
        dataOnOurWebsite: {
            title: string;
        };
        noteForVisitorsFromDE: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
            subtext: {
                one: string;
                two: string;
            };
            bottomText: {
                one: string;
            };
        };
        useOfTheWebsite: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
                eight: string;
                nine: string;
                ten: string;
            };
            bottomText: {
                one: string;
            };
        };
        webHosting: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        emailContact: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
            };
        };
        jobAdvertisements: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
            };
        };
        thirdPartyProviders: {
            title: string;
        };
        sentry: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
            };
        };
        mongoDBAtlas: {
            title: string;
            topText: {
                one: string;
            };
        };
        awsCloud: {
            title: string;
            topText: {
                one: string;
            };
        };
        GoogleAnalytics: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
            };
        };
        GooglePlaces: {
            title: string;
            topText: {
                one: string;
                two: string;
                three: string;
                four: string;
            };
        };
        dataProcessingDuringUsageOfFliz: {
            title: string;
        };
        paymentInitiation: {
            title: string;
            topText: {
                one: string;
            };
            subtext: {
                one: string;
                two: string;
                three: string;
            };
            bottomText: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
                eight: string;
            };
        };
        dataProcessingOnSocialMedia: {
            title: string;
            topText: {
                one: string;
                two: string;
            };
        };
        linkedin: {
            title: string;
            topText: {
                one: string;
            };
        };
        changesToThisDocument: {
            title: string;
            topText: {
                one: string;
            };
        };
        questionsAndComments: {
            title: string;
            topText: {
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

declare type Language_3 = keyof typeof DATA_3;

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
