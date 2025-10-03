export default function CropsPage() {
  const crops = [
    {
      name: "Wheat",
      type: "Grain",
      soil: "Loamy",
      uses: "Bread, pasta",
      img: "images/crops/wheat.jpg",
    },
    {
      name: "Tomato",
      type: "Vegetable",
      soil: "Sandy loam",
      uses: "Culinary, sauces",
      img: "images/crops/tomato.jpg",
    },
    {
      name: "Mango",
      type: "Fruit",
      soil: "Well-drained alluvial",
      uses: "Juice, desserts",
      img: "images/crops/mango.jpg",
    },
    {
      name: "Potato",
      type: "Vegetable",
      soil: "Fertile loamy soil",
      uses: "Fries, chips, curries",
      img: "images/crops/potato.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            Crop Information Hub
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore detailed information on various crops, including cultivation
            methods, soil requirements, harvesting techniques, nutritional
            values, and potential uses.
          </p>
        </header>

        {/* Crop Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {crops.map((c, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all overflow-hidden group"
            >
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-2">
                  {c.name}
                </h2>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>
                    <span className="font-medium text-gray-700">Type:</span>{" "}
                    {c.type}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Soil:</span>{" "}
                    {c.soil}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Uses:</span>{" "}
                    {c.uses}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
