export function QuestionCard({data, text, id}){
    const responses = data.responses
    let rating = 0;
    responses.map(response => {
        if (id === 1) rating+=response.q1_rating
        if (id === 2) rating+=response.q2_rating
        if (id === 3) rating+=response.q3_rating
    })
    const avgRating = (rating/responses.length).toFixed(2)

    return(
        <div className="flex flex-col m-5 bg-gray-200 hover:bg-gray-100 p-5 rounded-xl shadow-lg border-2 border-gray-400 w-3/10 justify-around text-center">
            <div className="text-xl">{text}</div>
            <div className="text-xl">AVERAGE RATING: {avgRating}</div>
        </div>
    )
}