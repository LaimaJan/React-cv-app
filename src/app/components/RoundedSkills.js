import './RoundedSkills.css';

function Pills({ children, color }) {
	let className = 'rounded-skills';

	if (color) {
		className = [className, `${color}`].join(' ');
	}

	return <div className={className}>{children}</div>;
}

export default Pills;
