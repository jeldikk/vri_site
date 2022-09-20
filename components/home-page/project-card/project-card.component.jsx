import styles from "./project-card.module.css";

function ProjectCard({ project }) {
  return <div className={`card ${styles.project_card}`}></div>;
}

export default ProjectCard;
