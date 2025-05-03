import { useState } from "react";
import "./BreedFilter.css";

interface BreedFilterProps {
  onFilterChange: (filters: any) => void;
}

export default function BreedFilter({ onFilterChange }: BreedFilterProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [selectedGroups, setSelectedGroups] = useState<string[]>([
    "Terrier Group",
  ]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleGroupChange = (group: string) => {
    setSelectedGroups((prev) => {
      if (prev.includes(group)) {
        return prev.filter((g) => g !== group);
      } else {
        return [...prev, group];
      }
    });
  };

  const handleSubmit = () => {
    onFilterChange({
      groups: selectedGroups,
    });
  };

  const handleClearAll = () => {
    setSelectedGroups([]);
    setExpandedSections({});
    onFilterChange({});
  };

  return (
    <>
      <div className="breed-filter">
        <div className="filter-header">
          <h3>Filter</h3>
          <button className="clear-all-btn" onClick={handleClearAll}>
            Clear all
          </button>
        </div>
      </div>
      <div className="filter-content">
        <div className="filter-section">
          <label>Find By Breed Name</label>
          <div className="select-wrapper">
            <select className="breed-select">
              <option>Select a Breed</option>
            </select>
          </div>
        </div>

        <div className="filter-section filter-group-section">
          <label>Group</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="sporting-group"
                checked={selectedGroups.includes("Sporting Group")}
                onChange={() => handleGroupChange("Sporting Group")}
              />
              <label htmlFor="sporting-group">Sporting Group</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="hound-group"
                checked={selectedGroups.includes("Hound Group")}
                onChange={() => handleGroupChange("Hound Group")}
              />
              <label htmlFor="hound-group">Hound Group</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="terrier-group"
                checked={selectedGroups.includes("Terrier Group")}
                onChange={() => handleGroupChange("Terrier Group")}
              />
              <label htmlFor="terrier-group">Terrier Group</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="toy-group"
                checked={selectedGroups.includes("Toy Group")}
                onChange={() => handleGroupChange("Toy Group")}
              />
              <label htmlFor="toy-group">Toy Group</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="herding-group"
                checked={selectedGroups.includes("Herding Group")}
                onChange={() => handleGroupChange("Herding Group")}
              />
              <label htmlFor="herding-group">Herding Group</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="foundation-stock"
                checked={selectedGroups.includes("Foundation Stock Service")}
                onChange={() => handleGroupChange("Foundation Stock Service")}
              />
              <label htmlFor="foundation-stock">Foundation Stock Service</label>
            </div>
          </div>
        </div>

        {[
          "Barking level",
          "Characteristics",
          "Coat type",
          "Shedding",
          "Activity level",
          "Size",
          "Trainability",
          "Friendliness",
          "Saved",
        ].map((section) => (
          <div key={section} className="filter-section expandable-section">
            <div
              className="section-header"
              onClick={() => toggleSection(section)}
            >
              <label>{section}</label>
              <button className="expand-btn">
                {expandedSections[section] ? "-" : "+"}
              </button>
            </div>
            {expandedSections[section] && (
              <div className="section-content">
                {/* Content for each section would go here */}
                <p>Options for {section}</p>
              </div>
            )}
          </div>
        ))}

        <div className="filter-actions">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
