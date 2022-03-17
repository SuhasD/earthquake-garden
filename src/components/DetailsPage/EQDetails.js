
import React from "react";
import { Row, Col, Container, Breadcrumb } from 'react-bootstrap';
import useSourceData from "../../hooks/useSourceData";
import { useParams } from 'react-router-dom';
import Loader from '../common/Loader'

export default function EQDetails() {
    let { id } = useParams();
    let { loading, earthQuakeDetails } = useSourceData();
    const eqDetails = earthQuakeDetails[id] ? earthQuakeDetails[id] : {}

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Details</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row className="eqDetails">
                        <h1 className="pageTitle">{eqDetails.title}</h1>
                        {
                            Object.keys(eqDetails).map((data, i) => {
                                return (
                                    <Row className="detailRow" key={i}>
                                        <Col xs="4" md="2"><span className="title">{data}</span></Col>
                                        <Col xs="8" md="8"><span className="detail">{eqDetails[data]}</span></Col>
                                    </Row>

                                )
                            })
                        }
                    </Row>
                </div>
            )}
        </Container>
    )
}