import './App.css';
import Twitter from './images/Twitter.png';
import LinkedIn from './images/linkedIn.png';
import Github from './images/Github.png';
import Dev from './images/Dev.png';

function App() {
	return (
		<div className="page-content">
			<header>
				<div className="header-top-box">
					<select className="cv-language">
						<option>Lietuviškai</option>
						<option>English</option>
					</select>
				</div>
				<div className="header-bottom-box">
					<p className="name">Sophie Alpert</p>
					<p className="job-title">Programmer</p>
				</div>
			</header>
			<main>
				<div className="main-content-top">
					<div className="links-about-me">
						<section className="about-me section">
							<h1 className="title">About me</h1>
							<div className="aboutMe-division">
								<div></div>
							</div>
							<p className="lorem">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
								provident aperiam. Id quia omnis fugit assumenda sit, similique
								pariatur sunt temporibus amet dolores asperiores corporis ipsam
								porro. Blanditiis, praesentium! Deleniti officiis tenetur eum
								porro temporibus exercitationem ipsum sint magni nesciunt cum
								minima id aliquid totam animi unde quod, aspernatur quos
								consequatur culpa provident inventore vero maiores aperiam
								consequuntur. Omnis fugiat nisi quod possimus cumque in vel. Ad
								suscipit eius similique placeat enim quae nemo atque dolores,
								necessitatibus mollitia iste rerum!
							</p>
						</section>
						<section className="links section">
							<h1 className="title">Links</h1>
							<div className="links-division">
								<div></div>
							</div>
							<ul>
								<li>
									<a href="https://www.linkedIn.com/" className="links-img">
										<img src={LinkedIn} alt="" />
										LINKEDIN/username
									</a>
								</li>
								<li>
									<a href="https://www.Twitter.com/" className="links-img">
										<img src={Twitter} alt="" />
										TWITTER/@user@-handle
									</a>
								</li>
								<li>
									<a href="https://www.Github.com/" className="links-img">
										<img src={Github} alt="" />
										GITHUB/username
									</a>
								</li>
								<li>
									<a href="https://www.dev-blog.com/" className="links-img">
										<img src={Dev} alt="" />
										BLOG/blog-name
									</a>
								</li>
							</ul>
						</section>
					</div>

					<div className="education-personal-technical-skills">
						<section className="education section">
							<h1 className="title">Education</h1>
							<div className="education-division-top">
								<div></div>
							</div>
							<div className="education-top-content">
								<p>SCHOOL NAME</p>
								<p>2009 - 2013</p>
								<p>Degree</p>
							</div>
							<div className="education-division"></div>
							<div className="education-bottom-content">
								<p>SCHOOL NAME</p>
								<p>2009 - 2013</p>
								<p>Degree</p>
							</div>
						</section>
						<section className="personal-skills section">
							<h1 className="title">Personal Skills</h1>
							<div className="personal-skills-division">
								<div></div>
							</div>
							<div className="rounded-skills green">
								<p>Teamwork</p>
							</div>
							<div className="rounded-skills yellow">
								<p>Communication</p>
							</div>
							<div className="rounded-skills orange">
								<p>Organization</p>
							</div>
						</section>
						<section className="technical-skills section">
							<h1 className="title">Technical Skills</h1>
							<div className="technical-skills-division">
								<div></div>
							</div>
							<div className="rounded-skills green">
								<p>Html</p>
							</div>
							<div className="rounded-skills green">
								<p>Css/scss</p>
							</div>
							<div className="rounded-skills yellow">
								<p>Javascript</p>
							</div>
							<div className="rounded-skills yellow">
								<p>React.js</p>
							</div>
						</section>
					</div>
				</div>
				<section className="work-experience section">
					<h1 className="title">Work experience</h1>
					<div className="section-division">
						<div></div>
					</div>
					<div className="all-work-experience-content">
						<div className="my-work work-experience-content">
							<div className="work-experience-content-top">
								<p className="work-exp-job-title">Job position</p>
								<p>Company</p>
								<p>2018 - present</p>
							</div>
							<div className="work-experience-content-bottom">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Repudiandae quaerat itaque ipsa amet et accusantium deleniti
									ipsam, quibusdam necessitatibus cumque!
								</p>
								<ul>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
								</ul>
							</div>
						</div>
						<div className="my-work work-experience-content">
							<div className="work-experience-content-top">
								<p className="work-exp-job-title">Job position</p>
								<p>Company</p>
								<p>2018 - present</p>
							</div>
							<div className="work-experience-content-bottom">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Repudiandae quaerat itaque ipsa amet et accusantium deleniti
									ipsam, quibusdam necessitatibus cumque!
								</p>
								<ul>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
								</ul>
							</div>
						</div>
						<div className="work-experience-content">
							<div className="work-experience-content-top">
								<p className="work-exp-job-title">Job position</p>
								<p>Company</p>
								<p>2018 - present</p>
							</div>
							<div className="work-experience-content-bottom">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Repudiandae quaerat itaque ipsa amet et accusantium deleniti
									ipsam, quibusdam necessitatibus cumque!
								</p>
								<ul>
									<li>Lorem, ipsum dolor.</li>
									<li>Lorem, ipsum dolor.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className="section-division"></div>
				<section className="footer">
					<div className="footer-content">
						<p className="address">Location</p>
						<p className="address-city">Porto, Portugal</p>
					</div>
					<div className="footer-content">
						<p className="contact">Contact</p>
						<a href="tel:+370600000333" className="phone">
							+370600000333
						</a>
						<a href="mailto: email@test.dev" className="email">
							email@test.dev
						</a>
					</div>
					<div className="footer-content">
						<p className="social">Social</p>
						<a href="https://www.linkedin.com/" className="linkedin">
							Linkedin/username
						</a>
						<a href="https://www.Twitter.com/" className="twitter">
							Twitter/@user-handle
						</a>
					</div>
				</section>
			</footer>
		</div>
	);
}

export default App;
