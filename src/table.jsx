import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const TableData = () => {
  const [firstData, setFirstData] = useState([1, 2, 3, 4, 5]);
  const [secondData, setSecondData] = useState([6, 7, 8, 9, 10]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRightArrowClick = () => {
    if (selectedItem !== null) {
      const newFirstData = firstData.filter((item) => item !== selectedItem);
      setFirstData(newFirstData);
      setSecondData([selectedItem, ...secondData]);
      setSelectedItem(null);
    } else if (selectedItem === null) {
      setSecondData([...firstData, ...secondData]);
      setFirstData([]);
    }
  };

  const handleLeftArrowClick = () => {
    if (selectedItem !== null) {
      const newSecondData = secondData.filter((item) => item !== selectedItem);
      setSecondData(newSecondData);
      setFirstData([selectedItem, ...firstData]);
      setSelectedItem(null);
    } else if (selectedItem === null) {
      setFirstData([...firstData, ...secondData]);
      setSecondData([]);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      // Check if the click event target is not inside the table rows
      if (
        e.target.closest(".table") === null &&
        !e.target.classList.contains("selected")
      ) {
        setSelectedItem(null);
      }
    };

    document.body.addEventListener("click", handleDocumentClick);

    return () => {
      document.body.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="container div_main">
      <div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Data</th>
            </tr>
          </thead>
          <tbody>
            {firstData.length >= 1 ? (
              firstData.map((data, i) => (
                <tr
                  key={i}
                  className={selectedItem === data ? "selected" : ""}
                  onClick={() => setSelectedItem(data)}
                >
                  <td>{i + 1}</td>
                  <td>{data}</td>
                </tr>
              ))
            ) : (
              <h5>no data found in first list</h5>
            )}
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
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Second Data</th>
            </tr>
          </thead>
          <tbody>
            {secondData.length >= 1 ? (
              secondData.map((data, i) => (
                <tr
                  key={i}
                  className={selectedItem === data ? "selected" : ""}
                  onClick={() => setSelectedItem(data)}
                >
                  <td>{i + 1}</td>
                  <td>{data}</td>
                </tr>
              ))
            ) : (
              <h5>no data found in second list</h5>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableData;



// import React, { useState } from "react";
// import { Table } from "react-bootstrap";


// const TableData = () => {
//   const [firstData, setFirstData] = useState([1, 2, 3, 4, 5]);
//   const [secondData, setSecondData] = useState([6, 7, 8, 9, 10]);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleRightArrowClick = () => {
//     if (selectedItem !== null) {
//       const newFirstData = firstData.filter((item) => item !== selectedItem);
//       setFirstData(newFirstData);
//       setSecondData([selectedItem, ...secondData]);
//       setSelectedItem(null);
//     } else if (selectedItem === null) {
//       setSecondData([ ...firstData,...secondData]);
//       setFirstData([]);
//     }
//   };

//   const handleLeftArrowClick = () => {
//     if (selectedItem !== null) {
//       const newSecondData = secondData.filter((item) => item !== selectedItem);
//       setSecondData(newSecondData);
//       setFirstData([selectedItem, ...firstData]);
//       setSelectedItem(null);
//     } else if (selectedItem === null) {
//       setFirstData([...firstData, ...secondData]);
//       setSecondData([]);
//     }
//   };

//   return (
//     <div className="container div_main">
//       <div>
//         <Table  bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Data</th>
//             </tr>
//           </thead>
//           <tbody>
//             {firstData?.length>=1 ?(firstData?.map((data, i) => (
//               <tr
//                 key={i}
//                 className={selectedItem === data ? "selected" : ""}
//                 // style={{background:"red"}}
                
//                 onClick={() => setSelectedItem(data)}
//               >
//                 <td >{i + 1}</td>
//                 <td>{data}</td>
//               </tr>
//             ))):(<h5>no data found in first list</h5>)
//             }
//           </tbody>
//         </Table>
//       </div>
//       <div className="arrow">
//         <i
//           className="fa fa-arrow-right"
//           style={{ fontSize: "36px" }}
//           onClick={handleRightArrowClick}
//         ></i>
//         <i
//           className="fa fa-arrow-left"
//           style={{ fontSize: "36px" }}
//           onClick={handleLeftArrowClick}
//         ></i>
//       </div>
//       <div>
//         <Table  bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Second Data</th>
//             </tr>
//           </thead>
//           <tbody>
//             {secondData?.length>=1 ? (secondData?.map((data, i) => (
//               <tr
//                 key={i}
//                 className={selectedItem === data ? "selected" : ""}
//                 onClick={() => setSelectedItem(data)}
//               >
//                 <td>{i + 1}</td>
//                 <td>{data}</td>
//               </tr>
//             ))):(<h5>no data found in second list</h5>)
//             }
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default TableData;
