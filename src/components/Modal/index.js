import React,{} from 'react';
import './index.css';

function Modal (props){
    const {isShowModal,modalTitle,children,closeModal} = props;
    return (
        <>
            {
                isShowModal ?
                (
                    <div className="modal" onClick={closeModal}>
                        <div className="inner">
                            <div className="m-header">{modalTitle}</div>
                            <div className="content-wrapper">
                                {children}
                            </div>
                        </div>
                    </div>
                )
                : ''
            }
        </>
    )
}

export default Modal;