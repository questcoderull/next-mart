import Link from "next/link";
import React from "react";

const page = async () => {
  //   mongodb er data get korar try kortechi.
  const res = await fetch("http://localhost:3000/api/items");
  const data = await res.json();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Our Watch Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((watch) => (
          <div
            key={watch._id}
            className="card bg-base-100 shadow-xl border border-gray-200 rounded-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={watch.image}
                alt={watch.name}
                className="h-60 w-full object-cover rounded-t-xl"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-secondary">
                {watch.name}
              </h2>
              <p className="text-gray-300 font-medium">{watch.brand}</p>
              <p className="text-lg font-semibold text-primary">
                ${watch.price}
              </p>

              <div className="card-actions mt-4">
                <Link
                  href={`/products/${watch._id}`}
                  className="btn btn-primary btn-sm w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
