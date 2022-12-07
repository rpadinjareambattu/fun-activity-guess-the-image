import Form from "react-bootstrap/esm/Form";
import styles from "./index.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useMemo, useState } from "react";

function StatisticTable() {
  const [color, setColor] = useState("secondary");
  const [point, setPoint] = useState(0);
  const [data, setData] = useState([
    { id: "q1", valid: false },
    { id: "q2", valid: false },
    { id: "q3", valid: false },
    { id: "q4", valid: false },
  ]);

  const onSuccess = (id: any) => {
    setPoint((prev) => prev + 1);
    setData([
      ...data.map((btn: any) => {
        if (btn.id === id) {
          btn.valid = true;
        }
        return btn;
      }),
    ]);
  };

  const onDanger = (id: any) => {
    setColor("danger");
    setData([
      ...data.map((btn: any) => {
        if (btn.id === id) {
          btn.valid = false;
        }
        return btn;
      }),
    ]);
  };

  const result = useMemo(() => {
    return data.filter((res) => res.valid === true).length;
  }, [data]);

  return (
    <div className={styles.table}>
      <table className={styles.table__wrapper}>
        <tr>
          <th>Name</th>
          <th>Points</th>
          <th>Check</th>
        </tr>
        <tr>
          <td>Team 1</td>
          <td>{result}&nbsp;points</td>
          <td>
            <div className="d-flex">
              {data.map((i) => {
                return (
                  <Dropdown className={styles.table__dropdown} key={i.id}>
                    <Dropdown.Toggle
                      variant={i.valid ? "success" : "danger"}
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => onSuccess(i.id)}>
                        Right
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => onDanger(i.id)}>
                        Wrong
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                );
              })}
            </div>
          </td>
        </tr>
        <tr>
          <td>Team 2</td>
          <td>20 points</td>
          <td>dsf</td>
        </tr>
        {/* <tr>
          <td>Team 3</td>
          <td>20 points</td>
          <td>
            <Dropdown className={styles.table__dropdown}>
              <Dropdown.Toggle
                variant={color}
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={onSuccess}>Right</Dropdown.Item>
                <Dropdown.Item onClick={onDanger}>Wrong</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </td>
        </tr> */}
        <tr>
          <td>Team 4</td>
          <td>20 points</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
}

export default StatisticTable;
