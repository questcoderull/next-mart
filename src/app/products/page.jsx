import Link from "next/link";
import React from "react";

const page = async () => {
  //   mongodb er data get korar try kortechi.
  const res = await fetch("http://localhost:3000/api/items");
  const data = await res.json();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">
        Our Watch Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((watch) => (
          <div
            key={watch._id}
            className="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <figure className="overflow-hidden rounded-t-xl">
              <img
                src={watch.image}
                alt={watch.name}
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
            </figure>

            <div className="p-5 space-y-2">
              <h2 className="text-xl font-bold text-secondary">{watch.name}</h2>

              <p className="text-sm text-gray-500 font-medium">
                Brand:{" "}
                <span className="badge badge-outline badge-sm">
                  {watch.brand}
                </span>
              </p>

              <p className="text-lg font-semibold text-primary">
                ${watch.price}
              </p>

              <div className="card-actions mt-3">
                <Link
                  href={`/products/${watch._id}`}
                  className="btn btn-primary btn-sm w-full rounded-lg"
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
