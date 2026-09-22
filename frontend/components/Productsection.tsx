"use client";
import { useState } from "react";

// Product catalog
const products = [
	{
		name: "The Sovereign Flap Bag",
		material: "Hand-dyed terracotta full-grain leather",
		price: "$480",
		badge: "Bestseller",
		image:
			"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
	},
	{
		name: "Aura Pleated Evening Clutch",
		material: "Intricate latte pleating with crystal clasp",
		price: "$390",
		badge: "Limited edition",
		image:
			"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=85",
	},
	{
		name: "Verona Sculpted Shoulder Bag",
		material: "Fluid ergonomic saddle-cut leather",
		price: "$520",
		badge: "New arrival",
		image:
			"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=85",
	},
	{
		name: "Palermo Minimalist Tote",
		material: "Nappa leather with architectural structure",
		price: "$440",
		badge: "Atelier classic",
		image:
			"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=85",
	},
	{
		name: "Sienna Petite Crossbody",
		material: "Compact vegetable-tanned leather",
		price: "$360",
		badge: "Handcrafted",
		image:
			"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=85",
	},
	{
		name: "Luxe Demi-Lune Handbag",
		material: "Architectural half-moon silhouette",
		price: "$650",
		badge: "Vogue recommend",
		image:
			"https://images.unsplash.com/photo-1566150902887-9679a7a42c1c?auto=format&fit=crop&w=800&q=85",
	},
];

export default function Productsection() {
	const [activeFilter, setActiveFilter] = useState("All creations");
	const [liked, setLiked] = useState<number[]>([]);
	const filters = [
		"All creations",
		"Crossbody & flap",
		"Evening clutches",
		"Shoulder bags",
		"Structured totes",
	];

	// Helper function to toggle wishlist
	const toggleWishlist = (index: number) => {
		setLiked(
			liked.includes(index)
				? liked.filter((item) => item !== index)
				: [...liked, index]
		);
	};

	return (
		<section className="collection" id="collection">
			{/* Collection Header */}
			<div className="collection-heading">
				<div>
					<span className="eyebrow">The permanent wardrobe</span>
					<h2>Curated artistry in leather</h2>
				</div>
				<span className="collection-count">Showing 6 crafted editions</span>
			</div>

			{/* Search and Filter Controls */}
			<div className="filters">
				<label className="search-field">
					<span>⌕</span>
					<input
						aria-label="Search products"
						placeholder="Search totes, clutches, crossbodies..."
					/>
				</label>
				<button className="select-filter">
					All materials <span>⌄</span>
				</button>
				<button className="select-filter">
					All hues <span>⌄</span>
				</button>
				<button className="select-filter">
					Curated order <span>⌄</span>
				</button>
			</div>

			{/* Filter Chips */}
			<div className="filter-chips">
				{filters.map((filter) => (
					<button
						className={
							activeFilter === filter ? "chip active" : "chip"
						}
						key={filter}
						onClick={() => setActiveFilter(filter)}
					>
						{filter}
					</button>
				))}
			</div>

			{/* Product Grid */}
			<div className="product-grid">
				{products.map((product, index) => (
					<article className="product-card" key={product.name}>
						{/* Product Image Section */}
						<div className="product-image">
							<img src={product.image} alt={product.name} />
							<span className="product-badge">{product.badge}</span>
							<button
								className={
									liked.includes(index) ? "heart liked" : "heart"
								}
								onClick={() => toggleWishlist(index)}
								aria-label={`Save ${product.name} to wishlist`}
							>
								{liked.includes(index) ? "♥" : "♡"}
							</button>
						</div>

						{/* Product Info Section */}
						<div className="product-info">
							<span>{product.material}</span>
							<h3>{product.name}</h3>
							<p>{product.price}</p>
							<button
								className={
									liked.includes(index)
										? "save-button saved"
										: "save-button"
								}
								onClick={() => toggleWishlist(index)}
								aria-pressed={liked.includes(index)}
								aria-label={`${
									liked.includes(index) ? "Remove" : "Save"
								} ${product.name} ${
									liked.includes(index) ? "from" : "to"
								} wishlist`}
							>
								<span>{liked.includes(index) ? "♥" : "♡"}</span>
								{liked.includes(index) ? "Saved" : "Save bag"}
							</button>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
