import { useDispatch, useSelector } from 'react-redux';
import './popUp.css'
import { closePopUp } from '../../RTK/userSlice';

function PopUp({title, description, cancelText, okText, okAction}) {
    const dispatch = useDispatch()
    const showPopUp = useSelector(state => state.user.showPopUp);

    return <div className="popUpWindow" style={{display: showPopUp ? null : 'none'}}>
        <div className="popUpContent">
            <h3>{title}</h3>
            <span>{description}</span>
            <div className="buttons">
                <button className='cancel' onClick={()=>dispatch(closePopUp())}>{cancelText}</button>
                <button className='ok' onClick={okAction}>{okText}</button>
            </div>
        </div>
    </div>
}

export default PopUp;