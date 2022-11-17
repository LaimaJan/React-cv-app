import './Header.css';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

function Header() {
	return (
		<header>
			<HeaderTop className="header-top-box"></HeaderTop>
			<HeaderBottom className="header-bottom-box"></HeaderBottom>
		</header>
	);
}

export default Header;
