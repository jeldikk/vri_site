import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container-md">
        <div className="row">
          <div className="col-md-4">
            <p className={styles.brand_name}>VRI</p>
            <p className={styles.engineering_text}>
              Engineering Private Limited
            </p>
            <p className={styles.company_desc}>
              VRI Engineering Pvt Ltd is an Aspiring Infrastructure and
              Engineering builder company consisting a Team of Young Energetic
              minds focusing on different domains of Building Construction
              Project
            </p>
            <p className="text-center">
              <Link href="/about">
                <a className={styles.know_more}>Know More</a>
              </Link>
            </p>
          </div>
          <div className="col-md-5">
            <p className={styles.contact_details}>CONTACT DETAILS</p>
            <div className={styles.address_details}></div>
          </div>
          <div className="col-md-3">
            Here we will display the social handles here
          </div>
        </div>
      </div>
      <div className={styles.thin_ribbon}></div>
      <div className={styles.copyrights}>
        Copyright &copy; 2022, VRI Engineering Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
