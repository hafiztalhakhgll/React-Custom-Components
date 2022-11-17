import { useEffect, useState } from "react";
import Datatable from "../components/datatable";
import { IColumns } from "../components/datatable/types";
import { getUsers } from "./DUser";
import { IUser } from "../types/entites/user.entity";

const columns: IColumns = [
  "id",
  "name",
  "username",
  "email",
  "phone",
  {
    key: "action",
    label: "Action"
  },
  {
    key: "status",
    label: "Online Status"
  }
];

const Feedback = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    const userService = async () => {
      const response = await getUsers();
      const users = await response.json();
      setUsers(users);
    };

    userService();
  }, []);

  return (
    <Datatable
      columns={columns}
      data={users}
      scoped={{
        action: (item) => <h2>{item.id}</h2>,
        status: (i, index) => <h2>{index}</h2>
      }}
    />
  );
};

export default Feedback;
