import ItemTabWrapper from "../../components/items/ItemTabWrapper";

const fetchItems = ()=>{
    return fetch(`https:api.deriexs.com/coins/list/derivative`).then(resp => resp.json());
}

import '../../app/globals.css';
import ItemContent from "../../components/items/ItemContent";
import MainNavigation from "../../components/ui/MainNavigation";

export async function getServerSideProps({params}){
    let {itemId} = params;
    let {data: items} = await fetchItems();
    return {
        props:{
            items:items,
            itemId
        }
    }
}
export default ({itemId, items})=>{
    return <>
        <header>
            <MainNavigation />
        </header>
        <ItemTabWrapper items={items} itemId={itemId}/>
        <ItemContent itemId={itemId} />
    </>;
}