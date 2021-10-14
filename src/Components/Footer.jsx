import React from "react";
import instagram from "../icons/instagram.png";
import linkedInWhite from "../icons/linkedinWhite.svg";
import github from "../icons/github.svg";
import youtube from "../icons/youtube.png";

const socials = [
  { name: "Instagram", img: instagram, link: "https://instagram.com/vinigofr" },
  {
    name: "Linkedin",
    img: linkedInWhite,
    link: "https://linkedin.com/in/vinigofr",
  },
  { name: "Github", img: github, link: "https://github.com/vinigofr" },
  {
    name: "youtube",
    img: youtube,
    link: "https://www.youtube.com/c/ViniciusGouveia/",
  },
];

function Footer() {
  return (
    <footer style={{position: 'fixed', bottom: '0', width: '100vw'}}>
      <div className="footer-title"> © 2021 Vinicius Gouveia </div>
      <div className="social-links">
        <ul className="social-network-list">
          {socials.map(({ name, img, link }, i) => (
            <li key={name + i} className="social-network">
              <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt={name} className="social-network-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
