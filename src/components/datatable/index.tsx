import { IColumns } from "./types";
import TableHead from "./head";

interface IDatatable<T> {
  columns: IColumns;
  data: Array<T>;
}

const Datatable = <T extends unknown>({ data, columns }: IDatatable<T>) => {
  return (
    <table>
      <TableHead columns={columns} />
    </table>
  );
};

export default Datatable;
