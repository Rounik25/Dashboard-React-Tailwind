import Chart from "./Chart"

export function KPI2({data}){
    let countArr =[0,0,0,0,0]

    const responses = data.responses

    responses.map(response => {
        countArr[response.q1_rating-1]++
        countArr[response.q2_rating-1]++
        countArr[response.q3_rating-1]++
    })

    let chartData = []

    for (let i=0; i<countArr.length; i++){
        chartData.push({
            rating : String(i+1),
            count : countArr[i]
        })
    }

    return (
        <div className="flex m-5 bg-white rounded-xl shadow-lg border-2 border-gray-400 w-3/10 justify-around">
            <Chart data={chartData} />
        </div>
    )
}