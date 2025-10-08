import './heroSection.css';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

import highlightedNFT from '../../../../assets/images/highlightedNFT.png'
import avatar from '../../../../assets/images/avatar.png'
import rocketLaunch from '../../../../assets/images/rocketLaunch.png'

function HeroSection() {
    const navigate = useNavigate()
    
    const currentUser = useSelector(state => state.user.currentUser)

    return(
        <div className='heroSection'>
            <div className="heroSectionFrame">
                <div className="headline">
                    <h4>Discover digital art & Collect NFTs</h4>
                    <span>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</span>
                    <button className='forTablet' onClick={()=>{currentUser ? navigate(`/marketplace`):navigate(`/sign-up`)}}><img src={rocketLaunch} alt="get started" className='rocketLaunch'/>Get Started</button>
                    <div className="additionalInfo forTablet">
                        <div className="additionalInfoItem">
                            <h5>240k+</h5>
                            <span>Total sale</span>
                        </div>
                        <div className="additionalInfoItem">
                            <h5>100k+</h5>
                            <span>Auctions</span>
                        </div>
                        <div className="additionalInfoItem">
                            <h5>240k+</h5>
                            <span>Artists</span>
                        </div>
                    </div>
                </div>
                <div className="highlightedNFT">
                    <img src={highlightedNFT} alt="highlightedNFT" className='highlightedNFT' onClick={()=>navigate(`/marketplace`)}/>
                    <div className="highlightedNFTInfo">
                        <h5>Space Walking</h5>
                        <div className="artist" onClick={()=>{navigate(`/artist-page/68dfd2966dff33e74b88403d`)}}>
                            <img src={avatar} alt="avatar" className='avatar'/>
                            <span>Animakid</span>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{currentUser ? navigate(`/marketplace`):navigate(`/sign-up`)}}><img src={rocketLaunch} alt="get started" className='rocketLaunch'/>Get Started</button>
                <div className="additionalInfo">
                    <div className="additionalInfoItem">
                        <h5>240k+</h5>
                        <span>Total sale</span>
                    </div>
                    <div className="additionalInfoItem">
                        <h5>100k+</h5>
                        <span>Auctions</span>
                    </div>
                    <div className="additionalInfoItem">
                        <h5>240k+</h5>
                        <span>Artists</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection