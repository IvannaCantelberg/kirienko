import type { IMediumFeed } from "~/types/medium";

const MEDIUM_FEEDS_URL: string = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@tatjanakirienko/feed';

export const useMedium = () => {
    const getFeeds = async() => {
        const data  = await useFetch(MEDIUM_FEEDS_URL)
        .then((result) => {
            return result.data.value
        })
        .then((value) => {
            return (value as IMediumFeed).items
        })

        return data;    
    }

    return {
        getFeeds
    }
}