import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import Logo from "../public/logo.svg";
import styled from "styled-components";
import SunsetPhotography from "../public/photographerDawn.jpg";

const Header = () => {
  const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  `;

  const NavbarHero = styled.section`
    padding: 3rem;
  `;

  const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Hero = styled.div`
    h1 {
      font-weight: 700;
      font-size: 40px;
    }

    p {
      font-size: 2.3rem;
      padding: 2rem 0;
    }

    div {
      display: flex;
      justify-content: space-evenly;
    }
  `;

  const ImageComponent = styled(Image)`
    filter: grayscale(100%);
  `;

  return (
    <Header>
      <NavbarHero>
        <Navbar>
          <span>
            <Image src={Logo} width="100" height="100" layout="" />
          </span>
          <Button text="Download" />
        </Navbar>
        <Hero>
          <h1>Take your perfect picture. Talk about it.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
            porro fugiat ipsa aliquid voluptate cum temporibus harum, alias
            facere, molestias id quos corrupti, magnam iure.
          </p>
          <div>
            <Button text="Log in" />
            <Button text="Sign up" />
          </div>
        </Hero>
      </NavbarHero>
      <ImageComponent
        src={SunsetPhotography}
        layout="intrinsic"
        objectFit="cover"
        objectPosition="center"
      />
    </Header>
  );
};

export default Header;
