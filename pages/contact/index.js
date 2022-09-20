import Head from "next/head";
import styles from "../../styles/Contact.module.css";

function ContactPage() {
  return (
    <div className={styles.contact_page}>
      <Head>
        <title>
          Contact :: VRI Engineering Pvt Ltd :: Builders of your Dream Projects
        </title>
        <meta
          name="description"
          content="Get In touch with us VRI Engineering Pvt Ltd : Builders of your Dream Projects"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>Here we will display form and show the contact page</h1>
    </div>
  );
}

export default ContactPage;
