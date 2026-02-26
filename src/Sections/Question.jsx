import { QuestionCard } from "../components/Question/QuestionCard"

export function Question({data}){
    const questions=data.survey.questions
    let id=0
    console.log(questions.length)
    return (
        <div className="flex flex-col mx-5 bg-white p-5 rounded-xl shadow-lg border-2 border-gray-400  justify-around">
            <div className="text-center text-3xl">SURVEY QUESTIONS & AVERAGE SCORES</div>
            <div className="flex">
                {questions.map(question => {
                    {id++}
                    return(
                        <QuestionCard key={id} data={data} text={question.text} id={id} />
                    )
                })}
            </div>
        </div>
    )
}