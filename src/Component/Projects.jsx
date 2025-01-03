import data from "./Data/projects.json";
import Projectss from "./Projectss";

const Projects = () => {
  return (
    <div className="container project my-3" id="project">
      <h1>Projects</h1>

      <div className="pro ">
        {data.map((item) => (
          <Projectss key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
