import React from "react";
import { AppSidebar } from "./AppSidebar";
import { AppContent } from "./AppContent";
import { AppToolbar } from "./AppToolbar";

export function AppShell() {
  return (
    <div>
      <AppToolbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <AppSidebar />
        <AppContent />
      </div>
    </div>
  );
}
