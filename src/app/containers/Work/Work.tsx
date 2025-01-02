import { WorkCard } from "../../components/WorkCard/WorkCard";
import projectData from "../../assets/projects.json";

import "./Work.css";

export const Work = () => {
  return (
    <div className="work-container" id="Work">
      My work
      <WorkCard projectData={projectData} />
    </div>
  );
};
