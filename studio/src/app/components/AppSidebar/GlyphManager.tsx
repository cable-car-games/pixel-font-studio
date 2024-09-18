import React from "react";
import { Button, Menu, MenuItem, Popover, Section } from "@blueprintjs/core";
import { GlyphSectionView } from "./GlyphManager/GlyphSection";

export function GlyphManager() {
  return (
    <Section
      compact
      title="Glyphs"
      icon="new-text-box"
      rightElement={
        <Popover
          content={
            <Menu>
              <MenuItem text="From codepoint range" />
              <MenuItem text="From Unicode block" />
            </Menu>
          }
        >
          <Button icon="add" minimal />
        </Popover>
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
    </Section>
  );
}
