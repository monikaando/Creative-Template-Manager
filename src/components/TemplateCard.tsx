import type { Template } from "../types/Template";

type TemplateCardProps = {
  template: Template;
};
const statusColor = {
  published: "green",
  draft: "orange",
  archived: "gray",
};
export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <li>
      <h2>{template.name}</h2>
      <p>Category: {template.category}</p>
      <p style={{ color: statusColor[template.status] }}>
        Status: {template.status}
      </p>
    </li>
  );
}
