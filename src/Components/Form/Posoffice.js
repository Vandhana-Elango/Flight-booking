import React from 'react';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './Flight.css';

const Posoffice = () => {
  return (
    <div className="content">
      <FormGroup>
        <Row>
          <Col md={12}>
            <ul className="nav nav-tabs">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#cc0c00" }}
              >
                <i className="fa fa-bars"></i>POS Office
              </a>

              <a className="nav-link" href="#" style={{ color: "grey" }}>
                <i className="fa fa-indent"></i>Corporate
              </a>
            </ul>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={8}>
            <ul className="nav nav-pills">
              <a
                className="nav-link active"
                href="#"
                style={{ backgroundColor: "#cc0c00" }}
              >
                <i className="fa fa-globe"></i>Office Info
              </a>
              <a className="nav-link" href="#" style={{ color: "grey" }}>
                <i className="fa fa-user"></i>Admin User
              </a>

              <a className="nav-link" href="#" style={{ color: "grey" }}>
                <i className="fa fa-users"></i>Group/Seasonality
              </a>

              <a className="nav-link" href="#" style={{ color: "grey" }}>
                <i className="fa fa-bars"></i>Markup
              </a>
            </ul>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <h4
              style={{
                color: "black"
              }}
            >
              Basic Information
            </h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={3}>
            <div>
              <Label>Business Type*</Label>
              <div className="input-group mb-3">
                <select
                  style={{
                    border: "0px",
                    borderBottom: "none",
                    borderColor: " initial",
                    borderColor: "none",
                    fontFamily: "Lato",
                    fontWeight: "bolder",
                    fontSize: "12px",
                    color: "grey"
                  }}
                  className="custom-select"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                >
                  <option defaultValue>Sub Agent/ Branch Office</option>
                  <option defaultValue="2">Sub Agent</option>
                  <option defaultValue="3"> Branch Office</option>
                </select>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div>
              <Label>Office Name*</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                placeholder="Eg: XYZ Travel Agent"
                type="text"
              />
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Label>Branch Code</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                type="text"
              />
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Label>Email Id*</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                placeholder="xyz@gmail.com"
                type="text"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div>
              <Label>Contact Number</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                placeholder="Contact Number"
                type="text"
              />
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Label>Payment Gateway</Label>
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
                  <option defaultValue>No</option>
                  <option defaultValue="2">Yes</option>
                </select>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Label>Opearating Currency*</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                placeholder="Australian Dollar"
                type="text"
              />
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Label>Credit Limit*</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px"
                }}
                type="text"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div>
              <Label>Opearating Country</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                placeholder="Australian"
                type="text"
              />
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Label>Opearating Time-Zone*</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                placeholder="Brisbane"
                type="text"
              />
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Label>TAX Number</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                type="text"
              />
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Label>Number of Users*</Label>
              <Input
                className="form-control form-control-sm"
                style={{
                  border: "0px",
                  borderBottom: "1px solid",
                  borderColor: "none",
                  fontFamily: "Lato",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  color: "grey"
                }}
                type="text"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div>
              <Label>IATA Number</Label>
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
            </div>
          </Col>
        </Row>
      </FormGroup>
    </div>
  );
};

export default Posoffice;
