import React from "react"
import { FaAmazon, FaInstagram, FaMusic, FaSpotify, FaYoutube } from "react-icons/fa"
import { AmazonMusicLink, AppleMusicLink, InstagramLink, SpotifyLink, YouTubeMusicLink } from "../util/SiteVariables"

export default () => (
    <>
        <a style={{padding: "0 5px"}} href={AppleMusicLink} target="_blank" title="Link to Cherry Park on music.apple.com">
            <FaMusic size="1.5em" title="Apple Music" />
        </a>
        
        <a style={{padding: "0 5px"}} href={SpotifyLink} target="_blank" title="Link to Cherry Park on spotify.com">
            <FaSpotify size="1.5em" title="Spotify" />
        </a>

        <a style={{padding: "0 5px"}} href={YouTubeMusicLink} target="_blank" title="Link to Cherry Park on music.youtube.com">
            <FaYoutube size="1.5em" title="YouTube Music" />
        </a>

        <a style={{padding: "0 5px"}} href={AmazonMusicLink} target="_blank" title="Link to Cherry Park on amazon.com/music">
            <FaAmazon size="1.5em" title="Amazon Music" />
        </a>

        <a style={{padding: "0 5px"}} href={InstagramLink} target="_blank" title="Link to Cherry Park on instagram.com">
            <FaInstagram size="1.5em" title="Instagram" />
        </a>
    </>
)