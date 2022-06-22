import React from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import style from './Car.module.css'
// import Radium from "radium";
// import PropTypes from 'prop-types'
//
// class Car extends React.Component {
//   render() {
//     return (
//         <div className={style.border}>
//           <div className={style.title}>
//             <div>
//               <h3>{this.props.name}</h3>
//             </div>
//             <p> Year: <strong>{this.props.year}</strong></p>
//           </div>
//           <div style={{padding: '20px', width: '800px', height: '500px', margin: 'auto'}}
//                className={style.a}>
//             <a href={this.props.href}>
//               <img src={this.props.image} alt="logo" width='800px' height='500px'/>
//             </a>
//           </div>
//         </div>
//     )
//   }
// }
//
// Car.propTypes = {
//   name: PropTypes.string.isRequired,
//   year: PropTypes.number.isRequired,
//   href: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired
//
// }
//
// export default Radium(Car)
import {Table} from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class Car extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  };

  render() {
    const {selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return <Table rowSelection={rowSelection} columns={columns}
                  dataSource={data}/>;
  }
}

export default Car;