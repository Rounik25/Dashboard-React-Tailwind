export function KPI1({data}){
    const responses = data.responses
    let rating=0
    responses.map(response => {
        rating = rating + response.q1_rating + response.q2_rating + response.q3_rating
    })
    rating = rating / (responses.length * 3)
    return (
        <div className="flex m-10 bg-white p-5 rounded-xl shadow-lg border-2 border-gray-400 w-3/10 justify-around">
            <div className="flex flex-col justify-center items-center text-center m-5 ">
                <div className="flex h-20 items-center text-4xl">
                    {Object.keys(responses).length}
                </div>
                <div className="text-gray-500 text-sm">
                    TOTAL RESPONSES
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center m-5 ">
                <div className="flex h-20 items-center text-4xl">
                    {`${rating.toFixed(2)}/5`}
                </div>
                <div className="text-gray-500 text-sm">
                    OVERALL RATING
                </div>
            </div>
        </div>
    )
} 