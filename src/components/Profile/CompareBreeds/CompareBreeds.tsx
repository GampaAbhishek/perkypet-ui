import CompareBreedsDogImg from "./../../../assets/compare-breeds-dog.png";
import Breeds1DogImg from "./../../../assets/breed-1.png";
import Breeds2DogImg from "./../../../assets/breed-2.png";
import Breeds3DogImg from "./../../../assets/breed-3.png";
import ArrowBtn from "./../../../assets/arrow-circle-right.png";
import "./Comparebreeds.css";

const CompareBreeds = () => {
  const dogBreadMockData = [
    {
      name: "CHIHUAHUA",
      description: "charming, graceful, sassy",
      image: Breeds1DogImg,
    },
    {
      name: "MANCHESTER TERRIER (TOY)",
      description: "intelligent, agile, spirited",
      image: Breeds2DogImg,
    },
    {
      name: "MINIATURE PINSCHER",
      description: "fearless, proud, fun-loving",
      image: Breeds3DogImg,
    },
  ];
  return (
    <div className="compare-breeds-wrapper">
      <div className="compare-breeds-container">
        <img src={CompareBreedsDogImg} className="compare-breeds-img" />
        <div className="text-container">
          <h3 className="compare-breeds-heading">Compare Breeds</h3>
          <p className="para">
            See how the Toy Fox Terrier stacks up to other breeds by comparing
            traits
          </p>
        </div>
        <button className="compare-breeds-btn">
          <a
            className="anchor-ele"
            href="https://www.akc.org/compare-breeds/?selected=%5B25912%5D"
          >
            Compare Breeds
          </a>
        </button>
      </div>
      <div className="explore-breed-wrapper">
        <h1>Explore Other Breeds</h1>
        <div className="explore-breed-container">
          {dogBreadMockData.map((item, key) => {
            return (
              <div className="explore-breed-card" key={key}>
                <div className="breed-card-left">
                  <div>
                    <img src={item.image} />
                  </div>
                  <div className="name-container">
                    <h3 className="name">{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="breed-images">
                  <img src={ArrowBtn} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompareBreeds;
