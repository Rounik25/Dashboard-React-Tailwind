export function KPI3({data}){
    return (
        <div className="flex flex-col items-center m-10 bg-white p-5 rounded-xl shadow-lg border-2 border-gray-400 w-3/10 justify-around">
            <div>
                <div className="text-2xl m-2">
                    {`Opening Date: ${data.survey.open_date}`}
                </div>
                <div className="text-2xl m-2">
                    {`Opening Date: ${data.survey.open_date}`}
                </div>
            </div>
            <div className="text-gray-500 text-sm">
                    {data.survey.survey_name}
            </div>
        </div>
    )
}