import React, { useState, useEffect } from "react";
import { init, send } from "emailjs-com";
import Loading from "./Nav/Loading";
import verifyData from "../Helpers/verifyData";
import contact from "../Images/contact.svg"
init("user_3bguTCeUpXJpsAeCpvezS");

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const [stat, setStat] = useState(false);

  const [remaining, setRamaining] = useState({
    remainingText: 500,
    max: false,
  });

  useEffect(() => {
    setRamaining({
      remainingText: 500 - toSend.message.length,
      max: toSend.message.length > 500 ? true : false,
    });
  }, [toSend]);

  const fiveSeconds = (status) => {
    if (status === "success") {
      setStat(false);
    } else {
      window.open("www.google.com.br", "_blank");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (verifyData(toSend)) {
      setStat(true);
      send(
        "service_r8dnbhc",
        "template_h3b3zn1",
        toSend,
        "user_3bguTCeUpXJpsAeCpvezS"
      )
        .then((response) => {
          fiveSeconds("success");
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          fiveSeconds("failed");
          console.log("FAILED...", err);
        });
    } else {
      console.log("deu ruim");
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1 className="page-title">Que tal conversarmos um pouco?</h1>
      <div>
        <img className="main-page-image" src={contact} alt="Foto de variados meios de comunicação"/>
      </div>
      <form onSubmit={onSubmit} className="contact-forms">
        <label className="input-label">
          Como você se chama?
          <input
            className="contact-input"
            type="text"
            name="from_name"
            placeholder="Digite seu nome e sobrenome"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </label>
        <label className="input-label">
          E agora, seu email para retorno
          <input
            className="contact-input"
            type="text"
            name="reply_to"
            placeholder="Digite seu email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </label>
        <label className="input-label">
          Deixa aqui um recadinho :D
          <textarea
            style={{ resize: "none" }}
            rows="3"
            cols="21"
            className="contact-input"
            type="text"
            name="message"
            placeholder="Pode ser um feedback, elogio, sugestão. Fique à vontade"
            value={toSend.message}
            onChange={handleChange}
          />
        </label>
        <div>
          <p style={{ color: `${!remaining.max ? "black" : "red"}` }}>
            Caracteres restantes: {remaining.remainingText}
          </p>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <Loading stat={stat} />
    </div>
  );
}

export default Contact;
