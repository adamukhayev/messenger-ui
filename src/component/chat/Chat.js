import {
  Avatar,
  Breadcrumb,
  Button,
  Comment,
  Form,
  Input,
  Layout,
  List
} from 'antd';
import moment from 'moment';
import {useState} from 'react';
import classes from './Chat.module.css'
import 'antd/dist/antd.css';
import {Footer} from "antd/es/layout/layout";

const {Content} = Layout;
const {TextArea} = Input;

const CommentList = ({comments}) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies'
            : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);

const Editor = ({onChange, onSubmit, submitting, value}) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value}/>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit}
                type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
);

const Chat = () => {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [container, setContainer] = useState(null);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) {
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
      <div>
        <Layout style={{marginTop: 30}} className="layout">
          <Content
              style={{
                padding: '0 50px',
              }}
              className={classes.ttext}
          >

            <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
            >
            </Breadcrumb>

            <div style={{overflow: "auto"}}>

              <div className={classes.siteLayoutContent + ' ' + classes.text}>
                {comments.length > 0 && <CommentList comments={comments}/>}
              </div>

            </div>
          </Content>
          <Footer
              style={{
                textAlign: 'center',
              }}
          >
          </Footer>
        </Layout>
        <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random"
                            alt="Han Solo"/>}
            content={
              <Editor
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  submitting={submitting}
                  value={value}
              />
            }
        />
      </div>
  );
};

export default Chat;