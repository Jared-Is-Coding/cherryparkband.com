import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { AmazonMusicLink, AppleMusicLink, BandEmail, InstagramLink, SpotifyLink, TikTokLink, TwitterLink, YouTubeMusicLink } from "../util/SiteVariables"

export const CherryParkNavbar = () => (
    <Navbar fixed="top" expand="lg" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">Cherry Park</Navbar.Brand>
            <Navbar.Toggle label="Menu toggle" aria-controls="site-navbar" />

            <Navbar.Collapse id="site-navbar">
                <Nav variant="underline" justify>
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/about">About</Nav.Link> */}
                    <NavDropdown title="Listen" renderMenuOnMount={true} focusFirstItemOnShow="keyboard" id="nav-listen-dropdown">
                        <NavDropdown.Item href={SpotifyLink} target="_blank">Spotify</NavDropdown.Item>
                        <NavDropdown.Item href={AppleMusicLink} target="_blank">Apple Music</NavDropdown.Item>
                        <NavDropdown.Item href={YouTubeMusicLink} target="_blank">YouTube Music</NavDropdown.Item>
                        <NavDropdown.Item href={AmazonMusicLink} target="_blank">Amazon Music</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/shows/">Shows</Nav.Link>
                    <Nav.Link href="/merch/">Merch</Nav.Link>
                    <NavDropdown title="Socials" renderMenuOnMount={true} focusFirstItemOnShow="keyboard" id="nav-socials-dropdown">
                        <NavDropdown.Item href={InstagramLink} target="_blank">Instagram</NavDropdown.Item>
                        <NavDropdown.Item href={TikTokLink} target="_blank">TikTok</NavDropdown.Item>
                        <NavDropdown.Item href={TwitterLink} target="_blank">Twitter</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href={`mailto:${BandEmail}?subject=Cherry Park | General Inquiries`}>Inquiries</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)