import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <h1>Cuentanos, ¿En qué podemos ayudarte?</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electronico"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Consulta</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu Consulta" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default Contact;
