import { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="log-in-container">
      <h1 className="log-in-heading">Welcome back!</h1>
      <Form
        layout="vertical"
        size="large"
        requiredMark={true}
        className="log-in-form"
        initialValues={{
          email: formValues.email,
          password: formValues.password,
        }}
        onValuesChange={(_, values) => {
          setFormValues(values);
        }}
        onFinish={() => console.log(formValues)}
      >
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
          rules={[{ required: true, message: "Please enter your password." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="log-in-forgotpassword">
          <Link to="/passwordrecovery">Forgot password?</Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="log-in-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default LogIn;
