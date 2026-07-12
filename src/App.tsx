import SelectedTemplate from "./components/SelectedTemplate";
import TemplateList from "./components/TemplateList";
import EditTemplateForm from "./components/EditTemplateForm";
import type { Template } from "./types/Template";
import { useState } from "react";
import { templates as initialTemplates } from "./data/templates";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [templates, setTemplates] = useState<Template[]>(initialTemplates);
  const [editingTemplateId, setEditingTemplateId] = useState<number | null>(
    null,
  );
  const handleDeleteTemplate = (templateId: number) => {
    setTemplates((currentTemplates) =>
      currentTemplates.filter((template) => template.id !== templateId),
    );

    setSelectedTemplate((currentSelectedTemplate) =>
      currentSelectedTemplate?.id === templateId
        ? null
        : currentSelectedTemplate,
    );
  };
  const handleEditTemplate = (templateId: number) => {
    setEditingTemplateId(templateId);
  };
  const editingTemplate = templates.find(
    (template) => template.id === editingTemplateId,
  );
  const handleSaveTemplate = (template: Template) => {
    setTemplates((currentTemplates) =>
      currentTemplates.map((t) => (t.id === template.id ? template : t)),
    );
    setEditingTemplateId(null);
  };
  const handleCancelEditing = () => {
    setEditingTemplateId(null);
  };
  return (
    <main>
      <h1>Creative Template Manager</h1>
      <TemplateList
        templates={templates}
        onSelectTemplate={setSelectedTemplate}
        onAutoSelectTemplate={setSelectedTemplate}
        onDeleteTemplate={handleDeleteTemplate}
        onEditTemplate={handleEditTemplate}
      />
      {selectedTemplate && <SelectedTemplate template={selectedTemplate} />}
      {editingTemplate && (
        <EditTemplateForm
          key={editingTemplate.id}
          template={editingTemplate}
          onCancel={handleCancelEditing}
          onSave={handleSaveTemplate}
        />
      )}
    </main>
  );
}

export default App;
