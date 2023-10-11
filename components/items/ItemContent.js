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
        <div>这是使用 Pages 目录的页面 , 点击上面的 tab， 可以按预期的滚动到屏幕中间</div>
        <div>这是使用 Pages 目录的页面 , 点击下面的 tab， 可以筛选， 再点击上面的Tab 筛选的条件不会重置，业务上会合理， 显示的内容也不会先clear再出现，
            视觉上会流畅很多</div>
        <div>过滤条件:  {exchange}
            <div style={{display:"flex", gap:"16px"}}>
                <div style={{background:"#fed", padding:"4px 8px", borderRadius: "8px" }} onClick={()=>setExchange("")}>ALL</div>
                <div style={{background:"#fed", padding:"4px 8px", borderRadius: "8px" }} onClick={()=>setExchange("Binance")}>Binance</div>
                <div style={{background:"#fed", padding:"4px 8px", borderRadius: "8px" }} onClick={()=>setExchange("Okx")}>Okx</div>
            </div>
        </div>

        <div>显示内容</div>

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


