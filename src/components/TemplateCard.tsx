import type { Template } from "../types/Template";

type TemplateCardProps = {
  template: Template;
  onSelectTemplate: (template: Template) => void;
};

export default function TemplateCard({
  template,
  onSelectTemplate,
}: TemplateCardProps) {
  return (
    <li onClick={() => onSelectTemplate(template)}>
      <h2>{template.name}</h2>
    </li>
  );
}
