import Link from "next/link";
import PinsList from "./components/PinsList";

export default function Home() {
  return (
    <main className={`p-4`}>
      <div className=" flex items-center justify-between ">
        <h1 className="text-3xl font-semibold pb-2 border-b">
        All Pins </h1>

        <Link className="border px-3 py-1 rounded duration-200 hover:bg-gray-200" href="/pins/add-pin">Add Pin</Link>
      </div>
      <div className="grid grid-cols-3 p-4 gap-4">
            <PinsList />
</div>
    </main>
  );
}
