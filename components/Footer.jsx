import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();

  const Footer = styled.footer`
    padding: 2rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        margin: 0rem 1.25rem;
      }
    }
  `;

  const FooterYear = styled.p`
    padding: 2rem;
    text-align: center;
  `;

  return (
    <Footer>
      <span>
        <Image src={Logo} width="70" height="70" layout="" />
        <h3>Fotolog</h3>
      </span>
      <FooterYear>© Copyright {year}, Fotolog. All Rights Reserved.</FooterYear>
    </Footer>
  );
};

export default Footer;
