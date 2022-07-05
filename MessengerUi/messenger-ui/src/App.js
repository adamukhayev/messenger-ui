import './App.css';
import "antd/dist/antd.css";
import {Link, Route, Switch} from "react-router-dom";
import LoginAuth from './component/LoginAuth'
import Messenger  from "./component/messanger/Messenger";
import classes from './App.css'
import {useSelector} from "react-redux";
import {setTokenToRequests} from "./component/api/instance";
import {Header} from "./component/header/Header";
import RegistrNow from "./component/RegistrNow";
import {DollarCircleOutlined} from "@ant-design/icons";
import {Col, Menu, Row} from "antd";
import {Content} from "antd/es/layout/layout";
import Text from "antd/es/typography/Text";

function App() {
  const isAuthorized = useSelector(state => state.authReducer.isAuthorized);
  const token = useSelector(state => state.authReducer.token);
  const login = useSelector(state => state.authReducer.username)
  setTokenToRequests(token, login);
  // return !isAuthorized || !token ? <LoginAuth/> :
  return !isAuthorized || !token ? <Switch>
        <Route exact path='/' component={ LoginAuth }/>
        <Route exact path='/registr' component={ RegistrNow }/>
      </Switch>:

      <div className={classes.noselect}>
        <Header isLoggedIn={true}/>
        <div style={{position: "relative"}}>
          <Row style={{minHeight: '99.6vh'}}>
            <Col span={18} push={4}>
              <Content>
                <div style={{
                  background: '#fff',
                  paddingLeft: 24,
                }}>
                  <Switch>
                    <Route exact path='/balances' component={Messenger}/>
                  </Switch>
                </div>
              </Content>
            </Col>
            <Col span={4} pull={18}>
              <Menu
                  style={{
                    paddingTop: 70,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                  }}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
              >
                <Menu.Item key="1">
                  <DollarCircleOutlined style={{
                    margin: '10px',
                    color: '#570861',
                    fontWeight: "bold"
                  }}/>
                  <Text style={{
                    color: '#570861',
                    fontWeight: "bold",
                    fontFamily: 'Verdana, Arial, Helvetica, sans-serif'
                  }}>
                    Chat
                  </Text>
                  <Link to="/balances"/>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </div>
      </div>

}

export default App;
