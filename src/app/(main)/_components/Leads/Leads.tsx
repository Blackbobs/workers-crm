import { Ankr, UserSquare } from "iconsax-react";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const Leads = () => {
  return (
    <section>
      <div>
        <div className="border border-blue-300 bg-white shadow-xl rounded-xl my-2 p-5">
          <div>
            <div className="flex gap-2">
            <Ankr size="20" color="#FF8A65"/>
            <h1 className="font-bold">
              Hi Mona, 68% of goal achieved and rest can be achieved by focusing
              on 20% top leads.
            </h1>
            </div>
            <div></div>
          </div>
          <div>
            <p className="text-gray-700 text-[14px] my-5 leading-5">
              Copilot has pinpointed 20 keys leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </p>
            <div>
              <div className="border border-gray-400 rounded-xl p-3 w-[550px]">
                <div className="flex items-center gap-3">
                <UserSquare size="35" color="#FF8A65"/>
                  <div>
                    <h2 className="font-semibold capitalize">jane reyes</h2>
                    <div className="flex items-center justify-center gap-3 text-gray-700 text-[14px]">
                      <span>COO</span>
                      <span className="text-xl font-bold"><sup>.</sup></span>
                      <span>Northwind Traders</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-200 p-3 rounded-xl w-[500px]">
                  <div className="flex items-center gap-2 my-2">
                    <Mail />
                    <h3 className="font-semibold">Engage with Jane Reyes</h3>
                  </div>
                  <p className="text-gray-500">
                    Jane may be interested in upgrading expresso machines for
                    her in-store coffee shops.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[14px] text-gray-500">
                  <span>Expand business</span>
                  <span className="text-xl font-bold"><sup>.</sup></span>
                  <span>High buying intent</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>Other key activities</h3>
            <div>
              <div>
                <div>
                  {/* Image */}
                  <div>
                    <h3>Cafe A100 for Woodland Bank</h3>
                    <div className="flex items-center gap-3">
                      <span>Woodland Bank</span>
                      <span>.</span>
                      <span>$280,000</span>
                      <span>.</span>
                      <span>8 days to close</span>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Icon */}
                  <p>Review draft and reply to Chris Naido</p>
                </div>
              </div>

              <div>
                <div>
                  {/* Image */}
                  <div>
                    <h3>Partnership opportunity for Fabrikam</h3>
                    <div className="flex items-center gap-3">
                      <span>Fabrikam</span>
                      <span>.</span>
                      <span>$5,000,000</span>
                      <span>.</span>
                      <span>12 days to close</span>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Icon */}
                  <p>Prepare me for Fabrikam's key stakeholder meeting</p>
                </div>
              </div>
            </div>
            <p>Show all key activities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leads;
