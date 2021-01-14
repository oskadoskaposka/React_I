import './Body.css'
import Card from '../cards'
import img from '../../assets/predio.jpg'

const produtos = [
	{
		titulo: "Titulo 01",
		img: {img},
		descricao: 'descricao 01',
		preco: 1
	},
	{
		titulo: "Titulo 02",
		img: {img},
		descricao: 'descricao 02',
		preco: 2
	},
	{
		titulo: "Titulo 03",
		img: {img},
		descricao: 'descricao 03',
		preco: 3
	},
]

// const gerarCards = () => {
// 	const cards = []
// 	for (let i = 0; i < 2; i++) {
// 		cards.push(<Card />)
// 	}
// 	return cards
// }

const getCard = () => {
	return produtos.map((produto, index) => {
		return <Card titulo={produto.titulo} img={img} descricao={produto.descricao} preco={produto.preco} key={index}/>
	})
}

const conteudo = () => {
	return (
		<div className="app-body">
			{getCard()}
		</div>
	)
}

export default conteudo