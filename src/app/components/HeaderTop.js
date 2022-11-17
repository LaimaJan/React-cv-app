import './Header.css';

function HeaderTop({ className }) {
	return (
		<div className={className}>
			<select name="languages" className="cv-language">
				<option value="LT">Lietuviškai</option>
				<option value="EN">English</option>
			</select>
		</div>
	);
}

export default HeaderTop;
