



/**
 * Component for the Summary Statistics (Gross Volume, New Customers, etc.).
 */
export const SummarySection: React.FC = () => (

    <section className="flex flex-col gap-4 my-5"> <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-1 md:col-span-3">
    <h3 className="text-lg font-semibold text-gray-900 mb-3">
      Usage This Month
    </h3>

    {/* Calls */}
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">Calls</span>
        <span className="font-medium text-gray-900">65 / 100 mins</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>
    </div>

    {/* Messages */}
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">Messages</span>
        <span className="font-medium text-gray-900">40 / 100 msgs</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: "40%" }}
        ></div>
      </div>
    </div>
  </div>

  {/* --- Top-Up Balance Section --- */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-1 md:col-span-3">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Top-Up Balance
    </h3>
    <p className="text-3xl font-bold text-gray-900 mb-1">$0.00</p>
    <p className="text-sm text-gray-600 mb-3">
      Used only after your included minutes or messages run out.{" "}
      <span className="text-gray-500 italic">(You don’t need to top up yet.)</span>
    </p>
    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
      Add Top-Up
    </button>
  </div>
  
    </section>);
