import axios from "axios";
import { useEffect, useState } from "react";

interface IRows {
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
  const [rows, setRows] = useState<IRows[]>([]);

  useEffect(() => {
    const getRows = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/John-Kim93/master-board/main/main/db.json"
        );
        setRows(response.data.posts);
      } catch (error) {
        throw error;
      }
    };

    getRows();
  }, []);

  const columns: IColumns[] = [
    {
      id: "id",
      name: "글 번호",
      isCenter: true,
      isRowCenter: true,
      fixedWidth: "80px",
    },
    { id: "title", name: "제목", isCenter: true },
    {
      id: "createdDate",
      name: "작성일",
      isCenter: true,
      isRowCenter: true,
      fixedWidth: "300px",
    },
    {
      id: "writer",
      name: "작성자",
      isCenter: true,
      isRowCenter: true,
      fixedWidth: "120px",
    },
  ];

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
          <tr key={row.id}>
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
