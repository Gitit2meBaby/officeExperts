import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Database Development and Solutions | Office Expert Australia",
  description:
    "Microsoft Database Solutions We create and support a wide variety of database solutions including the following Access is an efficient, reliable",

  // Additional metadata
  keywords: [
    // Core database services
    "Microsoft database development",
    "database solutions Australia",
    "Access database development",
    "SQL Server solutions",
    "Azure database services",

    // Service-specific
    "database migration services",
    "database integration",
    "multi-user database solutions",
    "cloud database development",
    "SharePoint database solutions",

    // Technology combinations
    "Access SQL Server integration",
    "Azure SQL databases",
    "web database development",
    "ASP.NET database solutions",
    "database GUI development",

    // Business solutions
    "business database solutions",
    "enterprise database systems",
    "custom database development",
    "database automation solutions",
    "database consulting services",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
