import './Body.css'
import Card from '../cards'

const gerarCards = () => {
	const cards = []
	for (let i = 0; i < 2; i++) {
		cards.push(<Card />)
	}
	return cards
}

const conteudo = () => {
	return (
		<div className="app-body">
			{gerarCards()}
		</div>
	)
}

export default conteudo