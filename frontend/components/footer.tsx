export default function Footer() {
	return (
		<footer className="site-footer" id="journal">
			{/* Social Media Section */}
			<section className="social-level" aria-label="Follow NUBA Atelier">
				<div className="social-heading">
					<span className="eyebrow">Stay in touch</span>
					<h2>Follow the atelier</h2>
					<p>
						Discover the craft, the collection, and the people behind every
						NUBA piece.
					</p>
				</div>

				<div className="social-cards">
					{/* Instagram Card */}
					<article className="social-card instagram-card">
						<div className="social-icon instagram-icon" aria-hidden="true">
							◎
						</div>
						<span className="social-name">Instagram</span>
						<strong>@nubaatelier</strong>
						<p>
							See new bag arrivals, styling stories, atelier details, and
							customer unboxings.
						</p>
						<a
							className="social-action"
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
						>
							Follow on Instagram <span>↗</span>
						</a>
					</article>

					{/* TikTok Card */}
					<article className="social-card tiktok-card">
						<div className="social-icon tiktok-icon" aria-hidden="true">
							♪
						</div>
						<span className="social-name">TikTok</span>
						<strong>@nubaatelier</strong>
						<p>
							Watch bag packing, leather craftsmanship, live demonstrations,
							and studio moments.
						</p>
						<a
							className="social-action"
							href="https://www.tiktok.com/"
							target="_blank"
							rel="noreferrer"
						>
							Watch on TikTok <span>↗</span>
						</a>
					</article>

					{/* WhatsApp Card */}
					<article className="social-card whatsapp-card">
						<div className="social-icon whatsapp-icon" aria-hidden="true">
							◔
						</div>
						<span className="social-name">WhatsApp</span>
						<strong>Chat with NUBA</strong>
						<p>
							Message our atelier team for product questions, availability,
							advice, and order support.
						</p>
						<a
							className="social-action"
							href="https://wa.me/"
							target="_blank"
							rel="noreferrer"
						>
							Chat on WhatsApp <span>↗</span>
						</a>
					</article>
				</div>
			</section>

			{/* About Section */}
			<section className="about-level" aria-labelledby="about-nuba">
				<div className="about-intro">
					<span className="eyebrow">About NUBA Atelier</span>
					<h2 id="about-nuba">
						Quiet luxury,<br />
						<em>made by hand.</em>
					</h2>
					<p>
						Sculptural silhouettes crafted from full-grain vegetable-tanned
						leather. Rooted in an artisanal practice, quiet luxury, and
						timeless tactile form.
					</p>
				</div>

				{/* Footer Links and Newsletter */}
				<div className="footer-details">
					{/* Customer Care Links */}
					<div>
						<span className="footer-label">Customer care</span>
						<a href="#journal">Client Services</a>
						<a href="#journal">Shipping &amp; Returns</a>
						<a href="#journal">Leather Care &amp; Restoration</a>
						<a href="#journal">Authenticity Guarantee</a>
					</div>

					{/* Newsletter Signup */}
					<div>
						<span className="footer-label">The atelier journal</span>
						<p>
							Receive seasonal monographs, private exhibition invites, and
							edition releases.
						</p>
						<form>
							<input
								aria-label="Email address"
								placeholder="Your email address"
								type="email"
							/>
							<button>Subscribe</button>
						</form>
					</div>
				</div>
			</section>

			{/* Footer Bottom */}
			<div className="footer-bottom">
				<span>© 2025 NUBA Atelier. Handcrafted with reverence.</span>
				<span>Privacy policy · Terms of service · Sustainability</span>
			</div>
		</footer>
	);
}
