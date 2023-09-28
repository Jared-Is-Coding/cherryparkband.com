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
                                pageContext
                            }
                        }
                    }
                }`,
                serialize: ({ site, allSitePage }: { site: GatsbyConfig["siteMetadata"], allSitePage: Queries.SitePageConnection }) => {
                    return allSitePage.edges
                        .filter(({ node }) => (
                            node.pageContext?.isCanonical !== false
                        ))
                        .map(({ node }) => {
                            return {
                                url: site?.siteUrl + node.path,
                                changefreq: "daily",
                                priority: node.path == "/" ? 1 : 0.7,
                            }
                        })
                },
                resolvePages: ({ allSitePage }: { allSitePage: Queries.SitePageConnection }) => {
            
                    return allSitePage.edges.map(page => {
                        return { ...page }
                    })
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
