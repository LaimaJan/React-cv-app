// import '../App.css';

// import LinkedIn from '../images/linkedIn.png';

function Links(props, href, src) {
	return (
		<li>
			<a href={href} className="links-img">
				<img src={src} alt="" />
				{props.link}
			</a>
		</li>
	);
}

export default Links;
