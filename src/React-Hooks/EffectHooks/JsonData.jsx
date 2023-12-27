import React, { useState, useEffect, useContext } from "react";
import Paragraph from "../../Components/Paragraph/Paragraph.jsx";
import Button from "../../Components/Button/Buton.jsx";
import { FirstContext } from "../UseContextHook/Context.js";
import Card from "../../Project/ReducerPro/Card.jsx";
import Load from "../../Loader/Load.js";
import "../../Style/style.css";

function JsonData() {
  const [record, setRecord] = useState();
  const [load, setLoad] = useState();
  const [msg, setMsg] = useState();

  useEffect(() => {}, []);

  const apiData = async () => {
    setLoad(true);
    try {
      let response = await fetch(" https://dummyjson.com/products");
      const json = await response.json();
      setRecord(json.products);
      console.log(json);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setMsg(true);
    }
  };
  let dataVal = useContext(FirstContext);
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-3 ">      
        <div className="border bg-[#bb95b1] border-primary rounded p-3  ">
        <h6 className="text-[#f7bd0e] mt-3 text-center">{dataVal.data}</h6>
        <h6 className="text-[##5a395e] mt-3 text-center">{dataVal.data1}</h6>


        <div className="d-flex justify-content-center">
          <Button
            buttonName="post"
            className="btn btn-danger"
            handleClick={apiData}
          />
        </div>
      </div>
      </div>

      <div className="col-md-9 ">
        <div className=" flex-row ms-8">
        {load && (
            <Load TextName="LOADING..."/>
          )}
          {msg && (
            <Paragraph
              paragraphText="API IS FAILING..."
              paragraphClassName="text-center fs-4 text-warning"
            />
          )}
          <Card
            className="w-[835px] h-[410px] shadow-2xl p-3  rounded  overflow-y-auto"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
              scrollbarColor: "#a0a0a0 #f0f0f0",
            }}
          >
        <h4 className="text-center text-info pb-2">API DATA LIST</h4>
                  <table className="table table-hover table-bordered border-primary table-striped">
            <thead className="table-dark text-white">
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BRAND</th>
              </tr>
            </thead>
            <tbody>
              {record &&
                record.map((value, index) => {
                  console.log("djdjdj", value, index);
                  return (
                    <tr key={index}>
                      <td style={{ padding: "10px", wordBreak: "break-all" }}>
                        {value.id}
                      </td>
                      <td style={{ padding: "10px", wordBreak: "break-all" }}>
                        {value.title}
                      </td>
                      <td style={{ padding: "10px", wordBreak: "break-all" }}>
                        {value.brand}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}

/* {record && (
          <>
            <Paragraph paragraphText={record.id} paragraphClassName="text-center fs-4 text-danger" />
            <Paragraph paragraphText={record.title} paragraphClassName="text-center fs-4 text-primary" />
          </>
        )}
        {!record && <Paragraph paragraphText="Loading..." paragraphClassName="text-center fs-4 text-info" />} */

{
  /* <Paragraph paragraphText={record ? record.products[0].price : 'Loading...'} paragraphClassName="text-center fs-4 text-info" />
<Paragraph paragraphText={record ? record.products[0].title : 'Loading...'} paragraphClassName="text-center fs-4 text-info" /> */
}

{
  /* {record ? (
          <>
            <Paragraph paragraphText={record.id} paragraphClassName="text-center fs-4 text-danger" />
            <Paragraph paragraphText={record.title} paragraphClassName="text-center fs-4 text-primary" />
          </>
        ):
        (<Paragraph paragraphText="Loading..." paragraphClassName="text-center fs-4 text-info" />)} */
}

export default JsonData;
