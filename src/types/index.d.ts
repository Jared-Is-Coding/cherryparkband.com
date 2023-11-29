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
     * Other performers list text
     */
    otherPerformers?: string
    /**
     * Image title text
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
     * Show URL
     */
    url: string
    /**
     * Show URL target
     */
    target?: string
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
}