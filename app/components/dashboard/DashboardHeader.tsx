

export const DashboardHeader: React.FC = () => (
    <header className="mb-8">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                    Welcome back, User
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    +12268999485
                </p>
            </div>
            {/* <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition whitespace-nowrap hidden sm:block">
                Customize dashboard
            </button> */}
        </div>
    </header>
);