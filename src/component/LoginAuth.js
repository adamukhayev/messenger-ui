import React from "react";
import "antd/dist/antd.min.css";
import {Button, Checkbox, Form, Input, Layout} from 'antd';
import './LoginAuth.css'
import {login} from "./redux/authSlice";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";

const LoginAuth = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.authReducer.pending);

  const onFinish = (values) => {
    dispatch(login(values))
  };

  return (
      <div className={'auth'}>
        <Layout className={'siteLayout'} style={{height: '100%'}}>
          <div style={{padding: '50px', width: '500px'}}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
              <Form.Item
                  name="email"
                  rules={[{
                    required: true,
                    message: 'Please input your Email!'
                  }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                       placeholder="Email"/>
              </Form.Item>
              <Form.Item
                  name="password"
                  rules={[{
                    required: true,
                    message: 'Please input your Password!'
                  }]}
              >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Запомнить входные данные</Checkbox>
                </Form.Item>

                <a style={{float: "right"}} href="">
                  Забыли пароль?
                </a>
              </Form.Item>

              <Form.Item>
                <div>
                  <Button loading={isLoading} type="primary" htmlType="submit"
                          className="login-form-button">
                    Войти
                  </Button>
                </div>
                <div style={{marginTop: '5px'}}>
                  <a href="/registr">Регистрация</a>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Layout>
      </div>
  );
}

export default LoginAuth;
