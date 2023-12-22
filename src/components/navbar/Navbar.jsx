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
import Swal from "sweetalert2";

// components
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";

// css
import "./Navbar.scss";

// api
import { API } from "../../config/api";

// images
import logo from "../../assets/img/logo.png";
import profile from "../../assets/img/profile.png";
import complain from "../../assets/img/complain.png";
import logout from "../../assets/img/logout.png";
import addbook from "../../assets/img/addbook.png";
import bracket from "../../assets/img/bracket.png";
import admin from "../../assets/img/admin.png";
import defaultPhoto from "../../assets/img/default-photo.png";
import Login from "../login/Login";

const Navbars = ({ search, handleSearch }) => {
  const navigate = useNavigate();

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

                  <Login
                    showLog={showLog}
                    setShowLog={setShowLog}
                    handleShowLog={handleShowLog}
                  />
               
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
