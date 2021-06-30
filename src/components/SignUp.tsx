import { Form, Button, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./SignUp.css";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-heading">Welcome!</h1>
      <Form
        layout="vertical"
        size="large"
        requiredMark={true}
        className="sign-up-form"
        initialValues={{
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
        }}
        onValuesChange={(_, values) => {
          setFormValues(values);
        }}
        onFinish={() => console.log(formValues)}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please choose a username." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please choose a secure password." },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="sign-up-button">
            Sign up
          </Button>
        </Form.Item>
      </Form>
      <p>
        Already have an account? <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
};

export default SignUp;
