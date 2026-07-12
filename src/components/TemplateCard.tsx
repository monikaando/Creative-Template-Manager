import type { Template } from "../types/Template";

type TemplateCardProps = {
  template: Template;
  onSelectTemplate: (template: Template) => void;
  onDeleteTemplate: (templateId: number) => void;
};

export default function TemplateCard({
  template,
  onSelectTemplate,
  onDeleteTemplate,
}: TemplateCardProps) {
  return (
    <li onClick={() => onSelectTemplate(template)}>
      <h2>{template.name}</h2>
      <button
        onClick={(event) => {
          event.stopPropagation();
          onDeleteTemplate(template.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
