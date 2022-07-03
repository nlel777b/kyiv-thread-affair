export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a
          href="https://x.ro"
          className="product-tile-image"
          title="Thread Affair Traveller Suit"
        >
          <img
            src="/images/products/product-01a.jpg"
            alt="Thread Affair Traveller Suit"
          ></img>
        </a>

        <span className="badge badge-oversized">%</span>

        <div className="mt-4 text-center">
          <h1 className="product-tile-title">
            <span>Thread Affair</span>
            <span>Traveller</span>
            Suit
          </h1>

          <h2 className="product-tile-subtitle">London fit-Semi-slim</h2>
        </div>
      </header>

      <section className="product-tile-pricing text-center">
        <span className="catalog-price d-block">399.00</span>

        <span className="price">
          USD
          <span>299</span>
        </span>
      </section>

      <footer className="product-tile-controls text-center mt-4">
        <button className="button" type="button" title="Add to Cart">
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
