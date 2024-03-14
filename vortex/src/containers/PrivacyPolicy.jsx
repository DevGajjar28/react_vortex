import React from 'react'
import "./Privacy.css"

const PrivacyPolicy = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div className="container">
			<header>
				<h1>Privacy Policy</h1>
			</header>

			<div className="E8P2f">
				<div className="hdP0R">
					<span>
						<div id="whats-in-this-privacy-policy"></div>
						<h2>What's in this Privacy Policy?</h2>
						<ul>
							<li>
								<p>
									<a href="#privacy-policy-amendments">
										Privacy Policy Amendments
									</a>
								</p>
							</li>
							{/* ... Rest of the list items ... */}
						</ul>

						{/* ... Rest of the content ... */}
					</span>
				</div>
			</div>

			<div className="scroll-to-top" onClick={scrollToTop}>
				<span className="arrow-up"></span>
			</div>
		</div>
	)
}

export default PrivacyPolicy
