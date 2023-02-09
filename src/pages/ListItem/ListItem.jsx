import "./ListItem.scss";
import React, { useState } from "react";
import axios from "axios";
import MainMenu from "../../components/MainMenu/MainMenu";

const serverUrl = process.env.SERVER_URL;

const ListItem = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageUpload = (event) => {
    setImages(
      Array.from(event.target.files).map((file) => URL.createObjectURL(file))
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await axios.post({ serverUrl }, formData);
      setImages([]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <MainMenu />
    <div className="submit-form-container">
      <form onSubmit={handleSubmit} className="submit-form">
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
              multiple
              className="image-upload-input"
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
    </>
  );
};

export default ListItem;
