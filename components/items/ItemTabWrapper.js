
import ItemTabs from "./ItemTabs";
import {useRouter} from "next/navigation";


export default ({items, itemId})=>{

    let router = useRouter();
    const handleTabSelect = (value)=>{
        router.push(`/pageItems/${value}`, {scroll:false})
    }

    return <ItemTabs tabs={items} defaultValue={itemId} onTabSelect={handleTabSelect}/>

}