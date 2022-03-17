import { useState, useEffect } from "react";
import { getSourceData } from '../utils/apiCalls';

export default function useListMovies (){
    const [loading, setLoading] = useState(true);
    const [siteDetails, setSiteDetails] = useState({});
    const [profileDetails, setProfileDetails] = useState({});
    const [earthQuakeDetails, setEarthQuakeDetails] = useState([]);
    const [sortingDirections, setSortingDirections] = useState({ 'name' : 'DESCENDING'});


    const fetchData = () => {
        const {earthQuakeList, siteData, profileData} = getSourceData();
        setSiteDetails(siteData);
        setProfileDetails(profileData);
        setEarthQuakeDetails(earthQuakeList);
        setLoading(false);
    }

    useEffect ( () => {
        fetchData();
    }, []);

    return {
        loading, 
        siteDetails,
        profileDetails,
        earthQuakeDetails,
        setEarthQuakeDetails,
        sortingDirections,
        setSortingDirections,
    }
}