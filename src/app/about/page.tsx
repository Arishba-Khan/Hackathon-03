import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Marketplace
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Discover comfort, health, and style in every step.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Purpose</h2>
          <p className="mt-4 text-lg text-gray-500">
            We created this marketplace to offer affordable, high-quality shoes that cater to real foot health needs.
            Our shoes provide the perfect mix of comfort, support, style, and durability. Our goal is to ensure everyone
            can find footwear that keeps their feet healthy, strong, and looking great, without breaking the bank.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Our main focus is on providing medicated shoes for everyone's need and solving size fit issues.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Medicated Shoes for Everyone's Needs</h2>
          <p className="mt-4 text-lg text-gray-500">
            We offer a range of medicated shoes designed to make life easier and more comfortable for everyone. From
            custom orthopedic shoes that help with foot pain to professional shoes that look great and support you all
            day at work, we have it all. We also have shoes for kids to support healthy growth and diabetic-friendly
            options that keep sensitive feet safe and comfortable.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Solving Size Fit Issues</h2>
          <p className="mt-4 text-lg text-gray-500">
            We make finding the right shoe size simple and stress-free. Use our printable size chart or follow our easy
            measurement guide to get accurate results at home. For added confidence, we provide size tips for each shoe
            type and offer a hassle-free return policy, so you always get the perfect fit with ease.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Target Audience</h2>
          <p className="mt-4 text-lg text-gray-500">
            Our medicated shoes are designed for those who prioritize comfort, support, and health. This includes:
          </p>
          <ul className="mt-4 list-disc list-inside text-lg text-gray-500">
            <li>Individuals with foot conditions like flat feet or diabetes</li>
            <li>Professionals such as teachers, healthcare workers, and office staff who need all-day support</li>
            <li>Parents seeking durable, healthy footwear for growing children</li>
            <li>Sports enthusiasts looking for high-performance shoes with added comfort and support</li>
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Product Range</h2>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Sports Shoes",
              "Professional Shoes",
              "High Heels for Girls",
              "Cute Shoes for Kids",
              "Men's Shoes",
              "Medicated Shoes",
              "Kids' Footwear",
              "Shoes for Travelers",
              "Hiking Shoes",
            ].map((category) => (
              <div key={category} className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-lg font-medium text-gray-900">{category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
          <ul className="mt-4 space-y-4 text-lg text-gray-500">
            <li>✅ Flexible payment options, including JazzCash and EasyPaisa</li>
            <li>✅ 10-day discounted return policy</li>
            <li>✅ Refund policy if the material doesn't meet your expectations</li>
            <li>✅ Customer service available all day</li>
            <li>✅ Fast delivery in just 5 days</li>
            <li>✅ Extra deals, exclusive discounts, and coupons</li>
            <li>✅ Complimentary foot care products when you buy 2+ items</li>
          </ul>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Special Offer</h2>
          <p className="mt-4 text-xl text-gray-700">
            When you buy 2+ items from our store, we will offer you complimentary foot care products such as medicated
            moisturizers, foot soaks, scrubs and deodorants or heel balms.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-white bg-black hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

