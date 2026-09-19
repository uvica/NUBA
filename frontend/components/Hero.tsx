const heroImage = "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85";

export default function Hero() {
	return <section className="hero" id="top">
		<div className="hero-copy"><span className="eyebrow">Collection 2025 · Handcrafted in Florence</span><h1>Every stitch<br /><em>holds</em> a legacy.</h1><p>Sculptural silhouettes shaped from full-grain Tuscan vegetable-tanned hides. Built slowly to accompany a lifetime of effortless grace.</p><div className="hero-actions"><a className="button button-primary" href="#collection">Explore signature pieces <span>→</span></a><a className="text-link" href="#craft">Our craftsmanship <span>↗</span></a></div><div className="hero-stats"><div><strong>100%</strong><span>Vegetable-tanned leather</span></div><div><strong>Limited</strong><span>Small-batch editions</span></div><div><strong>Lifetime</strong><span>Atelier care service</span></div></div></div>
		<div className="hero-image-wrap"><span className="image-label">Iconic showcase</span><img src={heroImage} alt="Terracotta leather NUBA handbag on a travertine pedestal" /><div className="hero-caption"><span>Signature silhouette</span><strong>The Sovereign Flap Bag</strong><small>Terracotta &amp; Cream · $480</small></div></div>
	</section>;
}
