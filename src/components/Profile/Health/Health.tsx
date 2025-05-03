import "./Health.css";
import { useState } from "react";
import Lock from "../../../assets/lock.png";
import VetDoc from "../../../assets/docter_pet.png";
import BodyImage from "../../../assets/body-vetdoc.png";
import NutritionImage from "../../../assets/nutrition-vetdoc.png";

const tabs = ["Prevention", "Body", "Nutrition"];

type HealthTips = {
  [key: string]: { label: string; description: string }[];
};

const healthTips: HealthTips = {
  Prevention: [
    {
      label: "Vet Check-Ups",
      description:
        "Annual exams to monitor for common breed issues like patellar luxation, dental disease, and eye conditions.",
    },
    {
      label: "Dental Care",
      description:
        "Brush teeth daily, provide dental chews, and schedule professional cleanings.",
    },
    {
      label: "Weight Management",
      description:
        "Feed a high-quality, portion-controlled diet to prevent obesity and joint strain.",
    },
    {
      label: "Exercise",
      description:
        "Regular walks and play to keep them fit without overexerting their joints.",
    },
    {
      label: "Grooming",
      description:
        "Weekly brushing, ear cleaning, and nail trimming to maintain hygiene.",
    },
    {
      label: "Parasite Prevention",
      description: "Use year-round flea, tick, and heartworm preventatives.",
    },
    {
      label: "Harness Use",
      description:
        "Use a harness instead of a collar to protect their delicate trachea.",
    },
    {
      label: "Eye and Joint Checks",
      description:
        "Monitor for symptoms of Progressive Retinal Atrophy (PRA) and luxating patellas.",
    },
  ],

  Body: [
    {
      label: "Skin & Coat",
      description:
        "Monitor for pruritus or erythema, as Toy Fox Terriers can exhibit atopic dermatitis or flea allergy dermatitis; recommend fatty acid supplementation.",
    },
    {
      label: "Musculoskeletal",
      description:
        "Screen for patellar luxation and Legg-Calvé-Perthes disease during annual exams, and limit high-impact activities to prevent microtrauma to the joints.",
    },
    {
      label: "Respiratory ",
      description:
        "Assess for tracheal collapse or brachycephalic airway syndrome, and avoid respiratory irritants like smoke or aerosols.",
    },
    {
      label: "Cardiovascular",
      description:
        "Perform routine auscultation for murmurs indicative of mitral valve disease, and recommend annual cardiac screening after age 5.",
    },
    {
      label: "Digestive ",
      description:
        "Advise small, frequent meals to manage hypoglycemia risk in small breeds and monitor for signs of gastroenteritis or pancreatitis.",
    },
    {
      label: "Parasite Prevention",
      description: "Use year-round flea, tick, and heartworm preventatives.",
    },
    {
      label: "Kidney & Bladder",
      description:
        "Recommend regular urinalysis to check for crystalluria or early urinary tract infections, and promote hydration to prevent urolithiasis.",
    },
    {
      label: "Nervous",
      description:
        "Evaluate for inherited idiopathic epilepsy or other neurobehavioral abnormalities and provide early intervention if neurological signs appear.",
    },
    {
      label: "General Behavior",
      description:
        "Monitor for signs of separation anxiety or compulsive disorders, and consider environmental enrichment and behavioral modification if needed.",
    },
  ],
  Nutrition: [
    {
      label: "Skin & Coat",
      description:
        "Monitor for pruritus or erythema, as Toy Fox Terriers can exhibit atopic dermatitis or flea allergy dermatitis; recommend fatty acid supplementation.",
    },
    {
      label: "Musculoskeletal",
      description:
        "Screen for patellar luxation and Legg-Calvé-Perthes disease during annual exams, and limit high-impact activities to prevent microtrauma to the joints.",
    },
    {
      label: "Respiratory ",
      description:
        "Assess for tracheal collapse or brachycephalic airway syndrome, and avoid respiratory irritants like smoke or aerosols.",
    },
    {
      label: "Cardiovascular",
      description:
        "Perform routine auscultation for murmurs indicative of mitral valve disease, and recommend annual cardiac screening after age 5.",
    },
    {
      label: "Digestive ",
      description:
        "Advise small, frequent meals to manage hypoglycemia risk in small breeds and monitor for signs of gastroenteritis or pancreatitis.",
    },
    {
      label: "Parasite Prevention",
      description: "Use year-round flea, tick, and heartworm preventatives.",
    },
    {
      label: "Kidney & Bladder",
      description:
        "Recommend regular urinalysis to check for crystalluria or early urinary tract infections, and promote hydration to prevent urolithiasis.",
    },
    {
      label: "Nervous",
      description:
        "Evaluate for inherited idiopathic epilepsy or other neurobehavioral abnormalities and provide early intervention if neurological signs appear.",
    },
    {
      label: "General Behavior",
      description:
        "Monitor for signs of separation anxiety or compulsive disorders, and consider environmental enrichment and behavioral modification if needed.",
    },
  ],
};
const tabImages: { [key: string]: string } = {
  Prevention: VetDoc,
  Body: BodyImage,
  Nutrition: NutritionImage,
};

export default function Health() {
  const [activeTab, setActiveTab] = useState("Prevention");

  return (
    <section className="health-section">
      <h2 className="title">Health</h2>
      <div className="tabs-wrapper">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === "Nutrition" && (
                <img className="lock-icon" src={Lock} alt="Lock icon" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="content-container">
        <div className="tips-list">
          {healthTips[activeTab]?.map((tip, index) => (
            <div className="tip" key={index}>
              <div className="tip-label">{tip.label}</div>
              <div className="tip-description">{tip.description}</div>
            </div>
          ))}
        </div>

        <div className="image-container">
          <img src={tabImages[activeTab]} alt={`${activeTab} visual`} />
        </div>
      </div>
    </section>
  );
}
