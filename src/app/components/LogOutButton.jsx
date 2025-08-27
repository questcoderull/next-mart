"use client";

import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <>
      <button onClick={() => signOut()}>LogOut</button>
    </>
  );
};

export default LogOutButton;
