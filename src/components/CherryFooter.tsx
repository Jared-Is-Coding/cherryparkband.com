import React, { useState } from "react"
import { Alert, Col, Container, Row } from "react-bootstrap"
import { FaInstagram, FaMusic, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa"

type CherryFooterProps = {
    hideListenIconLinks?: boolean
}

const AlertDisplay = () => {
    const [show, setShow] = useState(true)
    const alertTag = "elkton-show-and-merch-2"
    const isBrowser = () => typeof window !== "undefined"
    
    if (!isBrowser()) return

    // Clear old alert hiding
    if (window.sessionStorage.getItem("alert-closed") !== alertTag) {
        window.sessionStorage.removeItem("alert-closed")
    }

    // Otherwise check if this alert has been hidden already
    const alertClosed = window.sessionStorage.getItem("alert-closed") === alertTag

    const hideAlert = () => {
        setShow(false)
        window.sessionStorage.setItem("alert-closed", alertTag)
    }

    if (!alertClosed && show) {
        return (
            <Alert className="floating" variant="dark" onClose={hideAlert} dismissible>
                <Alert.Heading>New Upcoming Shows</Alert.Heading>
                <p>We're performing in <Alert.Link href="/shows">Elkton, MD on December 2nd</Alert.Link>!</p>
                <hr />
                <Alert.Heading>Merch Now Available</Alert.Heading>
                <p>You can check out what's available <Alert.Link href="/merch">here</Alert.Link>.</p>
            </Alert>
        )
    } else {
        return <></>
    }
}


export const CherryFooter = ({hideListenIconLinks}: CherryFooterProps) => (
    <footer>
        <AlertDisplay />

        <Container style={{display: hideListenIconLinks ? "none" : ""}} className="flex-center" fluid>
            <Row className="flex-center">
                {/* Footer top bar with spacing */}
                <Col className="footerTopBar" xs={{span: 6, offset: 3}}>
                    <p></p>
                </Col>
                <Col xs={{span: 3}}></Col>
                
                {/* Footer content */}
                <Col xs={{span: "auto"}}>
                    <a href="https://music.apple.com/us/artist/cherry-park/1696841984" target="_blank" title="Link to Cherry Park on music.apple.com">
                        <FaMusic size="1.7em" title="Apple Music" />
                    </a>
                </Col>
                <Col xs={{span: "auto"}}>
                    <a href="https://open.spotify.com/artist/3a8YTU2G2VYGFo0eSLbCFX" target="_blank" title="Link to Cherry Park on spotify.com">
                        <FaSpotify size="1.7em" title="Spotify" />
                    </a>
                </Col>
                <Col xs={{span: "auto"}}>
                    <a href="https://music.youtube.com/channel/UCAHyvdKl3D20ehs0Ajto3OA" target="_blank" title="Link to Cherry Park on music.youtube.com">
                        <FaYoutube size="1.7em" title="YouTube Music" />
                    </a>
                </Col>
                <Col xs={{span: "auto"}}>
                    <a href="https://www.instagram.com/cherryparkband/" target="_blank" title="Link to Cherry Park on Instagram.com">
                        <FaInstagram size="1.7em" title="Instagram" />
                    </a>
                </Col>
                <Col xs={{span: "auto"}}>
                    <a href="https://www.tiktok.com/@cherryparkofficial" target="_blank" title="Link to Cherry Park on Tiktok.com">
                        <FaTiktok size="1.7em" title="Tiktok" />
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
)