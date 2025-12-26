import { useEffect, useState } from "react";

const API_BASE = "https://bat-sup-lok-gai.onrender.com";

export default function Catalog() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [expanded, setExpanded] = useState({});
  const [typingTimeout, setTypingTimeout] = useState(null);

  // Fetch businesses
  const fetchBusinesses = () => {
    const params = new URLSearchParams();
    if (search.trim() !== "") params.set("search", search);
    if (category.trim() !== "") params.set("category", category);

    setLoading(true);

    fetch(`${API_BASE}/api/businesses?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setBusinesses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  };

  // Live search with debounce
  useEffect(() => {
    if (typingTimeout) clearTimeout(typingTimeout);

    const timeout = setTimeout(() => {
      fetchBusinesses();
    }, 300); // 300ms debounce

    setTypingTimeout(timeout);
  }, [search, category]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="px-10 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif font-bold mb-10 text-primary">
        Catalog
      </h2>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <input
          className="border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 transition"
          placeholder="Search businesses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 transition"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Cafe">Cafe</option>
          <option value="Grocery">Grocery</option>
          <option value="Retail">Retail</option>
          <option value="Beauty">Beauty</option>
        </select>
      </div>

      {/* Status */}
      {loading && <p className="opacity-70">Loading businesses...</p>}
      {!loading && businesses.length === 0 && (
        <p className="opacity-70">No businesses found.</p>
      )}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {businesses.map((b) => {
          const isOpen = expanded[b.id];
          const img = b.image_url || b.imageUrl;

          return (
            <div
              key={b.id}
              className="border rounded-xl shadow-md bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image */}
              {img && (
                <img
                  src={img}
                  alt={b.name}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{b.name}</h3>
                <p className="text-sm opacity-80 mb-2">
                  {b.category} {b.neighborhood && `· ${b.neighborhood}`}
                </p>

                {/* Description */}
                <p
                  className={`text-gray-700 ${
                    isOpen ? "" : "line-clamp-3"
                  }`}
                >
                  {b.description}
                </p>

                {/* Address */}
                {b.address && (
                  <p className="mt-2 text-gray-600 text-sm">{b.address}</p>
                )}

                {/* Links */}
                <div className="mt-3 space-x-4 text-sm">
                  {b.website && (
                    <a
                      href={b.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      Website
                    </a>
                  )}
                  {b.instagram && (
                    <a
                      href={b.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-600 underline"
                    >
                      Instagram
                    </a>
                  )}
                </div>

                {/* Tags */}
                {Array.isArray(b.tags) && b.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {b.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-gray-100 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Expand Button */}
                <button
                  onClick={() => toggleExpand(b.id)}
                  className="mt-4 text-primary underline text-sm"
                >
                  {isOpen ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
