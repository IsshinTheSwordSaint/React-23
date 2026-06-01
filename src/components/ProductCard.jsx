function ProductCard({ product }) {
  const isAvailable = product.inStock;

  return (
    <div
      className={`rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border
      ${isAvailable ? 'border-green-200' : 'border-red-200 opacity-70'}`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg md:text-xl font-semibold">{product.name}</h2>

        <p className="text-gray-600 text-sm md:text-base mt-1">
          {product.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-base md:text-lg font-bold">
            {product.price} zł
          </span>

          <span
            className={`text-xs md:text-sm px-2 py-1 rounded-full
            ${
              isAvailable
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {isAvailable ? 'Na stanie' : 'Wyprzedane'}
          </span>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
