import React, { useContext,useState } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [backgroundColor, setBackgroundColor] = useState('');

    function handleChange(event) {
        const newValue = event.target.value;
        setInput(newValue);
    }

    function handleClick() {
        
        onSent()
        setBackgroundColor("changedBackgroundColor")
        
    }

    const newDate=new Date().getFullYear();
    //console.log(newDate);



    return (
        <div className={`main ${backgroundColor}`}>
            <div className="nav">
                <p>MiniGPT</p>
                <img src={assets.user_img} alt="user-pic" />
            </div>


            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">

                            <p><span>Hello, James</span></p>
                            <p>How can I help you today ?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="compass" />
                            </div>

                            <div className="card">
                                <p>Briefly summarize this concept : Fullstack Web Development</p>
                                <img src={assets.bulb_icon} alt="compass" />
                            </div>

                            <div className="card">
                                <p>Brainstrom team building activities for our work retreat</p>
                                <img src={assets.message_icon} alt="compass" />
                            </div>

                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="compass" />
                            </div>


                        </div>


                    </> :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_img} alt="" />
                            <p>{recentPrompt}</p>

                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="gemini-icon" />
                            {loading ? 
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />

                            </div> :
                            <p dangerouslySetInnerHTML= {{__html:resultData}}></p>
                        }
                            
                        </div>

                    </div>


                }




                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={handleChange} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery" />

                            <img src={assets.mic_icon} alt="mic" />
                            <img onClick={handleClick} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Copyrights @ {newDate}
                    </p>

                </div>

            </div>


        </div>
    )
}

export default Main