import { Link } from "gatsby"
import React from "react"
import { FaInstagram, FaMusic, FaSpotify, FaYoutube } from "react-icons/fa"

export const StickyFooter = () => (
    <footer className="flex-row flex-center">
        <Link to="https://open.spotify.com/artist/3a8YTU2G2VYGFo0eSLbCFX" target="_blank" title="Link to spotify.com">
            <FaSpotify size="2em" title="Spotify" />
        </Link>
        <Link to="https://music.apple.com/us/artist/cherry-park/1696841984" target="_blank" title="Link to music.apple.com">
            <FaMusic size="2em" title="Apple Music" />
        </Link>
        <Link to="https://music.youtube.com/channel/UCAHyvdKl3D20ehs0Ajto3OA" target="_blank" title="Link to music.youtube.com">
            <FaYoutube size="2em" title="YouTube Music" />
        </Link>
        <Link to="https://www.instagram.com/cherryparkband/" target="_blank" title="Link to Cherry Park on Instagram.com">
            <FaInstagram size="2em" title="Instagram" />
        </Link>
    </footer>
)