"use client"
// import Image from "next/image";
import { BiSolidUserPlus } from "react-icons/bi";
import Table from "./components/Table";
import Form from "./components/Form";
import { useState } from "react";

export default function Home() {
  const [visibleForm, setVisibleForm] = useState(false);

  const handler = () => {
    setVisibleForm(!visibleForm);
  }
  return (
    <section>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl font-bold text-center py-10">
          Employee Management
        </h1>
        <div className="container mx-auto">
           <div className="left flex gap-3">
             <button onClick={handler} className="flex bg-indigo-500 text-white px-4 py-2 hover:bg-gray-200 hover:border-indigo-500 hover:text-gray-800 cursor-pointer">Add Employee
              <span className="px-2"><BiSolidUserPlus size={23}></BiSolidUserPlus></span>
             </button>
            </div>
        </div>
            {/* collapsable form */}

              {visibleForm ? <Form></Form>:<></>}


            {/* Table */}
            <div className="container mx-auto">
              <Table></Table>
            </div>



      </main>
    </section>
  );
}
