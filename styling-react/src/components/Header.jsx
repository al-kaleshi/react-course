import React from "react";
import logo from "../assets/logo.png";
import { styled } from "styled-components";

const StyledImage = styled.img`
  object-fit: contain;
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;
`;

const StyledHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: center;
  text-transform: uppercase;
  color: #9a3412;
  font-family: "Pacifico", cursive;
  margin: 0;
`;

const StyledParagraph = styled.p`
  text-align: center;
  color: #a39191;
  margin: 0;
`;


export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 h-44 object-contain" />
      <h1 className=" text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">ReactArt</h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
