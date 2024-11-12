export const useAnalytics = () => {
    const trackLinkClick =  (label: string) => {
        gtag('event', 'click', {
            event_category: 'Link',
            event_label: label,
            value: 1
        });
    }

    const trackBtnClick = (label: string) => {
        gtag('event', 'click', {
            event_category: 'Button',
            event_label: label,
            value: 1
        });
    }


    return {
        trackLinkClick, 
        trackBtnClick
    }
}

