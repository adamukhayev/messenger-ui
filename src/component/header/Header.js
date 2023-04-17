// import React from 'react';
// import classes from './Header.module.css';
// import { PageHeader } from 'antd';
// import Main from "../main/Main";
//
// const Header = (props) => {
//   return <div style={{display: "flex"}}>
//     <div style={{width: '90%'}}>
//     <div style={{
//       display: "flex",
//       textAlign: "center",
//       float:"right",
//       paddingRight: '10px',
//       position: "relative",
//       marginTop: '10px'
//     }}>
//       <Main/>
//       <div style={{paddingLeft: "5px"}}>
//         <a href="#">Settings</a>
//       </div>
//       <div style={{paddingLeft: "5px"}}>
//         <a href="#">Contacts</a>
//       </div>
//       <div style={{paddingLeft: "5px"}}>
//         <a href="#">About Us</a>
//       </div>
//     </div>
//     </div>
//   </div>
// }
//
// export default Header;

import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Container} from './Container';
import {Button} from 'antd';
import {LogoutOutlined, UserOutlined} from '@ant-design/icons';
import classes from './Header.module.css';
import {logout} from "../redux/authSlice";
import {useDispatch, useSelector} from "react-redux"
import {Icon} from '@iconify/react';

export const Header = (props) => {
  const dispatch = useDispatch();
  console.log('AAA ', useSelector(state => state.authReducer))
  const username = useSelector(state => state.authReducer.username);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (username) {
      const _name = username.split('.');
      setFirstName(_name[0]);
      setLastName(_name[1]);
    }
  }, [username])

  return (
      <header className={classes.header}>
        <Container flex={true}>
          <div
              style={{
                position: 'relative',
                top: -2
              }}
          >
            <Link to="/" style={{lineHeight: '42px'}}>
              <Icon icon="emojione:incoming-envelope" width="50" height="50"
                    style={{marginTop: 15}}/>
              <h1
                  className={classes.centre}
              >
                Messenger
              </h1>
            </Link>
          </div>
          {props.isLoggedIn &&
          <div>
            <span className={classes.centreUser}>
              <UserOutlined style={{marginRight: 3}}/>
              {firstName}
            </span>
            <Button
                className="btn-logout"
                type="link" ghost
                icon={<LogoutOutlined/>}
                onClick={() => {
                  dispatch(logout())
                }}
            >
              Выйти
            </Button>
          </div>}
        </Container>
      </header>
  );
};