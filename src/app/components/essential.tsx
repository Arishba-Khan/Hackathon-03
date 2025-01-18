import { Button } from "./ui/button";

export default function Featured() {
  return (
    <main className="m-4">
      <div>
      <div className="flex justify-center items-center flex-col gap-3 p-10">
        <h2 className=" text-4xl font-bold uppercase"> FLIGHT ESSENTIALS </h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
            Your built-to-last, all-week wears--but with style only Jordan Brand can deliver.
        </p>
        <Button>Shop</Button>
      </div>

        <h1 className="font-semibold text-xl py-5">The Essentials</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          style={{
            backgroundImage: "url('/assests/e1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "540px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: "url('/assests/e2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "540px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: "url('/assests/e3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "540px",
          }}
        ></div>
      </div>
      
    </main>
  );
}
