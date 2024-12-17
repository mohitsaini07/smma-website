export default function Button({ title, icon, iconPath }) {
  return (
    <button className="bg-gray-600 text-white hover:border-2 hover:border-gray-600 hover:text-gray-800 hover:bg-transparent border-2 border-transparent transition-all duration-100 ease-in-out font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-lg group">
      <div className="flex items-center gap-2">
        <span className="sm:text-base text-sm">{title}</span>
        {icon && (
          <span className="group-hover:text-white group-hover:bg-gray-600 group-hover:rounded-full transition-all duration-100 ease-in-out">
            {icon}
          </span>
        )}
        {iconPath && <img className="size-2" src={iconPath} alt={title} />}
      </div>
    </button>
  );
}
