const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);


const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);


/**
 * Component for the Reports Overview section.
 */
export const ReportsOverviewSection: React.FC = () => (
    <section className="pt-4">
        <div className="flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold text-gray-900">
                Reports overview
            </h2>
            {/* Date Picker (Simulated) */}
            <div className="flex items-center text-sm font-medium text-gray-700">
                <CalendarIcon className="w-4 h-4 mr-1 text-gray-500" />
                <button className="px-2 py-1 bg-white rounded-md border border-gray-200 hover:bg-gray-50 transition flex items-center">
                    Jun 15, 2021
                    <span className='mx-1 text-gray-400'>–</span>
                    Jun 22, 2021
                    <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
                </button>
            </div>
        </div>
        {/* Placeholder for the actual report data table/list */}
        <div className="mt-4 p-8 bg-white rounded-xl shadow-sm border border-gray-100 h-48 flex items-center justify-center text-gray-400">
            Detailed reports table/list will go here.
        </div>
    </section>
);