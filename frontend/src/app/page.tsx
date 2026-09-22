import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Productsection from "../../components/Productsection";
import Footer from "../../components/footer";

const craftImage =
	"https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=85";

export default function Home() {
	return (
		<main>
			{/* Navigation */}
			<Navbar />

			{/* Announcement Banner */}
			<div className="announcement">
				<span>•</span> Complimentary express worldwide courier &amp; atelier gift
				wrapping on all orders <span>•</span>
			</div>

			{/* Main Content */}
			<div className="page-frame">
				{/* Hero Section */}
				<Hero />

				{/* Products Collection Section */}
				<Productsection />

				{/* Craftsmanship Philosophy Section */}
				<section className="craft" id="craft">
					<div className="craft-copy">
						<span className="eyebrow">Our philosophy &amp; roots</span>
						<h2>
							Artistry born from <em>practice &amp; precision</em>
						</h2>
						<p>
							At NUBA Bags, we believe luxury is a dialogue between human
							hands and organic matter. Each piece begins with certified
							vegetable-tanned hides from Santa Croce sull&apos;Arno, bathed in
							rich earth tones and finished by a single artisan.
						</p>
						<p>
							Zero industrial shortcuts. Our artisans stitch each
							load-bearing seam using wax-coated linen threads in the
							time-honored double saddle technique.
						</p>
						<blockquote>
							"A bag should not be a transient trend. It should be a sculpted
							companion that records your life&apos;s most elevated moments."
							<cite>
								Elena Nuba · Creative Director &amp; Master Leather Artisan
							</cite>
						</blockquote>
					</div>

					<div className="craft-visual">
						<img
							src={craftImage}
							alt="Artisan working with leather in the NUBA workshop"
						/>
						<div className="craft-note">
							<span>Conceria Vele Pelle Certified</span>
							<strong>Book an Atelier Session ↗</strong>
						</div>
					</div>
				</section>

				{/* Press Mentions Section */}
				<section className="press">
					<span>As seen in international press</span>
					<strong>VOGUE</strong>
					<strong>ELLE</strong>
					<strong>HARPER'S BAZAAR</strong>
					<strong>MONOCLE</strong>
					<a href="#journal">Follow the journey @nubaatelier</a>
				</section>
			</div>

			{/* Footer */}
			<Footer />
		</main>
	);
}
