// components react
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components
import Logout from "../logout/Logout";

// components react bootstrap
import {
  Container,
  Nav,
  Navbar,
  ButtonGroup,
  Dropdown,
  Image,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";

// css
import "./Navbar.scss";

// images
import defaultPhoto from "../../assets/img/default-photo.png";
import Login from "../login/Login";

const Navbars = ({ search, handleSearch }) => {
  // Cek apakah token ada di local storage
  const isTokenExists = localStorage.getItem("token");

  // Handle Login
  const [showLog, setShowLog] = useState(false);
  const handleShowLog = () => setShowLog(true);

  return (
    <>
      <Navbar expand="lg" className="background-navbar">
        <Container>
          <Navbar.Brand href="/" className="logo">
            <p>SigmaTech</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto sub-navbar">
              {/* search */}
              <Navbar.Brand>
                <InputGroup className="search">
                  <Form.Control
                    aria-label="Recipient's username"
                    placeholder="Search..."
                    aria-describedby="basic-addon2"
                    onChange={(value) => handleSearch(value)}
                    value={search}
                  />
                  <Button className="btn-search">Search</Button>
                </InputGroup>
              </Navbar.Brand>

              {isTokenExists ? (
                <Logout />
              ) : (
                <Login
                  showLog={showLog}
                  setShowLog={setShowLog}
                  handleShowLog={handleShowLog}
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
