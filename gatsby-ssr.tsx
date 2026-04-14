import React from "react"
import type { GatsbySSR } from "gatsby"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script key="site-script" src="/js/script.js" />,
    ])
}
