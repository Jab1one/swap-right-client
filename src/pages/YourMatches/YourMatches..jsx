import "./YourMatches.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MainMenu from "../../components/MainMenu/MainMenu";
import MyMatchesCard from "../../components/MyMatchesCard/MyMatchesCard";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { v4 as uuidv4 } from "uuid";

let url = process.env.REACT_APP_SERVER_URL;
let uuid = uuidv4();

const YourMatches = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedid, setSelectedid] = useState("");
  const [myMatches, setMyMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const openModal = (id) => {
    setIsOpen(true);
    setSelectedid(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getMyMatches = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const result = await axios.get(`${url}matches/my-matches`, { headers });

      setMyMatches(result.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${url}matches/${selectedid}`);
      closeModal();
      await getMyMatches();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyMatches();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DeleteModal
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        handleDelete={handleDelete}
        text="match"
      />
      <div className="my-matches-container">
        <MainMenu />
        <div className="my-matches-container__cards-container">
          {myMatches.map((match) => {
            return (
              <MyMatchesCard
                keyid={uuid}
                key={uuid}
                openModal={openModal}
                name={match.other_user_name}
                email={match.other_user_email}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default YourMatches;
