import React, { Component } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import {Button, Form, Input, Space} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const dataS = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { field: 'year' }
      ],
      defaultColDef: {
        resizable: true,
      },
      rowData: null,
    };
  }

   onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const updateData = (data) => params.api.setRowData(data);

    console.log('AAAAAAAAAAA')
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then((resp) => resp.json())
    .then((data) => updateData(dataS));
  };

  render() {
    return (
        <div style={{ width: '1000px', height: '1000px' }}>
          <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
            <Form.List name="users">
              {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                        <Space
                            key={key}
                            style={{
                              display: 'flex',
                              marginBottom: 8,
                            }}
                            align="baseline"
                        >
                          <Form.Item
                              {...restField}
                              name={[name, 'first']}
                              rules={[
                                {
                                  required: true,
                                  message: 'Missing first name',
                                },
                              ]}
                          >
                            <Input placeholder="First Name" />
                          </Form.Item>
                          <Form.Item
                              {...restField}
                              name={[name, 'last']}
                              rules={[
                                {
                                  required: true,
                                  message: 'Missing last name',
                                },
                              ]}
                          >
                            <Input placeholder="Last Name" />
                          </Form.Item>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add field
                      </Button>
                    </Form.Item>
                  </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
    );
  }
}
export default GridExample