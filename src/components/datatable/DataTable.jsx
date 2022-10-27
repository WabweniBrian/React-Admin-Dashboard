import React, { useState } from "react";
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../data/dataTables";
import { Link } from "react-router-dom";

const DataTable = ({ url }) => {
  const [userRows, setUserRows] = useState(rows);

  const removeRows = (id) => {
    setUserRows(userRows.filter((row) => row.id !== id));
  };

  const actionColumn = [
    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction flex gap-1">
            <Link to={url}>
              <button className="btn btn-primary-outlined rounded-sm">
                View
              </button>
            </Link>

            <button
              className="btn btn-danger-outlined rounded-sm"
              onClick={() => removeRows(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <DataGrid
      rows={userRows}
      columns={columns.concat(actionColumn)}
      pageSize={8}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};

export default DataTable;
