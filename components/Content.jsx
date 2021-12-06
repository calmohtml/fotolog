import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Kid from "../public/photographerKid.jpg";

const Content = () => {
  const Content = styled.section`
    h2 {
      text-align: center;
      padding: 2rem;
    }
  `;

  const ContentContainer = styled.div`
    position: relative;
    text-align: center;
    color: var(--white);
  `;

  const ContentCentered = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const ImageComponent = styled(Image)`
    filter: grayscale(100%);
  `;

  return (
    <Content>
      <h2>Become a photo-blogger.</h2>
      <ContentContainer>
        <ImageComponent
          src={Kid}
          height={450}
          layout="intrinsic"
          objectFit="cover"
          objectPosition="center"
        />
        <ContentCentered>
          <h3>
            Let your style define what do you think. Express yourself, and
            inspire people through your pics.
          </h3>
        </ContentCentered>
      </ContentContainer>
    </Content>
  );
};

export default Content;
