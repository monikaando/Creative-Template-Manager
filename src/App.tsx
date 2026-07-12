import SelectedTemplate from "./components/SelectedTemplate";
import TemplateList from "./components/TemplateList";
import EditTemplateForm from "./components/EditTemplateForm";
import type { NewTemplate, Template } from "./types/Template";
import { useState } from "react";
import { templates as initialTemplates } from "./data/templates";
import AddTemplateForm from "./components/AddTemplateForm";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [templates, setTemplates] = useState<Template[]>(initialTemplates);
  const [addingTemplateId, setAddingTemplateId] = useState<number | null>(null);
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
  const addingTemplate = templates.find(
    (template) => template.id === addingTemplateId,
  );
  const handleSaveTemplate = (template: Template) => {
    setSelectedTemplate((currentSelectedTemplate) =>
      currentSelectedTemplate?.id === template.id
        ? template
        : currentSelectedTemplate,
    );
    setEditingTemplateId(null);
  };
  const handleCancelEditing = () => {
    setEditingTemplateId(null);
  };
  const handleAddTemplate = (template: NewTemplate) => {
    setTemplates((currentTemplates) => [
      ...currentTemplates,
      { ...template, id: currentTemplates.length + 1 },
    ]);
  };
  const handleCancelAdding = (templateId: number) => {
    setAddingTemplateId((currentAddingTemplateId) =>
      currentAddingTemplateId === templateId ? null : currentAddingTemplateId,
    );
    setAddingTemplateId(null);
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
        onAddTemplate={handleAddTemplate}
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
      {addingTemplate && (
        <AddTemplateForm
          key={addingTemplate.id}
          template={addingTemplate}
          onCancel={() => handleCancelAdding(addingTemplateId)}
          onSave={handleSaveTemplate}
        />
      )}
    </main>
  );
}

export default App;
