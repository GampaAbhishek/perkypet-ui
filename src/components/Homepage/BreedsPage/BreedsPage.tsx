"use client";

import { useState } from "react";
import BreedFilter from "../BreedFilter/BreedFilter";
import BreedCard from "../BreedCard/BreedCard";
import "./BreedsPage.css";

// Mock data for breeds
const breedData = [
  {
    id: "1",
    name: "Affenpinscher",
    image: "/assets/cat1.jpg",
    description:
      "Loyal, curious, and famously amusing, this almost-human toy dog is fearless out of all proportio...",
    friendliness: 7,
    energyLevel: 8,
    trainability: 6,
  },
  {
    id: "2",
    name: "Affenpinscher",
    image: "/assets/cat2.jpg",
    description:
      "Loyal, curious, and famously amusing, this almost-human toy dog is fearless out of all proportio...",
    friendliness: 8,
    energyLevel: 7,
    trainability: 7,
  },
  {
    id: "3",
    name: "Affenpinscher",
    image: "/assets/cat3.jpg",
    description:
      "Loyal, curious, and famously amusing, this almost-human toy dog is fearless out of all proportio...",
    friendliness: 6,
    energyLevel: 9,
    trainability: 5,
  },
  {
    id: "4",
    name: "Affenpinscher",
    image: "/assets/cat4.jpg",
    description:
      "Loyal, curious, and famously amusing, this almost-human toy dog is fearless out of all proportio...",
    friendliness: 9,
    energyLevel: 6,
    trainability: 8,
  },
];

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
