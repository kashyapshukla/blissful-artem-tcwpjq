import "./styles.css";
import { useState } from "react";

export default function App() {
  const [rating, setrating] = useState(0);
  const [temprating, settemprating] = useState(0);

  let stars = new Array(5).fill("⭐");

  const handleclick = (index) => {
    setrating(index);
  };

  return (
    <div className="star-container">
      {stars.map((item, index) => {
        let isActive =
          (rating || temprating) && (index < rating || index < temprating);
        let element_color;
        if (isActive) {
          element_color = "Green";
        } else {
          element_color = "gray";
        }

        return (
          <div
            className="star"
            key={index}
            style={{
              color: element_color,
              filter: `${isActive ? "grayscale(0%)" : "grayscale(100%)"}`,
            }}
            onMouseEnter={() => settemprating(index + 1)}
            onMouseLeave={() => settemprating(0)}
            onClick={() => handleclick(index + 1)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
