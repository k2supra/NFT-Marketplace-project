import './trendingCollection.css'

import avatar from '../../../../assets/images/avatar5.png'
import primaryPhoto from '../../../../assets/images/primaryPhoto.png'
import secondaryPhoto from '../../../../assets/images/secondaryPhoto.png'
import secondaryPhoto2 from '../../../../assets/images/secondaryPhoto2.png'

import { useNavigate } from 'react-router-dom'

function TrendingCollection() {
    const navigate = useNavigate()
    return<div className='trendingCollection'>
        <div className="sectionHeadline">
            <h4>Trending Collection</h4>
            <span>Checkout our weekly updated trending collection.</span>
        </div>
        <div className="collectionSlider">
            <div className="photos">
                <img src={primaryPhoto} alt="primaryPhoto" className="primaryPhoto" onClick={()=>navigate('/marketplace')}/>
                <div className="collection" onClick={()=>navigate('/marketplace')}>
                    <img src={secondaryPhoto} alt="secondaryPhoto" />
                    <img src={secondaryPhoto2} alt="secondaryPhoto2" />
                    <div className="photoReplacer">1025+</div>
                </div>
                <div className="collectionInfo" onClick={()=>navigate('/artist-page/68dfd3c36dff33e74b884058')}>
                    <h5 className="collectionName">DSGN Animals</h5>
                    <div className="artistCard">
                        <img src={avatar} alt="avatar" className='avatar'/>
                        <span>AlexTheBest</span>
                    </div>
                </div>
            </div>
            <div className="photos forDesktop">
            <img src={primaryPhoto} alt="primaryPhoto" className="primaryPhoto" onClick={()=>navigate('/marketplace')}/>
                <div className="collection" onClick={()=>navigate('/marketplace')}>
                    <img src={secondaryPhoto} alt="secondaryPhoto" />
                    <img src={secondaryPhoto2} alt="secondaryPhoto2" />
                    <div className="photoReplacer">1025+</div>
                </div>
                <div className="collectionInfo" onClick={()=>navigate('/artist-page/68dfd3c36dff33e74b884058')}>
                    <h5 className="collectionName">DSGN Animals</h5>
                    <div className="artistCard">
                        <img src={avatar} alt="avatar" className='avatar'/>
                        <span>AlexTheBest</span>
                    </div>
                </div>
            </div>
            <div className="photos forTablet">
                <img src={primaryPhoto} alt="primaryPhoto" className="primaryPhoto" onClick={()=>navigate('/marketplace')}/>
                <div className="collection" onClick={()=>navigate('/marketplace')}>
                    <img src={secondaryPhoto} alt="secondaryPhoto" />
                    <img src={secondaryPhoto2} alt="secondaryPhoto2" />
                    <div className="photoReplacer">1025+</div>
                </div>
                <div className="collectionInfo" onClick={()=>navigate('/artist-page/68dfd3c36dff33e74b884058')}>
                    <h5 className="collectionName">DSGN Animals</h5>
                    <div className="artistCard">
                        <img src={avatar} alt="avatar" className='avatar'/>
                        <span>AlexTheBest</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default TrendingCollection