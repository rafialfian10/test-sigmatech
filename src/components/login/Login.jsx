// components react
import { useState } from "react";

// component react bootstrap
import { Nav, Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

// css
import "./Login.scss";

const Login = ({ showLog, setShowLog, handleShowLog }) => {
  const handleCloseLog = () => setShowLog(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShowLog(false);

  const handleLogin = () => {
    if (email === "rafialfian770@gmail.com" && password === "12345678") {
      const token = "ini-adalah-token-mas-bro";
      localStorage.setItem("token", token);

      Swal.fire({
        text: "Login Successfully",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        setShowLog(false);
      });

    } else {
      Swal.fire({
        text: "Login failed (email / password incorrect)",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <>
      <Nav.Link className="login" onClick={handleShowLog}>
        Login
      </Nav.Link>
      <Modal
        show={showLog}
        onHide={handleCloseLog}
        className="modal-login"
        size="lg"
      >
        <Modal.Body className="form-login">
          <h1 className="title-login">Login</h1>
          <Form>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="button-submit"
              onClick={handleLogin}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
