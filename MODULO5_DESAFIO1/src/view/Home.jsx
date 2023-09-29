import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="home">
        <h1>Bienvenido a Happy Cake</h1>
        <p>El lugar de los pasteles felices</p>
        <h2 className="logo-pastel">🎂</h2>
      </Container>
    </>
  );
};

export default Home;
