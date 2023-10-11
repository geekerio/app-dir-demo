
import {useEffect, useRef, useState} from "react";


export default function ItemTabs({tabs, defaultValue, onTabSelect}){

    let symbols = tabs.map(item =>  item.symbol);
    let [items, setItems] = useState(symbols);
    let [searchItems, setSearchItems] = useState(symbols);
    let symbolsMap = {};
    tabs.forEach(item => {
        symbolsMap[item.symbol] = item;
    });
    let [coinMap, setCoinMap] = useState(symbolsMap);

    useEffect(() => {

        let symbols = tabs.map(item =>  item.symbol);
        setItems(symbols);
        setSearchItems(symbols);
        let symbolsMap = {};
        tabs.forEach(item => {
            symbolsMap[item.symbol] = item;
        });
        setCoinMap(symbolsMap);


    }, [tabs]);

    useEffect(() => {

         window.addEventListener("click",
             clearSearchInput
         )

        return ()=>{
            window.removeEventListener("click", clearSearchInput);
        }

    }, []);



    let [active, setActive] = useState(defaultValue || "");
    let [trans, setTrans] = useState({})
    let [showSearch, setShowSearch] = useState(false);
    let [searchInputValue, setSearchInputValue] = useState('');
    let searchInput = useRef();

    useEffect(()=>{
        if (showSearch) {
            searchInput.current.focus();
        }
    },[showSearch])


    const hightTab = ()=>{
        let mid = document.getElementsByClassName("coinTabsBox")[0].clientWidth;
        let nodes = document.getElementsByClassName("coinTabItem");
        let first = nodes[0];
        let last = nodes[nodes.length -1];
        let firstLeft = first.getBoundingClientRect().left;

        let lastLeft = last.getBoundingClientRect().left;
        let lastWidth = last.getBoundingClientRect().width;

        let ele = document.getElementsByClassName("coinTabItem active")[0];
        let activeLeft = ele.getBoundingClientRect().left
        let activeWidth = ele.getBoundingClientRect().width;

        let maxMove = lastLeft + lastWidth - firstLeft -mid;

        console.log(lastLeft + last.getBoundingClientRect().width - mid/2 < mid/2);


        let move = firstLeft-(activeLeft + activeWidth/2 -mid/2);
        if(move >0){
            move = 0;
        }else if(move < -maxMove){
            move = -maxMove -26;
        }
        setTrans({
            transform: "translate3d("+(move)+"px, 0px, 0px)",
            transitionDuration : '160ms'
        })
    }

    const onSelectChange = (value) =>{

        setActive(value);
        onTabSelect && onTabSelect(value)

        setTimeout(() => {
            hightTab();
        }, 100);

    }


    /**
     *
     * 清除输入框的内容, 然后隐藏
     *
     */
    const clearSearchInput = (e)=>{
        setShowSearch(false);
        setSearchInputValue("");
        setSearchItems(items);

    }



    return (
        <div className="coinTabsBox">
            {/*{searchInputValue, searchItems}*/}

            <div style={{overflow: 'hidden'}}>
                <div className="item-tab" style={trans}>
                    {
                        items.map(item => {
                            return (
                                <div
                                    onClick={() => {
                                        onSelectChange(item)
                                    }}
                                    key={item} className={["coinTabItem","item-tab-cell", item == active ? "active" : ''].join(" ")}>
                                    <div style={{display:"flex"}}>
                                        <span className={"coin-lab-text"}>{item || "ALL"}</span>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>

            </div>

        </div>
    );
}