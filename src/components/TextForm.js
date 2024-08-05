import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert1("Converted to upper case","success")
    }

    const handleLoClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert1("Converted to lower case","success")
    }

    const handleCapClick=()=>{
        const words = text.split(" ")
        for(let i=0; i<words.length; i++)
            {
                words[i]= words[i][0].toUpperCase() + words[i].substring(1)
            }
        
        let newText =words.join(" ")
        setText(newText)
        props.showalert1("Capitalized first letter","success")
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showalert1("Copied text to clipboard","success")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color: props.mode1==="light" ? "black":"white" }} >
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode1==="light" ? "white":"#38334c", color: props.mode1==="light" ? "black":"white" }} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.split(" ").filter((element)=>{return element.length!=0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
            <button disabled={text.split(" ").filter((element)=>{return element.length!=0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lower case</button>
            <button disabled={text.split(" ").filter((element)=>{return element.length!=0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalize first letters</button>
            <button disabled={text.split(" ").filter((element)=>{return element.length!=0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode1==="light" ? "black":"white" }}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!=0}).length} minutes read</p>

            <h2>Preview</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length>0 ? text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
