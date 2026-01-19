import { useState } from "react";
import {  ShieldAlert, Info, CheckCircle, Clock, MessageCircle, Bell, TrendingUp } from "lucide-react";
import BottomNav from "../pages/stickyNav";
import BottomNav2 from "../pages/bottomnav2";


type Message = {
  id: number;
  icon: JSX.Element;
  subject: string;
  preview: string;
  full: string;
  date: string;
  unread: boolean;
};
const messages: Message[] = [
    {
    id: 2,
    icon: <Clock className="text-yellow-600" size={24} />,
    subject: "Withdrawal Request Pending – Action Required",
    preview: "Your $170,000 withdrawal request is pending token generation.",
    full: `Withdrawal Pending – Transaction Token Required

Dear Olivia Macdonald,

We have received your withdrawal request in the amount of $170,000 USD from your available crypto balance.

Current status: Pending

To complete this transaction, a unique transaction authorization token must be generated and submitted for verification. Once the token is provided, the withdrawal will be processed immediately.

Requested withdrawal amount: $170,000 USD  
Available balance: $530,000 USD

Please generate your transaction token from your security dashboard to proceed.

Thank you for your cooperation.`,
    date: "January 19, 2026",
    unread: true,
  },
  {
    id: 1,
    icon: <CheckCircle className="text-green-600" size={24} />,
    subject: "Crypto Funds Released – Balance Now Available",
    preview: "Your crypto funds totaling $530,000 have been successfully released.",
    full: `Funds Release Confirmation

Dear Olivia Macdonald,

We are pleased to inform you that payment for the release of your crypto assets has been successfully confirmed.

Total released funds: $530,000 USD

Your crypto balance is now fully available in your account and ready for transactions, withdrawals, or transfers.

If you have any questions or require assistance, please contact support through your dashboard.

Thank you for choosing our platform.`,
    date: "January 18, 2026",
    unread: true,
  },
  
  {
    id: 3,
    icon: <Info className="text-blue-600" size={24} />,
    subject: "Platform Maintenance Notice",
    preview: "Scheduled maintenance planned for improved performance.",
    full: `Scheduled Maintenance Notice

Dear Olivia Macdonald,

Please be informed that our platform will undergo routine maintenance to improve system performance and security.

Maintenance window:
January 7, 2026  
02:00 AM – 04:00 AM (UTC)

During this period, withdrawals and transfers may be temporarily unavailable. No action is required from you.

Thank you for your patience.`,
    date: "December 6, 2025",
    unread: false,
  },
  {
    id: 4,
    icon: <ShieldAlert className="text-red-600" size={24} />,
    subject: "Security Reminder: Protect Your Account",
    preview: "Enable extra security features to keep your assets safe.",
    full: `Account Security Reminder

Dear Olivia Macdonald,

We strongly recommend enabling all available security features on your account, including:

• Two-factor authentication (2FA)
• Transaction confirmation tokens
• Login alerts

These measures help ensure your crypto assets remain protected from unauthorized access.

Stay secure.`,
    date: "January 6, 2026",
    unread: false,
  },
  {
    id: 5,
    icon: <TrendingUp className="text-green-700" size={24} />,
    subject: "Market Update: Crypto Volatility Alert",
    preview: "Increased market activity detected across major assets.",
    full: `Market Activity Update

Dear Olivia Macdonald,

We’ve observed increased volatility across several major crypto assets. Market conditions may impact transaction confirmation times and exchange rates.

We advise monitoring your dashboard for real-time updates before initiating large transfers or trades.

This is an informational notice only.`,
    date: "January 6, 2026",
    unread: false,
  },
  {
    id: 6,
    icon: <Bell className="text-purple-600" size={24} />,
    subject: "New Feature Available: Transaction History Export",
    preview: "You can now export your full transaction history.",
    full: `New Feature Announcement

Dear Olivia Macdonald,

You can now export your complete transaction history directly from your dashboard in PDF or CSV format.

This feature is useful for:
• Personal record keeping
• Tax reporting
• Financial reviews

Visit your account dashboard to try it out.`,
    date: "December 6, 2025",
    unread: false,
  },
  {
    id: 7,
    icon: <MessageCircle className="text-gray-600" size={24} />,
    subject: "Support Ticket Update",
    preview: "Your recent inquiry has been reviewed by our team.",
    full: `Support Update

Dear Olivia Macdonald,

Your recent support inquiry has been successfully reviewed. No further action is required at this time.

If you need additional assistance, feel free to open a new ticket from your dashboard.

We’re always here to help.`,
    date: "January 6, 2026",
    unread: false,
  },
];




const InboxPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 mb-8">
        <h1 className="text-2xl font-bold mb-6 text-red-800 text-center">Metamask</h1>

        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`cursor-pointer border rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 bg-white ${
                msg.unread ? "border-l-4 border-red-600 bg-red-50/30" : "border-gray-200"
              }`}
            >
              <div className="mt-1">{msg.icon}</div>
              <div className="flex-1">
                <h3 className={`text-base font-semibold ${msg.unread ? "text-red-700" : "text-gray-800"}`}>
                  {msg.subject}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{msg.preview}</p>
              </div>
              <div className="text-sm text-gray-500 text-right">
                <p>{msg.date}</p>
                {msg.unread && (
                  <span className="text-xs text-white bg-red-600 px-2 py-0.5 rounded-full ml-1">
                    Unread
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>
            <div className="mb-3">{selectedMessage.icon}</div>
            <h2 className="text-xl font-bold text-red-700 mb-2">{selectedMessage.subject}</h2>
            <p className="text-gray-700 text-sm whitespace-pre-line">{selectedMessage.full}</p>
            <p className="text-xs text-gray-400 mt-4">{selectedMessage.date}</p>
          </div>
        </div>
      )}

      <BottomNav />
      <BottomNav2 />
     
    </>
  );
};

export default InboxPage;