import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const NavBar = ({ playAgain }) => {
  const navigate = useNavigate();
  const [sound, setSound] = useState(JSON.parse(localStorage.getItem('sound')));;
  useEffect(() => {
    localStorage.setItem('sound',sound);
  }, [sound]);
  return (
    <ul className="d-flex nav-container">
      <li
        className="list-group-item d-flex flex-column align-items-center"
        onClick={() => {
          navigate("/tic-tac-toe");
        }}
      >
        <i className=" fa-solid fa-house"></i>
        home
      </li>
      <li
        className="list-group-item d-flex flex-column align-items-center"
        onClick={playAgain}
      >
        <i className=" fa-solid fa-rotate-right"></i>
        restart
      </li>
      {sound ? (
        <li
          className="list-group-item d-flex flex-column align-items-center"
          onClick={() => {
            setSound(false);
          }}
        >
          <i className=" fa-solid fa-volume-off"></i>
          sound
        </li>
      ) : (
        <li
          className="list-group-item d-flex flex-column align-items-center"
          onClick={() => {
            setSound(true);
          }}
        >
          <i className="fa-solid fa-volume-xmark"></i>
          sound
        </li>
      )}
    </ul>
  );
};
