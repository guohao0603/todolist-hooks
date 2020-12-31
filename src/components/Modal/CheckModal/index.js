import React,{} from 'react';
import './index.css';
import Modal from '../';
import {formatDateTime,stopBubble} from '../../../libs/uitls';

function CheckModal (props){
    const {isShowCheckModal,closeModal,data} = props;
    return (
        <Modal 
            isShowModal={isShowCheckModal}
            modalTitle="查看事件"
            closeModal={closeModal}
        >
           <div onClick={stopBubble}>
                <p className="topic">时间：{formatDateTime(data.id)}</p>
                <p className="topic">内容：{data.content}</p>
                <p className="topic">状态：{data.completed ? '已完成' : '未完成'}</p>
                <button 
                    className="btn btn-primary comfirm-btn"
                    onClick={closeModal}
                >
                    确定
                </button>
           </div>
        </Modal>
    )
}

export default CheckModal;
