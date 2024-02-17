import React from "react"
import { FaAmazon, FaInstagram, FaMusic, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa"

export const ListenIconLinks = () => (
    <>
        <a style={{padding: "0 5px"}} href="https://music.apple.com/us/artist/cherry-park/1696841984" target="_blank" title="Link to Cherry Park on music.apple.com">
            <FaMusic size="1.5em" title="Apple Music" />
        </a>
        <a style={{padding: "0 5px"}} href="https://open.spotify.com/artist/3a8YTU2G2VYGFo0eSLbCFX" target="_blank" title="Link to Cherry Park on spotify.com">
            <FaSpotify size="1.5em" title="Spotify" />
        </a>
        <a style={{padding: "0 5px"}} href="https://music.youtube.com/channel/UCAHyvdKl3D20ehs0Ajto3OA" target="_blank" title="Link to Cherry Park on music.youtube.com">
            <FaYoutube size="1.5em" title="YouTube Music" />
        </a>
        <a style={{padding: "0 5px"}} href="https://www.amazon.com/music/player/artists/B0CBLPT7QD/" target="_blank" title="Link to Cherry Park on amazon.com/music">
            <FaAmazon size="1.5em" title="Amazon Music" />
        </a>
        <a style={{padding: "0 5px"}} href="https://www.instagram.com/cherryparkband/" target="_blank" title="Link to Cherry Park on Instagram.com">
            <FaInstagram size="1.5em" title="Instagram" />
        </a>
        <a style={{padding: "0 5px"}} href="https://www.tiktok.com/@cherryparkofficial" target="_blank" title="Link to Cherry Park on Tiktok.com">
            <FaTiktok size="1.5em" title="Tiktok" />
        </a>
    </>
)