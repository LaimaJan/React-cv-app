import './WorkExp.css';

function WorkExp({
	className,
	verticalLine,
	position,
	company,
	date,
	children,
	etc1,
	etc2,
}) {
	className = 'work-experience-content';

	if (verticalLine) {
		className = [`${verticalLine}`, className].join(' ');
	}
	return (
		<div className={className}>
			<div className="work-experience-content-top">
				<p className="title-of-job">{position}</p>
				<p>{company}</p>
				<p>{date}</p>
			</div>
			<div className="work-experience-content-bottom">
				{children}
				<ul>
					<li>{etc1}</li>
					<li>{etc2}</li>
				</ul>
			</div>
		</div>
	);
}

export default WorkExp;
