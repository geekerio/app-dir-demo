import Category from './category'
import CategorySubTabs from './categorySubTabs';
import OnlySubTabs from './onlySubTabs';

export default ({ params: { categoryId } }) => {
  return <>
    <Category category={categoryId}/>
    <div style={{height:"40px"}}>

    </div>
    <OnlySubTabs/>
    <CategorySubTabs category={categoryId}/>
  </>;
};
