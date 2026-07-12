import type { NewTemplate, Template } from "../types/Template";

type TemplateCardProps = {
  template: Template;
  onSelectTemplate: (template: Template) => void;
  onDeleteTemplate: (templateId: number) => void;
  onEditTemplate: (templateId: number) => void;
  onAddTemplate: (template: NewTemplate) => void;
};

export default function TemplateCard({
  template,
  onSelectTemplate,
  onDeleteTemplate,
  onEditTemplate,
  onAddTemplate,
}: TemplateCardProps) {
  return (
    <li onClick={() => onSelectTemplate(template)}>
      <h2>{template.name}</h2>
      <button
        onClick={(event) => {
          event.stopPropagation();
          onAddTemplate(template);
        }}
      >
        Add
      </button>
      <span> </span>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onEditTemplate(template.id);
        }}
      >
        Edit
      </button>
      <span> </span>
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
