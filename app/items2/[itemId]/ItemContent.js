"use client";

import {useEffect, useState} from "react";

export default ({itemId})=>{

    let [exchange, setExchange] = useState("");
    let [datasource, setDatasource] = useState([]);


    useEffect(()=>{

        fetch(`https:api.deriexs.com/liquidations/list?baseCoin=${itemId}&exchange=${exchange}`)
            .then(resp => resp.json())
            .then(resp =>{
                setDatasource(resp.data);
            });

    },[itemId, exchange])



    return <>
        <div>显示内容</div>
        <div>过滤条件:  {exchange}
            <div style={{display:"flex", gap:"16px"}}>
                <div onClick={()=>setExchange("")}>ALL</div>
                <div onClick={()=>setExchange("Binance")}>条件1</div>
                <div onClick={()=>setExchange("Okx")}>条件2</div>
            </div>
        </div>
        {
            datasource.map(item =>{
                return <div style={{display:"flex", gap:"16px"}}>
                    <div>{item.exchange}</div>
                    <div>{item.baseCoin}</div>
                    <div>{item.pair}</div>
                </div>
            })
        }
    </>

}


