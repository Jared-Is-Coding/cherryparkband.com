import React from "react"
import { Alert, Col, Container, Row } from "react-bootstrap"
import { FaInstagram, FaMusic, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa"
import { AlertPopup } from "./AlertPopup"

type CherryFooterProps = {
    hideListenIconLinks?: boolean
}

export const CherryFooter = ({hideListenIconLinks}: CherryFooterProps) => (
    <footer>
        <AlertPopup
            alertTag="ep-new-3"
            AlertContent={(
                <>
                    <Alert.Heading>Upcoming Release</Alert.Heading>
                    <p>We are so excited to officially announce the release of our latest project, "Antidote", available NOW on all streaming platforms!</p>
                    <hr />
                    <Alert.Heading>New Upcoming Shows</Alert.Heading>
                    <p>We're performing in <Alert.Link href="/shows">Elkton, MD on February 17th</Alert.Link>!</p>
                    <hr />
                    <Alert.Heading>Merch Now Available</Alert.Heading>
                    <p>You can check out what's available <Alert.Link href="/merch">here</Alert.Link>.</p>
                </>
            )}
            validFrom={new Date("January 1, 2024 00:00:00").valueOf()}
            validUntil={new Date("February 17, 2024 00:00:00").valueOf()} />
        <AlertPopup
            alertTag="show-new"
            AlertContent={(
                <>
                    <Alert.Heading>Upcoming Release</Alert.Heading>
                    <p>We are so excited to officially announce the release of our latest project, "Antidote", available NOW on all streaming platforms!</p>
                    <hr />
                    <Alert.Heading>Merch Now Available</Alert.Heading>
                    <p>You can check out what's available <Alert.Link href="/merch">here</Alert.Link>.</p>
                </>
            )}
            validFrom={new Date("February 17, 2024 00:00:00").valueOf()}
            validUntil={new Date("February 18, 2024 00:00:00").valueOf()} />
        <AlertPopup
            alertTag="show-new"
            AlertContent={(
                <>
                    <Alert.Heading>Merch Now Available</Alert.Heading>
                    <p>You can check out what's available <Alert.Link href="/merch">here</Alert.Link>.</p>
                </>
            )}
            validFrom={new Date("February 18, 2024 00:00:00").valueOf()}
            validUntil={new Date("March 1, 2024 00:00:00").valueOf()} />

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