import { Separator } from "@/components/ui/separator";
import {
  Add,
  ArrowDown2,
  Category2,
  Chart,
  Refresh2,
  Trash,
} from "iconsax-react";
import { MoreVertical } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="bg-white shadow w-full p-3 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1>My open leads</h1>
          <ArrowDown2 size={15} color="#121212" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Chart size="17" color="#FF8A65" />
            <p className="text-nowrap">show chart</p>
          </div>
          <div className="flex items-center gap-2">
            <Category2 size="17" color="#FF8A65" />
            <p className="text-nowrap">focused view</p>
          </div>
          <div className="flex items-center gap-2">
            <Add size="25" color="#FF8A65" />
            <p className="text-nowrap">new</p>
          </div>
          <div className="flex items-center gap-2">
            <Refresh2 size="17" color="#FF8A65" />
            <p className="text-nowrap">refresh</p>
          </div>
          <div className="flex items-center gap-2">
            <Chart size="17" color="#FF8A65" />
            <p className="text-nowrap">Collaborate</p>
          </div>
          <div className="flex items-center gap-2">
            <Trash size="17" color="#FF8A65" />
            <p className="text-nowrap">delete</p>
          </div>
          <div>
            <span>|</span>
          </div>
          <div>
            <ArrowDown2 size={15} color="#121212" />
          </div>
          <div>
            <MoreVertical />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border rounded p-2">
              <Chart size="17" color="#FF8A65" />
              <p className="text-nowrap">Smart Data</p>
            </div>
            <div className="flex items-center gap-2 border rounded p-2">
              <Chart size="17" color="#FF8A65" />
              <p className="text-nowrap">Edit Filters</p>
            </div>
            <div className="flex items-center gap-2 border rounded p-2">
              <Chart size="17" color="#FF8A65" />
              <p className="text-nowrap">Edit Columns</p>
            </div>
            <div className="flex items-center gap-2 border rounded p-2 bg-blue-500">
              <Chart size="17" color="#fffefe" />
             <span className="text-white">|</span>
             <ArrowDown2 size={15} color="#fffefe" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
