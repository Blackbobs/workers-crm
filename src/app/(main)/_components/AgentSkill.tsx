import Link from "next/link";
import React from "react";

const AgentSkill = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Agent skill</h2>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          Check if on-hand inventory will allow all sales orders to ship without
          delay
        </p>
        <p className="text-gray-700 mb-2">
          When{" "}
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            any vendor
          </span>{" "}
          sends an email with changes to{" "}
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            confirmed purchase orders
          </span>
          , check if the resulting{" "}
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            on-hand inventory
          </span>{" "}
          will allow{" "}
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            all sales orders
          </span>{" "}
          to{" "}
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            ship without delay
          </span>
          . If so,{" "}
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            update the purchase order
          </span>{" "}
          to reflect the change.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Enable email access</h3>
        <p className="text-gray-700 mb-2">
          Allow the agent to access email inboxes to read mail from known
          vendors
        </p>
        <div className="flex items-center border rounded p-2">
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2">
            P
          </span>
          <span className="text-gray-700">purchasing@contoso.com</span>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Link href={'/'} className="bg-blue-600 text-white px-4 py-2 rounded">
          Allow access
        </Link>
        <Link href={'/'} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
          Close
        </Link>
      </div>
    </div>
  );
};

export default AgentSkill;
