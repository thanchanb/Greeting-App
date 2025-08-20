import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const compliments = [
    "You're awesome!",
    "Keep shining!",
    "You rock!",
    "Hackathon champion!",
    "Coding legend!"
  ];

  const handleGreet = () => {
    if (name.trim() === "") {
      setGreeting("Please enter your name first!");
    } else {
      const random = compliments[Math.floor(Math.random() * compliments.length)];
      setGreeting(`Hello, ${name}! ${random}`);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000", // Black background
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#90EE90", // Light green letters
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "30px",
          textShadow: "2px 2px #004d00",
        }}
      >
        ✨ My Greeting App ✨
      </h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "14px",
          fontSize: "16px",
          borderRadius: "12px",
          border: "2px solid #90EE90",
          marginRight: "10px",
          width: "280px",
          backgroundColor: "#000",
          color: "#90EE90",
          transition: "all 0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#00FF00")}
        onBlur={(e) => (e.target.style.borderColor = "#90EE90")}
      />

      <button
        onClick={handleGreet}
        style={{
          padding: "14px 30px",
          fontSize: "16px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#006400", // Dark green button
          color: "#90EE90", // Light green text
          fontWeight: "bold",
          marginTop: "10px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "4px 4px 15px rgba(0,0,0,0.7)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.5)";
        }}
      >
        🎉 Greet Me 🎉
      </button>

      {greeting && (
        <div
          style={{
            marginTop: "40px",
            padding: "20px 30px",
            backgroundColor: "#003300", // Dark green card
            borderRadius: "15px",
            fontSize: "1.8rem",
            fontWeight: "bold",
            boxShadow: "3px 3px 15px rgba(0,0,0,0.7)",
            animation: "fadeIn 1s ease",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#FFFF00" }}>{greeting}</span> {/* Yellow greeting text */}
        </div>
      )}

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default App;