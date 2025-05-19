import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import * as enCookieConsent from "@/locales/en/cookie-consent/en.json";
import * as deCookieConsent from "@/locales/de/cookie-consent/de.json";
import { cn } from "@/utils/cn";
import type { Language } from "@/types";

const COOKIE_CONSENT_LOCALIZATION = {
  de: deCookieConsent,
  en: enCookieConsent,
} as const;

const FADE_IN_DURATION = 700;

interface CookieConsentProps {
  show?: boolean;
  language?: Language;
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

  useEffect(() => {
    try {
      setIsOpen(true);

      if (onResolveCookieConsent?.()) {
        setIsOpen(false);
        setTimeout(() => {
          setIsHidden(true);
        }, FADE_IN_DURATION);
      }
    } catch (error) {
      console.error("Error checking cookie consent:", error);
      setIsOpen(false);
      setTimeout(() => {
        setIsHidden(true);
      }, FADE_IN_DURATION);
    }
  }, [onResolveCookieConsent]);

  const accept = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsHidden(true);
    }, FADE_IN_DURATION);
    onAccept?.();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsHidden(true);
    }, FADE_IN_DURATION);
    onDecline?.();
  };

  if (!show) return null;

  return (
    <div
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
          <h1 className="text-base sm:text-lg font-medium">
            {title ?? t?.title}
          </h1>
        </div>
        <div className="p-3 -mt-2">
          <p className="text-xs sm:text-sm text-left text-muted-foreground">
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
