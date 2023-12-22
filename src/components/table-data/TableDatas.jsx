// component react
import { useQuery } from "react-query";
import { useState, useEffect } from "react";

// api
import { API } from "../../config/api";

// components react bootstrap
import { Button, Table, Modal } from "react-bootstrap";

// style
import "./TableDatas.scss";

const TableDatas = () => {
  // Cek apakah token ada di local storage
  const userToken = localStorage.getItem("token");

  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { data: UniversitiesHipolabs, refetch: refetchUniversitiesHipolabs } =
    useQuery("UniversitiesHipolabsCache", async () => {
      try {
        const response = await API.get("/search?country=indonesia");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data from the API");
      }
    });

  console.log(UniversitiesHipolabs);

  useEffect(() => {
    refetchUniversitiesHipolabs();
  });

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
            UniversitiesHipolabs ? (
              UniversitiesHipolabs.map((data, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td style={{ textAlign: "start" }}>{data.name}</td>
                  <td style={{ textAlign: "start" }}>{data.country}</td>
                  <td style={{ textAlign: "start" }}>
                    <a
                      href={data.web_pages}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.web_pages}
                    </a>
                  </td>
                  <td>
                    <Button onClick={() => handleShowModal(data)}>View</Button>
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
              <td colSpan="5">Data not found. Please log in.</td>
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
