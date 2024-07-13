import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { v4 as uuidv4 } from "uuid";
import "./Style.css";

type Props = {
  columns: any[];
  rows: any[];
  gWidth?: any;
  count?: number;
  givenPage?: number;
  handleChangePageUrUpdate?: (e: number) => void;
  handlerRowsPerPage?: (e: any) => void;
  itemPerPage?: number;
};

const CustomGrid = ({
  columns,
  rows,
  gWidth,
  count,
  givenPage,
  handleChangePageUrUpdate,
  handlerRowsPerPage,
  itemPerPage,
}: Props) => {
  const [page, setPage] = React.useState(givenPage ? givenPage - 1 : 0);
  const [rowsPerPage, setRowsPerPage] = React.useState(itemPerPage || 10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(newPage);
    handleChangePageUrUpdate && handleChangePageUrUpdate(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    handlerRowsPerPage && handlerRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer
          sx={{
            maxHeight: gWidth
              ? gWidth
              : window.screen.height > 864
              ? window.screen.height * 0.5
              : window.screen.height * 0.3,
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={uuidv4()}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#EEEEEE",
                      fontFamily: "AvenirLTProHeavy",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={uuidv4()}
                      style={
                        {
                          // backgroundColor:row[is_publish]===
                        }
                      }
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={uuidv4()} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          {rows.length === 0 && (
            <div className="w-full text-center">No data found !</div>
          )}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={count || rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default CustomGrid;
