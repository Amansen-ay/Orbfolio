import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-[360px]">
      <Search
        size={18}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-zinc-400
        "
      />

      <input
        type="text"
        placeholder="Search links..."
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-zinc-200
          bg-white
          pl-14
          pr-4
          text-sm
          font-medium
          text-zinc-800
          shadow-sm
          outline-none
          transition-all
          duration-200
          placeholder:text-zinc-400
          focus:border-orange-300
          focus:ring-4
          focus:ring-orange-100
        "
      />
    </div>
  );
}