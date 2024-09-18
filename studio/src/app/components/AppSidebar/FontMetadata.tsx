import React from "react";
import {
  Button,
  FormGroup,
  InputGroup,
  Section,
  SectionCard,
} from "@blueprintjs/core";

export function FontMetadata() {
  return (
    <Section compact title="Font Metadata" icon="info-sign">
      <SectionCard>
        <FormGroup label="Title" labelFor="sidebar-fontmeta-title">
          <InputGroup id="sidebar-fontmeta-title" />
        </FormGroup>
        <FormGroup label="Author" labelFor="sidebar-fontmeta-author">
          <InputGroup id="sidebar-fontmeta-author" />
        </FormGroup>
        <Button text="Update" fill intent="primary" small />
      </SectionCard>
    </Section>
  );
}
