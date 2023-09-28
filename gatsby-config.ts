import type { GatsbyConfig } from "gatsby"
import * as dotenv from "dotenv"

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
                excludes: ["/about"],
                query: `{
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }
                    allSitePage {
                        edges {
                            node {
                                path
                            }
                        }
                    }
                    allMarkdownRemark {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }`,
                serialize: ({ site, allSitePage }) => {
                    let pages = []
                    
                    allSitePage.edges.map(edge => {
                        pages.push({
                            url: site.siteMetadata.siteUrl + edge.node.path,
                            changefreq: `daily`,
                            priority: 0.7,
                        })
                    })
        
                    return pages
                },
            }
        },
        {
            resolve: 'gatsby-plugin-typegen',
            options: {
                outputPath: 'src/_generated/gatsby-types.d.ts',
                emitSchema: {
                    'src/_generated/gatsby-introspection.json': true,
                    'src/_generated/gatsby-schema.graphql': true,
                },
                emitPluginDocument: {
                    'src/_generated/gatsby-plugin-documents.graphql': true,
                }
            }
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-robots-txt",
    ]
}

export default config
