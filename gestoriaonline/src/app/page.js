import Image from "next/image";
import styles from "./page.module.css";
import informeJPG from "../assets/informe-de-dominio.webp";
import patenteMercosur from "../assets/patente-mercosur.png";
import patenteNoMercosur from "../assets/patente-nomercosur.png";
import patenteMotoMercosur from "../assets/patente-mercosur-moto.png";
import patenteNoMercosurMoto from "../assets/patente-moto.jpg";
import Buttons from "./components/Buttons/Buttons";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <Image
          src={informeJPG}
          width={200}
          height={200}
          alt="Informe de Patente"
        />
        <h1>
          Estas por comprar un vehiculo y no sabes si esta todo bien para
          transferir!
        </h1>
        <h2>
          Consulta el estado de ese vehiculo y no te encontres con sorpresas...
        </h2>
        <Image
          src={patenteMercosur}
          width={250}
          style={{ margin: "0 0.5rem 0 1rem" }}
          alt="patenteMercosur"
          title="patente Mercosur de Automovil"
        />
        <Image
          src={patenteNoMercosur}
          width={200}
          alt="patenteNoMercosur"
          style={{ margin: "0 0.5rem 0 1rem" }}
          title="patente NO Mercosur de Automovil"
        />
        <Image
          src={patenteMotoMercosur}
          width={200}
          alt="patenteMotoMercosur"
          style={{ margin: "0 0.5rem 0 1rem" }}
          title="patente Mercosur de Motovehiculo"
        />
        <Image
          src={patenteNoMercosurMoto}
          width={125}
          alt="patenteNoMercosurMoto"
          style={{ margin: "0 0.5rem 0 1rem" }}
          title="patente NO Mercosur de Motovehiculo"
        />
      </header>
      <main className={styles.main}>
        <Buttons />
      </main>
    </div>
  );
}
