import '../../App.css';

function Education({ className, schoolName, degree }) {
	return (
		<div className={className}>
			<p>{schoolName}</p>
			<p>2009-2011</p>
			<p>{degree}</p>
		</div>
	);
}

export default Education;
