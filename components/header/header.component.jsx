import Link from "next/link";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link href="/">
            <a className={`navbar-brand ${styles.brand_name}`}>VRI</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <div className={`${styles.navigation_menu} navbar-nav`}>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
              <Link href="/projects">
                <a className="nav-link">Projects</a>
              </Link>
              <Link href="/services">
                <a className="nav-link">Services</a>
              </Link>
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
              <button className="btn btn-sm btn-warning">
                Get Free Quotation
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
