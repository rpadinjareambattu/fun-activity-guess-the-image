import { useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./index.module.scss";

const TableItem = ({ group_name, datas }: any) => {
  const [data, setData] = useState(datas);

  const onSuccess = (id: any) => {
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
    return data.filter((res: any) => res.valid === true).length;
  }, [data]);

  return (
    <>
      <td>{group_name}</td>
      <td>
        {result}&nbsp;{result < 2 ? <span>point</span> : <span>points</span>}
      </td>
      <td>
        <div className="d-flex">
          {data.map((i: any) => {
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
    </>
  );
};

export default TableItem;
