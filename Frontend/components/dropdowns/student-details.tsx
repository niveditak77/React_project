import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  Textarea,
} from "@nextui-org/react";
import React from "react";
import Ddown from "../utils/dropdown";
import { useSalaryModelContext } from "../routes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

function StudentDetails(props: any) {
  const { open, setOpen } = useSalaryModelContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h1>{props.h1}</h1>
          {props.popup ? (
            <Chip
              color="success"
              onClick={() => {
                setOpen(true);
              }}
              className="text-white cursor-pointer"
            >
              {props.popup}
            </Chip>
          ) : null}
        </CardHeader>
        <hr className="h-px rounded-fill w-full bg-gray-200  dark:bg-gray-700" />
        <CardBody className="flex flex-row gap-5">
          {props.labels[0] != ""
            ? props.labels.map((_: string, i: number) => {
                return (
                  <Ddown
                    key={i}
                    label={props.labels[i]}
                    items={
                      i == 0
                        ? props.items1
                        : i == 1
                        ? props.items2
                        : props.items3
                    }
                  />
                );
              })
            : null}

          {props.hasMonthPicker ? (
            <Input type="month" placeholder="Deduct Month" />
          ) : null}

          {/* <Ddown label={"Select Class"} items={["All Sections", "Demo"]} /> */}
        </CardBody>

        <CardFooter className="justify-end">
          <Button color="primary">{props.button}</Button>
        </CardFooter>
      </Card>

      <>
        <Modal
          isOpen={open}
          onOpenChange={onOpenChange}
          hideCloseButton
          size="5xl"
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {props.modalTitle}
                </ModalHeader>
                <ModalBody>{props.modalcontent}</ModalBody>
                <ModalFooter>
                  <Button
                    color="success"
                    variant="solid"
                    onPress={() => {
                      onClose();
                      setOpen(false);
                    }}
                  >
                    Apply
                  </Button>
                  <Button
                    color="danger"
                    variant="solid"
                    onPress={() => {
                      onClose();
                      setOpen(false);
                    }}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </>
  );
}

export default StudentDetails;
