import { Link } from "gatsby"
import React from "react"
import { FaInstagram, FaSpotify } from "react-icons/fa"

export const StickyFooter = () => (
    <footer className="flex-row flex-center">
        <Link to="#" target="_blank" title="Link to Spotify.com">
            <FaSpotify size="2em" title="Spotify icon" />
        </Link>
        <Link to="https://www.instagram.com/cherryparkband/" target="_blank" title="Link to Cherry Park on Instagram.com">
            <FaInstagram size="2em" title="Instagram icon" />
        </Link>
    </footer>
)