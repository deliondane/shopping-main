import React from "react";
import { Link /* useNavigate */ } from "react-router-dom";
import styles from "./Navwrap.module.css";
import { AiOutlineFontColors } from "react-icons/ai";

const Navwrap = () => {
  // let navigate=useNavigate();
  return (
    <div>
      {/* <nav>
        <ul>
          <li className="logo">
            <span>
              <AiOutlineFontColors />
            </span>
            <b onClick={()=>{navigate("/")}}>아뜨랑스</b>
          </li>
          <li>
            <b onClick={()=>{navigate("/")}}>home</b>
          </li>
          <li>
            <b onClick={()=>{navigate("/best")}}>Best</b>
          </li>
          <li>
            <b onClick={()=>{navigate("/new")}}>New</b>
              <ul>
                <li>
                  <Link to="/new/a">목도리</Link>
                </li>
                <li>
                  <Link to="/new/b">아우터</Link>
                </li>
              </ul>
          </li>
        </ul>
      </nav> */}
      <nav>
        <ul>
          <li className={styles.logo}>
            <span>
              <AiOutlineFontColors />
            </span>
            <Link to="/">아뜨랑스</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/best">Best</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
            <ul>
              <li>
                <Link to="/new/a">목도리</Link>
              </li>
              <li>
                <Link to="/new/b">아우터</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navwrap;
