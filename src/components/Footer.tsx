import React from "react"
import { Alert, Col, Container, Row } from "react-bootstrap"
import { FaAmazon, FaInstagram, FaMusic, FaSpotify, FaYoutube } from "react-icons/fa"
import { AmazonMusicLink, AppleMusicLink, InstagramLink, SpotifyLink, YouTubeMusicLink } from "../util/SiteVariables"
import AlertPopup from "./AlertPopup"

type CherryFooterProps = {
    hideListenIconLinks?: boolean
}

export default ({hideListenIconLinks}: CherryFooterProps) => (
    <footer>
        <AlertPopup
            alertTag="music-new"
            AlertContent={(
                <>
                    <Alert.Heading>Upcoming Release</Alert.Heading>
                    <p>
                        Summer Sun, available to stream March 20th: <Alert.Link href="https://distrokid.com/hyperfollow/cherrypark/summer-sun/" target="_self">Presave now!</Alert.Link>
                    </p>
                </>
            )}
            validFrom={new Date("March 1, 2026 12:00:00").valueOf()}
            validUntil={new Date("March 21, 2026 23:23:59").valueOf()} />

        <Container style={{display: hideListenIconLinks ? "none" : ""}} className="flex-center" fluid>
            <Row className="flex-center">
                {/* Footer top bar with spacing */}
                <Col className="footerTopBar" xs={{span: 6, offset: 3}}>
                    <p></p>
                </Col>
                <Col xs={{span: 3}}></Col>

                {/* Footer content */}
                <Col xs={{span: "auto"}}>
                    <a href={AppleMusicLink} target="_blank" title="Link to Cherry Park on music.apple.com">
                        <FaMusic size="1.7em" title="Apple Music" />
                    </a>
                </Col>
                <Col xs={{span: "auto"}}>
                    <a href={SpotifyLink} target="_blank" title="Link to Cherry Park on spotify.com">
                        <FaSpotify size="1.7em" title="Spotify" />
                    </a>
                </Col>
                <Col xs={{span: "auto"}}>
                    <a href={YouTubeMusicLink} target="_blank" title="Link to Cherry Park on music.youtube.com">
                        <FaYoutube size="1.7em" title="YouTube Music" />
                    </a>
                </Col>
                <Col xs={{span: "auto"}}>
                    <a href={AmazonMusicLink} target="_blank" title="Link to Cherry Park on amazon.com/music">
                        <FaAmazon size="1.7em" title="Amazon Music" />
                    </a>
                </Col>

                {/* Mobile spacer */}
                <Col xs={{span: 12}} className="d-md-none"><br /></Col>

                <Col xs={{span: "auto"}}>
                    <a href={InstagramLink} target="_blank" title="Link to Cherry Park on instagram.com">
                        <FaInstagram size="1.7em" title="Instagram" />
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
)