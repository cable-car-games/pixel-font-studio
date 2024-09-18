import { Button, ButtonGroup, Code, SectionCard } from "@blueprintjs/core";

export interface GlyphSectionViewProps {
  glyphSection: {
    title: string;
    start: number;
    end: number;
  };
  isShown?: boolean;
  onShowToggle?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function GlyphSectionView({
  glyphSection,
  isShown,
  onShowToggle,
  onDelete,
  onEdit,
}: GlyphSectionViewProps) {
  return (
    <SectionCard
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className="info">
        <b>{glyphSection.title}</b>
        <br />
        <Code>
          U+{glyphSection.start.toString(16).padStart(4, "0").toUpperCase()}
        </Code>
        &ndash;
        <Code>
          U+{glyphSection.end.toString(16).padStart(4, "0").toUpperCase()}
        </Code>
      </div>
      <ButtonGroup minimal>
        <Button
          icon={isShown ? "eye-off" : "eye-open"}
          onClick={onShowToggle}
        />
        <Button icon="edit" onClick={onEdit} />
        <Button icon="delete" intent="danger" onClick={onDelete} />
      </ButtonGroup>
    </SectionCard>
  );
}
