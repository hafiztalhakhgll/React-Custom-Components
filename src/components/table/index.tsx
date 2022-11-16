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

// function pagination(){
//   function paginate(array: any, page_size: number, page_number: number) {
//     // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
//     return array.slice((page_number - 1) * page_size, page_number * page_size);
//   }
//   var arr = [1, 2, 3, 4, 5, 6];

//   const options = {
//     //page: parseInt(req.query.page) || 1,
//     page: 1,
//     limit: 10
//     //limit: parseInt(req.query.limit) || 10,
//     //customLabels: servCustomLabels,
//   };

//   let prev_page = 0;
//   let next_page = 0;
//   let h_p_p = null;
//   let h_n_p = null;
//   let page_count = Math.ceil(arr.length / options.limit);

//   if (options.page >= page_count) {
//     // 2 3
//     next_page = 0;
//   }
//   if (options.page >= 1 && options.page < page_count) {
//     next_page = options.page + 1;
//     h_n_p = true;
//   } else {
//     next_page = 0;
//     h_n_p = false;
//   }

//   if (options.page <= 1) {
//     prev_page = 0;
//     h_p_p = false;
//   } else {
//     prev_page = options.page - 1;
//     h_p_p = true;
//   }

//   console.log(paginate(arr, 2, 2));
//   console.log({
//     paginator: {
//       totalDocs: arr.length,
//       perPage: options.limit,
//       pageCount: page_count,
//       currentPage: options.page,
//       //slNo: 2,
//       hasPrevPage: h_p_p,
//       hasNextPage: h_n_p,
//       prev: prev_page,
//       next: next_page
//     }
//   });
// }

interface TableProps {
  data: {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  }[];
  page: number;
  setPage: (x: number) => void;
  perPage: number;
  setPerPage: (x: number) => void;
}

// function Table({ data, page, setPage, perPage, setPerPage }: TableProps) {
const Table: FC<TableProps> = ({ data, page, setPage, perPage, setPerPage }) => {
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
        <MuiTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell>Calories</StyledTableCell>
              <StyledTableCell>Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell>Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell>Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                <StyledTableCell>{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
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
