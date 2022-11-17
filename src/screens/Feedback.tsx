import { useEffect, useState } from "react";
import Datatable from "../components/datatable";
import { IColumns } from "../components/datatable/types";
import { getUsers } from "./DUser";
import { IUser } from "../types/entites/user.entity";

const columns: IColumns = [
  "id",
  "name",
  "email",
  "message",
  {
    key: "action",
    label: ""
  }
];

const Feedback = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    const userService = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    userService();
  }, []);

  return <Datatable columns={columns} data={users} />;
};

export default Feedback;
