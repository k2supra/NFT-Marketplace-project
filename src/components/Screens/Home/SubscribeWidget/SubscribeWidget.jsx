import './subscribeWidget.css'

import astronaut from '../../../../assets/images/astronaut.png'
import mailLogo from '../../../../assets/images/mailLogo.png'
import { useDispatch } from 'react-redux'
import { closePopUp, openPopUp, setPopUpContent } from '../../../RTK/userSlice'
import { useState } from 'react'


function SubscribeWidget() {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');
    return <div className="subscribeWidget">
        <div className='frame'>
            <img src={astronaut} alt="astronaut" className='astronaut'/>
            <div className="data">
                <div className="headline">
                    <h4>Join Our Weekly Digest</h4>
                    <span>Get exclusive promotions & updates straight to your inbox.</span>
                </div>
                <div className="inputAndButton">
                    <input type="text" placeholder='Enter Your Email Address'
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}/>
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
}

export default SubscribeWidget;