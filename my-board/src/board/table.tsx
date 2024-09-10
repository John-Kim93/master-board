interface IRows {
  id: number;
  title: string;
  createdDate: string;
  writer: string;
}

interface IColumns {
  name: string;
  isCenter?: boolean;
}

export default function Table() {
  const columns: IColumns[] = [
    { name: "글 번호", isCenter: true },
    { name: "제목", isCenter: true },
    { name: "작성일", isCenter: true },
    { name: "작성자", isCenter: true },
  ];
  const rows: IRows[] = [
    {
      id: 0,
      title: "제목1",
      createdDate: "2022.09.09 11:22:33",
      writer: "김종현",
    },
    {
      id: 0,
      title: "제목2",
      createdDate: "2022.09.09 11:22:33",
      writer: "김종현",
    },
    {
      id: 0,
      title: "제목3",
      createdDate: "2022.09.09 11:22:33",
      writer: "김종현",
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
              <th className="table-header-center">{column.name}</th>
            ) : (
              <th className="table-header">{column.name}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "12px" }}>John Doe</td>
          <td style={{ padding: "12px" }}>john@example.com</td>
          <td style={{ padding: "12px" }}>Admin</td>
        </tr>
        <tr>
          <td style={{ padding: "12px" }}>Jane Smith</td>
          <td style={{ padding: "12px" }}>jane@example.com</td>
          <td style={{ padding: "12px" }}>User</td>
        </tr>
        <tr>
          <td style={{ padding: "12px" }}>Robert Brown</td>
          <td style={{ padding: "12px" }}>robert@example.com</td>
          <td style={{ padding: "12px" }}>Editor</td>
        </tr>
      </tbody>
    </table>
  );
}
