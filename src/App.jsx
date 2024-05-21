import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(50);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500 // Offset to trigger earlier
      ) {
        setLoading(true);
        setTimeout(() => {
          setCount((prevCount) => prevCount + 10);
          setLoading(false);
        }, 500); // Simulate loading delay
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(
      <div key={i + 1} className="item">
        {i + 1}
      </div>,
    );
  }

  return (
    <main>
      {elements}
      {loading && <div className="loading">Loading...</div>}
    </main>
  );
}
