import { useState, type FormEventHandler } from "react";
import type { Template, TemplateStatus } from "../types/Template";

type EditTemplateFormProps = {
  template: Template;
  onCancel: () => void;
  onSave: (template: Template) => void;
};
export default function EditTemplateForm({
  template,
  onCancel,
  onSave,
}: EditTemplateFormProps) {
  const [formData, setFormData] = useState(template);

  const handleSave: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSave(formData);
  };
  const handleCancelEditing = () => {
    onCancel();
  };
  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        placeholder="Template Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <span> </span>
      <select
        value={formData.category}
        onChange={(event) =>
          setFormData({ ...formData, category: event.target.value })
        }
      >
        <option value="Social">Social</option>
        <option value="Display">Display</option>
      </select>
      <span> </span>
      <select
        value={formData.status}
        onChange={(event) =>
          setFormData({
            ...formData,
            status: event.target.value as TemplateStatus,
          })
        }
      >
        <option value="published">Published</option>
        <option value="draft">Draft</option>
        <option value="archived">Archived</option>
      </select>
      <span> </span>
      <button type="submit">Save</button>
      <span> </span>
      <button type="button" onClick={handleCancelEditing}>
        Cancel
      </button>
    </form>
  );
}
