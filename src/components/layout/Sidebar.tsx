import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar layout component.
 * It serves as a structural wrapper for the main navigation component.
 * The actual content and styling of the navigation are encapsulated in SidebarNav.
 * Per layout requirements, this component will be placed in a grid area that respects
 * the intrinsic width defined within SidebarNav (w-64).
 */
const Sidebar: React.FC = () => {
  return (
    // The SidebarNav component is self-contained with its width and styling.
    // This wrapper places it within the larger application layout grid.
    <SidebarNav />
  );
};

export default Sidebar;
