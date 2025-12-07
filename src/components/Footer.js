import React, { useState } from "react";
import Modal from "./Modal";
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Qiziqarli o'yin asoschisi{" "}
          <a href="https://github.com/Coder-Doniyorbek" target="_blank">
            Doniyorbek
          </a>
          . Telegram :<a href="https://t.me/doniyorbek_coder" target="_blank">Doniyorbek</a>.
        </div>
        <button className="rules" onClick={toggle}>
          Qoidalar
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
