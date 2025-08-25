import Link from "next/link";
import React from "react";

const notFound404 = () => {
  return (
    <div>
      <h1 className="text-2xl font-black text-accent text-center mb-3">
        Not found page_
      </h1>

      <Link href="/">
        <button className="btn btn-secondary rounded-lg">Return Home_</button>
      </Link>
    </div>
  );
};

export default notFound404;
