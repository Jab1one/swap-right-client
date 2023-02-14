import "./MyItems.scss";
import React, { useState, useEffect
 } from "react";
import axios from "axios";
import MainMenu from "../../components/MainMenu/MainMenu";
import MyItemCard from "../../components/MyItemCard/MyItemCard";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

const serverUrl = process.env.SERVER_URL;

const MyItems = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedid, setSelectedid] = useState("");
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const openModal = (id) => {
    setIsOpen(true);
    setSelectedid(id);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };

  const getMyItems = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const result = await axios.get(
        `http://localhost:8080/items/my-items`,
        { headers }
      );
      setMyItems(result.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    console.log(selectedid)
    try {
      await axios.delete(`http://localhost:8080/items/${selectedid}`);
      closeModal();
      await getMyItems();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyItems();
  }, []);
console.log(myItems)
  // const urlWithoutBrackets = myItems[0].images_url.slice(1, -1);
  // const cleanedUrl = urlWithoutBrackets.replace(/\\\\/g, "/").replace(/"/g, "").slice(6);

  
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
      <div className="my-items-container">
        <MainMenu />
        <div className="cards-container">
           {myItems.map((item) => { 
            
            const urlWithoutBrackets = item.images_url.slice(1, -1);
            const cleanedUrl = urlWithoutBrackets.replace(/\\\\/g, "/").replace(/"/g, "").slice(6);
            let extraclean = cleanedUrl.split(',') 
            console.log(extraclean)
            
            return (
              <MyItemCard 
                key={item.id}
                id={item.item_id} 
                item={item} 
                url={extraclean[0]}
                title={item.title}
                description={item.description}
                openModal={openModal}
              />
            );
          })}
   
   {/* {myItems.map((item) => { 
  let splitarray = item.images_url.split(",");
  const urlWithoutBrackets = splitarray[0];
  const cleanedUrl = urlWithoutBrackets.replace(/\\\\/g, "/").replace(/"/g, "").slice(6);
  console.log(cleanedUrl) 
  return (
    <MyItemCard 
      key={item.id}
      id={item.item_id} 
      item={item} 
      url={cleanedUrl}
      title={item.title}
      description={item.description}
      openModal={openModal}
    />
  );
})} */}
        </div>
      </div>
    </> 
  );
};

export default MyItems;

