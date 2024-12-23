"use client";
import { Ankr, Cardano, UserSquare } from "iconsax-react";
import { Mail } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DataTableDemo } from "./DataTable";

const Leads = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null)

  // const handleCloseModal = () => {
  //   if(modalRef as HTMLDivElement){
  //     if(modalRef?.current.blur){
  //       setShowModal(false)
  //     }
  //   }
  // }

  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <section className="relative">
      <div>
        <div className="border border-blue-300 bg-white shadow-xl rounded-xl my-2 mx-auto p-5">
          <div>
            <div className="flex gap-2">
              <Ankr size="20" color="#FF8A65" />
              <h1 className="font-bold">
                Hi Mona, 68% of goal achieved and rest can be achieved by
                focusing on 20% top leads.
              </h1>
            </div>
            <div></div>
          </div>
          <div className="flex w-full gap-16">
            <div>
              <p className="text-gray-700 text-[14px] my-5 leading-5">
                Copilot has pinpointed 20 keys leads that show strong purchase
                intent and are actively engaging. These leads need your focus.
              </p>
              <Carousel>
                <CarouselContent className="max-w-[1100px]">
                  <CarouselItem className="md:basis-1/2">
                    {" "}
                    <div
                      onClick={handleShowModal}
                      className="border border-gray-400 rounded-xl p-3 min-w-[500px] max-w-[550px] pl-5"
                    >
                      <div className="flex items-center gap-3">
                        <UserSquare size="35" color="#FF8A65" />
                        <div>
                          <h2 className="font-semibold capitalize">
                            jane reyes
                          </h2>
                          <div className="flex items-center justify-center gap-3 text-gray-700 text-[14px]">
                            <span>COO</span>
                            <span className="text-xl font-bold">
                              <sup>.</sup>
                            </span>
                            <span>Northwind Traders</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-200 p-3 rounded-xl w-fit">
                        <div className="flex items-center gap-2 my-2">
                          <Mail />
                          <h3 className="font-semibold">
                            Engage with Jane Reyes
                          </h3>
                        </div>
                        <p className="text-gray-500">
                          Jane may be interested in upgrading expresso machines
                          for her in-store coffee shops.
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[14px] text-gray-500">
                        <span>Expand business</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>High buying intent</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2">
                    {" "}
                    <div
                      onClick={handleShowModal}
                      className="border border-gray-400 rounded-xl p-3 min-w-[500px] max-w-[550px] pl-5"
                    >
                      <div className="flex items-center gap-3">
                        <UserSquare size="35" color="#FF8A65" />
                        <div>
                          <h2 className="font-semibold capitalize">
                            Allan Munger
                          </h2>
                          <div className="flex items-center justify-center gap-3 text-gray-700 text-[14px]">
                            <span>Head of Real Estate Developeent</span>
                            <span className="text-xl font-bold">
                              <sup>.</sup>
                            </span>
                            <span>Conntoso Coffee</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-200 p-3 rounded-xl w-fit">
                        <div className="flex items-center gap-2 my-2">
                          <Mail />
                          <h3 className="font-semibold">
                            Prepare for meeting with Allan
                          </h3>
                        </div>
                        <p className="text-gray-500">
                          Prepare for high-buying intent meeting Copilot
                          scheduled for 2pm regarding upgrading service
                          contract.
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[14px] text-gray-500">
                        <span>Upcoming meeting</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>Due today</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2">
                    {" "}
                    <div
                      onClick={handleShowModal}
                      className="border border-gray-400 rounded-xl p-3 min-w-[500px] max-w-[550px] pl-5"
                    >
                      <div className="flex items-center gap-3">
                        <UserSquare size="35" color="#FF8A65" />
                        <div>
                          <h2 className="font-semibold capitalize">
                            Allan Munger
                          </h2>
                          <div className="flex items-center justify-center gap-3 text-gray-700 text-[14px]">
                            <span>Head of Real Estate Developeent</span>
                            <span className="text-xl font-bold">
                              <sup>.</sup>
                            </span>
                            <span>Conntoso Coffee</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-200 p-3 rounded-xl w-fit">
                        <div className="flex items-center gap-2 my-2">
                          <Mail />
                          <h3 className="font-semibold">
                            Prepare for meeting with Allan
                          </h3>
                        </div>
                        <p className="text-gray-500">
                          Prepare for high-buying intent meeting Copilot
                          scheduled for 2pm regarding upgrading service
                          contract.
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[14px] text-gray-500">
                        <span>Upcoming meeting</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>Due today</span>
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2">
                    {" "}
                    <div
                      onClick={handleShowModal}
                      className="border border-gray-400 rounded-xl p-3 min-w-[500px] max-w-[550px] pl-5"
                    >
                      <div className="flex items-center gap-3">
                        <UserSquare size="35" color="#FF8A65" />
                        <div>
                          <h2 className="font-semibold capitalize">
                            jane reyes
                          </h2>
                          <div className="flex items-center justify-center gap-3 text-gray-700 text-[14px]">
                            <span>COO</span>
                            <span className="text-xl font-bold">
                              <sup>.</sup>
                            </span>
                            <span>Northwind Traders</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-200 p-3 rounded-xl w-fit">
                        <div className="flex items-center gap-2 my-2">
                          <Mail />
                          <h3 className="font-semibold">
                            Engage with Jane Reyes
                          </h3>
                        </div>
                        <p className="text-gray-500">
                          Jane may be interested in upgrading expresso machines
                          for her in-store coffee shops.
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[14px] text-gray-500">
                        <span>Expand business</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>High buying intent</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem
                    onClick={handleShowModal}
                    className="md:basis-1/2"
                  >
                    {" "}
                    <div className="border border-gray-400 rounded-xl p-3 min-w-[500px] max-w-[550px] pl-5">
                      <div className="flex items-center gap-3">
                        <UserSquare size="35" color="#FF8A65" />
                        <div>
                          <h2 className="font-semibold capitalize">
                            Allan Munger
                          </h2>
                          <div className="flex items-center justify-center gap-3 text-gray-700 text-[14px]">
                            <span>Head of Real Estate Developeent</span>
                            <span className="text-xl font-bold">
                              <sup>.</sup>
                            </span>
                            <span>Conntoso Coffee</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-200 p-3 rounded-xl w-fit">
                        <div className="flex items-center gap-2 my-2">
                          <Mail />
                          <h3 className="font-semibold">
                            Prepare for meeting with Allan
                          </h3>
                        </div>
                        <p className="text-gray-500">
                          Prepare for high-buying intent meeting Copilot
                          scheduled for 2pm regarding upgrading service
                          contract.
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[14px] text-gray-500">
                        <span>Upcoming meeting</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>Due today</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2">
                    {" "}
                    <div
                      onClick={handleShowModal}
                      className="border border-gray-400 rounded-xl p-3 min-w-[500px] max-w-[550px] pl-5"
                    >
                      <div className="flex items-center gap-3">
                        <UserSquare size="35" color="#FF8A65" />
                        <div>
                          <h2 className="font-semibold capitalize">
                            Allan Munger
                          </h2>
                          <div className="flex items-center justify-center gap-3 text-gray-700 text-[14px]">
                            <span>Head of Real Estate Developeent</span>
                            <span className="text-xl font-bold">
                              <sup>.</sup>
                            </span>
                            <span>Conntoso Coffee</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-200 p-3 rounded-xl w-fit">
                        <div className="flex items-center gap-2 my-2">
                          <Mail />
                          <h3 className="font-semibold">
                            Prepare for meeting with Allan
                          </h3>
                        </div>
                        <p className="text-gray-500">
                          Prepare for high-buying intent meeting Copilot
                          scheduled for 2pm regarding upgrading service
                          contract.
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[14px] text-gray-500">
                        <span>Upcoming meeting</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>Due today</span>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="border-l border-[#121212] p-5 min-w-[500px]">
              <h3 className="font-medium text-[18px]">Other key activities</h3>
              <div className="space-y-3">
                <div className="bg-white shadow-lg rounded-[8px] p-3">
                  <div className="flex items-center gap-2">
                    <Ankr size="40" color="#FF8A65" />
                    <div>
                      <h3 className="font-bold">Cafe A100 for Woodland Bank</h3>
                      <div className="flex items-center gap-1 text-gray-400">
                        <span>Woodland Bank</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>$280,000</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>8 days to close</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 bg-slate-100 rounded-[8px] p-3">
                      <Ankr size="20" color="#FF8A65" />
                      <p className="font-medium">
                        Review draft and reply to Chris Naido
                      </p>
                    </div>
                    <Cardano size="32" color="#1265FF" />
                  </div>
                </div>

                <div className="bg-white shadow-lg rounded-[8px] p-3">
                  <div className="flex items-center gap-2">
                    <Ankr size="40" color="#FF8A65" />
                    <div>
                      <h3 className="font-bold">
                        Partnership opportunity for Fabrikam
                      </h3>
                      <div className="flex items-center gap-1 text-gray-400">
                        <span>Fabrikam</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>$5,000,000</span>
                        <span className="text-xl font-bold">
                          <sup>.</sup>
                        </span>
                        <span>12 days to close</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 bg-slate-100 rounded-[8px] p-3">
                      <Ankr size="20" color="#FF8A65" />
                      <p className="font-medium">
                        Review draft and reply to Chris Naido
                      </p>
                    </div>
                    <Cardano size="32" color="#1265FF" />
                  </div>
                </div>
              </div>
              <p className="m-5 text-blue-600">Show all key activities</p>
            </div>
          </div>
        </div>
        <DataTableDemo />
      </div>

      {showModal && (
        <div className="p-4 absolute top-5 z-50">
          <div className="bg-white shadow-xl rounded-[8px] p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/50x50"
                  alt="Profile picture of Jane Reyes"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">Jane Reyes</h2>
                  <p className="text-gray-500">COO, Northwind Traders</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded">
                  Approve and send
                </button>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded mb-4">
              <p className="text-blue-700">
                Jane may be interested in upgrading espresso machines for her
                in-store coffee shops.
              </p>
            </div>
            <div className="flex items-center mb-4">
              <button className="px-4 py-2 border-b-2 border-blue-500">
                Engage
              </button>
              <button className="px-4 py-2 text-gray-500">Research</button>
            </div>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="text-lg font-semibold mb-2">
                Why I picked this lead
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  Jane is a key decision maker and was browsing 'espresso
                  machines' on First Coffee's website.
                </li>
                <li>
                  Multiple people at her company have reported 'slowness' during
                  service requests.
                </li>
                <li>
                  Northwind Traders currently see $200M in revenue from their
                  in-store coffee shops.
                </li>
              </ul>
              <div className="flex space-x-4 mb-4">
                <div className="bg-white p-4 rounded shadow flex-1">
                  <p className="text-gray-500">Decision maker</p>
                  <p className="text-xl font-semibold">Yes</p>
                </div>
                <div className="bg-white p-4 rounded shadow flex-1">
                  <p className="text-gray-500">Potential deal value</p>
                  <p className="text-xl font-semibold">$1M</p>
                </div>
                <div className="bg-white p-4 rounded shadow flex-1">
                  <p className="text-gray-500">Intent</p>
                  <p className="text-xl font-semibold">High</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-link text-gray-500"></i>
                <span className="text-gray-500">D365 Sales</span>
                <span className="text-gray-500">+2</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4">
              <h3 className="text-lg font-semibold mb-2">About Jane</h3>
              <p className="text-gray-700">
                Jane Reyes, the Chief Operating Officer of Northwind Traders, is
                a dynamic leader with a proven track record in optimizing
                operations and enhancing customer experiences. Under her
                guidance, Northwind Traders' in-store coffee shops have
                flourished, becoming a hallmark of quality and innovation.
                Jane's commitment to excellence makes her an ideal partner for
                First Coffee. She is always seeking top-tier equipment to
                elevate her coffee shops' offerings, ensuring consistent,
                high-quality service.
              </p>
            </div>
            <div className="text-gray-500 text-sm">
              Showing 1 of 9{" "}
              <a href="#" className="text-blue-500">
                Show all
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Leads;
