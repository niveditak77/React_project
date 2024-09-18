"use client";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const Router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Image
          src={
            "https://res.cloudinary.com/eaglestudiosindia/image/upload/v1698393578/iluus/Cone-18_x3ga8b.png"
          }
          alt="logo"
          width={300}
          height={300}
        />
        <h1 className="text-5xl">start working</h1>
        <h1 className="mt-5 text-xl">create beautiful websites</h1>
        <Link className="text-2xl" color="success" href="/auth">
          Auth
        </Link>
        <br />
        <Link className="text-2xl" color="success" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </section>
  );
}
