import React from "react"
import { FaInstagram, FaMusic, FaRegEnvelope, FaSpotify, FaYoutube } from "react-icons/fa"

export const StickyFooter = () => (
    <footer className="flex-row flex-center">
        <div className="flex-col">
            <div className="flex-row flex-center">
                <a href="mailto:thecherryparkband@gmail.com" title="Send an email to Cherry Park">
                    <FaRegEnvelope size="2em" title="Email" />
                </a>
                <a href="https://www.instagram.com/cherryparkband/" target="_blank" title="Link to Cherry Park on Instagram.com">
                    <FaInstagram size="2em" title="Instagram" />
                </a>
            </div>
            <div className="flex-row flex-center">
                <a href="https://open.spotify.com/artist/3a8YTU2G2VYGFo0eSLbCFX" target="_blank" title="Link to spotify.com">
                    <FaSpotify size="2em" title="Spotify" />
                </a>
                <a href="https://music.apple.com/us/artist/cherry-park/1696841984" target="_blank" title="Link to music.apple.com">
                    <FaMusic size="2em" title="Apple Music" />
                </a>
                <a href="https://music.youtube.com/channel/UCAHyvdKl3D20ehs0Ajto3OA" target="_blank" title="Link to music.youtube.com">
                    <FaYoutube size="2em" title="YouTube Music" />
                </a>
            </div>
        </div>
    </footer>
)