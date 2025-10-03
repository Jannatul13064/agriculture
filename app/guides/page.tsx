export default function GuidesPage() {
  const guides = [
    {
      title: "Organic Vegetable Farming",
      desc: "Learn eco-friendly practices for growing healthy, chemical-free crops.",
      category: "Vegetables",
      img: "images/guides/guides1.jpg",
    },
    {
      title: "Rice Cultivation Techniques",
      desc: "Step-by-step process for achieving high-yield and quality rice farming.",
      category: "Grains",
      img: "/images/guides/guides2.jpg",
    },
    {
      title: "Seasonal Crop Rotation",
      desc: "Improve soil fertility, minimize pests, and ensure long-term sustainability.",
      category: "General",
      img: "images/guides/guides3.jpg",
    },
    {
      title: "Water Management in Farming",
      desc: "Best practices for irrigation, rainwater harvesting, and resource efficiency.",
      category: "Irrigation",
      img: "images/guides/guides4.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">
          Farming Guides
        </h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Explore step-by-step tutorials, categorized by crop types, seasons,
          and farming methods. These guides help farmers adopt best practices
          for sustainable and effective farming.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <img
                src={g.img}
                alt={g.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-700">
                  {g.title}
                </h2>
                <p className="text-gray-500 mt-3 text-sm">{g.desc}</p>
                <span className="text-xs text-gray-400 mt-4 block">
                  Category: {g.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
