import { IColumns, IScoped } from "./types";
import TableHead from "./head";
import TableBody from "./body";

interface IDatatable<T> {
  columns: IColumns;
  data: Array<T>;
  scoped?: IScoped<T>;
}

const Datatable = <T extends unknown>({ data, columns, scoped }: IDatatable<T>) => {
  return (
    <table>
      <TableHead columns={columns} />
      <TableBody columns={columns} data={data} scoped={scoped} />
    </table>
  );
};

export default Datatable;
