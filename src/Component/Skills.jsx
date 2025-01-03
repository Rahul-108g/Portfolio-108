import Skillss from "./Skillss";
import data from "./Data/skills.json";
const Skills = () => {
  return (
    <div className=" skills" id="skill">
      <h1>Skills</h1>
      <div className="items res7">
        {data.map((item, ind) => (
          <Skillss key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
