import { useState } from "react";
import { BusinessFAQ } from "../lib/components/faq/BusinessFAQ";
import { ShopperFAQ } from "../lib/components/faq/ShopperFAQ";
import "./index.css";

import { Button } from "@flizpay-de/ui";
import { cn } from "../lib/utils/cn";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="container mx-auto p-12 flex flex-col justify-center gap-12">
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
        <h1 className="text-2xl font-medium text-green-400">Businesses FAQs</h1>
        <BusinessFAQ language={language} topic="security" />
        <BusinessFAQ language={language} topic="general" />
        <BusinessFAQ language={language} topic="instructions" />
        <BusinessFAQ language={language} topic="payment" />
      </section>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium text-green-400">Shoppers FAQs</h1>
        <ShopperFAQ language={language} topic="security" />
        <ShopperFAQ language={language} topic="cashback" />
        <ShopperFAQ language={language} topic="paying" />
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
