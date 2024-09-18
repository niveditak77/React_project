import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import Ddown from "../utils/dropdown";

function Category(props: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
      <Card className="md:col-span-2">
        <CardHeader className="flex gap-2 text-xl">
          <BsDatabaseFillAdd />
          {props.tablehead}
        </CardHeader>
        <CardBody>
          <Table
            aria-label="Example static collection table"
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  //   page={page}
                  total={2}
                  //   onChange={(page) => setPage(page)}
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
              {props.tabledata.map((_: any, i: number) => {
                return (
                  <TableRow key={_ + i}>
                    {props.table.map((d: any, id: number) => {
                      return <TableCell>{`${_["c" + (id + 1)]}`}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
      <Card className="">
        <CardHeader className="flex gap-2 text-xl">
          <BsDatabaseFillAdd />
          {props.iphead}
        </CardHeader>
        <CardBody className="flex gap-5">
          {props.inputs.map((_: any, i: string) => {
            return props.type[i] == 0 ? (
              <Input key={_ + i} placeholder={_} isRequired className="" />
            ) : (
              <Ddown label={_} items={["Select"]} />
            );
          })}
          <Button color="success">save</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Category;
