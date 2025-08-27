import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Link from "next/link";

const ProductDetails = async ({ params }) => {
  const { id } = params;

  // MongoDB theke ekta specific product khuja
  const product = await dbConnect(collectionName.watches).findOne({
    _id: new ObjectId(id),
  });

  if (!product) {
    return (
      <h1 className="text-center text-2xl font-bold">Product not found</h1>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="card lg:card-side bg-base-100 shadow-2xl rounded-2xl overflow-hidden">
        {/* Image section */}
        <figure className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-[500px] w-full object-cover"
          />
        </figure>

        {/* Content section */}
        <div className="card-body lg:w-1/2 p-8 space-y-4">
          <h2 className="card-title text-4xl font-bold text-primary">
            {product.name}
          </h2>
          <p className="text-lg font-semibold text-secondary">
            Brand: {product.brand}
          </p>
          <p className="text-gray-300 text-base">Type: {product.type}</p>
          <p className="text-gray-300 text-base">Color: {product.color}</p>

          <p className="text-3xl font-extrabold text-primary mt-6">
            ${product.price}
          </p>

          <div className="card-actions mt-8 flex gap-4">
            <button className="btn btn-secondary btn-lg rounded-xl">
              Add to Cart
            </button>
            <button className="btn btn-primary btn-lg rounded-xl">
              Buy Now
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-300 leading-relaxed">
              Discover timeless craftsmanship with the{" "}
              <span className="text-secondary">{product.name}</span>. Designed
              by{" "}
              <span className="font-semibold text-accent">{product.brand}</span>
              , this{" "}
              <span className="text-secondary">
                {product.type.toLowerCase()}
              </span>{" "}
              watch blends elegance and durability. Perfect for any occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="text-center mt-6">
        <Link href="/products" className="link link-primary text-lg">
          ← Back to products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
