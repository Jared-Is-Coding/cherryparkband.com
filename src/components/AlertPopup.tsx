import React, { useState } from "react"
import { Alert } from "react-bootstrap"

type AlertPopupProps = {
    AlertContent: React.JSX.Element
    alertTag: string
    validFrom?: number
    validUntil?: number
}

export const AlertPopup = ({AlertContent, alertTag, validFrom, validUntil}: AlertPopupProps) => {
    const [show, setShow] = useState(true)
    const isBrowser = () => typeof window !== "undefined"
    
    // Check for browser window
    if (!isBrowser()) return

    // Ensure today's date is within range
    const today = new Date().valueOf()
    if (validFrom && validFrom > today) return
    if (validUntil && validUntil < today) return

    // Clear old alert hiding
    if (window.sessionStorage.getItem("alert-closed") !== alertTag) {
        window.sessionStorage.removeItem("alert-closed")
    }

    // Otherwise check if this alert has been hidden already
    const alertClosed = window.sessionStorage.getItem("alert-closed") === alertTag

    const hideAlert = () => {
        setShow(false)
        window.sessionStorage.setItem("alert-closed", alertTag)
    }

    if (!alertClosed && show) {
        return (
            <Alert className="floating" variant="dark" onClose={hideAlert} dismissible>
                {AlertContent}
            </Alert>
        )
    } else {
        return <></>
    }
}