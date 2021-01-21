import {BrowserRouter, Route} from 'react-router-dom'

import Home from './view/Home'
import Contact from './view/Contact'

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path='/' exact component ={Home} />
			<Route path='/contato' component ={Contact} />
		</BrowserRouter>
	)
}