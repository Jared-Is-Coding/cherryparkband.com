import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import { FaMusic, FaSpotify, FaYoutube } from "react-icons/fa"

export const ListenIconLinks = () => (
    <>
        <a style={{padding: "0 5px"}} href="https://music.apple.com/us/artist/cherry-park/1696841984" target="_blank" title="Link to music.apple.com">
            <FaMusic size="1.5em" title="Apple Music" />
        </a>
        <a style={{padding: "0 5px"}} href="https://open.spotify.com/artist/3a8YTU2G2VYGFo0eSLbCFX" target="_blank" title="Link to spotify.com">
            <FaSpotify size="1.5em" title="Spotify" />
        </a>
        <a style={{padding: "0 5px"}} href="https://music.youtube.com/channel/UCAHyvdKl3D20ehs0Ajto3OA" target="_blank" title="Link to music.youtube.com">
            <FaYoutube size="1.5em" title="YouTube Music" />
        </a>
    </>
)