import { IColumns, IScoped } from "../types";
import Row from "../body/TableRow";

interface ITableBody<T> {
  columns: IColumns;
  data: Array<T>;
  scoped?: IScoped<T>;
}

const TableBody = <T extends unknown>({ columns, data, scoped }: ITableBody<T>) => {
  return (
    <tbody>
      {data.map((item: T, i) => (
        <Row<T> key={i} columns={columns} item={item} index={i} scoped={scoped} />
      ))}
    </tbody>
  );
};

export default TableBody;
