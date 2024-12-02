import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { settlements, transactions } from "./Data";

const Transaction = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="mt-5 max-w-[100%] ">
      <div className="bg-white rounded-lg shadow-lg p-6">
        
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-gray-800">
            Recent Transactions
          </h1>
          <IoMdRefresh className="text-2xl text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Last Updated: June 02, 2024 | 11:25 PM
        </p>

        
        <div className="flex border-b mb-4">
          <button
            className={`flex-1 text-center px-4 py-2 text-sm font-medium ${
              activeTab === "tab1"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            All Transactions
          </button>
          <button
            className={`flex-1 text-center px-4 py-2 text-sm font-medium ${
              activeTab === "tab2"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            Settlements
          </button>
        </div>

        
        <div>
          {activeTab === "tab1" && (
            <div>
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 rounded-lg shadow-sm p-4 mb-3"
                >
                 
                  <div className="flex items-start gap-4 mb-3 md:mb-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-xl">👤</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {transaction.phone}{" "}
                        <span className="text-gray-500 text-xs">
                          {transaction.type}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Paid on {transaction.paidOn}
                      </p>
                      <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded mt-2 inline-block">
                        {transaction.via}
                      </span>
                    </div>
                  </div>

                  
                  <div
                    className={`text-sm font-semibold ${
                      transaction.isPositive
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tab2" && (
            <div>
              {settlements.map((settlement) => (
                <div
                  key={settlement.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 rounded-lg shadow-sm p-4 mb-3"
                >
                  
                  <div className="flex items-start gap-4 mb-3 md:mb-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-500 text-xl">🔗</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {settlement.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Paid on {settlement.paidOn}
                      </p>
                      <span className="text-xs font-medium bg-green-100 text-green-600 px-2 py-1 rounded mt-2 inline-block">
                        {settlement.via}
                      </span>
                    </div>
                  </div>

                  
                  <div className="flex flex-col items-end">
                    <div
                      className={`text-sm font-semibold ${
                        settlement.isPositive
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {settlement.amount}
                    </div>
                    <div className="flex gap-2 mt-1 text-xs">
                      <span className="text-green-500 font-medium">
                        {settlement.status}
                      </span>
                      <span className="text-red-500 font-medium cursor-pointer hover:underline">
                        {settlement.view}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transaction;