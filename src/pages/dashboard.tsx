import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight, FaSearch } from "react-icons/fa";

// import {
//   FaUniversity,
//   FaExchangeAlt,
//   FaMoneyBillAlt,
//   FaRegCheckSquare,

// } from 'react-icons/fa';
import lol from "../assets/logo.png";
// import {  FaArrowUpRightFromSquare } from "react-icons/fa6";
// import bg from "../assets/her2.jpg"; // your uploaded image
// import StatComponent from "../components/stats";
// import BottomNav from "./stickyNav";
import person from "../assets/person_1.jpg";
import BottomNav from "./stickyNav";
import BottomNav2 from "./bottomnav2";
// import SupportBot from "../components/support";
// import { fetchHistoryForLoggedUser, Transaction } from "../backend/api";
// import { sub } from "date-fns";

// import Blog from "../Home/blog";
// import BottomNav from "./stickyNav";

const Dashboard = () => {
  const navigate = useNavigate();

  // const [visibleTransactions, setVisibleTransactions] = useState(4);
  const [userAmount, setUserAmount] = useState<number>(0);
  const [userImage, setUserImage] = useState<string>("");
  // const [showBalance, setShowBalance] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [accountType, setAccountType] = useState<string>("");
  const [subType, setSubType] = useState<string>("");
  // const [userEmail, setUserEmail] = useState<string>("");
  const [userLastName, setLastName] = useState<string>("");
  const [useMidname, setMiddleName] = useState<string>("");
  const [AcctNum, setAcctNumber] = useState<string>("");
  const [isLoading] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  console.log(userImage, subType, userLastName, useMidname);

  // Fetch logged-in user data from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserAmount(user.amount || 0);
      setUserImage(user.profilePicture || person);
      setUserName(user.firstName || "");
      setLastName(user.lastName || "");
      setMiddleName(user.middleName || "");
      setAccountType(user.accountType || "Nll");
      setSubType(user.accountSubType || "");
      // setUserEmail(user.email || "");
      setAcctNumber(user.accountNumber || "");
    }
  }, []);

  // const handleLogout = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     localStorage.clear();
  //     sessionStorage.clear();
  //     setIsLoading(false);
  //     navigate("/");
  //   }, 2000);
  // };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen z-10 ">
        <div className="bg-white   p-6 w-80 flex flex-col items-center">
          <img
            src={lol} // replace with your actual image path
            alt="Loading illustration"
            className="w-'200px h-32 object-contain mb-4"
          />

          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-red-500 border-dotted rounded-full animate-spin"></div>
            {/* <p className="text-sm text-gray-600">Loading...</p> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
<div
      className="
        w-[90%] 
        m-auto 
        p-4 
        rounded-xl 
        relative 
        overflow-hidden
        bg-gradient-to-r from-white via-red-200 to-white
      "
    >

      
      {/* Top Red Header */}
      <div className="h-14 bg-[#C8102E] w-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="space-y-6">

         <div className="bg-white border border-[#E6E8EC] rounded-lg p-5 flex items-center justify-between">
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 bg-[#F3F4F6] rounded-full flex items-center justify-center">
      {/* User Icon */}
      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 22c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-[#2F2F2F]">Dashboard</h1>
  </div>

  {/* Pencil icon */}
  <svg className="w-5 h-5 text-[#9CA3AF] cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M4 20l4-1 9-9-3-3-9 9-1 4z" />
  </svg>
</div>


        <div className="bg-transparent  border-[#E6E8EC] rounded-lg p-5">
  
  <div className="flex gap-2 items-center mb-6">
    <h2 className="text-xl font-semibold text-[#2F2F2F]">
      Cash Accounts
    </h2>
    <span className="text-sm text-[#6B7280]">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(userAmount)}
    </span>
  </div>

  {/* Savings */}
  <div className="bg-[#F8F9FB] border border-[#ECEEF2] rounded-md p-4 mb-4">
    <p className="text-sm text-[#6B7280]">Savings • *0000</p>
    <h3 className="text-2xl font-semibold text-[#2F2F2F]">$0.00</h3>
    <p className="text-sm text-[#6B7280]">Available</p>
  </div>

  {/* Checking */}
  <div className="bg-[#F8F9FB] border border-[#ECEEF2] rounded-md p-4">
    <p className="text-sm text-[#6B7280]">Basic Checking • *0007</p>
    <h3 className="text-2xl font-semibold text-[#2F2F2F]">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(userAmount)}
    </h3>
    <p className="text-sm text-[#6B7280]">Available</p>
  </div>

</div>


          {/* Loans & Credit */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-[#2F2F2F]">
                Loans & Credit
              </h2>
              <span className="text-sm text-[#6B7280]">
                $13,159.95
              </span>
            </div>

            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg p-4">
              <p className="text-sm text-[#6B7280]">
                2015 Toyota Prius • *0001
              </p>
              <h3 className="text-2xl font-semibold text-[#2F2F2F]">
                $13,159.95
              </h3>
              <p className="text-sm text-[#6B7280]">
                Remaining Balance
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {/* Scholarship Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
            <div className="h-32 bg-[#DCEFFD] flex items-center justify-center">
              <p className="text-[#2F2F2F] font-medium">
                Member Scholarship Deadline Approaching
              </p>
            </div>
            <div className="p-5">
              <p className="text-sm text-[#6B7280]">
                Apply by Feb. 27 for a chance to receive
                $2,500 scholarships for the upcoming school year.
              </p>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Recent Transactions */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
              <h2 className="font-semibold text-[#2F2F2F] mb-4">
                Recent Transactions
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-[#2F2F2F]">
                      Withdrawal Transaction fee
                    </p>
                    <p className="text-[#6B7280]">
                      Basic Checking
                    </p>
                  </div>
                  <span className="text-[#DC2626] font-medium">
                    -$5.00
                  </span>
                </div>

                <div className="border-t border-[#E5E7EB] pt-4 flex justify-between">
                  <div>
                    <p className="font-medium text-[#2F2F2F]">
                      Deposit by Wire 0000095372
                    </p>
                    <p className="text-[#6B7280]">
                      Basic Checking
                    </p>
                  </div>
                  <span className="text-[#16A34A] font-medium">
                    +$10,000.00
                  </span>
                </div>
              </div>
            </div>

            {/* Cash Flow */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
              <h2 className="font-semibold text-[#2F2F2F] mb-4">
                Cash Flow
              </h2>

              <p className="text-sm text-[#6B7280]">
                Deposit Accounts Net
              </p>

              <h3 className="text-2xl font-semibold text-[#2F2F2F] mb-4">
               
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(userAmount)}
        
              </h3>

              <div className="w-full bg-[#E5E7EB] h-3 rounded-full">
                <div className="bg-[#16A34A] h-3 rounded-full w-3/4"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
      <div className=" flex flex-col ">
        <div className="bg-white relative mb-8">
          {/* Top Navigation */}
       



          {/* Search Bar */}
          <div className="px-4 mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full p-3 pl-10 rounded-full bg-gray-100 text-sm focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3.5 text-gray-400 text-sm" />
            </div>
          </div>

       
        </div>

        <hr />


        <div className="grid grid-cols-2 gap-2 p-2 lg:flex lg:flex-wrap lg:gap-3">
          <button
            className="flex items-center text-red-600 p-2 bg-purple-50 rounded-lg shadow w-full lg:w-[48%]"
            onClick={() => navigate("/send")}
          >
            <div className="bg-purple-100 p-2 rounded-lg">
              <span className="material-icons">send</span>
            </div>
            <p className="ml-2 text-sm font-semibold">Send Money</p>
          </button>

          <button
            className="flex items-center text-pink-600 p-2 bg-pink-50 rounded-lg shadow w-full lg:w-[48%]"
            onClick={() => navigate("/deposit")}
          >
            <div className="bg-red-500 p-2 rounded-lg">
              <span className="material-icons text-white">add</span>
            </div>
            <p className="ml-2 text-sm font-semibold">Add Money</p>
          </button>

          <button
            className="flex items-center text-yellow-600 p-2 bg-yellow-50 rounded-lg shadow w-full lg:w-[48%]"
            onClick={() => navigate("/loan")}
          >
            <div className="bg-yellow-100 p-2 rounded-lg">
              <span className="material-icons">account_balance_wallet</span>
            </div>
            <p className="ml-2 text-sm font-semibold">Loan</p>
          </button>

          <button
            className="flex items-center text-green-600 p-2 bg-green-50 rounded-lg shadow w-full lg:w-[48%]"
            onClick={() => navigate("/overview")}
          >
            <div className="bg-green-100 p-2 rounded-lg">
              <span className="material-icons">help</span>
            </div>
            <p className="ml-2 text-sm font-semibold">Need Help?</p>
          </button>
        </div>

        {/* <SupportBot/> */}

        {/* Main Content */}
        <div className="p-4 space-y-4 bg-gray-100 ">
          {/* Welcome and Rewards */}
          <div className="bg-white rounded-xl shadow p-4 space-y-3">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Hello, {userName}</p>
              <span className="text-xl text-gray-400">&gt;</span>
            </div>
            <hr />

            <div className="flex gap-2 items-center">
              <div>
                <FaArrowAltCircleRight />
              </div>
              <div>
                <p className="font-medium">
                  Ascend Federal Credit Union Life Plan®
                </p>
                <p className="text-sm text-gray-500">
                  Set + track goals with personalized guidance
                </p>
              </div>
              <span className="text-xl text-gray-400">&gt;</span>
            </div>

            <div className="flex justify-between items-center pt-2">
              <p className="font-medium">My Rewards</p>
              <span className="text-xl text-gray-400">&gt;</span>
            </div>
          </div>

          {/* Bank Balance */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="bg-red-800 text-white px-5 py-3 text-xl font-semibold">
              Ascend Federal Credit Union
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">Adv Reserved – 5542</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-2xl font-bold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(userAmount)}
                </p>

                <button
                  onClick={() => setShowViewModal(true)}
                  className="text-sm text-red-800 font-semibold bg-gray-100 px-3 py-1 rounded-full"
                >
                  VIEW
                </button>
              </div>
            </div>
            <div className="text-center text-red-800 text-sm py-2  font-bold border-t cursor-pointer">
              OPEN NEW ACCOUNT
            </div>
          </div>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="p-4">
              <p className="text-sm text-gray-500">{accountType}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-2xl font-bold">{subType}</p>

                <button
                  onClick={() => setShowViewModal(true)}
                  className="text-sm text-red-800 font-semibold bg-gray-100 px-3 py-1 rounded-full"
                >
                  VIEW
                </button>
              </div>
            </div>
            <div className="text-center text-red-800 text-sm py-2  font-bold border-t cursor-pointer">
              OPEN NEW ACCOUNT
            </div>
          </div>

          {showViewModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
              <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-xl relative">
                <button
                  onClick={() => setShowViewModal(false)}
                  className="absolute top-2 right-4 text-gray-500 text-xl hover:text-black"
                >
                  &times;
                </button>

                <h2 className="text-xl font-bold text-center mb-6">
                  Ascend Federal Credit Union
                </h2>

                <div className="mb-6 text-sm text-gray-700">
                  <p>
                    Welcome, {userName} {userLastName}
                  </p>
                  <p>
                    Account Number: <strong>{AcctNum}</strong>
                  </p>
                  <p>
                    Routine Number: <strong>233293939</strong>
                  </p>
                  <p>
                    Account Balance:{" "}
                    <strong>
                      $
                      {userAmount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </strong>
                  </p>
                  {/* <p>Last Deposit Date: <strong>July 19, 2025</strong></p> */}
                  <p>
                    Deposit Reference Number: <strong>2234-WN7823490</strong>
                  </p>
                  <p className="text-green-600 font-semibold mt-2">
                    Status: Funds Available for Payout
                  </p>
                </div>

                {/* <div className="overflow-x-auto">
        <table className="w-full border text-sm text-left mb-6">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border px-3 py-2">Date</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Amount</th>
              <th className="border px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>

             <tr>
              <td className="border px-3 py-2">2025-12-07</td>
              <td className="border px-3 py-2 text-green-600 ">Interest (1%)</td>
              <td className="border px-3 py-2">$998.25</td>
              <td className="border px-3 py-2  text-green-600">Success</td>
            </tr>
             <tr>
              <td className="border px-3 py-2">2025-12-07</td>
              <td className="border px-3 py-2 text-green-600 ">Deposit</td>
              <td className="border px-3 py-2">$14,700.00</td>
              <td className="border px-3 py-2  text-green-600">Success</td>
            </tr>
 <tr>
              <td className="border px-3 py-2">2025-12-07</td>
              <td className="border px-3 py-2  text-green-600">Interest (1%)</td>
              <td className="border px-3 py-2">$998.25</td>
              <td className="border px-3 py-2  text-green-600">Success</td>
            </tr>

 <tr>
              <td className="border px-3 py-2">2025-11-07</td>
              <td className="border px-3 py-2 text-green-600 ">Deposit</td>
              <td className="border px-3 py-2">$300.00</td>
              <td className="border px-3 py-2 text-green-600">Success</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2025-11-07</td>
              <td className="border px-3 py-2 text-green-600">Deposit</td>
              <td className="border px-3 py-2">$15,000.00</td>
              <td className="border px-3 py-2 text-green-600">Success</td>
            </tr>
           
            <tr>
              <td className="border px-3 py-2">2025-08-05</td>
              <td className="border px-3 py-2 text-green-600">Deposit</td>
              <td className="border px-3 py-2">$15,000.00</td>
              <td className="border px-3 py-2 text-green-600">Success</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2025-07-05</td>
              <td className="border px-3 py-2 text-green-600">Interest (1%)</td>
              <td className="border px-3 py-2">$998.25</td>
              <td className="border px-3 py-2 text-green-600">Success</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2025-07-03</td>
              <td className="border px-3 py-2 text-red-600">Service Fee</td>
              <td className="border px-3 py-2">$45.00</td>
              <td className="border px-3 py-2 text-green-600">Success</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2025-07-03</td>
              <td className="border px-3 py-2 text-red-600">Tax</td>
              <td className="border px-3 py-2">$30.00</td>
              <td className="border px-3 py-2 text-green-600">Success</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2025-07-03</td>
              <td className="border px-3 py-2 text-red-600">Maintenance</td>
              <td className="border px-3 py-2">$100.00</td>
              <td className="border px-3 py-2 text-green-600">Success</td>
            </tr>

             <tr>
              <td className="border px-3 py-2">2025-07-03</td>
              <td className="border px-3 py-2 text-green-600">Deposit</td>
              <td className="border px-3 py-2">$1,000,000.00</td>
              <td className="border px-3 py-2 text-green-600">Success</td>
            </tr>
          </tbody>
        </table>
      </div> */}

                <p className="text-xs text-gray-500 text-center">
                  This dashboard reflects the most current status of your
                  winnings under the Benson Law Firm Mega Bonus Program.
                  <br />
                  Your deposit has been securely processed by CKT National
                  Reserve. If you have any questions or would like to request a
                  payout, please contact your claim specialist directly.
                </p>
              </div>
            </div>
          )}

          {/* Open Savings CTA */}
          <div className="bg-red-600 text-white rounded-xl shadow p-4 space-y-1 text-center">
            <p className="text-lg font-medium">Open a savings account</p>
            <p className="underline text-sm cursor-pointer">
              Open an account &gt;
            </p>
          </div>
        </div>
      </div>

      <div></div>

      <div className="p-5 bg-gray-100">
        <div className="bg-white rounded-xl shadow p-8 mb-5 px-5 py-3 ">
          <h2 className="text-xl font-bold">Cash Flow Monitor</h2>
          <p className="text-sm text-gray-600 mt-1">
            Get a comprehensive look at your day-to-day business.
          </p>
          <div className="mt-4 border-t pt-3">
            <p className="text-red-800 text-sm  text-center font-bold cursor-pointer">
              VIEW CASH FLOW
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-8  mb-[100px] px-5 py-3">
          <h2 className="text-xl font-bold">Link Your Accounts</h2>
          <p className="text-sm text-gray-600 mt-1">
            Access your Personal and Small Business accounts from this page.
          </p>
          <div className="mt-4 border-t pt-3">
            <p className="text-red-800 text-sm  text-center font-bold cursor-pointer">
              CREATE LINK
            </p>
          </div>
        </div>
      </div>

      {/* <StatComponent /> */}
      <BottomNav />
      <BottomNav2 />

      {/* <Blog/> */}
    </>
  );
};

export default Dashboard;
