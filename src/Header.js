import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">🛍️ ModaMağaza</div>
            <nav className="nav">
                <a href="#">Ana Sayfa</a>
                <a href="#">Ürünler</a>
                <a href="#">İletişim</a>
            </nav>
        </header>
    );
}

export default Header;
