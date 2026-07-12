import { useState, type FormEventHandler } from "react";
import type { NewTemplate, TemplateStatus } from "../types/Template";

type AddTemplateFormProps = {
  onCancel: () => void;
  onSave: (template: NewTemplate) => void;
};
export default function AddTemplateForm({
  onCancel,
  onSave,
}: AddTemplateFormProps) {
  const [formData, setFormData] = useState<NewTemplate>({
    name: "",
    category: "Social",
    status: "draft",
  });
  const handleAddTemplateCancel = () => {
    onCancel();
  };
  const handleAddTemplateSave: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleAddTemplateSave}>
      <input
        type="text"
        placeholder="Template Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <select
        value={formData.category}
        onChange={(event) =>
          setFormData({ ...formData, category: event.target.value })
        }
      >
        <option value="Social">Social</option>
        <option value="Display">Display</option>
      </select>
      <select
        value={formData.status}
        onChange={(event) =>
          setFormData({
            ...formData,
            status: event.target.value as TemplateStatus,
          })
        }
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
        <option value="archived">Archived</option>
      </select>
      <button type="submit">Add</button>
      <span> </span>
      <button type="button" onClick={handleAddTemplateCancel}>
        Cancel
      </button>
    </form>
  );
}
