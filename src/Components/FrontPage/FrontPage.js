import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./FrontPage.css";

const FrontPage = ({ topic }) => {
  const { id, name, logo, total } = topic;

  return (
    <div>
      <Card className="my-md-3 my-sm-3 my-2">
        <Card.Img className="img-fluid p-3" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h6>Total Quiz: {total}</h6>
          </Card.Text>

          <Link to={`topic/${id}`}>
            <Button className="w-100" variant="primary">
              <h5 className="btn-txt py-2"> Start {name} Quiz</h5>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FrontPage;
