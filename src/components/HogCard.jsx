import React from "react";
import { Container } from "react-bootstrap";
import HogList from "./HogList";

const HogCard = ({ hog, onToggleList, showList, onHide }) => {
  const toggleHogList = (e) => {
    e.stopPropagation();
    onToggleList(hog.name);
  };

  const handleHide = (e) => {
    e.stopPropagation(); 
    onHide(hog.name); 
  };

  return (
    <Container className="my-4">
      <div className="card mb-3">
        <img
          src={hog.image}
          className="card-img-top"
          alt={hog.name}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title">{hog.name}</h5>
          <p className="card-text">{hog.specialty}</p>
          <div className="button-container d-flex justify-content-between">
            <button
              onClick={toggleHogList}
              style={{ backgroundColor: "black", color: "white" }}
              className="btn"
            >
              {showList ? "Hide Details" : "Show Details"}
            </button>
            <button
              onClick={handleHide}
              style={{ backgroundColor: "black", color: "white" }}
              className="btn"
            >
              Hide Hog
            </button>
          </div>
          {showList && <HogList hog={hog} />}
        </div>
      </div>
    </Container>
  );
};

export default HogCard;