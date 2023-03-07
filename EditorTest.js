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
          <button onClick = "submitImage"> Upload blob/binary </button>
          </form >
          <hr />
    <form>
          <input type = "file" />
          <br />
          <br />
          <button onClick = "submitImage"> UploadTest </button>
    </form >



  </div>
)

}
export default EditorTest