import React, { useState } from "react";
import { addNewDepartment } from "../../service/api/AddNewDepartment";
import axios from "axios";
import {getImgUrl} from '../../service/api/CloudinaryApi'

const NewDepartment = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [imgUrl, setimgUrl] = useState();
  const [image,setImage]=useState()

  const add= async()=>{
    await addNewDepartment(name,description,imgUrl);

  }
  const upload =async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "maintain solutions");
    data.append("cloud_name", "dkr5xxdly");

    const url = await getImgUrl(data)
   setimgUrl(url)
  };
 
  return (
    <form action="#" className="row">
     
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Department Name</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="write report title"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">Description</label>
        <input
          type="text"
          className="cs_form_field"
          style={{ height: "80px" }}
          placeholder="Write description of patient report here..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>

      <div className="col-lg-12">
      
          <input
          
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            component="label"
            onClick={upload}  >
            upload
          </button>
     
      </div>

      <div className="col-lg-12">
        <button className="cs_btn cs_style_1" onClick={add}>
          <span>Add</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
     
    </form>
  );
};

export default NewDepartment;
