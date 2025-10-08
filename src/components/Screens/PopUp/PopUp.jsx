import { useDispatch, useSelector } from 'react-redux';
import './popUp.css'
import { closePopUp } from '../../RTK/userSlice';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PopUp({title, description, cancelText, okText, cancelAсtion, okAction}) {
    const dispatch = useDispatch()
    const showPopUp = useSelector(state => state.user.showPopUp);
    const location = useLocation()
    
    useEffect(()=>
    {
        if (showPopUp) {
            dispatch(closePopUp())
        }
    }, [location.pathname])

    return <div className="popUpWindow" style={{display: showPopUp ? null : 'none'}}>
        <div className="popUpContent">
            <h3>{title}</h3>
            <span>{description}</span>
            <div className="buttons">
                {cancelText && <button className='cancel' onClick={cancelAсtion}>{cancelText}</button>}
                <button className='ok' onClick={okAction}>{okText}</button>
            </div>
        </div>
    </div>
}

export default PopUp;