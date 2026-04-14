import path from "path"
import type { GatsbyNode } from "gatsby"

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@scss": path.resolve(__dirname, "src/scss"),
                "@components": path.resolve(__dirname, "src/components"),
                "@util": path.resolve(__dirname, "src/util")
            }
        }
    })
}