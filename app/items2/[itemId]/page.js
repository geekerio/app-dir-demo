import ItemTabs from "./ItemTabs";


const fetchItems = ()=>{
  return fetch(`https:api.deriexs.com/coins/list/derivative`).then(resp => resp.json());
}
export default async ({params: {itemId}}) => {

  let {data: items} = await fetchItems();
  return <>
    {/*<ItemTabWrapper items={items} itemId={itemId}/>*/}
    <ItemTabs defaultValue={itemId} tabs={items}/>
  </>;
};
