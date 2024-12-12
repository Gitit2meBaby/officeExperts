import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Add-in Creation",
  description:
    "Add-ins extend the functionality of Office products and can make new functionality available to all of your staff, documents. Call 1300102810",

  // Additional metadata
  keywords: [
    // Core Add-in services
    "Office add-in development",
    "VSTO add-in creation",
    "Custom Office add-ins",
    "Microsoft Office add-ins",
    "Office extension development",

    // Location-based
    "Add-in developers Australia",
    "VSTO developers Sydney",
    "Office add-in services Melbourne",
    "Add-in creation Brisbane",

    // Service-specific long tail
    "Excel VSTO add-in development",
    "Word add-in creation",
    "PowerPoint add-in solutions",
    "Outlook add-in programming",
    "Office automation add-ins",

    // Technology combinations
    "Visual Studio add-in development",
    "Office 365 add-in integration",
    "SharePoint add-in creation",
    "Enterprise Office add-ins",
    "Commercial Office add-ins",
  ],

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/add-in-creation/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
