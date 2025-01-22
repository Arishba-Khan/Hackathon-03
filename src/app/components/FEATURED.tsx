import Link from "next/link";
import { Button } from "./ui/button";
export default function Featured() {
  return (
    <main className="m-4">
      <div>
      </div>
      <div className="flex justify-center items-center flex-col gap-3 p-10">
        <h2 className=" text-4xl font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Link href={"/shoes"}>
        <Button>Find Your Shoe</Button>
        </Link>
      </div>
    </main>
  );
}
