import './marketplaceSection.css'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMarketplaceForSale } from '../../../RTK/fetchMarketplaceForSale'
import NFTMW from './NFTMW/NFTMW'
import { useNavigate } from 'react-router-dom'


function MarketplaceSection() {
    const { marketplace } = useSelector(state => state.user)

    const [showNFTMW, setShowNFTMW] = useState(false);
    const [nftData, setNftData] = useState(null);
    
    const [activeTab, setActiveTab] = useState('nft');

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(()=>
    {
        dispatch(fetchMarketplaceForSale())
    }, [dispatch])

    if(!marketplace) return <p>Loading...</p>

    const marketplaceNftsOrCollections = activeTab === 'nft' ? marketplace.nfts.created : marketplace.nfts.collections;

    return <div className="marketplaceSection">
        <div className="tabs">
            <input type="radio" id="nft" name="tabs" checked={activeTab === 'nft'} onChange={()=>setActiveTab('nft')} hidden />
            <label htmlFor="nft" className="tab">NFT</label>
            <input type="radio" id="collections" name="tabs" checked={activeTab === 'collections'} onChange={()=>setActiveTab('collections')} hidden />
            <label htmlFor="collections" className="tab">Collections</label>
        </div>
        <div className="cardsSection">
            {marketplaceNftsOrCollections && marketplaceNftsOrCollections.length>0 ? marketplaceNftsOrCollections.map((nft,index)=>
            <div className="NFTCard" key={index} onClick={()=>
            {
                setShowNFTMW(true);
                setNftData({imageUrl: nft?.imageUrl, title: nft?.title, price: nft?.price, highestBid: nft?.highestBid, _id: nft?._id});                
            }}>
                <img src={nft?.imageUrl} alt="NFT" className='NFTImage'/>
                <div className="NFTInfo">
                    <div className="artistInfo">
                        <h5 className='NFTName'>{nft?.title}</h5>
                        <div className="artist" onClick={()=>navigate(`/artist-page/${marketplace?._id}`)}>
                            <img src={marketplace?.avatarUrl} alt="avatar" />
                            <span className="name">{marketplace.username}</span>
                        </div>
                    </div>
                    <div className="additionalInfo">
                        <div className="price">
                            <span>Price</span>
                            <span className='priceValue'>{nft?.price} ETH</span>
                        </div>
                        <div className="highestBid">
                            <span>Highest Bid</span>
                            <span className='highestBidValue'>{nft?.highestBid} wETH</span>
                        </div>
                    </div>
                </div>
            </div>
            )
        :
        <h3>No Items For Sale</h3>}
        {showNFTMW && <NFTMW nftData={nftData} 
        close={()=>
        {
            setShowNFTMW(false);
            setNftData(null);
        }} 
        marketplace={marketplace}/>}
        </div>
    </div>
}

export default MarketplaceSection