"use client";

import { useEffect, useState } from "react";
import BreedFilter from "../BreedFilter/BreedFilter";
import BreedCard from "../BreedCard/BreedCard";
import "./BreedsPage.css";
import breedData from "./breedData";
import BreedBackground from "../../../assets/homebackground.png";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../../firebaseConfig/firebaseConfig";

export default function BreedsPage() {
  const [filters, setFilters] = useState({});
  const [breeds, setBreeds] = useState(breedData);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // In a real app, you would filter the breeds based on the filters
    // For now, we'll just keep the original data
    setBreeds(breedData);
  };

  const db = getFirestore(app);

  async function getPets() {
    try {
      const querySnapshot = await getDocs(collection(db, "pets"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.log("Error fetching pets: ", error);
    }
  }

  useEffect(() => {
    getPets();
  }, []);

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
      <div className="see-more-container">
        <button className="see-more-button">See More</button>
      </div>
      <img src={BreedBackground} className="breedbackground" alt="bg" />
    </div>
  );
}
