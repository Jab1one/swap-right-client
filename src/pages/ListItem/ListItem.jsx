import "./ListItem.scss";
import React, { useState, useRef } from "react";
import axios from "axios";
import MainMenu from "../../components/MainMenu/MainMenu";
import FormData from 'form-data'

const serverUrl = process.env.SERVER_URL;

const ListItem = () => {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageUpload = (event) => {
    setImages(
      Array.from(event.target.files).map((file) => URL.createObjectURL(file))
    );
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const token = localStorage.getItem("token");
  //     const config = {
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     };
  //     const response = await axios.post(`http://localhost:8080/items`, {
  //       title,
  //       description
  //     }, config);
  //     setTitle("");
  //     setDescription("");
  //     setImages([]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`,
        //  'content-type': 'multipart/form-data'
        }
      };
  
      const formData = new FormData();
      Array.from(inputRef.current.files).forEach((file) => {
        formData.append("photos", file);
      });
      formData.append("title", title);
      formData.append("description", description);
  
      const response = await axios.post(`http://localhost:8080/items`, formData, config);
      setTitle("");
      setDescription("");
      setImages([]);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="list-container">
    <MainMenu />
    <div className="submit-form-container">
      <form onSubmit={handleSubmit} className="submit-form" encType="multipart/form-data">
        <div className="submit-form__image-container">
          <div className="image-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="upload preview"
                className="image-upload-preview"
              />
            ))}
          </div>
          <label className="image-upload-label">
            Add Images
            <input
              type="file"
              onChange={handleImageUpload}
              name='photos'
              multiple
              className="image-upload-input"
              ref={inputRef}
            />
          </label>
        </div>

        <p className="why-text">
          Swap Right makes uploading items simple. Select the item's images
          using the Add image button, then enter its details such as title and
          description. Finally, press the upload button to share your item with
          the Swap Right community.
        </p>

        <input
          type="text"
          className="submit-form__item-title"
          id="title"
          placeholder="Listing title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        ></input>

        <textarea
          type="text-area"
          className="submit-form__item-description"
          id="email"
          placeholder="Item description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        ></textarea>

        <button type="submit" className="submit-form__button">
          Upload
        </button>
      </form>
    </div>
    </div>
  );
};

export default ListItem;
