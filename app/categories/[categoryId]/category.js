"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default ({category}) => {
  let cates = ["cate1", "cate2", "cate3", "cate4", "cate5", "cate6"];
  let images = {
    "cate1":"https://arweave.net/AcHa_uAwHU_RIf_OUwhrOofvLnPRcg-Trn-5THeiCmY",
    "cate2":"https://arweave.net/l9nKnGxtW0fxuoOk-Vhpk8lxO8fJgUuImLFVrmfxFJQ",
    "cate3":"https://arweave.net/Tk8P4a3FxVlIYWu7lY5gT4PalWEI4QOh9NzIYNqdSE0",
    "cate4":"https://arweave.net/0ApnhujusitZ7oJ7gB7I2KEpBGR4KPDrxQi5aeSvfqA",
    "cate5":"https://arweave.net/UFOMkWP526Wb2X8S84F_Iu-tw3pHNO3LeNs_oeHQcC4",
    "cate6":"https://arweave.net/I5KqphSzmie5Cji5JUGM4Gfu3zV3b5v0LMutdZQJ5yE"
  }

  const router = useRouter();
  const [selected, setSelected] = useState(category);
  const handleTabClick = (cate) => {
    setSelected(cate);
    router.push(`/categories/${cate}`);
  };
  return (
    <>

    <div  className="tabs-wrapper" >
    <div>Start client Compontent : Gategory</div>
      <div className="tabs">
        {cates.map((cate) => {
          return (
            <div
              className="tab"
              onClick={()=>handleTabClick(cate)}
              key={cate}
              style={{ color: selected === cate ? "blue" : "#000" }}
            >
              <img src={images[cate]} style={{width:"16px", height:"16px"}}/> {cate}
            </div>
          );
        })}
      </div>
      <div>selected is: <span style={{color:"blue"}}>{selected}</span></div>
      <div>End client Compontent : Gategory</div>
      </div>
    </>
  );
};
