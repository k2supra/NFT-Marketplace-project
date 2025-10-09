/* eslint-disable no-unused-vars */
import './leadersList.css'

import { useNavigate } from 'react-router-dom'

import { ratings1d, ratings7d, ratings30d, ratingsAll } from '../../../mocks/users'
import { useEffect, useState } from 'react'

const avatar1 = process.env.PUBLIC_URL + '/images/avatar1.png'
const avatar2 = process.env.PUBLIC_URL + '/images/avatar2.png'
const avatar3 = process.env.PUBLIC_URL + '/images/avatar3.png'
const avatar4 = process.env.PUBLIC_URL + '/images/avatar4.png'
const avatar5 = process.env.PUBLIC_URL + '/images/avatar5.png'
const avatar6 = process.env.PUBLIC_URL + '/images/avatar6.png'
const avatar7 = process.env.PUBLIC_URL + '/images/avatar7.png'
const avatar8 = process.env.PUBLIC_URL + '/images/avatar8.png'
const avatar9 = process.env.PUBLIC_URL + '/images/avatar9.png'
const avatar10 = process.env.PUBLIC_URL + '/images/avatar10.png'
const avatar11 = process.env.PUBLIC_URL + '/images/avatar11.png'

function LeadersList() {
    const navigate = useNavigate()
    const [actibeTab, setActibeTab] = useState('1d');

    const [currentList, setCurrentList] = useState([...ratings1d]);

    useEffect(()=>
    {
        switch (actibeTab) {
            case '1d':
                setCurrentList([...ratings1d]);
                break;
            case '7d':
                setCurrentList([...ratings7d]);
                break;
            case '30d':
                setCurrentList([...ratings30d]);
                break;
            case 'all':
                setCurrentList([...ratingsAll]);
                break;
            default:
                setCurrentList([...ratings1d]);
                break;
        }
    }, [actibeTab])


    return <div className="leadersList">
        <div className="tabs">
            <input type="radio" id="1d" name="tabs" checked={actibeTab==='1d'} onChange={()=>setActibeTab('1d')} hidden />
            <label htmlFor="1d" className="tab">1d</label>
            <input type="radio" id="7d" name="tabs" checked={actibeTab==='7d'} onChange={()=>setActibeTab('7d')} hidden />
            <label htmlFor="7d" className="tab">7d</label>
            <input type="radio" id="30d" name="tabs" checked={actibeTab==='30d'} onChange={()=>setActibeTab('30d')} hidden />
            <label htmlFor="30d" className="tab">30d</label>
            <input type="radio" id="allTime" name="tabs" checked={actibeTab==='all'} onChange={()=>setActibeTab('all')} hidden />
            <label htmlFor="allTime" className="tab">All Time</label>
        </div>
        <ul className="list">
            <li className="header">
                <span>Artist</span>
                <span className='forTabletAndDesktop change'>Change</span>
                <span className='forDesktop sold'>NFTs Sold</span>
                <span className='volume'>Volume</span>
            </li>
            {currentList.sort((a, b)=> b.stats.volume.$numberInt - a.stats.volume.$numberInt).map((u)=>{
                const randomChange = Math.floor(Math.random() * (15 - (-10) + 1)) - 10;
                const changeClass = randomChange > 0 ? 'green' : 'red';

                return <li className="leaderItem" onClick={()=>navigate(`/artist-page/${u._id.$oid}`)} key={u._id.$oid}>
                    <div className="artist">
                        <img src={u.avatarUrl} alt="Animakid" className="avatar" />
                        <span className='name'>{u.username}</span>
                    </div>
                    <span className={`forTabletAndDesktop change ${changeClass}`}>{randomChange}%</span>
                    <span className='forDesktop sold'>{u.stats.sold.$numberInt}</span>
                    <span className="volume">{u.stats.volume.$numberInt} ETH</span>
                </li>})}
            {/* <li className="leaderItem" onClick={()=>navigate('/artist-page/68dfd2966dff33e74b88403d')}>
                <div className="artist">
                    <img src={avatar11} alt="Animakid" className="avatar" />
                    <span className='name'>Animakid</span>
                </div>
                <span className='forTabletAndDesktop change green'>+0.7%</span>
                <span className='forDesktop sold'>93</span>
                <span className="volume">15 ETH</span>
            </li>
            <li className="leaderItem">
                <div className="artist" onClick={()=>navigate('/artist-page/68dfd2d56dff33e74b884047')}>
                    <img src={avatar2} alt="Afan Gem" className="avatar" />
                    <span className='name'>Afan Gem</span>
                </div>
                <span className='forTabletAndDesktop change green'>+2%</span>
                <span className='forDesktop sold'>563</span>
                <span className="volume">14 ETH</span>
            </li>
            <li className="leaderItem" onClick={()=>navigate('/artist-page/68dfd3a06dff33e74b884051')}>
                <div className="artist">
                    <img src={avatar3} alt="BBhg" className="avatar" />
                    <span className='name'>BBhg</span>
                </div>
                <span className='forTabletAndDesktop change red'>-1.1%</span>
                <span className='forDesktop sold'>602</span>
                <span className="volume">14 ETH</span>
            </li>
            <li className="leaderItem" onClick={()=>navigate('/artist-page/68dfd3c36dff33e74b884058')}>
                <div className="artist">
                    <img src={avatar4} alt="AlexTheBest" className="avatar" />
                    <span className='name'>AlexTheBest</span>
                </div>
                <span className='forTabletAndDesktop change green'>+7%</span>
                <span className='forDesktop sold'>74</span>
                <span className="volume">13 ETH</span>
            </li>
            <li className="leaderItem" onClick={()=>navigate('/artist-page/68dfd3e36dff33e74b88405f')}>
                <div className="artist">
                    <img src={avatar5} alt="AndriiTheBest" className="avatar" />
                    <span className='name'>AndriiTheBest</span>
                </div>
                <span className='forTabletAndDesktop change green'>+1.41%</span>
                <span className='forDesktop sold'>63</span>
                <span className="volume">12 ETH</span>
            </li> */}
        </ul>
    </div>
}

export default LeadersList