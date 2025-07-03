import { useState } from 'react'
import './index.css'
function PopUp({ onClose ,  onTypingName, onKeyDown }) {
    return (
        <>
            <div className="pop-up">
                <div className="pop-up-modal">
                    <h1>Enter Name</h1>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="input-box-pop-up"
                        required
                        onChange={onTypingName}
                        onKeyDown={onKeyDown}
                    />
                    <button onClick={onClose} className="button-pop-up">
                        Continue
                    </button>
                </div>
            </div>
        </>

    )
}
export default PopUp