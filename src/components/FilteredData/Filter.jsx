export function Filter({data, setFilter}){
    const countries = Array.from(
    new Set(data.responses.map((r) => r.country))
  );

  const updateFilter = (e) => {
    const country = e.target.value;

    setFilter((prev) => {
      if (prev.includes(country)) {
        return prev.filter((c) => c !== country);
      }
      return [...prev, country];
    });
  };
    return(
        <div className="flex flex-col">
            <div className="bg-red-600 text-white p-2 rounded-t-xl text-center text-lg font-bold">Filter</div>
            <div className="bg-gray-200 p-2 text-lg">
                {countries.map(c => {
                    return (
                        <div key={c}>
                            <input type="checkbox" defaultChecked value={c} onChange={updateFilter} name="filter" /> {c}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}