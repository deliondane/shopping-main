import React, { useContext, useEffect, useState } from "react";
import styles from "./detail.module.css";
import { useParams } from "react-router-dom";
import { DataContext } from "../Shopping.js";
import { Link } from "react-router-dom";
// import styled from 'styled-components';

// let YellowBtn = styled.button `
//   background: black;
//   color: #fff;
//   padding: 10px;
// `
// let YellowBtn1 = styled.button `
//   background: ${props => props.bg};
//   color: ${props => props.bg == '#800505' ? "white" : "black"};
//   padding: 10px;
// `

const Detail = () => {
  let { id } = useParams();
  const { shopping } = useContext(DataContext);

  // let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
      return () => {
        clearTimeout(timer);
      };
    }, 3000);
  }, []);

  return (
    <>
      {alert === true ? (
        <div className={styles.alert}>3초이내 구매시 할인</div>
      ) : null}
      <div className={styles.detail}>
        <div className={styles.col}>
          <img src={shopping[id].img} alt={shopping[id].title} width="40%" />
        </div>
        <div className={styles.row}>
          <h4 className={styles.mt20}>{shopping[id].title}</h4>
          <p>{shopping[id].description}</p>
          <p>가격: {shopping[id].price}</p>
          <Link to="/cart" className={styles.cart}>
            <button className={styles.btn}>장바구니</button>
            <button className={styles.btn}>주문하기</button>
          </Link>
          {/* <YellowBtn >장바구니</YellowBtn>
        <YellowBtn1 bg="#800505">주문하기</YellowBtn1> */}
        </div>
      </div>
      {/* <button onClick={()=>{setCount(count+1)}}>버튼</button> */}
    </>
  );
};

export default Detail;
