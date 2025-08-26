import Link from "next/link";
import React from "react";

const NotFound404 = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-black text-accent mb-3">
          Not found page_
        </h1>

        <Link href="/">
          <button className="btn btn-secondary rounded-lg">Return Home_</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
