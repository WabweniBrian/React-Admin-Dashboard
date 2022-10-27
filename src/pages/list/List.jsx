import React from "react";
import DataTable from "../../components/datatable/DataTable";
import "./list.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const List = ({ url, viewUrl }) => {
  return (
    <>
      <div className="flex-center-between mb-1">
        <h1 className="text-20 opacity-7">Customers</h1>
        <Link to={url}>
          <button className="btn btn-primary-outlined rounded">
            <AiOutlinePlusCircle /> Add New
          </button>
        </Link>
      </div>
      <div
        className="datatable bg-white rounded-sm"
        style={{ height: 500, width: "100%" }}
      >
        <DataTable url={viewUrl} />
      </div>
    </>
  );
};

export default List;
