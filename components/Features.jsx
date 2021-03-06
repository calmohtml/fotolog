import React from "react";
import styled from "styled-components";
import Image from "next/image";
import NaturePhotography from "../public/photographerNature.jpg";
import Button from "./Button";
import Link from "next/link";

const Features = () => {
  const Features = styled.section`
    h2 {
      text-align: center;
      padding: 2rem;
    }
  `;

  const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  `;

  const FeaturesBulletpoints = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;

    li {
      list-style: none;
      padding: 2rem 0;
    }
  `;

  const ImageComponent = styled(Image)`
    filter: grayscale(100%);
  `;

  return (
    <Features>
      <h2>Join a community</h2>
      <FeaturesContainer>
        <ImageComponent
          src={NaturePhotography}
          layout="intrinsic"
          objectFit="cover"
          objectPosition="center"
        />
        <FeaturesBulletpoints>
          <li>
            <h3>Make your photos a storytelling.</h3>
            <p>
              Discover millons of rooms, filled with fascinanting and unexpected
              conversations.
            </p>
          </li>
          <li>
            <h3>Choose who is gonna be part of it.</h3>
            <p>Express yourself through your lenses.</p>
          </li>
          <li>
            <h3>Create a personal dairy.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              veniam.
            </p>
          </li>
          <li>
            <Link passHref href="/login">
              <a>
                <Button text="Log in" />
              </a>
            </Link>
          </li>
        </FeaturesBulletpoints>
      </FeaturesContainer>
    </Features>
  );
};

export default Features;
