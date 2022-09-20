import styles from "./services-offered.module.css";
import { getServices } from "../../../data/services-offered";
import ServiceCard from "../service-card/service-card.component";

const services = getServices();

function ServicesOffered() {
  const services = getServices();

  return (
    <div className={styles.services_offered}>
      <div className={styles.title_text}>Services Offered</div>
      <div className="d-flex justify-content-center">
        <hr className={styles.ruler} />
      </div>
      <div className={styles.process_icons}>
        <i className="bi-bounding-box-circles" style={{ color: "red" }}></i>
        <i className="bi-dash-lg"></i>
        <i className="bi-boxes" style={{ color: "steelblue" }}></i>
        <i className="bi-dash-lg"></i>
        <i className="bi-bricks" style={{ color: "indianred" }}></i>
        <i className="bi-dash-lg"></i>
        <i className="bi-house-heart-fill" style={{ color: "green" }}></i>
      </div>
      <div className="container-md">
        <div className="row">
          {services.map((service) => (
            <div key={service.name} className="col-md-3">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center py-3">
          <p className={styles.know_more}>Explore more Services</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesOffered;
