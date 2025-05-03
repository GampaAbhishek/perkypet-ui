"use client";

import { useState } from "react";
import BreedFilter from "../BreedFilter/BreedFilter";
import BreedCard from "../BreedCard/BreedCard";
import "./BreedsPage.css";
import breedData from "./breedData";

export default function BreedsPage() {
  const [filters, setFilters] = useState({});
  console.log("filters: ", filters);
  const [breeds, setBreeds] = useState(breedData);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // In a real app, you would filter the breeds based on the filters
    // For now, we'll just keep the original data
    setBreeds(breedData);
  };

  return (
    <div className="breeds-page">
      <div className="breeds-container">
        <div className="filter-sidebar">
          <BreedFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="breeds-grid">
          {breeds.map((breed) => (
            <BreedCard
              id={breed.id}
              name={breed.name}
              image={breed.image}
              description={breed.description}
              friendliness={breed.friendliness}
              energyLevel={breed.energyLevel}
              trainability={breed.trainability}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
