"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const BestSellers = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBestSellers() {
      try {
        const res = await fetch("/api/items/best-sellers");
        const data = await res.json();
        setWatches(data);
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBestSellers();
  }, []);

  if (loading) {
    return (
      <>
        <h2 className="text-4xl font-bold text-center mb-12 text-primary mt-10">
          Best Selling Watches
        </h2>
        <p className="text-center text-2xl text-accent py-8">
          Loading best sellers Watches...
        </p>
      </>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Best Selling Watches
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {watches.map((watch) => (
          <div
            key={watch._id}
            className="bg-gradient-to-b from-base-200 to-base-100 rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:-translate-y-2"
          >
            <figure className="overflow-hidden rounded-t-2xl">
              <img
                src={watch.image}
                alt={watch.name}
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </figure>

            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-secondary">
                {watch.name}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Brand:{" "}
                <span className="badge badge-outline badge-sm">
                  {watch.brand}
                </span>
              </p>
              <p className="text-lg font-semibold text-primary">
                ${watch.price}
              </p>
              <p className="text-sm text-gray-400">Sold: {watch.sales}</p>

              <div className="mt-4">
                <Link
                  href={`/products/${watch._id}`}
                  className="btn btn-outline btn-primary w-full rounded-xl"
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

export default BestSellers;
