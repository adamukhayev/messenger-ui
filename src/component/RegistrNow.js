import {Button, Form, Input, Layout, message} from 'antd';
import React from "react";
import './LoginAuth.css'
import RegistrationUser from "./api/RegistrationUser";

const RegistrNow = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const user = {
      username: values.username,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
      image: values.image,
      birthDate: values.birthDate,
      email: values.email,
      password: values.password
    }
    try {
      const c = await RegistrationUser.registrationUser(user).then(r => r);
      message.success("Success")
    } catch (c) {
      message.warn(c.response.data.info)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const values = {
    username: '',
    phoneNumber: '',
    gender: '',
    image: '',
    birthDate: '',
    email: '',
    password: '',
  };
  form.setFieldsValue({...values})

  return (
      <div className={'auth'}>
        <Layout className={'siteLayout'} style={{height: '100%'}}>
          <div style={{padding: '50px', width: '500px'}}>
            <Form
                form={form}
                name="control-hooks"
                hideRequiredMark
                onFinish={onFinish}
                labelCol={{
                  flex: '110px',
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
            >
              <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, заполните обязательное поле!'
                    },
                  ]}
              >
                <Input value=' '/>
              </Form.Item>
              <Form.Item
                  label="Phone number"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, заполните обязательное поле!'
                    },
                  ]}
              >
                <Input value=' '/>
              </Form.Item>
              <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, заполните обязательное поле!'
                    },
                  ]}
              >
                <Input value=' '/>
              </Form.Item>
              <Form.Item
                  label="Image"
                  name="image"
              >
                <Input value=' '/>
              </Form.Item>
              <Form.Item
                  label="Birth of date"
                  name="birthDate"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, заполните обязательное поле!'
                    },
                  ]}
              >
                <Input value=' '/>
              </Form.Item>

              <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, заполните обязательное поле!'
                    },
                  ]}
              >
                <Input value=' '/>
              </Form.Item>

              <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, заполните обязательное поле!'
                    },
                  ]}
              >
                <Input type='password'/>
              </Form.Item>

              <Form.Item label=" ">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Layout>
      </div>
  );
};

export default RegistrNow;