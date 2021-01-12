import './cards.css'
import img from '../../assets/predio.jpg'

const card = () => {
	return (
		<div className="card">
			<img src={img} alt=""/>
			<p className='valor'>300$</p>
			<p className='texto'> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
	
		</div>
	)
}

export default card