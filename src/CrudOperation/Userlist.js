import React from "react";
import Paragraph from "../Components/Paragraph/Paragraph";
import Card from "../Project/ReducerPro/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../Style/style.css";

function Userlist() {
  const [UserList, setUserList] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  const updateTodoData = (updatedData) => {
    setUserList(updatedData);
    localStorage.setItem("todoData", JSON.stringify(updatedData));
  };

  const deleteData = (item, index) => {
    const update = UserList.filter((val, i) => i !== index);
    updateTodoData(update);
  };

  return (
    <div>
     

      <div className="flex flex-row justify-center mt-8">
        <Card
          className="w-[835px] h-[410px] shadow-2xl p-3  rounded  overflow-y-auto mt-3"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
            scrollbarColor: "#a0a0a0 #f0f0f0",
          }}
        >
          <div className="px-4">
            <div className="d-flex justify-center mt-2">
              <Paragraph
                paragraphText="List Items"
                paragraphClassName="text-[20px] text-[#1AB8DB] font-bold"
              />
            </div>

            <table className="table table-hover table-bordered border-primary table-striped">
              <thead className="table-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {UserList &&
                  UserList.length > 0 &&
                  UserList.map((item, index) => (
                    <tr key={index}>
                      <td style={{ padding: "10px", wordBreak: "break-all" }}>
                        {item.name}
                      </td>
                      <td style={{ padding: "10px", wordBreak: "break-all" }}>
                        {item.email}
                      </td>
                      <td style={{ padding: "10px", wordBreak: "break-all" }}>
                        {item.password}
                      </td>
                      <td className="p-3 d-flex justify-content-evenly">
                        <FontAwesomeIcon
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                          className="fs-6 badge bg-secondary border-[1px] cursor-pointer border-[#7dc799] p-2"
                          icon={faTrash}
                          onClick={() => deleteData(item, index)}
                        />
                        <FontAwesomeIcon
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Edit"
                          className="fs-6 badge bg-info border-[1px] cursor-pointer border-[#7dc799] p-2 "
                          icon={faPenToSquare}
                          onClick={()=>updateTodoData()}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Userlist;
