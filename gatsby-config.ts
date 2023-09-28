import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config()

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Cherry Park | East Coast indie band",
        description: "Cherry Park is an east Coast indie group writing music. There is sure to be something for every music lover within their debut EP, Secret Garden. Now available on all streaming platforms.",
        image: "/images/logo.png",
        siteUrl: process.env.SITE_URL
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sass",
        "gatsby-plugin-robots-txt"
    ]
};

export default config;
