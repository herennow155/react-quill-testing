import './style.css'
import React from 'react';
import ReactQuill,{Quill} from 'react-quill'
import {useState,forwardRef,useImperativeHandle} from "react"
import axios from "axios";
import 'react-quill/dist/quill.snow.css'
import { useMemo,useRef } from 'react';


// const url = 'https://api.cloudinary.com/v1_1/dj4i8zoqp/image/upload';
// const preset = 'bfqtctpv';

const Editor = () =>{

   const editor = useRef()
  
   const onClickFunc = () => {
    console.log(editor.current.value)
   }



   var tempImage = []
     
   function isQuillEmpty(quill) {
   if ((quill.getContents()['ops'] || []).length !== 1) {
       return false
   }
 
   return quill.getText().trim().length === 0
 }
     // Delta to HTML
   function deltaToHTML(delta) {
     var tempQuill = new Quill(document.createElement('div'));
     tempQuill.setContents(delta);
     return tempQuill.root.innerHTML;
   }
   // Copy sanitize from link.js
   function sanitize(url, protocols) {
     var anchor = document.createElement('a');
     anchor.href = url;
     var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
     return protocols.indexOf(protocol) > -1;
   }
 
 // import existing image class
   var ParchmentImage = Quill.import('formats/image');
   // Overwrite static sanitize from image class
 // data base64 too long, use blob instead (only for preview)
 
 class KlsejournalImage extends ParchmentImage {
   static sanitize(url) {
       return sanitize(url, ['http', 'https', 'data', 'blob']) ? url : '//:0';
   }
 }
 // Append blob & save local file
 function imageHandler() {
   var input = document.createElement('input');
   input.setAttribute('type', 'file');
   input.setAttribute('accept', 'image/*');
   input.click();
 
   input.onchange = () => {
       var [file] = input.files;
 
       if (/^image\//.test(file.type)) {
           var range = this.quill.getSelection();
           var blob = URL.createObjectURL(file);
           this.quill.insertEmbed(range.index, 'image', blob);
           this.quill.setSelection(range.index + 1);
 
           tempImage.push({ blob, file });
       } else {
           alert('You could only upload images.');
       }
   }
 }
 
 Quill.debug('error');
 // Register the new image class
 Quill.register(KlsejournalImage);
 
 const onClickFunction = async() => {
   if (isQuillEmpty(editor)) {
     alert('Cannot submit empty post!');
     return false;
 }
 
 var delta = editor.getContents();
 
 for (var i = 0; i < delta.ops.length; i++) {
     var insert = delta.ops[i].insert;
 
     var has = Object.prototype.hasOwnProperty;
 
     if (has.call(insert, 'image')) {
         var imageUrl = await uploadToServer(insert.image);
         insert.image = imageUrl;
     }
 }
 
 var html = deltaToHTML(delta);
 
 }
 
     const modules = useMemo(()=>{
       return{toolbar: {
       container: [
       [{ 'header': [1,2,3,4,false] }],
       [{ size: [] }],
       ['bold', 'italic', 'underline', 'blockquote'],
       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
       ['link', 'image' ],
       ],
       'handlers': {
         image: imageHandler,
   
       }
       }
   }},[])
 
   // const onClickFunc = () =>{
 
   //   console.log(editor.current.value)
   // }
   return (
    <div className = "detailQuestion">
  
      <label htmlFor= "detailQuestion">
          <h3> Detailed question </h3>
          <p> Describe your question in details</p>
        
          <ReactQuill 
          ref ={editor} 
          // onChange = {test}
          className = "editorStyle" 
          name = "editor"
          id ="editor"  
          modules= {modules}
          theme="snow" 
          placeholder="Content goes here..."  /> 
       
  
      </label>
      <div>
      <button onClick = {onClickFunc} className ="postQuestion" > Post Your Question </button></div> 
    </div>
  )
  {editor.current.value}
  }
  
  export default Editor