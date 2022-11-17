import './App.css';
import { Hr, HrOneLine } from './components/Hr';
import Header from './components/Header';
import LinksUl from './components/LinksUl';
import Education from './components/Education';
import Pills from './components/RoundedSkills';
import WorkExp from './components/WorkExp';
import FooterContent from './components/FooterCont';
import Section from './components/Section';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="links-about-me">
				<Section value="links" titleName="links" hrClassName="line-hr-small">
					<LinksUl />
				</Section>
				<Section
					value="about-me"
					titleName="about me"
					hrClassName="line-hr-medium"
				>
					<p className="lorem">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
						provident aperiam. Id quia omnis fugit assumenda sit, similique
						pariatur sunt temporibus amet dolores asperiores corporis ipsam
						porro. Blanditiis, praesentium! Deleniti officiis tenetur eum porro
						temporibus exercitationem ipsum sint magni nesciunt cum minima id
						aliquid totam animi unde quod, aspernatur quos consequatur culpa
						provident inventore vero maiores aperiam consequuntur. Omnis fugiat
						nisi quod possimus cumque in vel. Ad suscipit eius similique placeat
						enim quae nemo atque dolores, necessitatibus mollitia iste rerum!
					</p>
				</Section>
			</div>

			<main>
				<div className="education-personal-technical-skills">
					<Section
						value="education"
						titleName="education"
						hrClassName="line-hr-small"
					>
						<Education className="education-content top" />
						<Hr className="line-hr-one"></Hr>
						<Education className="education-content" />
					</Section>
					<Section
						value="personal-skills"
						titleName="personal skills"
						hrClassName="line-hr-small"
					>
						<Pills color="green">
							<p>Teamwork</p>
						</Pills>
						<Pills color="yellow">
							<p>Communication</p>
						</Pills>
						<Pills color="orange">
							<p>Organization</p>
						</Pills>
					</Section>
					<Section
						value="technical-skills"
						titleName="technical skills"
						hrClassName="line-hr-small"
					>
						<Pills color="green">
							<p>Html</p>
						</Pills>
						<Pills color="green">
							<p>Css/scss</p>
						</Pills>
						<Pills color="yellow">
							<p>Javascript</p>
						</Pills>
						<Pills color="yellow">
							<p>React.js</p>
						</Pills>
					</Section>
				</div>
				<Section
					className="work-experience"
					titleName="work experience"
					hrClassName="line-hr-long"
				>
					<div className="all-work-experience-content">
						<WorkExp
							verticalLine="my-work"
							position="Job psition"
							company="Company"
							date="2018-present"
							etc1="Lorem, ipsum dolor."
							etc2="Lorem, ipsum dolor."
						>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repudiandae quaerat itaque ipsa amet et accusantium deleniti
								ipsam, quibusdam necessitatibus cumque!
							</p>
						</WorkExp>
						<WorkExp
							verticalLine="my-work"
							position="Job psition"
							company="Company"
							date="2018-present"
							etc1="Lorem, ipsum dolor."
							etc2="Lorem, ipsum dolor."
						>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repudiandae quaerat itaque ipsa amet et accusantium deleniti
								ipsam, quibusdam necessitatibus cumque!
							</p>
						</WorkExp>
						<WorkExp
							position="Job psition"
							company="Company"
							date="2018-present"
							etc1="Lorem, ipsum dolor."
							etc2="Lorem, ipsum dolor."
						>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repudiandae quaerat itaque ipsa amet et accusantium deleniti
								ipsam, quibusdam necessitatibus cumque!
							</p>
						</WorkExp>
					</div>
				</Section>
			</main>
			<footer>
				<HrOneLine className="line-hr-long"></HrOneLine>
				<section className="footer">
					<FooterContent>
						<p className="address">Location</p>
						<p className="address-city">Porto, Portugal</p>
					</FooterContent>
					<FooterContent>
						<p className="contact">Contact</p>
						<a href="tel:+370600000333" className="phone">
							+370600000333
						</a>
						<a href="mailto: email@test.dev" className="email">
							email@test.dev
						</a>
					</FooterContent>
					<FooterContent>
						<p className="social">Social</p>
						<a href="https://www.linkedin.com/" className="linkedin">
							Linkedin/username
						</a>
						<a href="https://www.Twitter.com/" className="twitter">
							Twitter/@user-handle
						</a>
					</FooterContent>
				</section>
			</footer>
		</div>
	);
}

export default App;
