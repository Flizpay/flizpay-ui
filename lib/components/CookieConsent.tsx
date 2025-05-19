import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import * as enCookieConsent from "@/locales/en/cookie-consent/en.json";
import * as deCookieConsent from "@/locales/de/cookie-consent/de.json";
import { cn } from "@/utils/cn";
import type { Language } from "@/types";

const COOKIE_CONSENT_LOCALIZATION = {
  de: deCookieConsent,
  en: enCookieConsent,
} as const;

const FADE_DURATION = 700;

/**
 * Props for the {@link CookieConsent} component.
 */
interface CookieConsentProps {
  language: Language;
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
export function CookieConsent({
  show = true,
  language = "de",
  className,
  acceptButtonClassName,
  declineButtonClassName,
  title,
  description,
  acceptButtonText,
  declineButtonText,
  onAccept,
  onDecline,
  onResolveCookieConsent,
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const t = COOKIE_CONSENT_LOCALIZATION[language];

  const fadeOut = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsHidden(true);
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    try {
      setIsOpen(true);

      if (onResolveCookieConsent?.()) {
        fadeOut();
      }
    } catch (error) {
      console.error("Error checking cookie consent:", error);
      fadeOut();
    }
  }, [onResolveCookieConsent, fadeOut]);

  const accept = () => {
    fadeOut();
    onAccept?.();
  };

  const decline = () => {
    fadeOut();
    onDecline?.();
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 p-4 sm:p-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        isOpen
          ? "transition-[opacity,transform] translate-y-0 opacity-100"
          : "transition-[opacity,transform] translate-y-8 opacity-0",
        isHidden && "hidden",
        className
      )}
    >
      <div className="m-0 sm:m-3 dark:bg-gray-500 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-3">
          <h1
            id="cookie-consent-title"
            className="text-base sm:text-lg font-medium"
          >
            {title ?? t?.title}
          </h1>
        </div>
        <div className="p-3 -mt-2">
          <p
            id="cookie-consent-description"
            className="text-xs sm:text-sm text-left text-muted-foreground"
          >
            {description ?? t?.description}
          </p>
        </div>
        <div className="p-3 flex flex-col sm:flex-row items-center gap-2 mt-2">
          <Button
            variant={{ intent: "primary" }}
            onClick={accept}
            className={cn(
              "w-full h-7 sm:h-9 text-xs sm:text-sm rounded-full",
              acceptButtonClassName
            )}
          >
            {acceptButtonText ?? t?.button?.accept}
          </Button>
          <Button
            variant={{ intent: "secondary" }}
            onClick={decline}
            className={cn(
              "w-full h-7 sm:h-9 text-xs sm:text-sm rounded-full border-navy-blue border-[1px]",
              declineButtonClassName
            )}
          >
            {declineButtonText ?? t?.button?.decline}
          </Button>
        </div>
      </div>
    </div>
  );
}
