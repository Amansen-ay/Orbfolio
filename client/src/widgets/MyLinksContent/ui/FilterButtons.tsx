const filters = [
    "All",
    "Published",
    "Hidden",
];

export function FilterButtons() {
    const activeFilter = "All";
    return (
        <>
            

            <div className="flex w-fit rounded-2xl border border-zinc-200 bg-white p-1 shadow-sm">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`
        rounded-xl
        px-7
        py-2.5
        text-sm
        font-semibold
        transition-all
        duration-200

        ${activeFilter === filter
                                ? "bg-orange-50 text-orange-500"
                                : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                            }
      `}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </>
    )
}
