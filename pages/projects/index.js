import Head from "next/head";
import styles from "../../styles/projects.module.css";

function ProjectsPage() {
  return (
    <div className={styles.projects}>
      <Head>
        <title>
          Projects :: VRI Engineering Pvt Ltd :: Builders of your Dream Projects
        </title>
        <meta
          name="description"
          content="List of Project done by VRI Engineering Pvt Ltd : Builders of your Dream Projects"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      Here we show the list of projects
    </div>
  );
}

export default ProjectsPage;
