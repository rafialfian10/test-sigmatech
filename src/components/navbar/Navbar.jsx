// components react
import { useState } from "react";

// components
import Login from "../login/Login";
import Logout from "../logout/Logout";

// components react bootstrap
import {
  Container,
  Nav,
  Navbar,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";

// css
import "./Navbar.scss";

const Navbars = ({ search, handleSearch }) => {
  // Cek apakah token ada di local storage
  const userToken = localStorage.getItem("token");

  // Handle Login
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);

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

              {userToken ? (
                <Logout />
              ) : (
                <Login
                  showLogin={showLogin}
                  setShowLogin={setShowLogin}
                  handleShowLogin={handleShowLogin}
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
