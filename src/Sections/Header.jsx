export function Header({data}){
    const survey = {...data.survey}
    return (
        <div
            className=
            "flex justify-between bg-red-700 text-white py-2 px-5 text-lg border-b-5 border-solid border-gray-400"
        >
            <div>
                {`SURVEY ANALYZER | ${survey.survey_name}`}
            </div>
            <div>
                {data.company_name}
            </div>
        </div>
    )
}