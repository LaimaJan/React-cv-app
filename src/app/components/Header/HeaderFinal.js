import '../Header/Header.css';
import Select from '../Select/index';
import data from '../../../data.json';

function Header({ lang, onLangChange }) {
	// console.log(data);
	const { header } = data[lang] || {};

	return (
		<header>
			<div className="header-top-box">
				<Select
					id="selectLanguage"
					name="languages"
					className="cv-language"
					onChange={onLangChange}
					options={[
						{ content: 'English', value: 'en' },
						{ content: 'Lietuviškai', value: 'lt' },
					]}
				/>
			</div>
			<div className="header-bottom-box">
				<p className="name">{header.name}</p>
				<p className="job-title">{header.job}</p>
			</div>
		</header>
	);
}

export default Header;
