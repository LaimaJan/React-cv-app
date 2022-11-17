import '../App.css';
import Title from './Title';
import { Hr } from './Hr';

function Section({ value, titleName, hrClassName, children }) {
	let className = 'section';

	if (value) {
		className = [`${value} ` + className].join(' ');
	}

	return (
		<section className={className}>
			<Title name={titleName} />
			<Hr className={hrClassName}></Hr>
			{children}
		</section>
	);
}

export default Section;
