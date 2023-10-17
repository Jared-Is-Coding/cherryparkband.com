import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

export const CherryParkNavbar = () => (
    <Navbar fixed="top" expand="lg" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">Cherry Park</Navbar.Brand>
            <Navbar.Toggle label="Menu toggle" aria-controls="site-navbar" />

            <Navbar.Collapse id="site-navbar">
                <Nav variant="underline" justify>
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/about">About</Nav.Link> */}
                    <Nav.Link href="/shows/">Shows</Nav.Link>
                    <Nav.Link href="/merch/">Merch</Nav.Link>
                    <NavDropdown title="Listen" renderMenuOnMount={true} focusFirstItemOnShow="keyboard" id="nav-listen-dropdown">
                        <NavDropdown.Item href="https://open.spotify.com/artist/3a8YTU2G2VYGFo0eSLbCFX" target="_blank">Spotify</NavDropdown.Item>
                        <NavDropdown.Item href="https://music.apple.com/us/artist/cherry-park/1696841984" target="_blank">Apple Music</NavDropdown.Item>
                        <NavDropdown.Item href="https://music.youtube.com/channel/UCAHyvdKl3D20ehs0Ajto3OA" target="_blank">YouTube Music</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Socials" renderMenuOnMount={true} focusFirstItemOnShow="keyboard" id="nav-socials-dropdown">
                        <NavDropdown.Item href="https://www.instagram.com/cherryparkband/" target="_blank">Instagram</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.tiktok.com/@cherryparkofficial" target="_blank">TikTok</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="mailto:thecherryparkband@gmail.com?subject=Cherry Park | General Inquiries">Inquiries</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)