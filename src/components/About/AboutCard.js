import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarwarul Danish Hoda </span>
            from <span className="purple"> Dhanbad Jharkhand,India.</span>
            <br />I have completed Msc in Maths and Computing from BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "nahīñ terā nasheman qasr-e-sultānī ke gumbad par tū shāhīñ hai baserā kar pahāḌoñ kī chaTānoñ meñ"{" "}
          </p>
          <footer className="blockquote-footer">Allama Iqbal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
