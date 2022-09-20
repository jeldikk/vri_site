import styles from "./layout.module.css";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";

function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
