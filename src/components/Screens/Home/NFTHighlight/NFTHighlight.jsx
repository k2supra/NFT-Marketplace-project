import './NFTHighlight.css'

import avatar from '../../../../assets/images/avatar.png'
import eye from '../../../../assets/images/eye.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersMock } from '../../../mocks/users';


function NFTHighlight() {
    const navigate = useNavigate()
    const START_TIME = 10 * 60 * 60; // години в секундах (перше значення це години)
    const [timeLeft, setTimeLeft] = useState(START_TIME);

    const format = (num) => String(num).padStart(2, '0');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    return START_TIME;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return <div className="NFTHighlight">
        <div className="frame">
            <div className="artistCard" onClick={()=>navigate(`/artist-page/${usersMock[7]._id.$oid}`)}>
                <img src={usersMock[7].avatarUrl} alt="avatar" className="avatar" />
                <span className='name'>{usersMock[7].username}</span>
            </div>
            <h3>Magic Mashrooms</h3>
            <div className="auctionTimer">
                <span>Auction ends in:</span>
                <div className="timer">
                    <div className="hours">
                        <span className="value">{format(hours)}</span>
                        hours
                    </div>
                    :
                    <div className="minutes">
                        <span className="value">{format(minutes)}</span>
                        minutes
                    </div>
                    :
                    <div className="seconds">
                        <span className="value">{format(seconds)}</span>
                        seconds
                    </div>
                </div>
            </div>
            <button onClick={()=>navigate(`/marketplace`)}><img src={eye} alt="See NFT" />See NFT</button>
        </div>
    </div>
}

export default NFTHighlight;