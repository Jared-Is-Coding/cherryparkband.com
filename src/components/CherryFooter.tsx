import { Script } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaMusic, FaSpotify, FaYoutube } from "react-icons/fa"

type CherryFooterProps = {
    hideListenIconLinks?: boolean
}

export const CherryFooter = ({hideListenIconLinks}: CherryFooterProps) => (
    <footer>
        <Container style={{display: hideListenIconLinks ? "none" : ""}} className="flex-center" fluid>
            <Row>
                <Col xs="auto">
                    <a href="https://music.apple.com/us/artist/cherry-park/1696841984" target="_blank" title="Link to music.apple.com">
                        <FaMusic size="1.7em" title="Apple Music" />
                    </a>
                </Col>
                <Col xs="auto">
                    <a href="https://open.spotify.com/artist/3a8YTU2G2VYGFo0eSLbCFX" target="_blank" title="Link to spotify.com">
                        <FaSpotify size="1.7em" title="Spotify" />
                    </a>
                </Col>
                <Col xs="auto">
                    <a href="https://music.youtube.com/channel/UCAHyvdKl3D20ehs0Ajto3OA" target="_blank" title="Link to music.youtube.com">
                        <FaYoutube size="1.7em" title="YouTube Music" />
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
)