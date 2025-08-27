import React from "react";

const Loading = () => {
  return (
    <div className="flex gap-2.5 items-center justify-center h-screen text-center">
      <div
        className="animate-spin rounded-full 
                      h-12 w-12 border-4 lg:border-8 md:h-16 md:w-16 lg:h-20 lg:w-20 
                      border-accent border-t-transparent"
      ></div>
      <h4 className="mt-4 text-xl md:text-3xl lg:text-5xl text-accent font-bold">
        Loading...
      </h4>
    </div>
  );
};

export default Loading;
