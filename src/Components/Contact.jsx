import React, { useState } from "react";
import { init, send } from "emailjs-com";
init("user_3bguTCeUpXJpsAeCpvezS");

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_r8dnbhc",
      "template_h3b3zn1",
      toSend,
      "user_3bguTCeUpXJpsAeCpvezS"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Que tal conversarmos um pouco?</h1>
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
