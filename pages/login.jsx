import React, { Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";
import OutwildPhotography from "../public/photographerRock.jpg";
import Logo from "../public/logo.svg";

const Login = () => {
  const BackgroundImage = styled.section`
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
  `;

  const Container = styled.div`
    @media (max-width: 810px) {
      border: 1px solid red;
      display: grid;
      grid-template-columns: 1fr;
    }

    display: grid;
    grid-template-columns: 50% auto;
  `;

  const FormContainer = styled.section`
    display: grid;
    grid-template-rows: 2fr 0fr 2fr;
    height: 100vh;
    padding: 5rem 5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--white);

      h3 {
        margin: 0rem 1.25rem;
      }
    }

    div {
      background-color: var(--white);
      display: flex;
      justify-content: space-around;
    }

    form {
      background-color: var(--white);
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin: 0 auto;

        label {
          font-weight: bold;
          font-size: 2.75rem;
        }

        input,
        button {
          width: 51rem;
          height: 6.5rem;
          border-radius: 1.125rem;
          border: 0.3rem solid var(--dark2);
        }

        hr {
          margin: 1rem 0;
        }
      }
    }
  `;

  return (
    <Fragment>
      <BackgroundImage>
        <Image
          alt=""
          src={OutwildPhotography}
          layout="fill"
          objectFit="cover"
        />
      </BackgroundImage>
      <Container>
        <FormContainer>
          <span>
            <Image src={Logo} width="70" height="70" layout="" />
            <h3>Fotolog</h3>
          </span>
          <div>
            <p>Sign up</p>
            <p>Log in</p>
          </div>
          <form action="">
            <div>
              <label htmlFor="">Your email</label>
              <input type="text" placeholder="myemail@provider.com" />
            </div>
            <div>
              <label htmlFor="">Your password</label>
              <input type="text" placeholder="*******" />
            </div>
            <div>
              <button type="submit">Login</button>
              <hr />
              <button type="">Create account</button>
            </div>
          </form>
        </FormContainer>
        <div></div>
      </Container>
    </Fragment>
  );
};

export default Login;
