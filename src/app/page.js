import Image from "next/image";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import AboutPage from "./components/abour-for-home";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Hero></Hero>
      <BestSellers></BestSellers>
      <AboutPage></AboutPage>
    </>
  );
}
