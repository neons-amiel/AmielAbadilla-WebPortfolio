// Background.jsx
import React from "react";
import "/src/Background.css"; // we'll put your CSS here

function Background() {
  return (
    <div className="background">
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}

export default Background;
