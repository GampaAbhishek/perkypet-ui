import BreedPopularityChart from "./Chart";
import "./History.css";
import Dog from "../../../assets/history_dog.png";

const History = () => {
  return (
    <section className="history-section">
      <h2 className="section-title">History</h2>

      <div className="breed-cards">
        <div className="breed-text">
          <h3>About the Breed</h3>
          <p>
            A diminutive satin-coated terrier with an amusing toy-dog
            personality, the Toy Fox Terrier is, as breed fanciers say, 'truly a
            toy and a terrier! They began as barnyard ratters but are today
            beguiling companions with a big personality. A surefire recipe for
            fun: Take the lovability of a lapdog. Combine with terrier tenacity.
            Pour the mixture into a beautifully balanced container. Wrap in a
            tight-fitting satin coat. Top with large, erect ears and dark eyes
            that sparkle with eager intelligence. This is the Toy Fox Terrier, a
            lithe but sturdy little comedian standing under a foot tall but
            packed with enough charisma for a whole kennel of ordinary dogs. The
            breed's admirers like to say, 'TFTs are truly a toy and a terrier'
          </p>
        </div>
        <div className="breed-chart">
          <BreedPopularityChart />
        </div>
      </div>

      <div className="history-facts">
        <img
          src={Dog}
          alt="Vintage Toy Fox Terrier"
          className="history-image"
        />
        <div className="history-text">
          <p>
            In the early 20th century, American breeders of Smooth Fox Terriers
            created the TFT by crossing their litter runts with toy dogs,
            Chihuahuas and Italian Greyhounds among them.The result was a dog
            possessing the fire of a true terrier...
          </p>
          <button className="read-more">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default History;
