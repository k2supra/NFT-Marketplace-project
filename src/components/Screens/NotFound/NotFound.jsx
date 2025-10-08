import './notFound.css'

import { useNavigate } from 'react-router-dom'

function NotFound({title, description}) {
    const navigate = useNavigate()
    return <div className="notFound">
        <div className="content">
            <h3>{title || 'There is no page found :/'}</h3>
            <h4>{description || `Maybe you've entered the wrong url?`}</h4>
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    </div>
}

export default NotFound