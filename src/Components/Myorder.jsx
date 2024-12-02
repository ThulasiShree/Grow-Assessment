import React from "react";
import { IoMdRefresh } from "react-icons/io";
import { orders } from "./Data";

const MyOrder = () => {
  return (
    <div className="p-8 w-full  bg-gray-50 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <IoMdRefresh className="text-xl text-gray-600" />
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Last Updated: <span className="font-medium">June 02, 2024 | 11:25 PM</span>
      </p>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-lg shadow-md p-5 mb-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-gray-800">
              Order ID: <span className="text-green-600">{order.id}</span>
            </h2>
            <p className="text-sm text-gray-500">Date: {order.date}</p>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Customer Details</h3>
            <div className="space-y-2">
              <p className="text-gray-800 text-sm font-medium">
                {order.customer.name}
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="bg-green-100 text-green-600 p-1 rounded-full">📞</span>
                <a
                  href={`tel:${order.customer.phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {order.customer.phone}
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <span className="bg-green-100 text-green-600 p-1 rounded-full">📍</span>
                <p>{order.customer.address}</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Order Items</h4>
            <ul className="text-sm text-gray-600 mb-3">
              {order.items.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>
                    {item.quantity} x {item.name}
                  </span>
                  <span>₹{item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Total Bill:</p>
              <p className="text-sm font-bold text-gray-800">
                ₹{order.total.toFixed(2)}
              </p>
            </div>
            <div className="mt-2">
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {order.paymentStatus}
              </span>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button className="flex-grow py-2 bg-red-100 text-red-600 rounded-md font-medium hover:bg-red-200">
              Reject Order
            </button>
            <button className="flex-grow py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600">
              Confirm Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;