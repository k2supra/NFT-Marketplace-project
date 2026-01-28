/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.css'

import discordLogo from '../../assets/images/discordLogo.png'
import youtubeLogo from '../../assets/images/youtubeLogo.png'
import twitterLogo from '../../assets/images/twitterLogo.png'
import instagramLogo from '../../assets/images/instagramLogo.png'
import mailLogo from '../../assets/images/mailLogo.png'
import { ReactComponent as TelegramLogo } from '../../assets/images/telegramLogoSVG.svg'
import { ReactComponent as GmailLogo } from '../../assets/images/gmailLogoSVG.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closePopUp, openPopUp, setPopUpContent } from '../RTK/userSlice'

function Footer() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch()
    return <footer>
        <div className="info">
            <div className="marketplaceInfo">
                <div className="logo"></div>
                <div className="additionalInfo">
                    <span>NFT marketplace created by Deviatyi Andrii</span>
                    <div className="communityInfo">
                        My contact information
                        <div className="icons">
                            <a href="mailto:andrijkorolevic@gmail.com"><GmailLogo className='icon'/></a>
                            <a href=""><img src={youtubeLogo} alt="youtube" className='icon'/></a>
                            <a href=""><img src={twitterLogo} alt="twitter" className='icon'/></a>
                            <a href=""><img src={instagramLogo} alt="instagram" className='icon'/></a>
                            <a href="https://t.me/Andruha_usd"><TelegramLogo className='icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore">
                <h5>Explore</h5>
                <div className="pages">
                    <Link to={'/marketplace'}><span>Marketplace</span></Link>
                    <Link to={'/rankings'}><span>Rankings</span></Link>
                    <Link to={'/connect-wallet'}><span>Connect a wallet</span></Link>
                </div>
            </div>
            <div className="subscribe">
                <h5>Join Our Weekly Digest</h5>
                <div className="formAndInfo">
                    Get exclusive promotions & updates straight to your inbox.
                    <div className="inputAndButton">
                        <input type="text" value={inputValue} placeholder='Enter Your Email Address' onChange={(e)=>setInputValue(e.target.value)}/>
                        <button onClick={()=>{
                        if (!inputValue.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)) {
                            dispatch(setPopUpContent({
                                title: 'Fail',
                                description: 'Please, enter your email',
                                okText: 'Ok',
                                okAction: () => {
                                  dispatch(closePopUp());
                                  dispatch(setPopUpContent(null));
                                }
                              }))
                        }
                        else
                        {
                            dispatch(setPopUpContent({
                                title: 'SUCCESSFUL',
                                description: 'Thank you for subscribing',
                                okText: ':)',
                                okAction: () => {
                                  dispatch(closePopUp());
                                  dispatch(setPopUpContent(null));
                                }
                              }))
                        }
                        
                        dispatch(openPopUp())
                    }}><img src={mailLogo} alt="Subscribe" />Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            Creator: Deviatyi Andrii
        </div>
    </footer>
}

export default Footer;