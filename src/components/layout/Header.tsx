import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header layout component.
 * This component acts as a container for the application's top header content.
 * The specific header implementation, including title and actions, is in TopHeader.
 * The layout requirements specify a fixed height (h-16), which is implemented in TopHeader.
 */
const Header: React.FC = () => {
  return (
    // The TopHeader component contains the dashboard-specific title and create button.
    // This wrapper component integrates it into the MainAppLayout.
    <TopHeader />
  );
};

export default Header;
