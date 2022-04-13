import { Link } from 'react-router-dom';
import './Welcome.css'




const Welcome = () => {
    return (
        <div>
            
            <h1 className='welcome-text'>Doggy Daycare</h1>
            <h2 className='start-text'>Press start to countiue</h2>
            <Link to="/register">
            <button className='button'>Next Screen</button>
            </Link>
            
        </div>
    )
}
export default Welcome;