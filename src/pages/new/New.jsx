import './new.scss';
import { useState, useEffect } from "react";

import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from '../../firebase';

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const New = ({inputs, title}) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [imgUplodedPercentage, setImgUplodedPercentage] = useState(null);

  

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

  

  useEffect(() => {
    const uploadFile = () => {
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
  
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setImgUplodedPercentage(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        }, 
        (error) => {
          console.log('There was an error during uploading image', error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prevData) => ({...prevData, img: downloadURL}));
          });
        }
      );
    };

    file && uploadFile();

  }, [file]);

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
            <button type='submit' disabled={ !imgUplodedPercentage || imgUplodedPercentage < 100}>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
};

export default New;

