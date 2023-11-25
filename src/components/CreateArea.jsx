import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import colors from "./colors";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
      title: "",
      content: "",
      color: "",
      time:"",
    });
  
    function handleChange(event) {
      const { name, value } = event.target;

      setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        };
      });

      setNote(prevNote => {
        return {
          ...prevNote,
          time: localDate
        };
      });
    }
    const random=Math.floor(Math.random()*colors.length)
    const colorId=colors[random].primaryColor

    let date = new Date();
    let curr_date = date.toLocaleDateString();
    let localTime = date.toLocaleTimeString();
    let localDate=curr_date+"  "+localTime

    function handleColor(event){
      setNote(prevNote => {
        return {
          ...prevNote,
          color: colorId
        };
      });

      setNote(prevNote => {
        return {
          ...prevNote,
          time: localDate
        };
      });
    }

    function submitNote(event) {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
        color: "",
        time:"",
      });
      event.preventDefault();
    }
  
    function expand() {
      setExpanded(true);
    }

    function handelClose(){
      setExpanded(false)
    }
  
    
    return (
      <div>
        <form className="create-note">
          {isExpanded && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          )}
  
          <textarea
            name="content"
            onClick={expand}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          />
          
          <Zoom in={isExpanded}>
            <h4 onClick={handelClose} className="close">Close</h4>
          </Zoom>
          <Zoom in={isExpanded}>
            <Fab onClick={handleColor}>
              <ColorLensIcon className="color" />
            </Fab>
          </Zoom>
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
  }
  
  export default CreateArea;
