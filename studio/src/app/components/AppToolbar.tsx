import React, { useContext } from "react";
import {
  Alignment,
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  Navbar,
  Popover,
} from "@blueprintjs/core";
import { AboutDialogContext } from "./Dialogs/AboutDialog";

export function AppToolbar() {
  const [, setAboutDialogOpen] = useContext(AboutDialogContext);

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Pixel Font Studio</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp5-minimal" icon="upload" text="Open" />
        <Button className="bp5-minimal" icon="download" text="Save" />
        <Navbar.Divider />
        <Popover
          minimal
          placement="bottom-start"
          content={
            <Menu>
              <MenuItem text="TTF" disabled />
              <MenuItem text="PNG" disabled />
              <MenuDivider />
              <MenuItem text="More Exporters..." disabled />
            </Menu>
          }
        >
          <Button
            icon="export"
            text="Export"
            rightIcon="chevron-down"
            minimal
          />
        </Popover>
      </Navbar.Group>

      <Navbar.Group align={Alignment.RIGHT}>
        <Popover
          minimal
          placement="bottom-end"
          content={
            <Menu>
              <MenuItem icon="video" text="Getting Started" />
              <MenuItem icon="manual" text="Manual" />
              <MenuDivider />
              <MenuItem icon="dollar" text="Koha (Donations)" />
              <MenuItem
                icon="info-sign"
                text="About"
                onClick={() => setAboutDialogOpen(true)}
              />
            </Menu>
          }
        >
          <Button minimal icon="help" rightIcon="chevron-down" />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
}
