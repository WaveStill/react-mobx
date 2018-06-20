import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../logo.svg';
import { Button, Form, Input } from 'antd';
import { helloUser } from '../../api/hello';
import '../../App.css';
var $ = require('jquery');
const FormItem = Form.Item;
class App extends Component {
  onClickBtn(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        debugger
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 8
      },
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Xjt2
        </p>
        <Form>
          <FormItem
            className='formItems'
            {...formItemLayout}
            colon={false}
            label="mobx"
          >
            {getFieldDecorator('mobx', {
              initialValue: '',
             
            })(
              <Input />
            )}
          </FormItem>
        </Form>
        <Button className="p1" type="primary" onClick={this.onClickBtn.bind(this)}>Button</Button>
      </div>
    );
  }
}

export default  withRouter (Form.create()(App));
