import styles from "./index.module.scss";
import TableItem from "../table-item";
import Table from "react-bootstrap/Table";

function StatisticTable() {
  const data = [
    {
      teamName: "team a",
      team: [
        { id: "q1", valid: false },
        { id: "q2", valid: false },
        { id: "q3", valid: false },
        { id: "q4", valid: false },
      ],
    },
    {
      teamName: "team b",
      team: [
        { id: "q1", valid: false },
        { id: "q2", valid: false },
        { id: "q3", valid: false },
        { id: "q4", valid: false },
      ],
    },
    {
      teamName: "team c",
      team: [
        { id: "q1", valid: false },
        { id: "q2", valid: false },
        { id: "q3", valid: false },
        { id: "q4", valid: false },
      ],
    },
    {
      teamName: "team d",
      team: [
        { id: "q1", valid: false },
        { id: "q2", valid: false },
        { id: "q3", valid: false },
        { id: "q4", valid: false },
      ],
    },
  ];
  return (
    <div className={styles.table}>
      <Table className={styles.table__wrapper} responsive>
        <tr>
          <th>Name</th>
          <th>Points</th>
          <th>Attempt</th>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.teamName}>
              <TableItem group_name={item.teamName} datas={item.team} />
            </tr>
          );
        })}
      </Table>
    </div>
  );
}

export default StatisticTable;
