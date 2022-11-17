function Links({ link, href, src }) {
	return (
		<li>
			<a href={href} className="links-img">
				<img src={src} alt="" />
				{link}
			</a>
		</li>
	);
}

export default Links;
