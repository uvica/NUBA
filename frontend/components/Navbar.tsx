"use client";
import { useState } from "react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	return <>
		<header className="site-header">
			<button className="icon-button mobile-menu" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? "×" : "☰"}</span></button>
			<a className="wordmark" href="#top" aria-label="NUBA Atelier home"><span>NUBA</span><small>ATELIER</small></a>
			<nav className="desktop-nav" aria-label="Main navigation"><a href="#top">Home</a><a href="#collection">Products</a><a href="#combos">Combos</a><a href="#offers">Offers</a></nav>
			<div className="nav-actions"><button className="icon-button" aria-label="Search">⌕</button><button className="icon-button" aria-label="Wishlist">♡</button><a className="bag-link" href="#collection">Bag <span>0</span></a></div>
		</header>
		{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#top" onClick={() => setMenuOpen(false)}>Home</a><a href="#collection" onClick={() => setMenuOpen(false)}>Products</a><a href="#combos" onClick={() => setMenuOpen(false)}>Combos</a><a href="#offers" onClick={() => setMenuOpen(false)}>Offers</a></nav>}
	</>;
}
