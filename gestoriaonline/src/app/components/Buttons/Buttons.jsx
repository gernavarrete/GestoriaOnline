"use client";

import { Button } from "@mui/material";
import styles from "./Buttons.module.css";
import { useState } from "react";

export default function Buttons() {
  const [input, setInput] = useState({ dominio: null, email: null });

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.name === "dominio") {
      setInput({ ...input, dominio: e.target.value });
    } else {
      setInput({ ...input, email: e.target.value });
    }
    console.log(input);
  };
  const handleOnclick = (e) => {
    e.preventDefault();
    console.log(e);
    if (!input.dominio || !input.email) throw alert("Faltan Datos");
    const dominio = input.dominio.toUpperCase();
    const email = input.email.toUpperCase();
    if (
      !/\w{3}\d{3}/.test(dominio) ||
      !/\w{2}\d{3}\w{2}/.test(dominio) ||
      !/\d{3}\w{3}/.test(dominio) ||
      !/\w{1}\d{3}\w{3}/.test(dominio)
    )
      throw (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      );
    switch (e.target.value) {
      case "IED":
        console.log("IED");
        break;
      case "IHD":
        console.log("IHD");
        break;
      default:
        console.log("IEDCI");
    }
  };
  return (
    <form>
      <fieldset>
        <legend>
          <h4>Informe de Estado de Dominio del Vehiculo</h4>
        </legend>
        <section>
          <label for="dominio">Patente:</label>
          <input
            type="text"
            name="dominio"
            placeholder="Patente del vehiculo"
            title="Patente del vehiculo que necesito saber como se encuentra legalmente para transferir"
            className={styles.inputPatente}
            value={input.dominio}
            onChange={(e) => handleOnChange(e)}
          />
        </section>
        <br />
        <section>
          <label for="email">Correo Electronico:</label>
          <input
            type="email"
            name="email"
            placeholder="Correo Electronico"
            title="Donde quiero recibir mi informe"
            className={styles.inputCorreo}
            value={input.email}
            onChange={(e) => handleOnChange(e)}
          />
        </section>
        <br />
        <div className={styles.divbtn}>
          <Button
            variant="contained"
            onClick={(e) => handleOnclick(e)}
            value="IED"
          >
            Solicitar Informe de Estado
          </Button>
          <Button
            variant="contained"
            onClick={(e) => handleOnclick(e)}
            value="IHD"
          >
            Solicitar Informe Historico de titulares del Dominio
          </Button>
          <Button
            variant="contained"
            onClick={(e) => handleOnclick(e)}
            value="IEDCI"
          >
            Solicitar Informe de Estado e Informe de Infracciones
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
