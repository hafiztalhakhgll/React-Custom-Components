import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TablePagination
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  }
  // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0
  // }
}));

interface IField {
  key: string;
  label: string;
}
interface IData {
  id: string;
  name: string;
  email: string;
  contact: string;
  address: string;
  action: string;
}

interface ITableScopedSlots {
  action: () => React.ReactElement;
}

interface TableProps {
  headings: Array<string>;
  fields: Array<IField>;
  data: Array<IData>;
  page: number;
  setPage: (x: number) => void;
  perPage: number;
  setPerPage: (x: number) => void;
  scopedSlots: ITableScopedSlots;
}

// function Table({ data, page, setPage, perPage, setPerPage }: TableProps) {
const Table: FC<TableProps> = ({
  headings,
  fields,
  data,
  page,
  setPage,
  perPage,
  setPerPage,
  scopedSlots
}) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <MuiTable sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {fields.map((value) => (
                <StyledTableCell key={value.key}>{value.label}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((value: IData, index) => {
              console.log(value);
              return (
                <StyledTableRow key={index}>
                  {fields.map((field: IField, index) => {
                    const _field = field.key as keyof IData;
                    if (scopedSlots[_field]) {
                      const myComponent = scopedSlots[_field];
                      return (
                        <StyledTableCell key={index}>{myComponent(value, index)}</StyledTableCell>
                      );
                    } else return <StyledTableCell key={index}>{value[_field]}</StyledTableCell>;
                  })}
                </StyledTableRow>
              );
            })}
            <StyledTableRow>
              <StyledTableCell>{"1"}</StyledTableCell>
              <StyledTableCell>{"Talha Khalid"}</StyledTableCell>
              <StyledTableCell>{"talha.khalid@greenlightlabs.tech"}</StyledTableCell>
              <StyledTableCell>{"03040438807"}</StyledTableCell>
              <StyledTableCell>
                {"House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        labelRowsPerPage=""
        count={data.length}
        rowsPerPage={perPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Table;
