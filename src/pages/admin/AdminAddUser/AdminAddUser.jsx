import React, { useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Select, Form, Input, notification } from "antd";
import { getAllDepartment } from "../../../services/getAllDepartment";
import { useMount } from "ahooks";
import { adminCreateUser } from "../../../services/adminCreateUser";
import "./AdminAddUser.less";

const { Option } = Select;
const AdminAddUser = () => {
  const [getDepartment, setGetDepartment] = useState([]);
  const [employee, setEmployee] = useState({});

  const onFinish = (values) => {
    console.log("Success:", values);
    adminCreateUser(values)
      .then((data) => {
        notification.open({
          message: "Tạo tài khoản thành công",
          icon: <CheckOutlined style={{ color: '#108ee9' }} />
        });
        setEmployee(data);
      })
      .catch((error) => {
        notification.open({
          message: "Tạo tài khoản không thành công",
          description: error,
          icon: <CloseOutlined style={{ color: '#108ee9' }} />
        });
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useMount(() => {
    getAllDepartment()
      .then((data) => {
        setGetDepartment(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="admin-create-background">
      <div className="admin-create-align">
        <div className="table-align">
          <h1>Đăng kí tài khoản</h1>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ width: "500px" }}
          >
            <Form.Item
              label="LoginName"
              name="loginName"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input your Full Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="departmentId"
              label="DepartmentID"
              rules={[
                {
                  required: true,
                  message: "Please select department!",
                },
              ]}
            >
              <Select
                placeholder="select your department"
                options={getDepartment.map((department) => ({
                  label: department.address,
                  value: department.departmentId,
                }))}
              ></Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddUser;
