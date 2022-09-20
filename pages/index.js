import Head from "next/head";
import FeaturedProjects from "../components/home-page/featured-projects/featured-projects.component";
import LandingSection from "../components/home-page/landing-section/landing-section.component";
import ServicesOffered from "../components/home-page/services-offered/services-offered.component";
import styles from "../styles/home.module.css";

function HomePage() {
  return (
    <div className={styles.home_page}>
      <Head>
        <title>
          Home :: VRI Engineering Pvt Ltd :: Builders of your Dream Projects
        </title>
        <meta
          name="description"
          content="Home Page of VRI Engineering Pvt Ltd : Aspiring"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section>
        <LandingSection />
      </section>
      <section>
        <FeaturedProjects />
      </section>
      <section>
        <ServicesOffered />
      </section>
    </div>
  );
}

export default HomePage;
