import './topRatedArtists.css'


import rocketLaunchPurple from '../../../../assets/images/rocketLaunchPurple.png';

import { useNavigate } from 'react-router-dom'

import { usersMock } from '../../../mocks/users';

function TopRatedArtists() {
    const navigate = useNavigate()
    return <div className='topRatedArtists'>
        <div className="headline">
            <h4>Top creators</h4>
            <span>Checkout Top Rated Creators on the NFT Marketplace</span>
        </div>
        <ul className="artistCardsRow">
            {usersMock.map((u, i)=>
            <li className='artistCard' key={i} onClick={()=>navigate(`/artist-page/${u._id.$oid}`)}>
                <div className="avatar">
                    <img src={u.avatarUrl} alt="avatar"/>
                    <span className='ratingPosition'></span>
                </div>
                <div className="artistInfo">
                    <h5 className="name">{u.username}</h5>
                    <div className="additionalInfo">
                        <span className="totalSales">Total Sales:</span>
                        <span className="spent">{u?.balance?.$numberInt / ((i+1)*10) || 10} ETH</span>
                    </div>
                </div>
            </li>)}
        </ul>
        <button onClick={()=>navigate(`/rankings`)}><img src={rocketLaunchPurple} alt="View Rankings" />View Rankings</button>
    </div>
}

export default TopRatedArtists;