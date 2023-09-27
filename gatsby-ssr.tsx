import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script src="/js/script.js" />,
    ])
}
