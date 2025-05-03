import "./HomeHead.css";
import catBreed from "../../../assets/catbreed.png";
import BreedsPage from "../BreedsPage/BreedsPage";

export default function HomeHead() {
  return (
    <>
      <div className="head-container">
        <div className="head-content">
          <h1 className="head-title">Cat Breeds</h1>
          <p className="head-description">
            This is the official list of all PerkyPet Cat Breeds
          </p>
        </div>
        <div className="head-image">
          <img src={catBreed} alt="Golden Retriever" className="dog-image" />
        </div>
      </div>
      <BreedsPage />
    </>
  );
}
