import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://67f3c8f2cbef97f40d2c15b6.mockapi.io/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log("Hata:", err));
    }, []);

    return (
        <div className="container">
            <h1 className="title">Ürünler</h1>
            <div className="products">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="card">
                            <img src={product.image} alt={product.name} className="image" />
                            <h3 className="name">{product.name}</h3>
                            <p className="desc">{product.description}</p>
                            <strong className="price">{product.price} TL</strong>
                        </div>
                    ))
                ) : (
                    <p>Ürünler yükleniyor...</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;
