type albumData = {
    /**
     * Album title text
     */
    albumTitle: string
    /**
     * Album release date text
     */
    releaseDate: string
    /**
     * Image source url
     */
    imageSrc: string
    /**
     * Image title text
     */
    imageTitle: string
    /**
     * Image alt text
     */
    imageAlt: string
    /**
     * Album URL
     */
    url?: string
}

type showData = {
    /**
     * Show title text
     */
    showTitle: string
    /**
     * Show date text
     */
    showDate: string
    /**
     * Don't show this until date string
     */
    hiddenUntilDateTime?: string
    /**
     * Other performers list text
     */
    otherPerformers?: string
    /**
     * Image source URL
     */
    imageSrc?: string
    /**
     * Image title text
     */
    imageTitle?: string
    /**
     * Image alt text
     */
    imageAlt?: string
    /**
     * Show URL
     */
    url?: string
    /**
     * Show URL target
     */
    target?: string
    /**
     * Is the show 21 and up?
     */ 
    ageRequirement?: boolean
}

type merchData = {
    /**
     * Merch title text
     */
    title: string
    /**
     * Merch price text
     */ 
    price: string
    /**
     * Image source url
     */
    imageSrc: string
    /**
     * Image title text
     */
    imageTitle?: string
    /**
     * Image alt text
     */
    imageAlt?: string
    /**
     * Merch release date text
     */
    dateAvailable?: string
    /**
     * Merch URL
     */
    url?: string
}

type merchStyles = {
    /**
     * Style title text
     */
    title: string
    /**
     * Image source url
     */
    imageSrc: string
    /**
     * Additional information to be displayed on the card
     */
    additionalInfo?: string
    /**
     * Image title text
     */
    imageTitle?: string
    /**
     * Image alt text
     */
    imageAlt?: string
    /**
     * Style release date text
     */
    dateAvailable?: string
}

type carouselSlideData = {
    /**
     * Desktop image source for the slide
     */
    imageSrc: string
    /**
     * Mobile image source for the slide
     */
    imageSrcMobile?: string
    /**
     * Image title text
     */
    imageTitle?: string
    /**
     * Image alt text
     */
    imageAlt?: string
    /**
     * Empty or false will make text white
     */
    darkText?: boolean
    /**
     * Where this carousel slide should link to
     */
    url?: string
}