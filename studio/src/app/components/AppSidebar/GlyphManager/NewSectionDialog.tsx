import React, { useCallback, useState } from "react";
import {
  Button,
  ControlGroup,
  Dialog,
  DialogBody,
  DialogFooter,
  FormGroup,
  MenuItem,
  NumericInput,
} from "@blueprintjs/core";
import unicodeBlockSource from "bundle-text:../../../data/Blocks.txt";
import { getCreateNewItem, ItemRenderer, Suggest } from "@blueprintjs/select";

type Block = {
  name: string;
  rangeStart: number;
  rangeEnd: number;
  predefined: boolean;
};

const BlockRenderer: ItemRenderer<Block> = (
  block,
  { handleClick, handleFocus, modifiers },
) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }

  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      key={block.name}
      text={block.name}
      label={`U+${block.rangeStart.toString(16).padStart(4, "0").toUpperCase()}-U+${block.rangeEnd.toString(16).padStart(4, "0").toUpperCase()}`}
      onClick={handleClick}
      onFocus={handleFocus}
      roleStructure="listoption"
    />
  );
};

const NewBlockRenderer = (
  query: string,
  active: boolean,
  handleClick: React.MouseEventHandler<HTMLElement>,
) => (
  <MenuItem icon="edit" text={query} active={active} onClick={handleClick} />
);

export function NewSectionDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [, setTitle] = useState("");
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(0x7f);

  const unicodeBlocks: Block[] = unicodeBlockSource
    .split("\n")
    .filter((line) => !(line.length < 1 || line.startsWith("#")))
    .map((line) => /^([0-9A-F]+)\.\.([0-9A-F]+); (.+)$/.exec(line))
    .map((regexResult) => ({
      rangeStart: parseInt(regexResult[1], 16),
      rangeEnd: parseInt(regexResult[2], 16),
      name: regexResult[3],
      predefined: true,
    }));

  const setBlock = useCallback((block: Block) => {
    setTitle(block.name);
    setRangeStart(block.rangeStart);
    setRangeEnd(block.rangeEnd);
  }, []);

  const setCustomBlock = useCallback(
    (name: string) => ({
      name,
      rangeStart: rangeStart,
      rangeEnd: rangeEnd,
      predefined: true,
    }),
    [rangeStart, rangeEnd],
  );

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Add Glyph Block">
      <DialogBody>
        <FormGroup label="Title" fill>
          <Suggest
            items={unicodeBlocks}
            itemRenderer={BlockRenderer}
            onItemSelect={setBlock}
            createNewItemFromQuery={setCustomBlock}
            createNewItemRenderer={NewBlockRenderer}
            createNewItemPosition="first"
            inputValueRenderer={(block) => block.name}
            activeItem={getCreateNewItem()}
            inputProps={{ placeholder: "" }}
          />
        </FormGroup>
        <ControlGroup fill title="Codepoint Range">
          <FormGroup label="Range Start" fill>
            <NumericInput
              onValueChange={(value) => setRangeStart(value)}
              value={rangeStart}
              min={0}
              max={rangeEnd}
              fill
            />
          </FormGroup>

          <FormGroup label="Range End" fill>
            <NumericInput
              onValueChange={(value) => setRangeEnd(value)}
              value={rangeEnd}
              min={rangeStart}
              fill
            />
          </FormGroup>
        </ControlGroup>
      </DialogBody>
      <DialogFooter
        minimal
        actions={
          <>
            <Button text="Cancel" onClick={onClose} />
            <Button text="Add" intent="primary" />
          </>
        }
      />
    </Dialog>
  );
}
