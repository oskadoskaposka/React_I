import './Header.css'
import Menu from '../menu'

const Header = (props) => {
	return(
		<header className="app-header">
			<h1>{props.children}</h1>
			<Menu />

		</header>
	)}

	export default Header