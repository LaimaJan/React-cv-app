import './LinksUl.css';
import Links from './Links';
import Twitter from '../../images/Twitter.png';
import LinkedIn from '../../images/linkedIn.png';
import Github from '../../images/Github.png';
import Dev from '../../images/Dev.png';

function LinksUl() {
	return (
		<ul>
			<Links
				href="https://www.linkedIn.com/"
				src={LinkedIn}
				link="LINKEDIN/username"
			/>
			<Links
				href="https://www.Twitter.com/"
				src={Twitter}
				link="TWITTER/@user-handle"
			/>
			<Links
				href="https://www.Github.com/"
				src={Github}
				link="GITHUB/username"
			/>
			<Links href="https://www.dev-blog.com/" src={Dev} link="BLOG/blog-name" />
		</ul>
	);
}

export default LinksUl;
