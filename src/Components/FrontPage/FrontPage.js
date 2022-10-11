import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./FrontPage.css";

const FrontPage = ({ topic }) => {
  const { id, name, logo, total } = topic;

  return (
    <div>
      <Card>
        <Card.Img className="img-fluid p-3" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Total Quiz: {total}</Card.Text>

          <Link to={`topic/${id}`}>
            <Button className="w-100" variant="primary">
              Start Quiz
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FrontPage;
