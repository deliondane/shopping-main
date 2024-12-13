import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './cart.module.css';
import {addCount} from '../store';


const Cart = () => {
  let state=useSelector((state)=>{return state});
  console.log(state.cart);
  let dispatch = useDispatch();
  return (

    <div className={styles.cartTable}>
      {state.user}님의 장바구니
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((product, idx) => 
          <tr key={idx}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.count}</td>
            <td><button onClick={()=>{dispatch(addCount(state.cart))}}>+</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;