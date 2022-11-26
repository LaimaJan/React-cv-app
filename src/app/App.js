import { useState } from 'react';
import './App.css';
import { Hr, HrOneLine } from './components/Hr/Hr';
import Header from './components/Header/HeaderFinal';
import LinksUl from './components/Links/LinksUl';
import Education from './components/Education/Education';
import Pills from './components/Pills/RoundedSkills';
import WorkExp from './components/WorkExperience/WorkExp';
import FooterContent from './components/Footer/FooterCont';
import Section from './components/Section/Section';
import data from '../data.json';

function App() {
	const [lang, setLang] = useState('en');

	const {
		aboutMe,
		myLinks,
		education,
		personalSkills,
		technicalSkills,
		workExperience,
		address,
		contact,
		social,
	} = data[lang];

	return (
		<div className="App">
			<Header lang={lang} onLangChange={setLang} />
			<div className="links-about-me">
				<Section
					value="links"
					titleName={myLinks.title}
					hrClassName="line-hr-small"
				>
					<LinksUl />
				</Section>
				<Section
					value="about-me"
					titleName={aboutMe.title}
					hrClassName="line-hr-medium"
				>
					<p className="lorem">{aboutMe.content}</p>
				</Section>
			</div>

			<main>
				<div className="education-personal-technical-skills">
					<Section
						value="education"
						titleName={education.title}
						hrClassName="line-hr-small"
					>
						<Education
							className="education-content top"
							schoolName={education.school}
							degree={education.degree}
						/>
						<Hr className="line-hr-one"></Hr>
						<Education
							className="education-content"
							schoolName={education.school}
							degree={education.degree}
						/>
					</Section>
					<Section
						value="personal-skills"
						titleName={personalSkills.personalSkillsTitle}
						hrClassName="line-hr-small"
					>
						<Pills color="green">
							<p>{personalSkills.teamwork}</p>
						</Pills>
						<Pills color="yellow">
							<p>{personalSkills.communication}</p>
						</Pills>
						<Pills color="orange">
							<p>{personalSkills.organization}</p>
						</Pills>
					</Section>
					<Section
						value="technical-skills"
						titleName={technicalSkills.technicalSkillsTitle}
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
					titleName={workExperience.workExperienceTitle}
					hrClassName="line-hr-long"
				>
					<div className="all-work-experience-content">
						<WorkExp
							verticalLine="my-work"
							position={workExperience.jobPosition}
							company={workExperience.company}
							date={workExperience.timeWorked}
							etc1={workExperience.contentEtc1}
							etc2={workExperience.contentEtc2}
						>
							<p>{workExperience.content}</p>
						</WorkExp>
						<WorkExp
							verticalLine="my-work"
							position={workExperience.jobPosition}
							company={workExperience.company}
							date={workExperience.timeWorked}
							etc1={workExperience.contentEtc1}
							etc2={workExperience.contentEtc2}
						>
							<p>{workExperience.content}</p>
						</WorkExp>
						<WorkExp
							position={workExperience.jobPosition}
							company={workExperience.company}
							date={workExperience.timeWorked}
							etc1={workExperience.contentEtc1}
							etc2={workExperience.contentEtc2}
						>
							<p>{workExperience.content}</p>
						</WorkExp>
					</div>
				</Section>
			</main>
			<footer>
				<HrOneLine className="line-hr-long"></HrOneLine>
				<section className="footer">
					<FooterContent>
						<p className="address">{address.locationTitle}</p>
						<p className="address-city">{address.myAddress}</p>
					</FooterContent>
					<FooterContent>
						<p className="contact">{contact.contactTitle}</p>
						<a href="tel:+370600000333" className="phone">
							+370600000333
						</a>
						<a href="mailto: email@test.dev" className="email">
							email@test.dev
						</a>
					</FooterContent>
					<FooterContent>
						<p className="social">{social.socialTitle}</p>
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
