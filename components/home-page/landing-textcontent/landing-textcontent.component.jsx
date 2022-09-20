import { useRouter } from "next/router";
import styles from "./landing-textcontent.module.css";

function LandingTextContent() {
  const router = useRouter();

  function exploreProjects() {
    router.push("/projects");
  }

  function getQuotation() {
    router.push("/get-quotation");
  }

  function getInTouch() {
    router.push("/contact");
  }

  return (
    <div className={`container ${styles.landing_textcontent}`}>
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="display-3 fw-bold">We're</p>
          <p className={`fw-bold ${styles.vri_text}`}>VRI</p>
          <p className={`display-4 ${styles.engineering_text}`}>
            Engineering pvt ltd
          </p>
        </div>
        <div className="col-12 col-md-6 text-center p-4">
          <p className={styles.explore_button} onClick={exploreProjects}>
            Explore our projects
          </p>
          <p className={styles.quotation_button} onClick={getQuotation}>
            Get a Quotation
          </p>
          <p className={styles.contact_button} onClick={getInTouch}>
            Get in Touch
          </p>
        </div>
      </div>
      <p className={styles.small_desc}>
        You can dream, create, design, and build the most wonderful place in the
        world.
        <br />
        But it requires people to make the dream a reality
        <br />- Walt Disney
      </p>
    </div>
  );
}

export default LandingTextContent;
