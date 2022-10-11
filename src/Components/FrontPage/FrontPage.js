import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const FrontPage = ({ topic }) => {
  const { name, logo, total } = topic;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="img-fluid p-3" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>TOtal Quiz: {total}</Card.Text>
          <Button variant="primary">Start Quiz</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FrontPage;
