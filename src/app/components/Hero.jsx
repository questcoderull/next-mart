import Link from "next/link";
import React from "react";
import LogingButton from "./LogingButton";
import UserInfo from "./UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import LogOutButton from "./LogOutButton";

const Hero = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="relative w-full h-screen max-w-[2000px] mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Watch Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Elegant Watches</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover timeless designs with unmatched quality and style.
          </p>
          <Link href="/products">
            <button className="mt-6 px-6 py-3 bg-black/70 hover:bg-black text-white font-semibold rounded-xl cursor-pointer">
              Shop Now
            </button>
          </Link>

          {/* authentication impiliment korar somoy dekhar jonno ei code gulu likhecilam. ekhon delete na kore comment kore rekhe dicci, porobortite kaje lagthe pare  */}
          {/* {session?.user ? (
            <LogOutButton></LogOutButton>
          ) : (
            <LogingButton></LogingButton>
          )}

          <p className="text-2xl text-secondary">
            Use info from client component
          </p>
          <UserInfo></UserInfo>
          {JSON.stringify(session)} */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
