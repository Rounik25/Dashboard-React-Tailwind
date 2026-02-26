import { useMemo } from "react"
import { format, parseISO } from "date-fns";
import { getResponses } from "../../utils/getResponses";

export function Table({filter}){
    const responses = getResponses()
    const filteredData = useMemo(() => {
        return responses.filter(response =>
        filter.includes(response.country)
        );
    }, [responses, filter]);

    return (
        <table>
            <thead>
                <tr className="flex">
                    <th className="w-40 border-1 border-gray-300 bg-red-600 text-white">
                        Name
                    </th>
                    <th className="w-75 border-1 border-gray-300 bg-red-600 text-white">
                        Email
                    </th>
                    <th className="w-35 border-1 border-gray-300 bg-red-600 text-white">
                        Country
                    </th>
                    <th className="w-35 border-1 border-gray-300 bg-red-600 text-white">
                        Date
                    </th>
                    <th className="w-30 border-1 border-gray-300 bg-red-600 text-white">
                        Q1 Rating
                    </th>
                    <th className="w-30 border-1 border-gray-300 bg-red-600 text-white">
                        Q2 Rating
                    </th>
                    <th className="w-30 border-1 border-gray-300 bg-red-600 text-white">
                        Q3 Rating
                    </th>
                    <th className="w-30 border-1 border-gray-300 bg-red-600 text-white">
                        AVG Rating
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map(row =>{
                    return(
                        <tr key={row.email} className="flex">
                            <td className="w-40 border-1 border-gray-300 bg-gray-200 px-2">
                                {row.name}
                            </td>
                            <td className="w-75 border-1 border-gray-300 bg-gray-200 px-2">
                                {row.email}
                            </td>
                            <td className="w-35 border-1 border-gray-300 bg-gray-200 px-2 text-center">
                                {row.country}
                            </td>
                            <td className="w-35 border-1 border-gray-300 bg-gray-200 px-2 text-center">
                                {`${format(parseISO(row.date), "MMMM d")},`}
                            </td>
                            <td className="w-30 border-1 border-gray-300 bg-gray-200 px-2 text-center">
                                {row.q1_rating}
                            </td>
                            <td className="w-30 border-1 border-gray-300 bg-gray-200 px-2 text-center">
                                {row.q2_rating}
                            </td>
                            <td className="w-30 border-1 border-gray-300 bg-gray-200 px-2 text-center">
                                {row.q3_rating}
                            </td>
                            <td className="w-30 border-1 border-gray-300 bg-gray-200 px-2 text-center">
                                {((row.q1_rating+row.q2_rating+row.q3_rating)/3).toFixed(1)}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}