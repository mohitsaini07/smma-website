export default function Tags({ mainText, subText, color, value }) {
  return (
    <div
      className={`md:border-4 border-2 border-${color}-500 rounded-full animate-float`}
    >
      <div
        className={`flex items-center md:gap-4 gap-2 w-max border-2 border-black bg-white md:py-3 md:px-4 py-1 px-2 rounded-full shadow-md transition-all  duration-300 ease-in-out shadow-indigo-400`}
      >
        <div className="text-black text-sm sm:text-sm md:text-xl font-semibold">
          {value}
        </div>
        <div className="uppercase text-xs sm:text-sm">
          {mainText} <br />{" "}
          <span className="bg-gradient-to-tl from-slate-800 via-indigo-500 to-zinc-400 bg-clip-text text-transparent font-semibold ">
            {subText}
          </span>
        </div>
      </div>
    </div>
  );
}
