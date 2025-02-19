import { Button } from "@flizpay/ui";

function App() {
  return (
    <div className="container mx-auto">
      <h1>FLIZpay UI library</h1>
      <section className="flex flex-col space-y-4 bg-texture rounded-4xl p-4">
        <h3 className="text-white">Buttons</h3>
        <Button className="bg-neon-80 text-white p-2">neon 80</Button>
        <Button className="bg-neon-60 text-white p-2">neon 60</Button>
        <Button className="bg-neon-40 text-white p-2">neon 40</Button>
        <Button className="bg-neon-20 text-white p-2">neon 20</Button>
      </section>
    </div>
  );
}

export default App;
