"use client";
import { signIn } from "next-auth/react";

import React from "react";

const LogingButton = () => {
  return (
    <div>
      <button className="cursor-pointer" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
};

export default LogingButton;
