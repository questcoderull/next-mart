import Link from "next/link";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Wireless Headphones",
      description:
        "High-quality over-ear wireless headphones with noise cancellation.",
      price: 120,
      detailsLink: "/products/1",
    },
    {
      id: 2,
      title: "Smart Watch",
      description:
        "Track your fitness and stay connected with this stylish smartwatch.",
      price: 85,
      detailsLink: "/products/2",
    },
    {
      id: 3,
      title: "Gaming Mouse",
      description: "Ergonomic RGB gaming mouse with customizable buttons.",
      price: 45,
      detailsLink: "/products/3",
    },
    {
      id: 4,
      title: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      price: 60,
      detailsLink: "/products/4",
    },
    {
      id: 5,
      title: "4K Monitor",
      description: "27-inch 4K UHD monitor with stunning color accuracy.",
      price: 350,
      detailsLink: "/products/5",
    },
    {
      id: 6,
      title: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with blue switches.",
      price: 75,
      detailsLink: "/products/6",
    },
    {
      id: 7,
      title: "Laptop Backpack",
      description:
        "Water-resistant backpack with multiple compartments for 15-inch laptops.",
      price: 40,
      detailsLink: "/products/7",
    },
    {
      id: 8,
      title: "Smartphone",
      description:
        "Latest smartphone with OLED display and powerful processor.",
      price: 899,
      detailsLink: "/products/8",
    },
    {
      id: 9,
      title: "External Hard Drive",
      description: "2TB portable external hard drive for backup and storage.",
      price: 70,
      detailsLink: "/products/9",
    },
    {
      id: 10,
      title: "Wireless Charger",
      description:
        "Fast wireless charger compatible with iPhone and Android devices.",
      price: 30,
      detailsLink: "/products/10",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Services page</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.map((d) => {
          return (
            <div>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
              <Link href={d.detailsLink}>
                <button className="border border-red-400 py-3 px-7 rounded-xl cursor-pointer">
                  See Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
