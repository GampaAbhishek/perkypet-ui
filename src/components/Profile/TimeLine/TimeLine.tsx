import "./Timeline.css";

const steps = [
  {
    number: 1,
    color: "#F69838",
    position: "top",
  },
  {
    number: 2,
    color: "#504FC6",
    position: "bottom",
  },
  {
    number: 3,
    color: "#3736BF",
    position: "top",
  },
  {
    number: 4,
    color: "#010072",
    position: "bottom",
  },
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-bar">
        {steps.map((step) => (
          <div
            key={step.number}
            className="timeline-segment"
            style={{ backgroundColor: step.color }}
          />
        ))}
      </div>

      {steps.map((step, index) => {
        const left = `${index * 25 + 12.5}%`;
        const isTop = step.position === "top";

        return (
          <div
            key={step.number}
            className={`timeline-step ${isTop ? "top" : "bottom"}`}
            style={{ left }}
          >
            {isTop && (
              <>
                <div className="circle" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                <div className="line" />
                <div className="tl_title">STAGE</div>
                <div className='description'>Description of the stage with all detailes of the steps taken</div>
              </>
            )}
            {!isTop && (
              <>
                <div className="tl_title">STAGE</div>
                <div className='description'>Description of the stage with all detailes of the steps taken</div>
                <div className="line" />
                <div className="circle" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
