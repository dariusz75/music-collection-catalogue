import './new.scss';
import { useState } from "react";

import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from '../../firebase';

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const New = ({inputs, title}) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value});
    console.log({id: id});
    console.log({value: value});
    console.log({data: data});
    
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log({data: data});

    try {
      const res = await createUserWithEmailAndPassword(
        auth, data.email, data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log('There was an error:', error);
    }

    
  }

  return <div className='new'>
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
        <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
          <form onSubmit={handleAdd}>
            <div className="form-input">
              <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input 
                id="file" 
                type="file" 
                placeholder='john_doe' 
                style={{ display: "none" }} 
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
};

export default New;

