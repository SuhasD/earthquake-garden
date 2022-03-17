
import React from "react";
import { Row, Col, Container, Breadcrumb } from 'react-bootstrap';
import useSourceData from "../../hooks/useSourceData";
import Loader from '../common/Loader'

export default function EQDetails() {
    let { loading, profileDetails } = useSourceData();

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="profileDetails">
                        <h1 className="pageTitle">Profile</h1>
                        <Col xs="12" md="4" className="avatar">
                            <img src={profileDetails.avatarImage} alt="Profile image" />
                        </Col>
                        <Col xs="12" md="8">

                            <Row>
                                <Col xs="6" md="3" className="pTitle">
                                    First name
                                </Col>
                                <Col xs="6" md="9">
                                    {profileDetails.firstName}
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="6" md="3" className="pTitle">
                                    Last name
                                </Col>
                                <Col xs="6" md="9">
                                    {profileDetails.lastName}
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="6" md="3" className="pTitle">
                                    Phone
                                </Col>
                                <Col xs="6" md="9">
                                    {profileDetails.phone}
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="6" md="3" className="pTitle">
                                    Email
                                </Col>
                                <Col xs="6" md="9">
                                    {profileDetails.email}
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="6" md="3" className="pTitle">
                                    Bio
                                </Col>
                                <Col xs="6" md="9">
                                    {profileDetails.bio}
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            )}
        </Container>
    )
}