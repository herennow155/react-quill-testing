import React from 'react';
import './style.css';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {useRef} from "react"

export default function App() {
 const editor = useRef()

 const editorValues = () =>{
   const values = editor.current.value
   
   console.log(values)
 }



  const modules = {
    toolbar: {
    container: [
    [{ 'header': [1,2,3,4,false] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image' ],
    ],
    'handlers': {
      //  image: imageHandler,

    }
    }
}




  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ReactQuill modules = {modules} ref = {editor}/>
      <button onClick = {editorValues}> Submit </button>


    </div>
  );
}
