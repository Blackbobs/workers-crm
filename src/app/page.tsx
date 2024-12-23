import Image from "next/image";
import Navbar from "./(main)/_components/Navbar";
import Leads from "./(main)/_components/Leads/Leads";

export default function Home() {
  return(
  <section className="bg-[#fffefe] w-full p-5 h-full">
    <Navbar/>
    <div className="mx-[1%]">
      <Leads/>
    </div>
  </section>
  );
}
