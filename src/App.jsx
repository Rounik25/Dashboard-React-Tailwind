import { Header } from "./Sections/Header"
import { KPI } from "./Sections/KPI"
import { Question } from "./Sections/Question"
import { FilteredData } from "./Sections/FilteredData"

function App() {
  return (
    <div>
      <Header />
      <KPI />
      <Question />
      <FilteredData />
    </div>
  ) 
}

export default App
