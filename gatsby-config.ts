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
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                exclude: ["/about"],
                query: `
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }
                    allSitePage {
                        edges {
                            node {
                                path
                                context {
                                    isCanonical
                                }
                            }
                        }
                    }
                }`,
                serialize: ({ site, allSitePage }) => {
                    return allSitePage.edges
                        .filter(({ node }) => (
                            node.context.isCanonical !== false
                        ))
                        .map(({ node }) => {
                            return {
                                url: site.siteMetadata.siteUrl + node.path,
                                changefreq: "daily",
                                priority: node.path == "/" ? 1 : 0.7,
                            };
                        });
                  },
            }
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-robots-txt"
    ]
};

export default config;
