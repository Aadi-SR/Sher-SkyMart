export default function CategoryCard({  icon, name, itemCount }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center transition-transform hover:-translate-y-0.5 hover:shadow-lg syne-font"
    >
      <span className="text-4xl">{icon}</span>
      <span className="mt-4 font-bold text-gray-900">{name}</span>
      <span className="mt-1 text-sm text-gray-500">{itemCount} items</span>
    </button>
  );
}
