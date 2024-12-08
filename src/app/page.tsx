import Image from "next/image";
import Hero from "@/components/Hero";
import Aboutus from "@/components/Aboutus";
import About from "./about/page";
export default function Home() {
  return (
    <div>
      <Hero/>
      <Aboutus/>
      <About/>
    </div>
  
  );
}
