import styles from "./featured-projects.module.css";
import { getFeaturedProjects } from "../../../data/done-projects";
import ProjectCard from "../project-card/project-card.component";
function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  return (
    <div className={styles.featured_projects}>
      <div className={styles.top_ribbon}>
        <p className={styles.title}>Featured Projects</p>
      </div>
      <div className={styles.middle_ribbon}>
        <div className="container-md my-3">
          <div className="row">
            {featuredProjects.map((project) => (
              <div key={project.name} className="col-md-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom_ribbon}></div>
    </div>
  );
}

export default FeaturedProjects;
