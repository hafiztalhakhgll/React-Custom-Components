import { FC } from "react";
import { IColumns, IColumn } from "../types";

export interface ITableHead {
  columns: IColumns;
}

interface IHeading {
  column: IColumn;
}

const Heading: FC<IHeading> = ({ column }) => {
  if (typeof column === "string") {
    return <th>{column}</th>;
  }

  if (column["label"] || column["label"] === "") {
    return <th>{column["label"]}</th>;
  }

  return <th>{column["key"]}</th>;
};

const TableHead: FC<ITableHead> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column: IColumn, index) => (
          <Heading key={index + 1} column={column} />
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
