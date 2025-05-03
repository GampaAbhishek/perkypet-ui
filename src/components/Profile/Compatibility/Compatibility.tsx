import "./Compatibility.css";
import PlusIcon from "./../../../assets/add-square.png";
import { useEffect, useState } from "react";

type TabKey = "PersonalLife" | "Physical" | "Social" | "Personality";

export interface ICompatibilityCard {
  heading: string;
  description: string;
  reaction: string;
}

export interface ICompatibilityCardHeader {
  PersonalLife: ICompatibilityCard[];
  Physical: ICompatibilityCard[];
  Social: ICompatibilityCard[];
  Personality: ICompatibilityCard[];
}

export default function Compatibility() {
  const compatibilityCardMockData: ICompatibilityCardHeader = {
    PersonalLife: [
      {
        heading: "Good With Young Children",
        description: "Bad",
        reaction: "Great",
      },
      {
        heading: "Good With Other Dogs",
        description: "Bad",
        reaction: "Great",
      },
    ],
    Physical: [
      {
        heading: "Good With Young Children",
        description: "Bad",
        reaction: "Great",
      },
      {
        heading: "Good With Other Dogs",
        description: "Bad",
        reaction: "Great",
      },
      {
        heading: "Good With Young Children",
        description: "Bad",
        reaction: "Great",
      },
    ],
    Social: [
      {
        heading: "Good With Young Children",
        description: "Bad",
        reaction: "Great",
      },
      {
        heading: "Good With Other Dogs",
        description: "Bad",
        reaction: "Great",
      },
    ],
    Personality: [
      {
        heading: "Good With Young Children",
        description: "Bad",
        reaction: "Great",
      },
      {
        heading: "Good With Other Dogs",
        description: "Bad",
        reaction: "Great",
      },
      {
        heading: "Good With Young Children",
        description: "Bad",
        reaction: "Great",
      },
    ],
  };

  const compatibilityHeading = [
    {
      name: "PersonalLife",
      label: "Personal Life",
    },
    {
      name: "Physical",
      label: "Physical",
    },
    {
      name: "Social",
      label: "Social",
    },
    {
      name: "Personality",
      label: "Personality",
    },
  ];

  const mainCardData = [
    {
      contentFor: "PersonalLife",
      title: "Affectionate With Family",
      leftLabel: "Independent",
      rightLabel: "Lovey-Dovey",
      rating: 5,
      description:
        "How affectionate a breed is likely to be with family members, or other people he knows well. Some breeds can be aloof with everyone but their owner, while other breeds treat everyone they know like their best friend.",
    },
    {
      contentFor: "Physical",
      title: "Shedding Level",
      leftLabel: "Low",
      rightLabel: "Good",
      rating: 5,
      description:
        "How affectionate a breed is likely to be with family members, or other people he knows well. Some breeds can be aloof with everyone but their owner, while other breeds treat everyone they know like their best friend.",
    },
    {
      contentFor: "Social",
      title: "Openness To Strangers",
      leftLabel: "Never",
      rightLabel: "Low",
      rating: 5,
      description:
        "How affectionate a breed is likely to be with family members, or other people he knows well. Some breeds can be aloof with everyone but their owner, while other breeds treat everyone they know like their best friend.",
    },
    {
      contentFor: "Personality",
      title: "Trainability Level",
      leftLabel: "Bad",
      rightLabel: "High",
      rating: 5,
      description:
        "How affectionate a breed is likely to be with family members, or other people he knows well. Some breeds can be aloof with everyone but their owner, while other breeds treat everyone they know like their best friend.",
    },
  ];

  const [activeTab, setActiveTab] = useState<TabKey>("PersonalLife");
  const [mainCardDetails, setMainCardDetails] = useState(mainCardData[0]);

  useEffect(() => {
    const filterCard = mainCardData.filter(
      (item) => item.contentFor == activeTab
    );
    setMainCardDetails(filterCard[0]);
  }, [activeTab]);

  return (
    <div className="compatibility-container">
      <h1 className="compatibility-head-title">Compatibility</h1>
      <div className="compatibility-content">
        <div className="compatibility-tabs main-cards">
          {compatibilityHeading.map((item, key) => {
            return (
              <button
                className={`tab ${activeTab === item.name ? "active" : ""}`}
                key={key}
                onClick={() => setActiveTab(item.name as TabKey)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div className="compatibility-details main-cards">
          <div className="affectionate-card">
            <div className="card-header">
              <h2>{mainCardDetails.title}</h2>
              <span>{mainCardDetails.leftLabel}</span>
            </div>
            <div className="card-subtitle">
              <img src={PlusIcon} alt="" />
              <span>{mainCardDetails.rightLabel}</span>
            </div>
          </div>
          <div className="rating-bar">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="rating-dot filled"></div>
            ))}
          </div>
          <div>
            <p className="description">{mainCardDetails.description}</p>
          </div>
        </div>
        <div className="compatibility-description-card">
          {compatibilityCardMockData[activeTab]?.map(
            (item: ICompatibilityCard, key: number) => {
              return <CompatibilityCard {...item} key={key} />;
            }
          )}
        </div>
      </div>
    </div>
  );
}

const CompatibilityCard = ({
  heading,
  description,
  reaction,
}: ICompatibilityCard) => {
  return (
    <div className="compatibility-sub-card affectionate-card ">
      <div className="card-header">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <div className="card-subtitle">
        <img src={PlusIcon} />
        <div>{reaction}</div>
      </div>
    </div>
  );
};
