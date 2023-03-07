import React from 'react';
import ReactQuill,{Quill} from 'react-quill'
import axios from "axios";
import 'react-quill/dist/quill.snow.css'
import { useMemo,useRef } from 'react';

const EditorTest = () =>{


return(
  <div>

    <form>
    <textarea rows="10" cols ="30" />
    <br />
    <button onClick = "submitImage"> Upload </button>
    </form >
    <hr />


  </div>
)

}
export default EditorTest