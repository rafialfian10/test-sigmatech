// component react
import { useState } from "react";

// components react bootstrap
import { Button, Table, Modal } from "react-bootstrap";

// style
import "./TableDatas.scss";

const TableDatas = ({ universities, search }) => {
  // Cek apakah token ada di local storage
  const userToken = localStorage.getItem("token");

  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (university) => {
    setSelectedUniversity(university);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>University</th>
            <th>Country</th>
            <th>Web Pages</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userToken ? (
            universities ? (
              universities
                .filter((data) => {
                  if (search === "") {
                    return true; 
                  } else if (
                    data?.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((filteredUniversity, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td style={{ textAlign: "start" }}>
                      {filteredUniversity.name}
                    </td>
                    <td style={{ textAlign: "start" }}>
                      {filteredUniversity.country}
                    </td>
                    <td style={{ textAlign: "start" }}>
                      <a
                        href={filteredUniversity.web_pages}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {filteredUniversity.web_pages}
                      </a>
                    </td>
                    <td>
                      <Button
                        onClick={() => handleShowModal(filteredUniversity)}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan="5">
                {search !== "" && universities.length === 0
                  ? "Data not found for the given search."
                  : "Data not found. Please log in."}
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>University Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUniversity && (
            <Table striped bordered hover style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td>University Name:</td>
                  <td>{selectedUniversity.name}</td>
                </tr>
                <tr>
                  <td>Country:</td>
                  <td>{selectedUniversity.country}</td>
                </tr>
                <tr>
                  <td>Web Pages:</td>
                  <td>{selectedUniversity.web_pages}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableDatas;
