export default function PestsPage() {
  const pests = [
    {
      name: "Aphids",
      method: "Neem oil, ladybugs",
      tip: "Inspect leaves regularly for clusters.",
      img: "images/pests/pest1.jpg",
    },
    {
      name: "Stem Borer",
      method: "Traps, resistant varieties",
      tip: "Monitor crops weekly for damage.",
      img: "images/pests/pest2.jpg",
    },
    {
      name: "Whiteflies",
      method: "Yellow sticky traps, natural sprays",
      tip: "Maintain airflow between plants.",
      img: "images/pests/pest3.jpg",
    },
    {
      name: "Cutworms",
      method: "Soil tilling, organic insecticides",
      tip: "Protect seedlings with collars around stems.",
      img: "images/pests/pest4.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">
          Pest Control Strategies
        </h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Discover integrated pest management strategies including biological
          controls and organic remedies. Learn how to monitor, detect, and
          effectively treat pest infestations to protect crop yield and quality.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pests.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-700">
                  {p.name}
                </h2>
                <p className="text-gray-500 mt-3 text-sm">
                  <span className="font-semibold">Control:</span> {p.method}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">Tip:</span> {p.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
