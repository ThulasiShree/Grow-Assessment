import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import CoinIcon from "../assets/coinicon.png"
import {
  MdOutlineDashboard,
  MdAddShoppingCart,
  MdOutlinePerson,
} from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import Store1 from '../assets/store1.png'
import Store2 from '../assets/store2.png'
import {
  FaMoneyBill,
  FaUserFriends,
  FaHistory,
} from "react-icons/fa";
import { TbTransactionRupee, TbReportSearch } from "react-icons/tb";
import { BsFillGiftFill } from "react-icons/bs";
import { PiNotepadBold } from "react-icons/pi";
import { RiRefund2Fill } from "react-icons/ri";

// Header Icons
export const userIcons = [
  { content: "XCoins: 3000", image: CoinIcon, style: "text-[10px] md:text-lg font-medium" },
  { icon: <FaHandHoldingUsd />, style: "text-xl md:text-2xl" },
  { icon: <IoIosNotifications />, style: "text-xl md:text-2xl" },
  { icon: <IoPerson />, style: "text-xl md:text-2xl" },
];

// Sidebar Icons
export const menuItems = [
  {
    icon: <MdOutlineDashboard size={25} className="text-[#668D12]" />,
    label: "Dashboard",
  },
  { icon: <FiTruck size={25} className="text-[#668D12]" />, label: "Orders" },
  {
    icon: <MdAddShoppingCart size={25} className="text-[#668D12]" />,
    label: "My Products",
  },
  {
    icon: <MdOutlinePerson size={25} className="text-[#668D12]" />,
    label: "Profile",
  },
];

// Store
export const stores = [
  {
    id: 12345,
    name: "Annapoorna Hotel",
    location: "Sitra, Coimbatore",
    image: Store1
  },
  {
    id: 22345,
    name: "Annapoorna Hotel",
    location: "L&T, Coimbatore",
    image: Store2
  },
];

// Transactions
export const transactions = [
  {
    id: 1,
    type: "Send a Payment",
    phone: "+918956598562",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "Paid via QR Scan",
    amount: "+₹500.00",
    isPositive: true,
  },
  {
    id: 2,
    type: "Send a Payment",
    phone: "+918956598562",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "Paid via QR Scan",
    amount: "+₹400.00",
    isPositive: true,
  },
  {
    id: 3,
    type: "Send a Payment",
    phone: "+918956598562",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "Paid via QR Scan",
    amount: "+₹300.00",
    isPositive: true,
  },
  {
    id: 4,
    type: "Send a Payment",
    phone: "+918956598562",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "Paid via QR Scan",
    amount: "+₹200.00",
    isPositive: true,
  },
];

export const settlements = [
  {
    id: 1,
    description: "Weekly Settlements (10 Apr - 17 Apr)",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "REWARDIFY (weekly Settlement)",
    amount: "-₹3326.00",
    isPositive: false,
    status: "Paid",
    view: "View",
  },
  {
    id: 2,
    description: "Weekly Settlements (10 Apr - 17 Apr)",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "REWARDIFY (weekly Settlement)",
    amount: "-₹3326.00",
    isPositive: false,
    status: "Paid",
    view: "View",
  },
  {
    id: 3,
    description: "Weekly Settlements (10 Apr - 17 Apr)",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "REWARDIFY (weekly Settlement)",
    amount: "-₹3326.00",
    isPositive: false,
    status: "Paid",
    view: "View",
  },
  {
    id: 4,
    description: "Weekly Settlements (10 Apr - 17 Apr)",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "REWARDIFY (weekly Settlement)",
    amount: "-₹3326.00",
    isPositive: false,
    status: "Paid",
    view: "View",
  },
  {
    id: 5,
    description: "Weekly Settlements (10 Apr - 17 Apr)",
    paidOn: "Apr 11, 2024 at 4:30PM",
    via: "REWARDIFY (weekly Settlement)",
    amount: "-₹3326.00",
    isPositive: false,
    status: "Paid",
    view: "View",
  },
];
// Orders
export const orders = [
  {
    id: "12345",
    date: "Apr 09, 2024",
    customer: {
      name: "Rajesh Kannan",
      phone: "+91 8526547512",
      address: "R S Puram, Coimbatore",
    },
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    paymentStatus: "PAID - UPI",
  },
 
];
//Slide
export const actions = [
  { icon: <PiNotepadBold />, label: "Request to REWARDIFY" },
  { icon: <FaUserFriends />, label: "Refer & Earn" },
  { icon: <TbReportSearch />, label: "Reports" },
  { icon: <RiRefund2Fill />, label: "Refund Transaction" },
  { icon: <FaMoneyBill />, label: "Make Payment" },
  { icon: <TbTransactionRupee />, label: "Settlements" },
  { icon: <FaHistory />, label: "Transaction History" },
  { icon: <BsFillGiftFill />, label: "Gift Cards" },
];