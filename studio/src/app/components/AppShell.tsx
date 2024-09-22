import React from "react";
import { AppSidebar } from "./AppSidebar";
import { AppContent } from "./AppContent";
import { AppToolbar } from "./AppToolbar";
import { OverlaysProvider } from "@blueprintjs/core";

export function AppShell() {
  return (
    <OverlaysProvider>
      <div>
        <AppToolbar />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <AppSidebar />
          <AppContent />
        </div>
      </div>
    </OverlaysProvider>
  );
}
