import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IRows {
  id: number;
  title: string;
  createdDate: string;
  writer: string;
}

interface IColumns {
  id: string;
  name: string;
  isCenter?: boolean;
  isRowCenter?: boolean;
  fixedWidth?: string;
}

export default function Table() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<IRows[]>([]);
  const [columns, setColumns] = useState<IColumns[]>([]);

  useEffect(() => {
    const getRows = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/John-Kim93/master-board/main/main/db.json"
        );
        setRows(response.data.posts);
        setColumns(response.data.columns);
      } catch (error) {
        throw error;
      }
    };

    getRows();
  }, []);

  return (
    <table
      style={{ width: "100%", margin: "0 auto", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          {columns.map((column) =>
            column.isCenter ? (
              <th
                key={column.id}
                className="table-header-center"
                style={{ width: `${column.fixedWidth}` }}
              >
                {column.name}
              </th>
            ) : (
              <th key={column.id} className="table-header">
                {column.name}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.id}
            onClick={() => {
              navigate(`/board/${row.id}`);
            }}
          >
            {columns.map((column) =>
              column.isRowCenter ? (
                <td key={column.id} className="table-row-center">
                  {row[column.id]}
                </td>
              ) : (
                <td key={column.id} className="table-row">
                  {row[column.id]}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
