import { Header } from "./Sections/Header"
import { KPI } from "./Sections/KPI"
import { Question } from "./Sections/Question"
import { FilteredData } from "./Sections/FilteredData"
import { useDataStore } from "./store/useDataStore"
import { useEffect } from "react"

function App() {
  const data = useDataStore((state) => state.data)
  const loadFromJson = useDataStore((state) => state.loadFromJson)
  useEffect(() => {
    loadFromJson()
  },[loadFromJson])
  return (
    <div className="bg-gray-300 h-screen">
      <Header data={data} />
      <KPI data={data} />
      <Question />
      <FilteredData />
    </div>
  ) 
}

export default App
