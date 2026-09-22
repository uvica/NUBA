"use client";
import { useState } from "react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			{/* Header / Main Navigation */}
			<header className="site-header">
				{/* Mobile Menu Toggle Button */}
				<button
					className="icon-button mobile-menu"
					aria-label="Open menu"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span>{menuOpen ? "×" : "☰"}</span>
				</button>

				{/* Logo */}
				<a
					className="wordmark"
					href="#top"
					aria-label="NUBA home"
				>
					<span>NUBA</span>
				</a>

				{/* Desktop Navigation Menu */}
				<nav className="desktop-nav" aria-label="Main navigation">
					<a href="#top">Home</a>
					<a href="#collection">Products</a>
					<a href="#combos">Combos</a>
					<a href="#offers">Offers</a>
				</nav>

				{/* Action Buttons: Search, Wishlist, Bag */}
				<div className="nav-actions">
					<button className="icon-button" aria-label="Search">
						⌕
					</button>
					<button className="icon-button" aria-label="Wishlist">
						♡
					</button>
					<a className="bag-link" href="#collection">
						Bag <span>0</span>
					</a>
				</div>
			</header>

			{/* Mobile Navigation Menu (shown when menuOpen is true) */}
			{menuOpen && (
				<nav className="mobile-nav" aria-label="Mobile navigation">
					<a href="#top" onClick={() => setMenuOpen(false)}>
						Home
					</a>
					<a href="#collection" onClick={() => setMenuOpen(false)}>
						Products
					</a>
					<a href="#combos" onClick={() => setMenuOpen(false)}>
						Combos
					</a>
					<a href="#offers" onClick={() => setMenuOpen(false)}>
						Offers
					</a>
				</nav>
			)}
		</>
	);
}
