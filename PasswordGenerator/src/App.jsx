import { useEffect, useRef, useState } from "react";
import React from "react";
import { Copy, RefreshCw } from "lucide-react"; // ✅ icons
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  function GeneratePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    let pass = "";
    for (let i = 0; i < length; i++) {
      let str = lowerCase;
      if (includeUppercase) str += upperCase;
      if (includeNumbers) str += numbers;
      if (includeSymbols) str += symbols;
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }

  useEffect(() => {
    const passwordInput = document.querySelector(".password-input");
    if (passwordInput) passwordInput.value = password;
  }, [password]);

  const passwordRef = useRef(null);
  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  // ✅ Password strength logic
  const getStrength = () => {
    let score = 0;
    if (length >= 12) score++;
    if (includeUppercase) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;
    return score;
  };

  const strength = getStrength();
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"];
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];

  return (
<div className="h-screen m-0 p-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-white text-center mb-6 flex items-center justify-center gap-2">
          🔑 Password Generator
        </h1>

        {/* Password display */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Generated password"
            className="password-input flex-1 px-4 py-2 rounded-l-lg border border-gray-600 bg-black/40 text-white outline-none focus:ring-2 focus:ring-purple-400"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 transition flex items-center gap-1"
          >
            <Copy size={16} /> Copy
          </button>
        </div>

        {/* Generate button */}
        <button
          onClick={() =>
            GeneratePassword(length, includeUppercase, includeNumbers, includeSymbols)
          }
          className="w-full mb-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
        >
          <RefreshCw size={16} /> Generate Password
        </button>

        {/* Strength indicator */}
        {password && (
          <div className="mb-6">
            <div className="h-2 w-full rounded-full bg-gray-700 overflow-hidden">
              <div
                className={`h-2 ${strengthColors[strength - 1] || "bg-gray-500"}`}
                style={{ width: `${(strength / 4) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Strength:{" "}
              <span className="font-bold text-white">
                {strengthLabels[strength - 1] || "Very Weak"}
              </span>
            </p>
          </div>
        )}

        {/* Controls */}
        <div className="space-y-4 text-gray-200">
          {/* Length slider */}
          <div>
            <label className="block font-medium mb-1">
              Password Length: <span className="font-bold">{length}</span>
            </label>
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full cursor-pointer accent-purple-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase((prev) => !prev)}
              className="h-4 w-4 accent-purple-500"
            />
            <label>Include Uppercase Letters</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
              className="h-4 w-4 accent-purple-500"
            />
            <label>Include Numbers</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((prev) => !prev)}
              className="h-4 w-4 accent-purple-500"
            />
            <label>Include Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
