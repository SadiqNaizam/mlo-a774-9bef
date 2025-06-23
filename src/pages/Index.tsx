import React from 'react';

// Import the main layout component that defines the shell (sidebar, header, main area)
import MainAppLayout from '../components/layout/MainAppLayout';

// Import the organism-level components that will populate the dashboard
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import TrackingChart from '../components/Dashboard/TrackingChart';
import ReasonsStats from '../components/Dashboard/ReasonsStats';

/**
 * The main dashboard page for the Leads Dashboard Clone application.
 * This page serves as the entry point and assembles all the primary
 * data visualization components within the application's main layout.
 *
 * It uses the MainAppLayout to provide a consistent structure with a sidebar and header,
 * and then populates the main content area with dashboard-specific widgets.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/*
        The main content area is provided by MainAppLayout's `children`.
        This div acts as a container for all the dashboard widgets,
        arranging them in a vertical stack with consistent spacing.
        The layout requirements dictate a two-column grid for some content,
        which is handled within the child components themselves.
      */}
      <div className="flex flex-col gap-6">
        {/*
          The StatsCardGrid component displays the top-level lead funnel
          and source analytics. It includes its own tab controls and layout.
        */}
        <StatsCardGrid />

        {/*
          The TrackingChart component visualizes lead tracking data over time.
          It is designed to span the full width of its container.
        */}
        <TrackingChart />

        {/*
          The ReasonsStats component provides a breakdown of why leads were lost
          and other miscellaneous statistics.
        */}
        <ReasonsStats />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
