import './Hr.css';

function Hr({ className }) {
	return (
		<div className={className}>
			<div></div>
		</div>
	);
}

function HrOneLine({ className }) {
	return <div className={className}></div>;
}

export { Hr, HrOneLine };
