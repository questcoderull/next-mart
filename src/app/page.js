import Image from "next/image";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <BestSellers></BestSellers>
    </>
  );
}
