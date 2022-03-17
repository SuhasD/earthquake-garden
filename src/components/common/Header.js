import { Navbar, Container } from 'react-bootstrap';
import React from "react";
import useSourceData from "../../hooks/useSourceData";
import { Link } from 'react-router-dom';


export default function header() {
    let { loading, siteDetails, profileDetails } = useSourceData();

    return (
        <>
            {!loading && (
                <Navbar className='site-header'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={siteDetails.logoImage} alt="logo" className='img-responsive siteLogo' />
                            <span className='siteTitle'>{siteDetails.title}</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className='profileTitle'>
                                <Link to={{
                                    pathname: `/profile`,
                                }}>Welcome,  {profileDetails.firstName}
                                </Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
            <br />
        </>
    )
}
