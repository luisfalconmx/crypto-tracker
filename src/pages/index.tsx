import Image from "next/image";
import { CoinCard } from "@/components";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto px-6 py-16">
      <section className="bg-midnight py-12 px-10 rounded-xl">
        <h1 className="text-3xl font-bold mb-6">
          Cryptocurrency Prices by Market Cap
        </h1>
        <p className="text-charcoal max-w-screen-md mb-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          libero maiores aliquid vitae necessitatibus quisquam placeat nemo odit
          dolores
        </p>

        <div className="grid grid-cols-4 gap-x-6">
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </div>
      </section>
    </main>
  );
}
