import "./Dyk.css";

function Dyk() {
  const cardkMockData = [
    {
      id: 1,
      content:
        "The Abyssinian cat breed is talkative. They can chirp, meow, trill, and more.",
    },
    {
      id: 2,
      content:
        "Abyssinian cats have a unique coat pattern. Each hair is dark at the tips, making their coats shimmer. This pattern is called “ticking.”",
    },
    {
      id: 3,
      content:
        "The Abyssinian cat breed is talkative. They can chirp, meow, trill, and more.",
    },
  ];

  return (
    <div className="history-container">
      <div className="history-header">
        <h1>Did You Know?</h1>
      </div>
      <div className="history-content">
        {cardkMockData.map((item, key) => {
          return (
            <div key={key} className="history-card">
              <h1>{item.id}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dyk;
