import Link from "next/link";
import Hero from "./components/hero";
import Newarrival from "./components/newarrival";
import Sale from "./components/sale";
import Youngsfav from "./components/youngsfav";
import Contact from "./components/contact";


export default function Home() {
  return (<main className="mx-10">
   <Hero/>
   <Newarrival/>
   <Sale/>
   <Youngsfav/>
   <Contact/>
    
  </main>
  );
}