import React from 'react';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './Flight.css';

const Flight = () => {
  return (
    <div className="content">
      <FormGroup>
        <Row>
          <Col md={4}>
            <h4
              style={{
                color: "black"
              }}
            >
              Flight Search
            </h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <ul className="nav nav-pills">
              <span>
                <a
                  className="nav-link active"
                  href="#"
                  style={{ backgroundColor: "#cc0c00" }}
                >
                  <i className="fa fa-plane"></i>
                  FLIGHTS
                </a>
              </span>
            </ul>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={2}>
            <Input type="radio" />
            Oneway
          </Col>
          <Col md={3}>
            <Input type="radio" 
            defaultChecked />
            Round Trip
          </Col>
          <Col md={4}>
            <Input type="radio" />
            Multiple Destinations
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={3}>
            <Label>Departure Airport</Label>
            <Input
              type="text"
              name="Departue"
              style={{
                border: "0px",
                borderBottom: "none",
                borderColor: " initial",
                borderBottom: "1px solid",
                fontFamily: "Lato",
                fontWeight: "bolder",
                fontSize: "12px",
                color: "grey"
              }}
            />
          </Col>

          <Col md={3}>
            <Label>Arrival Airport</Label>
            <Input
              className="form-control form-control-sm"
              style={{
                border: "0px",
                borderBottom: "1px solid",
                fontFamily: "Lato",
                fontWeight: "bolder",
                fontSize: "12px",
                color: "grey"
              }}
              type="text"
            />
          </Col>
          <Col md={3}>
            <Label for="exampleDate">Departure Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              style={{
                border: "0px",
                borderBottom: "1px solid",
                borderColor: " initial",
                fontFamily: "Lato",
                fontWeight: "bolder",
                fontSize: "12px",
                color: "grey"
              }}
            />
          </Col>
          <Col md={3}>
            <Label for="exampleDate">Return Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              style={{
                border: "0px",
                borderBottom: "1px solid",
                borderColor: " initial",
                fontFamily: "Lato",
                fontWeight: "bolder",
                fontSize: "12px",
                color: "grey"
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label>Adult</Label>
            <div className="input-group mb-3">
              <select
                style={{
                  border: "0px",
                  borderBottom: "none",
                  borderColor: " initial",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                className="custom-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
              >
                <option selected>1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
                <option defaultValue="3">4</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <Label>Child(2-12yrs)</Label>
            <div className="input-group mb-3">
              <select
                style={{
                  border: "0px",

                  borderBottom: "none",
                  borderColor: " initial",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                className="custom-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
              >
                <option selected>0</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <Label>Infant(below 8yrs)</Label>
            <div className="input-group mb-3">
              <select
                style={{
                  border: "0px",
                  borderBottom: "none",
                  borderColor: " initial",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                className="custom-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
              >
                <option selected>0</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <Label>Preferred Class</Label>
            <div className="input-group mb-3">
              <select
                style={{
                  border: "0px",
                  borderBottom: "none",
                  borderColor: " initial",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                className=".contentdrop"
                className="custom-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
              >
                <option selected>Economy/Coach</option>
                <option defaultValue="2">First Class</option>
                <option defaultValue="3">Business Class</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label>Preferred Airline</Label>
            <Input
              className="form-control form-control-sm"
              style={{
                border: "0px",
                borderBottom: "1px solid",
                fontFamily: "Lato",
                fontWeight: "bolder",
                fontSize: "12px",
                color: "grey"
              }}
              type="text"
            />
          </Col>

          <Col md={3}>
            <Label>Markup Value</Label>
            <Input
              className="form-control form-control-sm"
              style={{
                border: "0px",
                borderBottom: "1px solid"
              }}
              type="text"
            />
          </Col>
          <Col md={4}>
            <Label>Markup By</Label>
            <div className="input-group mb-3">
              <select
                style={{
                  border: "0px",
                  borderBottom: "none",
                  borderColor: " initial",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                className="contentdrop"
                className="custom-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
              >
                <option selected>Choose Markup By</option>
              </select>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={3}>
            <div>
              <Label check>
                <Input type="checkbox" /> Non Stop
              </Label>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={5}>
            <span>
              <ul className="nav nav-pills">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ backgroundColor: "#cc0c00" }}
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                  SEARCH YOUR FLIGHT
                </a>
              </ul>
            </span>
          </Col>
        </Row>
      </FormGroup>
    </div>
  );
};

export default Flight;
