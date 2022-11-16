import React from "react";
import Table from "../components/table";

const rows = [
  createData("1", "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("2", "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("3", "Eclair", 262, 16.0, 24, 6.0),
  createData("4", "Cupcake", 305, 3.7, 67, 4.3),
  createData("5", "Gingerbread", 356, 16.0, 49, 3.9),
  createData("6", "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("7", "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("8", "Eclair", 262, 16.0, 24, 6.0),
  createData("9", "Cupcake", 305, 3.7, 67, 4.3),
  createData("10", "Gingerbread", 356, 16.0, 49, 3.9)
];

function createData(
  id: string,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { id, name, calories, fat, carbs, protein };
}

const User = () => {
  const [page, setPage] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);

  return (
    <div>
      <h1>User</h1>
      <Table data={rows} page={page} setPage={setPage} perPage={perPage} setPerPage={setPerPage} />
    </div>
  );
};

export default User;
