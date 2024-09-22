import React, { useState } from "react";
import { Button, Section } from "@blueprintjs/core";
import { GlyphSectionView } from "./GlyphManager/GlyphSection";
import { NewSectionDialog } from "./GlyphManager/NewSectionDialog";

export function GlyphManager() {
  const [isNewSectionOverlayOpen, setNewSectionOverlayOpen] = useState(false);

  return (
    <Section
      compact
      title="Glyphs"
      icon="new-text-box"
      rightElement={
        <Button
          icon="add"
          minimal
          onClick={() => setNewSectionOverlayOpen(true)}
        />
      }
    >
      <GlyphSectionView
        glyphSection={{
          title: "Basic Latin",
          start: 0x0000,
          end: 0x007f,
        }}
        isShown
      />

      <NewSectionDialog
        isOpen={isNewSectionOverlayOpen}
        onClose={() => setNewSectionOverlayOpen(false)}
      />
    </Section>
  );
}
