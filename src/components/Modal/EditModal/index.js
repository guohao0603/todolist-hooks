import React,{useRef} from 'react';
import './index.css';
import Modal from '../';
import {formatDateTime,stopBubble} from '../../../libs/uitls';

function EditModal (props){
    const {isShowEditModal,data,submitEdit,closeModal} = props;
    const inputRef = useRef();
    const checkRef = useRef();

    const formatNewData = ()=>{
        const val = inputRef.current.value.trim(),
            valLen = val.length;
        if (valLen === 0){
            inputRef.current.value = data.content;
            return;
        }
        const newData = {
            id: new Date().getTime(),
            content: val,
            completed: checkRef.current.checked
        }
        submitEdit(newData,data.id)
    }
    return (
        <Modal
            isShowModal={isShowEditModal}
            modalTitle="编辑事件"
            closeModal={closeModal}
        >
            <div onClick={stopBubble}>
                <p className="topic">时间:{formatDateTime(data.id)}</p>
                <p className="topic">
                    <textarea
                        ref={inputRef}
                        defaultValue={data.content}
                        className="text-area"
                    ></textarea>
                </p>
                <div className="topic">
                    <span>状态:</span>
                    <div className="edit-input">
                        <input
                            type="checkbox"
                            defaultChecked={data.completed ? true : false}
                            ref={checkRef}
                        />
                    </div>
                </div>
                <button 
                    className="btn btn-primary comfirm-btn"
                    onClick={formatNewData}
                >
                    提交
                </button>
            </div>
        </Modal>
    )
}
export default EditModal;