import { Table } from "../components/FilteredData/Table"
import { Filter } from "../components/FilteredData/Filter"
import { useEffect, useMemo, useState } from "react"

export function FilteredData({data}){
    const [filter, setFilter] = useState([])
    const countries = useMemo(() => {
        return Array.from(new Set(data.responses.map((r) => r.country)));
    }, [data]);

    useEffect(() => {
        setFilter(countries)
    },[countries])
    
    return (
        <div className="flex m-5 bg-white p-5 rounded-xl shadow-lg border-2 border-gray-400  justify-around">
            <div className="w-9/10 m-5 bg-gray-200">
                <Table filter={filter} />
            </div>
            <div className="w-1/10 m-5">
                <Filter data={data} setFilter={setFilter} />
            </div>
        </div>
    )
}