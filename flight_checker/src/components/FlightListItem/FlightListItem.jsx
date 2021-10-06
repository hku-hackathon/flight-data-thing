import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Container, Col } from "react-bootstrap";

const FlightListItem = ({ flightDataList }) => {
    return (
        <Container>
            <Row className="center">
                <Col className="col-3"></Col>

                <Col className="col-6">
                    <Row>
                        <div className="input-group input-group-lg mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Username .form-select-lg"
                                aria-describedby="inputGroup-sizing-lg"
                            />
                        </div>
                    </Row>
                    <Row>
                        <Col className="col-4 justify-content-center align-middle text-center align-middle  mt-1">
                            <h3 className="mb-0">Search for:</h3>
                        </Col>
                        <Col className="col-8">
                            <select
                                class="form-select form-select-lg mb-3"
                                aria-label=".form-select-lg example"
                            >
                                <option selected>Flight Number</option>
                                <option value="2">Date</option>
                                <option value="3">Destination</option>
                            </select>
                        </Col>
                    </Row>
                </Col>

                <Col className="col-3"></Col>
            </Row>

            <Row className="mt-3">
                <Card className="border text-center shadow rounded-3 clickable">
                    <Row className="template">
                        <div className="col">
                            <Row>
                                <img
                                    src="img/cathayLogo.png"
                                    alt="cathay logo"
                                    className="img-fluid"
                                />
                            </Row>
                            <h3>CX123</h3>
                        </div>
                        <div className="col">
                            <h3 className="font-weight-bold">Destination:</h3>
                            <p className="fs-4">Japan</p>
                        </div>
                        <div className="col">
                            <h3 className="font-weight-bold">Time:</h3>
                            <p className="fs-4">DD/MM/YYYY</p>
                        </div>
                    </Row>
                </Card>
            </Row>
        </Container>
    );
};

export default FlightListItem;
