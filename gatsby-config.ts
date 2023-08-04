import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config()

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Cherry Park",
        description: `Cherry Park is an east coast indie group creating music. With songs that explore sonic textures of psych rock, garage rock and indie pop, there is sure to be something for every music lover within their debut EP, "secret garden", available August 4, 2023.`,
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
        "gatsby-plugin-sitemap"
    ]
};

export default config;
