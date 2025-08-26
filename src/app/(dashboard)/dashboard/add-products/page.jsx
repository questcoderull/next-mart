"use client";
import React, { useState } from "react";

const AddProduct = () => {
  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const productData = {
      name: form.name.value,
      brand: form.brand.value,
      price: parseFloat(form.price.value),
      color: form.color.value,
      type: form.type.value,
      image: form.image.value,
      description: form.description.value,
      sales: 0, // default value
    };

    console.log("New Product:", productData);

    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await res.json();
    // console.log(result);
    form.reset();
  };

  return (
    <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        ➕ Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Classic Leather Watch"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            name="brand"
            placeholder="Rolex"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="label">
            <span className="label-text">Price ($)</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="250"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Color & Type */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Color</span>
            </label>
            <input
              type="text"
              name="color"
              placeholder="Brown"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              name="type"
              placeholder="Analog"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="url"
            name="image"
            placeholder="https://i.ibb.co.com/TB2bxvZK/w-1.jpg"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Write a short product description..."
            className="textarea textarea-bordered w-full"
            rows={4}
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary rounded-xl w-full">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
