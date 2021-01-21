import './cards.css'
import { BuyButton } from '../../style'

const card = (props) => {
	return (
		<div className="card">
			<h1 className='Titulo'>{props.titulo}</h1>
			<img src={props.img} alt=""/>
			<p className='descricao'>{props.descricao}</p>
			<p className='preco'>R${props.preco.toFixed(2).replace("." , ",")}</p>
			<BuyButton onClick={()=>{alert(`Você comprou ${props.titulo} por R$ ${props.preco.toFixed(2).replace("." , ",")}`)}} isPrimary={true}> Comprar </BuyButton>

		</div>
	)
}

export default card 