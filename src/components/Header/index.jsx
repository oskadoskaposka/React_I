import './Header.css'

const Header = (props) => {
	return(
		<header className="app-header">
			<h1>{props.children}</h1>
		</header>
	)}

	export default Header