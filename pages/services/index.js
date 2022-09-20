import Head from "next/head";
import styles from "../../styles/Services.module.css";

function ServicesPage() {
  return (
    <div className={styles.services_page}>
      <Head>
        <title>
          Services :: VRI Engineering Pvt Ltd :: Builders of your Dream Projects
        </title>
        <meta
          name="description"
          content="Variety of Services offered by VRI Engineering Pvt Ltd : Builders of your Dream Projects"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>Here we should the list of services offered by VRI</h1>
    </div>
  );
}

export default ServicesPage;
