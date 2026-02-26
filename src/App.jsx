import { Header } from "./Sections/Header"
import { KPI } from "./Sections/KPI"
import { Question } from "./Sections/Question"
import { FilteredData } from "./Sections/FilteredData"
import data from "./data/survey-mock-data 1.json"

function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <Header data={data} />
      <KPI data={data} />
      <Question data={data} />
      <FilteredData data={data} />
    </div>
  ) 
}

export default App
