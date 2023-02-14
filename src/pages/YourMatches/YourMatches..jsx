import "./YourMatches.scss";
import React, { useState, useEffect
 } from "react";
import axios from "axios";
import MainMenu from "../../components/MainMenu/MainMenu";
import MyItemCard from "../../components/MyItemCard/MyItemCard";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

const serverUrl = process.env.SERVER_URL;



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
      console.log(token)
      const result = await axios.get(
        `http://localhost:8080/matches/my-matches`,
        { headers }
      );
      setMyMatches(result.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    console.log(selectedid)
    try {
      await axios.delete(`http://localhost:8080/matches/${selectedid}`);
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
        type={"Item"}
        type2={" list of warehouses"}
      />
      <div className="my-matches-container">
        <MainMenu />
        <div className="my-matches-container__cards-container">
          {myMatches.map((match) => {
            
            return (
              <MyItemCard 
                
              />
            );
          })}
        </div>
      </div>
    </> 
  );
};

export default YourMatches;