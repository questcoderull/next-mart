import Image from "next/image";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import AboutPage from "./components/abour-for-home";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <BestSellers></BestSellers>
      <AboutPage></AboutPage>
    </>
  );
}
