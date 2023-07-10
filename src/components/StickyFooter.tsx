import { Link } from "gatsby"
import React from "react"
import { FaInstagram, FaMusic, FaSpotify } from "react-icons/fa"

export const StickyFooter = () => (
    <footer className="flex-row flex-center">
    <Link to="#" target="_blank" title="Link to spotify.com">
        <FaSpotify size="2em" title="Spotify" />
    </Link>
        <Link to="#" target="_blank" title="Link to music.apple.com">
            <FaMusic size="2em" title="Apple Music" />
        </Link>
        <Link to="https://www.instagram.com/cherryparkband/" target="_blank" title="Link to Cherry Park on Instagram.com">
            <FaInstagram size="2em" title="Instagram" />
        </Link>
    </footer>
)