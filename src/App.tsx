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
  const [isAddingTemplate, setIsAddingTemplate] = useState(false);
  const [editingTemplateId, setEditingTemplateId] = useState<number | null>(
    null,
  );
  console.log("templates", templates);
  const handleAddTemplate = (template: NewTemplate) => {
    setTemplates((currentTemplates) => [
      ...currentTemplates,
      {
        ...template,
        id: currentTemplates.length + 1,
      },
    ]);

    setIsAddingTemplate(false);
  };
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
      currentTemplates.map((currentTemplate) =>
        currentTemplate.id === template.id ? template : currentTemplate,
      ),
    );

    setEditingTemplateId(null);
  };
  const handleCancelEditing = () => {
    setEditingTemplateId(null);
  };

  const handleCancelAdding = () => {
    setIsAddingTemplate(false);
  };
  return (
    <main>
      <h1>Creative Template Manager</h1>
      <button onClick={() => setIsAddingTemplate(true)}>Add Template</button>
      <TemplateList
        templates={templates}
        onSelectTemplate={setSelectedTemplate}
        onAutoSelectTemplate={setSelectedTemplate}
        onDeleteTemplate={handleDeleteTemplate}
        onEditTemplate={handleEditTemplate}
      />
      {selectedTemplate && <SelectedTemplate template={selectedTemplate} />}{" "}
      {editingTemplate && (
        <EditTemplateForm
          key={editingTemplate.id}
          template={editingTemplate}
          onCancel={handleCancelEditing}
          onSave={handleSaveTemplate}
        />
      )}
      {isAddingTemplate && (
        <AddTemplateForm
          onCancel={handleCancelAdding}
          onSave={handleAddTemplate}
        />
      )}
    </main>
  );
}

export default App;
