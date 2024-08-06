import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import {Context} from "../../context/Context";

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} =useContext(Context);

    function handleClick() {
        setExtended(prevValue => !prevValue);
    }

    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    

    function newChatClick(){
        newChat();
        
    }


    return (
        <div className="sidebar" >
            <div className="top">
                <img className="menu" onClick={handleClick} src={assets.menu_icon} alt="Menu bar" />
                <div onClick={newChatClick} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>

                        {prevPrompts.map((item, index) => {
                            return (

                                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="message" />
                                    <p>{item.slice(0,18)}...</p>
                                </div>

                            )
                        })}

                    </div>
                    : null


                }


            </div>

            <div className="bottom">
                <div className="bottem-item recent-entry">
                    <img src={assets.question_icon} alt="help" />
                    {extended ? <p>Help</p> : null}
                </div>

                <div className="bottem-item recent-entry">
                    <img src={assets.history_icon} alt="activity" />
                    {extended ? <p>Activity</p> : null}
                </div>

                <div className="bottem-item recent-entry">
                    <img src={assets.setting_icon} alt="settings" />
                    {extended ? <p>Settings</p> : null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar