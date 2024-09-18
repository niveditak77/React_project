import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Toolbar from "../utils/toolbar";

function OneTable(props: any) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  // const pages = Math.ceil(users.length / rowsPerPage);

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return users.slice(start, end);
  // }, [page, users]);

  return (
    <Card>
      <CardHeader className="text-xl">{props.header}</CardHeader>
      <hr className="h-px rounded-fill w-full bg-gray-200  dark:bg-gray-700" />
      <CardBody>
        <Toolbar />
        <Table
          aria-label="Example static collection table"
          selectionMode={props.selectionMode}
          className="mt-5"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={2}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
          <TableHeader>
            {props.table.map((_: any, i: number) => {
              return <TableColumn key={_ + i}>{_}</TableColumn>;
            })}
          </TableHeader>
          <TableBody>
            {props.tableData.map((d: any, id: number) => {
              return (
                <TableRow key={d + id}>
                  {props.table.map((_: any, i: number) => {
                    return d.c1 == 404 ? (
                      <TableCell key={_ + i}>
                        {d["c" + (i + 1)] !== "" && d["c" + (i + 1)] !== 404
                          ? d["c" + (i + 1)]
                          : ""}
                      </TableCell>
                    ) : (
                      <TableCell key={_ + i}>{d["c" + (i + 1)]}</TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardBody>
      {props.hasFooter ? (
        <CardFooter className="justify-end">
          <Button color="primary">Authentication Active</Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}

export default OneTable;
