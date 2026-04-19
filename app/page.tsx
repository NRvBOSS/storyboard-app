"use client";

import FrameList from "../components/FrameList";

export default function Home() {
  // localStorage-dan oxu

  // localStorage-a yaz

  return (
    <div className="p-6">
      <button className="bg-black text-white px-4 py-2 rounded">
        + Add Frame
      </button>

      <FrameList />
    </div>
  );
}
