import React from "react";

function Loading({ text }) {
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      <div className="w-12 h-12 rounded-full animate-spin border-t-4 border-(--primary-color)">
      </div>

      <h3 className="text-2xl font-semibold">{text}</h3>
    </div>
  );
}

export default Loading;
