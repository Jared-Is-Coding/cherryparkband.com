import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config()

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Cherry Park | East coast indie band",
        description: "Cherry Park is an east coast indie group writing music. There is sure to be something for every music lover within their debut EP, Secret Garden.",
        image: "/images/logo.png",
        siteUrl: process.env.SITE_URL
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sitemap",
        "gatsby-plugin-netlify",
        "gatsby-plugin-sass",
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-sitemap",
    ]
};

export default config;
