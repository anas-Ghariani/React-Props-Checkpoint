import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import React from "react";
const ProfileComponent = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {props.children}
        <Card.Body>
          <Card.Title style={{ color: "green" }}> {props.name}</Card.Title>
          <Card.Text>{props.bio}</Card.Text>
          <Card.Text>{props.profession}</Card.Text>
          <Button
            variant="primary"
            onClick={() => props.handleName(props.name)}
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProfileComponent;
ProfileComponent.defaultProps = {
  name: "ANAS",
  profession: " IT ENGENEER",
};
ProfileComponent.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
};
