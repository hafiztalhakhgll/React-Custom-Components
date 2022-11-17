import React from "react";
import { IColumn, IColumns, IScoped } from "../types";
import Column from "./TableColumn";

export interface ITableRow<T> {
  columns: IColumns;
  item: T;
  scoped?: IScoped<T>;
  index: number;
}

const TableRow = <T extends unknown>({ columns, item, index, scoped }: ITableRow<T>) => {
  return (
    <tr>
      {columns.map((column: IColumn, i) => (
        <Column<T> key={i} item={item} index={index} column={column} scoped={scoped} />
      ))}
    </tr>
  );
};

export default TableRow;
