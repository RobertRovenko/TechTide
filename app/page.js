import products from "../app/data/products"; // Import the product array

export default function Home() {
  return (
    <div>
      <h1>Welcome to Tech Tide</h1>
      <p>Check out our top Amazon Products!</p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <img src={product.images[0]} alt={product.name} width="200" />
            <p>{product.shortDescription}</p>
            <div class="price-button-wrapper">
              <p>
                <strong>Price: {product.price}</strong>
              </p>
            </div>

            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
