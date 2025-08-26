const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 bg-base-300 my-10 rounded-2xl">
      {/* Image on top */}
      <div className="w-full h-96 mb-6">
        <img
          src="https://i.ibb.co.com/cc7wpSMZ/w-for-abut-banner.jpg"
          alt="About Us"
          className="object-cover w-full h-full rounded-xl shadow-lg"
        />
      </div>

      {/* Main Title */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-accent">About Next Mart</h1>
        <h2 className="text-xl text-secondary">
          Quality Products & Trusted Service Since 2025
        </h2>
      </div>

      {/* Paragraphs */}
      <div className="space-y-4">
        <p>
          Welcome to{" "}
          <span className="text-accent font-semibold">Next Mart</span>! We are
          committed to providing high-quality watches, accessories, and everyday
          essentials at the most affordable prices. Our mission is to make your
          shopping experience seamless, enjoyable, and reliable.
        </p>

        <p>
          Every product in our store is carefully selected to ensure durability,
          style, and value. Whether you are looking for a classic analog watch,
          a stylish accessory, or a gift for someone special, we have you
          covered. We believe in quality, affordability, and customer
          satisfaction above everything else.
        </p>

        <p>
          Our team is passionate about bringing you the latest trends and
          timeless designs. At{" "}
          <span className="text-secondary font-semibold">Next Mart</span>, we
          pay attention to every detail, from product selection to packaging,
          ensuring that you receive only the best.
        </p>

        <p>
          Customer trust is our highest priority. We strive to provide excellent
          service, fast delivery, and hassle-free shopping. Your happiness
          motivates us to constantly improve and expand our offerings.
        </p>

        <p>
          Thank you for choosing{" "}
          <span className="text-accent font-bold">Next Mart</span>. We look
          forward to serving you and making your shopping experience
          unforgettable!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
