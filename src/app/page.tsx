import Image from "next/image";
import Navbar from "./(main)/_components/Navbar";
import Leads from "./(main)/_components/Leads/Leads";

export default function Home() {
  return(
  <section className="bg-[#fffefe] w-full p-2 h-full">
    <Navbar/>
    <div>
      <Leads/>
    </div>
  </section>
  );
}
