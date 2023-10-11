'use client';
import { useState } from "react";

export default ({category}) => {

    const [selected,setSelected] = useState("tab1"); 

    let tabs = ["tab1", "tab2", "tab3", "tab4", "tab5", "tab6"];

    const handleTabClick = (value)=>{
        setSelected(value)
    }
    return <>
    <div  className="sub-tabs-wrapper" >
    <div>Start client Compontent : Gategory Sub Tabs</div>
      <div className="tabs">
        {tabs.map((tab) => {
          return (
            <div
              className="tab"
              onClick={()=>handleTabClick(tab)}
              key={tab}
              style={{ color: selected === tab ? "red" : "#000" }}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <div>cateogry is: <span style={{color:"blue"}}>{category}</span> and selected Sub tab is: <span style={{color:"red"}}>{selected}</span></div>
      <div>End client Compontent :  Gategory Sub Tabs</div>
      </div>
    </>
}