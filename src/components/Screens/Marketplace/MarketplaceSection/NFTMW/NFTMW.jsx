import { useEffect } from 'react';
import './nftmw.css'

import { useDispatch, useSelector } from 'react-redux';
import { fetchBalance } from '../../../../RTK/fetchBalance';
import { fetchMarketplaceForSale } from '../../../../RTK/fetchMarketplaceForSale';
import { useNavigate } from 'react-router-dom';
import { closePopUp, openPopUp, setPopUpContent } from '../../../../RTK/userSlice';
import PopUp from '../../../PopUp/PopUp';

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;
const RENDER_URL = process.env.REACT_APP_RENDER_URL;

function NFTMW({nftData, close, marketplace}) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state=>state.user.currentUser)
    const navigate = useNavigate()
    useEffect(()=>
    {
        document.body.style.overflow='hidden';
        return ()=>document.body.style.overflow='auto'
    },[])
    return <div className="nftmw">
        <div className="content">
        <div className="NFTCard">
                <img src={nftData?.imageUrl} alt="NFT" className='NFTImage'/>
                <div className="NFTInfo">
                    <div className="artistInfo">
                        <h5 className='NFTName'>{nftData?.title}</h5>
                        <span className='nftId'
                            onClick={async () => {
                                const text = nftData?._id || "";
                
                                try {
                                if (navigator.clipboard && window.isSecureContext) {
                                    // Сучасний метод (працює в більшості браузерів, Android Chrome, нові Safari)
                                    await navigator.clipboard.writeText(text);
                                } else {
                                    // Fallback для старих/мобільних браузерів
                                    const textarea = document.createElement("textarea");
                                    textarea.value = text;
                                    textarea.style.position = "fixed"; // щоб не прокручувало
                                    textarea.style.opacity = 0;
                                    document.body.appendChild(textarea);
                                    textarea.focus();
                                    textarea.select();
                
                                    document.execCommand("copy");
                                    document.body.removeChild(textarea);
                                }
                                } catch (err) {
                                console.error("Помилка копіювання:", err);
                                alert("Не вдалося скопіювати ❌");
                                }
                        }}>{nftData?._id.toString()}</span>
                        <div className="artist" onClick={()=>navigate(`/artist-page/${marketplace?._id}`)}>
                            <img src={marketplace?.avatarUrl} alt="avatar" />
                            <span className="name">{marketplace.username}</span>
                        </div>
                    </div>
                    <div className="additionalInfo">
                        <div className="price">
                            <span>Price</span>
                            <span className='priceValue'>{nftData?.price} ETH</span>
                        </div>
                        <div className="highestBid">
                            <span>Highest Bid</span>
                            <span className='highestBidValue'>{nftData?.highestBid} wETH</span>
                        </div>
                    </div>
                </div>
            </div>
        <div className="controls">
            <button onClick={close}>⨉</button>
            <button onClick={async ()=>
                {
                    if(!currentUser) 
                        {
                            return navigate(`/sign-up`);
                        }
                    const freshBalance = await dispatch(fetchBalance(currentUser._id)).unwrap();
                    if(+freshBalance >= +nftData.price)
                    {
                        try {
                            console.log("start fetch...");
                            const res = await fetch(`${RENDER_URL}/buy/${marketplace._id}/${currentUser._id}/${nftData._id}`, {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                            })
                            console.log("got response:", res.status);

                            if (res.ok) {
                                dispatch(setPopUpContent({
                                    title: 'Congratulation',
                                    description: 'You have successfully bought an NFT',
                                    cancelText: 'To profile',
                                    okText: 'Continue shopping',
                                    cancelAсtion: () => {
                                        dispatch(closePopUp())
                                        navigate(`/artist-page/${currentUser?._id}`)
                                    },
                                    okAction: () => {
                                      dispatch(closePopUp());
                                      dispatch(setPopUpContent(null));
                                    }
                                  }))
                                dispatch(openPopUp())
                            }
                            else
                            {
                                dispatch(setPopUpContent({
                                    title: 'Something went wrong',
                                    description: 'Please, reload the page',
                                    okText: 'Ok',
                                    okAction: () => {
                                      dispatch(closePopUp());
                                      dispatch(setPopUpContent(null));
                                    }
                                  }))
                                dispatch(openPopUp())
                            }
                        } catch (err) {
                            console.error(err);                            
                        }
                        finally
                        {
                            close();
                            dispatch(fetchMarketplaceForSale());
                        }
                    }
                    else
                    {
                        dispatch(setPopUpContent({
                            title: 'Fail',
                            description: 'You don`t have enough balance to buy an NFT',
                            cancelText: 'To profile',
                            okText: 'Continue shopping',
                            cancelAсtion: () => {
                                dispatch(closePopUp())
                                navigate(`/artist-page/${currentUser?._id}`)
                            },
                            okAction: () => {
                              dispatch(closePopUp());
                              dispatch(setPopUpContent(null));
                            }
                          }))
                        dispatch(openPopUp())
                    }
                }
            }>Buy</button>
        </div>
        </div>
    </div>
}

export default NFTMW