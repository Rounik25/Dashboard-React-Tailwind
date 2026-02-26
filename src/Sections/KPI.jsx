import { KPI1 } from "../components/KPI/KPI1"
import { KPI2 } from "../components/KPI/KPI2"
import { KPI3 } from "../components/KPI/KPI3"

export function KPI({data}){
    return (
        <div className="flex">
            <KPI1 data={data} />
            <KPI2 data={data}/>
            <KPI3 data={data}/>
        </div>
    )
}