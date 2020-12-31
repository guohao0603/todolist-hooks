import React,{useState,useCallback,useEffect} from 'react';
import './App.css';
import MyHeader from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';
import CheckModal from './components/Modal/CheckModal';
import EditModal from './components/Modal/EditModal';
import NoDataTip from './components/NoDataTip/index';

function App() {
  const [isInputShow,setInputShow] = useState(false); // input 状态
  const [todoList,setTodoList] = useState([]); // list 数据
  const [isShowCheckModal,setShowCheckModal] = useState(false); // modal 框状态
  const [isShowEditModal,setShowEditModal] = useState(false);
  const [currentData,setCurrentData] = useState({}); // 缓存当前item

  const handleInput = (value)=>{
    setInputShow(!isInputShow)
  }

  // 首次加载从localStorage 读取数据 只执行一次 [] 空数组:执行一次
  //  和下面的useEffect 执行顺序不能变
  useEffect(()=>{
    console.log('useEffect-one 被执行了')
    const todoData = JSON.parse(localStorage.getItem('todoData') || '[]');
    setTodoList(todoData)
  },[])

 // 当todoList 发生变化时 useEffect执行 更新localStorage的数据
  useEffect(()=>{
    console.log('todolist-更新了')
    localStorage.setItem('todoData',JSON.stringify(todoList))
  },[todoList]) 

  // 添加待办事项
  const addItem = useCallback((value) =>{
    const dataItem = {
      id:new Date().getTime(),
      content: value,
      completed: false
    }
    setTodoList((todoList)=> [...todoList,dataItem]);
    setInputShow(false);
  },[])

  // 查看待办事项 
  const openCheckModal = useCallback((id)=>{
    _setCurrentData(todoList,id)
    setShowCheckModal(true)
  },[todoList])

  // 编辑待办事项
  const openEditModal = useCallback((id)=>{
    _setCurrentData(todoList,id)
    setShowEditModal(true)
  },[todoList])

  // 修改提交待办事项
  const submitEdit =useCallback((newData,id)=>{
    setTodoList((todoList)=>{
      return todoList.map((item)=>{
        if (item.id === id){
          item = newData
        }
        return item;
      })
    })
    setShowEditModal(false);
  },[])
  function _setCurrentData(todoList,id){
    // let value = todoList.filter((item)=>{
    //   return item.id === id
    // })
    setCurrentData(()=>todoList.filter(item => item.id === id)[0])
  }

  // 事项状态切换
  const completeItem = useCallback((id)=>{
    setTodoList((todoList)=> todoList.map((item)=>{
      if (item.id === id){
        item.completed = !item.completed
      }
      return item;
    }))
  },[])

  // 删除事项
  const removeItem = useCallback((id)=>{
    setTodoList((todoList)=> todoList.filter((item)=>{
      return item.id !== id;
    }))
  },[])
  return (
    <div className="App">
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        closeModal={()=>setShowCheckModal(false)}
        data={currentData}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        closeModal={()=>setShowEditModal(false)}
        submitEdit={submitEdit}
      />
      <MyHeader openInput={() => handleInput('参数')}/>
      <AddInput isInputShow={isInputShow} addItem={addItem}/>
      {
        !todoList || todoList.length === 0 
        ? (<NoDataTip/>)
        : (
          <ul className="todo-list">
            {
              todoList.map((item,index)=>{
                return (
                  <TodoItem
                    data={item}
                    key={index}
                    openCheckModal={openCheckModal}
                    openEditModal={openEditModal}
                    completeItem={completeItem}
                    removeItem={removeItem}
                  />
                )
              })
            }
          </ul>
        )
      }
    </div>
  );
}

export default App;
