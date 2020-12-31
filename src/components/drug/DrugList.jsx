import '../style/drugList.css';
import useDraggable from './useDraggable';
const list = [
    {
      src:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586970234373&di=a665d347ed7acfed0f39aad0bb78509a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F05%2F20150405H5939_PJwYi.jpeg",
      title: "万事屋找我"
    },
    {
      title: "吃吃吃……",
      src:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586970602470&di=e3071fc352ca96f73bf2e75725d3f7bf&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F31%2F20120831140113_ayLse.thumb.700_0.jpeg"
    },
    {
      title: "汪汪",
      src:
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=968093909,4033932240&fm=26&gp=0.jpg"
    }
];
export default function DrugList(){
    return (
        <div>
            <DraggableList list={list}/>
        </div>
    )
}
function DraggableList({list}) {
    const {dragList} = useDraggable(list);
    console.log('listllllll',dragList)
    return dragList.map((item,i)=>{
        if (item.type === "BAR"){
            return <Bar id={i} key={item.id}/>
        }else{
            return (
                <Draggable key={item.id}> 
                    <Card {...item.data}/>
                </Draggable>
            )
        }
    })
}
function Draggable({children}) {
    return (
        <div className="draggable">
            {children}
        </div>
    )
}
function Bar(){
    return <div className="draggable-bar"/>
}
function Card({src,title}) {
    return (
        <div className="card">
            <img src={src} alt=''/>
            <span>{title}</span>
        </div>
    )
}