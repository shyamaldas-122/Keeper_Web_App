import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Fab from '@mui/material/Fab';
import '../App.css'
function Note(props) {

    function handleClick() {
      props.onDelete(props.id);
    }
    
    return (
      <div className="note" style={{backgroundColor:props.color}}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        {/* 
        <button className="btn2">
        <ContentCopyIcon/>
        </button> */
        }
        <p className="date">Created on :{props.time}</p>
        <Fab size="small" className="one" aria-label="add" onClick={handleClick}>
        <DeleteIcon style={{color:"red"}}/>
        </Fab>
        {/* <Fab size="small" className="one" aria-label="add">
        <AddIcon />
        </Fab> */}
        {/* color="primary" */}
        
      </div>
    );
  }
  
  export default Note;
