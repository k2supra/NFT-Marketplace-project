import HeroSection from "./Home/HeroSection/HeroSection";
import TrendingCollection from "./Home/TrendingCollection/TrendingCollection";
import TopRatedArtists from "./Home/TopRatedArtists/TopRatedArtists";
import BrowseCategories from "./Home/BrowseCategories/BrowseCategories";
import DiscoverMoreNFTS from "./Home/DiscoverMoreNFTS/DiscoverMoreNFTS";
import NFTHighlight from "./Home/NFTHighlight/NFTHighlight";
import HowItWorks from "./Home/HowItWorks/HowItWorks";
import SubscribeWidget from "./Home/SubscribeWidget/SubscribeWidget";

import PopUp from "./PopUp/PopUp";
import { useNavigate } from "react-router-dom";
import { openPopUp, closePopUp } from "../RTK/userSlice";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";

function Home() {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser) {
            const timer = setTimeout(() => {
              dispatch(openPopUp());
            }, 5000);
      
            return () => clearTimeout(timer);
          }
      }, [dispatch, currentUser]);

    return<div className="home">
        <HeroSection/>
        <TrendingCollection/>
        <TopRatedArtists/>
        <BrowseCategories/>
        <DiscoverMoreNFTS/>
        <NFTHighlight/>
        <HowItWorks/>
        <SubscribeWidget/>
        <PopUp 
        title={'Welcome'} 
        description={'We have an offer for you. Create an account and get 999 ETH for FREE'}
        cancelText={'Maybe, later'}
        okText={'Let`s go'}
        okAction={()=>{navigate('/sign-up'); dispatch(closePopUp())}}/>
    </div>
}

export default Home