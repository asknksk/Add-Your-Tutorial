import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = " https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    // GET
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //! Sadece Component mount oldugunda istek yapar
  useEffect(() => {
    getTutorials();
  }, []);

  // POST (Create)
  const addTutorial = (tutorial) => {
    console.log("add");
  };

  return (
    <>
      <AddTutorial AddTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
