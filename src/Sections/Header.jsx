export function Header({data}){
    return (
        <div
            className=
            "flex justify-between bg-red-700 text-white py-2 px-5 text-lg border-b-5 border-solid border-gray-400"
        >
            <div>
                {`SURVEY ANALYZER | ${data.survey.survey_name}`}
            </div>
            <div>
                {data.company_name}
            </div>
        </div>
    )
}