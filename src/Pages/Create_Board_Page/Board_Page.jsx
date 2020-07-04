import React, { useState, useEffect } from "react";
import axios from "axios";
import Style from "./Board_Page.module.scss";
import { useHistory } from "react-router-dom";
import Pre_Loader from "../../Components/Pre-Loader/Pre_Loader";

const Board_Page = () => {
  const history = useHistory();
  const [boardName, setBoardName] = useState("");
  const [boardMember, setBoardMember] = useState("");
  const [boardType, setBoardType] = useState("");
  const [loader, setLoader] = useState(false);
  let handleBoardName = (e) => {
    let boardName = e.target.value;
    setBoardName(boardName);
  };
  let handleBoardMembers = (e) => {
    let boardMembers = e.target.value;
    setBoardMember(boardMembers.split(" ").join(" "));
  };
  let handleBoardType = (e) => {
    let boardType = e.target.value;
    setBoardType(boardType);
  };
  let reDirectToHome = () => {
    history.push("/");
  };

  let postDataToFirebase = (e) => {
    e.preventDefault();
    axios
      .post(`https://pro-organizer-app-8f3bf.firebaseio.com/BoardData.json`, {
        boardName,
        boardMember,
        boardType,
      })
      .then((res) => reDirectToHome())
      .catch((err) => alert("Something went wrong", err.message));
    setLoader(true);
  };
  return (
    <>
      {loader ? (
        <Pre_Loader />
      ) : (
        <div className={Style.board_container}>
          <h3 className={Style.createboard}>Create a Board</h3>
          <form onSubmit={postDataToFirebase}>
            <label htmlFor="board-name">
              <h5>Enter a name for your board</h5>
            </label>
            <div className={Style.formDiv}>
              <input
                type="text"
                placeholder="e.g Agile Sprint Board"
                onChange={handleBoardName}
                id="board_name"
                value={boardName}
                required
              />
            </div>
            <label htmlFor="board-members">
              <h5>Add your team members</h5>
            </label>{" "}
            <div className={Style.formDiv}>
              <input
                type="text"
                placeholder="Add your team(seperated by commas)"
                onChange={handleBoardMembers}
                id="board_members"
                value={boardMember}
                required
              />
            </div>
            <label htmlFor="board-type">
              <h5>Enter the type of your board</h5>
            </label>
            <div className={Style.formDiv}>
              <input
                type="text"
                placeholder="e.g Design UI(optional)"
                onChange={handleBoardType}
                id="board_type"
                value={boardType}
              />
            </div>
            <div>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Board_Page;
