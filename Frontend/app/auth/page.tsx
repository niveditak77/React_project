"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Input,
} from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie";
import animation from "@/public/login.json";

function page() {
  const Router = useRouter();

  const success = () =>
    toast.success("logged in!", {
      style: {
        borderRadius: "20px",
        background: "#333",
        color: "#fff",
      },
    });
  const failed = () =>
    toast.error("invalid credentials!", {
      style: {
        borderRadius: "20px",
        background: "#333",
        color: "#fff",
      },
    });
  const warn = () =>
    toast.error("fields empty", {
      style: {
        borderRadius: "20px",
        background: "#333",
        color: "#fff",
      },
    });
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const handleLogin = (e: any) => {
    if (data.name == "" || data.password == "") warn();
    else if (data.name == "rohit" && data.password == "admin") {
      success();
      Router.push("./dashboard");
    } else {
      failed();
    }
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg1 select-none w-screen py-8  min-h-screen sm:flex items-center justify-center px-5 md:px-1 gap-5 md:gap-0 lg:gap-0">
      <Card className="bg-transparent shadow-xl  pb-12 md:h-[35em] flex place-items-center justify-center backdrop-blur-lg border-l-2 border-b-2 px-12 rounded-xl md:rounded-l-xl md:rounded-r-none md:pl-36 md:pr-36">
        <CardBody className="text-center  items-center justify-center ">
          <Image
            src="https://res.cloudinary.com/dzqjryuld/image/upload/v1704714230/logo/logo-white_byemzs.png"
            width="200"
            className="img "
          />
          <div>
            <Lottie options={defaultOptions} height={200} />
          </div>
          <h1 className="mt-2 text-4xl underline decoration-success underline-offset-3 sm:text-2xl">
            WELCOME TO
            <br /> EDUDRIGHNA
          </h1>
        </CardBody>
        <p className="text-md">bangalore, india</p> <br />
        <div className="flex flex-row gap-5">
          <FaFacebook
            size={25}
            className="hover:text-primary hover:scale-125 ease-in duration-100"
          />
          <AiFillTwitterCircle
            className="hover:text-blue-300 hover:scale-125 ease-in duration-100"
            size={30}
          />
          <FaLinkedin
            size={28}
            className="hover:text-primary hover:scale-125 ease-in duration-100"
          />
          <FaYoutube
            size={28}
            className="hover:text-danger hover:scale-125 ease-in duration-100"
          />
        </div>
      </Card>
      <Card className="pt-5 bg-transparent border-b-2 shadow-xl pb-12 md:h-[35em] flex place-items-center justify-center backdrop-blur-lg px-12 rounded-xl md:rounded-l-none md:rounded-r-xl md:pl-28 md:pr-28">
        <CardBody className="text-center  items-center justify-center ">
          <h1 className="text-3xl underline decoration-success underline-offset-3">
            Log In
          </h1>
          <div className="mt-5 grid  gap-5">
            <Input
              autoComplete="off"
              onChange={handleInput}
              className="ip bg-transparent placeholder:text-white"
              variant="bordered"
              placeholder="username"
              name="name"
              color="success"
              type="text"
              classNames={{
                inputWrapper: "border-white",
                label: "text-white",
              }}
            />
            <Input
              autoComplete="off"
              onChange={handleInput}
              className="ip bg-transparent placeholder:text-white"
              variant="bordered"
              placeholder="password"
              name="password"
              color="success"
              type="password"
              classNames={{
                inputWrapper: "border-white",
                label: "text-white",
              }}
            />
            <div className="flex justify-end">
              <p className="text-sm">forgot password?</p> <br />
            </div>
            <Button
              onClick={(e) => {
                handleLogin(e.target);
              }}
              color="success"
              className="text-white"
            >
              log in
            </Button>
          </div>
        </CardBody>
        <CardFooter>
          <p className="text-sm">© 2023 Drighna Technology Pvt Ltd.</p>
        </CardFooter>
      </Card>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default page;
