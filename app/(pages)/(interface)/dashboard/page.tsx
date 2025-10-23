import React from 'react';
import { DashboardHeader } from '@/app/components/dashboard/DashboardHeader';
import { MetricSection } from '@/app/components/dashboard/MetricSection';
import { SummarySection } from '@/app/components/dashboard/SummarySection';
import { ReportsOverviewSection } from '@/app/components/dashboard/ReportsOverviewSection';
import { ChartAreaInteractive} from '@/app/components/dashboard/ChartAreaInteractive';
// --- ICON DEFINITIONS (Using inline SVG for self-containment) ---









// ---------------------------------------------------------------------
// --- 3. MAIN CONTAINER (Puts it all together) ------------------------
// ---------------------------------------------------------------------

/**
 * Main component that assembles all dashboard sections.
 * This is what you would import and place between your sidebars.
 */
export default function DashboardContent() {
    return (
        <div className="p-8 max-w-full bg-gray-50">
            <DashboardHeader />
            <MetricSection />

            <SummarySection/>


          <ChartAreaInteractive/>
            {/* <ReportsOverviewSection/> */}
        </div>
    );
}
