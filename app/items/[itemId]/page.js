import ItemTabWrapper from "./ItemTabWrapper.js";
import ItemContent from "./ItemContent.js";


const fetchItems = ()=>{
  return fetch(`https:api.deriexs.com/coins/list/derivative`).then(resp => resp.json());
}
export default async ({params: {itemId}}) => {

  let {data: items} = await fetchItems();
  return <>
    <ItemTabWrapper items={items} itemId={itemId}/>
    {/*<div> 下面这个是我期待的结果</div>*/}
    {/*<ItemTabs tabs={items} defaultValue={itemId} />*/}
    <ItemContent itemId={itemId}/>
  </>;
};
