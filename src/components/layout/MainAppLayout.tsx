import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * MainAppLayout defines the primary structure of the application.
 * It uses a CSS Grid to create a layout with a fixed sidebar, a fixed header,
 * and a scrollable main content area, adhering to the 'HLSB' layout type.
 *
 * Grid Definition:
 * - `grid-cols-[auto_1fr]`: Sidebar takes its own width, main area takes the rest.
 * - `grid-rows-[auto_1fr]`: Header takes its own height, main area takes the rest.
 *
 * @param {MainAppLayoutProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The main content to be rendered inside the layout.
 * @returns {React.ReactElement} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background font-sans">
      {/* Sidebar container that spans both rows of the grid */}
      <div className="row-span-2">
        <Sidebar />
      </div>
      
      {/* Header, placed in the first row of the second column */}
      <Header />
      
      {/* Main content area, placed in the second row of the second column */}
      {/* It is scrollable and has padding for the content */}
      <main className="overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
