import data from "./Data/experience.json";
import Experiences from "./Experiences";
const Experience = () => {
  return (
    <>
      <div className="container" id="experience">
        <h1 className="res6">TRAINING & CERTIFICATIONS</h1>
        <div className="ex">
          {data.map((item) => (
            <Experiences key={item.id} item={item} className="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
