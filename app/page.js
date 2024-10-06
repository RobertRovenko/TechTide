import products from "../app/data/products"; // Import the product array

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/coverimage.jpg')" }}
        ></div>
        <div className="relative z-10 text-center p-8 text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Welcome to Tech Tide</h1>
          <p className="text-xl">Check out our top Amazon Products!</p>
        </div>
      </div>

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
