import React from 'react';
// import ReactQuill,{Quill} from 'react-quill'
// import axios from 'axios'
import 'react-quill/dist/quill.snow.css'
import { useRef,useState } from 'react';


const EditorTest = () =>{
  // const url = 'https://api.cloudinary.com/v1_1/dj4i8zoqp/image/upload';
  const fileTest = useRef()
  const useBinary = useRef()





const blobSend = () => {
  e.preventDefault()
  const files = useBinary.current.value
  cloudinary.uploader.upload(files)

}



const imageSend = async(e) => {

  e.preventDefault()
  const files = fileTest.current.files
  console.log(files)
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "enuym4kv");

  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/dj4i8zoqp/image/upload",
    formData
    
  )

  setImage(data.secure_url)

  console.log("data", data);
}

return(
  <div>

    <form>
          <textarea rows="10" cols ="90" ref ={useBinary}/>
          <br />
          <button onClick ={blobSend}> Upload blob/binary </button>
          </form >
          <hr />
    <form>
          <input type = "file" name = "fileTest" ref = {fileTest}/>
          <br />
          <br />
          <button onClick = {imageSend}> UploadTest </button>
    </ form>



  </div>
)

}
export default EditorTest