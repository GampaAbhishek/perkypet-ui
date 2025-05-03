"use client";

import { useState } from "react";
import "./BreedCard.css";

interface BreedCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  friendliness: number;
  energyLevel: number;
  trainability: number;
}

export default function BreedCard({
  name,
  image,
  description,
  friendliness,
  energyLevel,
  trainability,
}: BreedCardProps) {
  const [isCompared, setIsCompared] = useState(false);

  const toggleCompare = () => {
    setIsCompared(!isCompared);
  };

  return (
    <div className="breed-card">
      <div className="breed-image">
        <img src={image || "/placeholder.svg"} alt={name} />
      </div>
      <div className="breed-details">
        <div className="breed-header">
          <h3>{name}</h3>
          <button
            className={`compare-btn ${isCompared ? "compared" : ""}`}
            onClick={toggleCompare}
          >
            <input type="checkbox" checked={isCompared} readOnly />
            Compare
          </button>
        </div>
        <p className="breed-description">{description}</p>

        <div className="breed-traits">
          <div className="trait">
            <div className="trait-label">Friendliness</div>
            <div className="trait-bar-container">
              <div
                className="trait-bar"
                style={{ width: `${friendliness * 10}%` }}
              ></div>
            </div>
          </div>

          <div className="trait">
            <div className="trait-label">Energy level</div>
            <div className="trait-bar-container">
              <div
                className="trait-bar"
                style={{ width: `${energyLevel * 10}%` }}
              ></div>
            </div>
          </div>

          <div className="trait">
            <div className="trait-label">Trainability</div>
            <div className="trait-bar-container">
              <div
                className="trait-bar"
                style={{ width: `${trainability * 10}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
