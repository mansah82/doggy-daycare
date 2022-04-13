import { Link } from 'react-router-dom';
import './Info.css';


const Info = ({activeDog}) => {
return (
    <div className='info'>
        <h1 className='info-dogName'>{activeDog.name}</h1>
        <img className='info-img' src={activeDog.img} alt="" />
        <div className='info-dog'>
        <p className='info-sex'>Sex: {activeDog.sex}</p>
        <p className='info-breed'>Breed: {activeDog.breed}</p>
        <p className='info-isPresent'>{activeDog.present}</p>
        <p className='info-age'>Age: {activeDog.age}</p>
        <p className='info-chip'>Chipnumber: {activeDog.chipNumber}</p>
        </div>
        <div className='info-owner'>
        <h2>Owner</h2>
        <p className='info-owner-name'>{activeDog.owner.name} {activeDog.owner.lastName}</p>
        <p className='info-owner-number'>Number: {activeDog.owner.phoneNumber}</p>
        </div>
        <Link to ="/register">
        <button className='button' >Back to list</button>
        </Link>
    </div>
)
}
export default Info 
