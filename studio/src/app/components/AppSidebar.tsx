import { FontMetadata } from "./AppSidebar/FontMetadata";
import { GlyphManager } from "./AppSidebar/GlyphManager";

export function AppSidebar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "320px",
        padding: "8px",
        gap: "8px",
      }}
    >
      <FontMetadata />
      <GlyphManager />
    </div>
  );
}
