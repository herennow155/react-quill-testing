import React from 'react';
import ReactQuill,{Quill} from 'react-quill'
import axios from 'axios'
import 'react-quill/dist/quill.snow.css'
import { useRef } from 'react';

const EditorTest = () =>{
  const url = 'https://api.cloudinary.com/v1_1/dj4i8zoqp/image/upload';
  


const blobSend = () => {

}



const imageSend = async(event) => {
  const files = e.target.files
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "enuym4kv")
   await axios.post(url, formData);
  // const imageUrl = res.data.secure_url;

}






return(
  <div>

    <form>
          <textarea rows="10" cols ="30" />
          <br />
          <button onClick ={blobSend}> Upload blob/binary </button>
          </form >
          <hr />
    <form>
          <input type = "file" />
          <br />
          <br />
          <button onClick = {imageSend}> UploadTest </button>
    </form >



  </div>
)

}
export default EditorTest