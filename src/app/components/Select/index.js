import './index.css';

function Select({ options, onChange }) {
	const setValue = (e) => {
		if (onChange) {
			onChange(e.target.value);
		}
	};

	return (
		<select onChange={setValue}>
			{options.map(({ content, value }, i) => (
				<option key={i} value={value}>
					{content}
				</option>
			))}
		</select>
	);
}

export default Select;
