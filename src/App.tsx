import { ShopperFAQ } from "../lib/components/faq/shoppers/ShopperFAQ";
import "./index.css";

import { Button } from "@flizpay-de/ui";

function App() {
  return (
    <div className="container mx-auto p-12 flex flex-col justify-center gap-12">
      <h1 className="text-3xl font-bold">FLIZpay UI library</h1>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium">FAQs</h1>
        <ShopperFAQ language="en" topic="security" />
        <ShopperFAQ language="en" topic="cashback" />
        <ShopperFAQ language="en" topic="paying" />
      </section>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl">
        <h1 className="text-2xl font-medium">Buttons</h1>
        <Button className="bg-neon-80 text-white p-2">neon 80</Button>
        <Button className="bg-neon-60 text-white p-2">neon 60</Button>
        <Button className="bg-neon-40 text-white p-2">neon 40</Button>
        <Button className="bg-neon-20 text-white p-2">neon 20</Button>
      </section>
    </div>
  );
}

export default App;
