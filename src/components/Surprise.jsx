import Confetti from "react-confetti";
import { useState } from "react";

export default function Surprise() {
  const [isSurprise, setIsSurprise] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsSurprise(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Click for Surprise!
      </button>
      {isSurprise && <Confetti />}
    </div>
  );
}
