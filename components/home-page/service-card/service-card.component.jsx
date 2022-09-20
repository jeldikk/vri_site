import Image from "next/image";
import styles from "./service-card.module.css";

function ServiceCard({ service }) {
  return (
    <div className="card">
      <div className="card-img-top text-center">
        <Image
          src={service.image}
          layout="intrinsic"
          width={300}
          height={300}
          alt={service.name}
        />
      </div>
      <div className="card-body">
        <h5
          className="card-title text-center"
          style={{ color: service.borderColor }}
        >
          {service.name}
        </h5>
        <p className="card-text text-center">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
