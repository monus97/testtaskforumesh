import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./TableData.css"; // Import your CSS file

const TableData = () => {
  const [firstData, setFirstData] = useState([1, 2, 3, 4, 5]);
  const [secondData, setSecondData] = useState([6, 7, 8, 9, 10]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRightArrowClick = () => {
    if (selectedItem !== null) {
      const newFirstData = firstData.filter((item) => item !== selectedItem);
      setFirstData(newFirstData);
      setSecondData([...secondData, selectedItem]);
      setSelectedItem(null); // Reset selected item
    }
  };

  const handleLeftArrowClick = () => {
    if (selectedItem !== null) {
      const newSecondData = secondData.filter((item) => item !== selectedItem);
      setSecondData(newSecondData);
      setFirstData([...firstData, selectedItem]);
      setSelectedItem(null); // Reset selected item
    }
  };

  return (
    <div className="container div_main">
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Data</th>
            </tr>
          </thead>
          <tbody>
            {firstData?.map((data, i) => (
              <tr
                key={i}
                className={selectedItem === data ? "selected" : ""}
                onClick={() => setSelectedItem(data)}
              >
                <td>{i + 1}</td>
                <td>{data}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="arrow">
        <i
          className="fa fa-arrow-right"
          style={{ fontSize: "36px" }}
          onClick={handleRightArrowClick}
        ></i>
        <i
          className="fa fa-arrow-left"
          style={{ fontSize: "36px" }}
          onClick={handleLeftArrowClick}
        ></i>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Second Data</th>
            </tr>
          </thead>
          <tbody>
            {secondData?.map((data, i) => (
              <tr
                key={i}
                className={selectedItem === data ? "selected" : ""}
                onClick={() => setSelectedItem(data)}
              >
                <td>{i + 1}</td>
                <td>{data}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableData;










