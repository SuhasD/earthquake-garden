import { sourceData } from '../../data/data';

export const getSourceData = () => {
    const earthQuakeList = sourceData.data.features.map(eq => ({
        magnitude: eq.properties.mag,
        time: formatDate(eq.properties.time),
        title: eq.properties.title,
        type: eq.properties.type,
        tsunami: eq.properties.tsunami,
        status: eq.properties.status
    }));

    return {
        earthQuakeList,
        siteData : sourceData.site,
        profileData : sourceData.profile
    }
}

const formatDate = (timestamp) => {
    const dateObject = new Date(timestamp)
    const month = dateObject.toLocaleString("en-US", { month: "short" })
    const date = dateObject.toLocaleString("en-US", { day: "numeric" })
    const year = dateObject.toLocaleString("en-US", { year: "numeric" })
    const time = dateObject.toLocaleTimeString("en-US")

    const formattedDate = `${month} ${date}, ${year}, ${time}`
    return formattedDate;
}