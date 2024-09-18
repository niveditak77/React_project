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
  Tabs,
  Tab,
} from "@nextui-org/react";
import Toolbar from "../utils/toolbar";

function MTabs(props: any) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;
  return (
    <div>
      <Tabs aria-label="Options" variant="underlined">
        {props.tabs.map((_: string, idx: number) => {
          return (
            <Tab key={idx} title={_}>
              <Toolbar />
              {/* <Card> */}
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
                    return (
                      <TableColumn key={_ + i}>{_["c" + (i + 1)]}</TableColumn>
                    );
                  })}
                </TableHeader>
                <TableBody>
                  {props.tableData[idx].map((d: any, id: number) => {
                    return (
                      <TableRow key={d + id}>
                        {Array(10)
                          .fill(10)
                          .map((_: any, i: number) => {
                            return (
                              <TableCell key={_ + i}>
                                {d["c" + (i + 1)]}
                              </TableCell>
                            );
                          })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              {/* </Card> */}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default MTabs;
