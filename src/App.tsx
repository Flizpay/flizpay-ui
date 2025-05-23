import "./index.css";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  BusinessFAQ,
  ShopperFAQ,
  BusinessTermsAndConditions,
  ShopperTermsAndConditions,
  PrivacyPolicy,
  CookieConsent,
} from "@flizpay-de/ui";
import { cn } from "../lib/utils/cn";

function App() {
  const [language, setLanguage] = useState("en");
  const [openItem, setOpenItem] = useState<string | undefined>();
  const itemsRefs = useRef<Record<string, HTMLElement | null>>({});

  const registerRef = (id: string) => (node: HTMLElement | null) => {
    itemsRefs.current[id] = node; // add / remove entry automatically
  };

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));

    if (hash) {
      setOpenItem(hash);

      const targetRef = itemsRefs.current[hash];
      if (targetRef) {
        targetRef.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const checkCookieConsent = () => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    return cookieConsent === "true";
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
  };

  return (
    <div className="container mx-auto p-12 flex flex-col justify-center gap-12">
      <CookieConsent
        language="en"
        onResolveCookieConsent={checkCookieConsent}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
      <div className="flex items-center gap-12">
        <h1 className="text-3xl font-bold">FLIZpay UI library</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage("de")}
            className={cn(
              "text-xl font-mediumd rounded-lg cursor-pointer py-1 px-4",
              language === "de" ? "bg-green-400" : "border border-green-400"
            )}
          >
            DE
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={cn(
              "text-xl font-mediumd rounded-lg cursor-pointer py-1 px-4",
              language === "en" ? "bg-green-400" : "border border-green-400"
            )}
          >
            EN
          </button>
        </div>
      </div>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium text-green-400">Privacy Policy</h1>
        <PrivacyPolicy language={language as "en" | "de"} />
      </section>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium text-green-400">
          Businesses Terms and Conditions
        </h1>
        <BusinessTermsAndConditions language={language as "de" | "en"} />
      </section>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium text-green-400">
          Person Terms and Conditions
        </h1>
        <ShopperTermsAndConditions language={language as "de" | "en"} />
      </section>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium text-green-400">Businesses FAQs</h1>
        <BusinessFAQ
          language={language}
          topic="security"
          value={openItem}
          onValueChange={setOpenItem}
          registerRef={registerRef}
        />
        <BusinessFAQ
          language={language}
          topic="general"
          value={openItem}
          onValueChange={setOpenItem}
          registerRef={registerRef}
        />
        <BusinessFAQ
          language={language}
          topic="instructions"
          value={openItem}
          onValueChange={setOpenItem}
          registerRef={registerRef}
        />
        <BusinessFAQ
          language={language}
          topic="payment"
          value={openItem}
          onValueChange={setOpenItem}
          registerRef={registerRef}
        />
      </section>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium text-green-400">Shoppers FAQs</h1>
        <ShopperFAQ
          language={language}
          topic="security"
          value={openItem}
          onValueChange={setOpenItem}
          registerRef={registerRef}
        />
        <ShopperFAQ
          language={language}
          topic="cashback"
          value={openItem}
          onValueChange={setOpenItem}
          registerRef={registerRef}
        />
        <ShopperFAQ
          language={language}
          topic="paying"
          value={openItem}
          onValueChange={setOpenItem}
          registerRef={registerRef}
        />
      </section>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium text-green-400">Buttons</h1>
        <Button className="bg-neon-80 text-white p-2">neon 80</Button>
        <Button className="bg-neon-60 text-white p-2">neon 60</Button>
        <Button className="bg-neon-40 text-white p-2">neon 40</Button>
        <Button className="bg-neon-20 text-white p-2">neon 20</Button>
      </section>
    </div>
  );
}

export default App;
