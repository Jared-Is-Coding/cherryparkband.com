import { Link } from "gatsby"
import React from "react"
import { FaSpotify } from "react-icons/fa"

export const StickyFooter = () => (
    <footer className="flex-row flex-center">
        <Link to="#" target="_blank" title="Link to Spotify.com">
            <FaSpotify size="2em" title="Spotify icon" />
        </Link>
    </footer>
)