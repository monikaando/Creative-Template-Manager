import type { Template } from "../types/Template";

type SelectedTemplateProps = {
  template: Template | null;
};
const statusColor = {
  published: "green",
  draft: "orange",
  archived: "gray",
};
export default function SelectedTemplate({ template }: SelectedTemplateProps) {
  if (!template) {
    return <p>No template selected.</p>;
  }

  return (
    <section>
      <h2>Selected Template</h2>
      <p>Name: {template.name}</p>
      <p>Category: {template.category}</p>
      <p style={{ color: statusColor[template.status] }}>
        Status: {template.status}
      </p>
    </section>
  );
}
