import SelectedTemplate from "./components/SelectedTemplate";
import TemplateList from "./components/TemplateList";
import type { Template } from "./types/Template";
import { useState } from "react";
import { templates as initialTemplates } from "./data/templates";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [templates, setTemplates] = useState<Template[]>(initialTemplates);
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
  return (
    <main>
      <h1>Creative Template Manager</h1>
      <TemplateList
        templates={templates}
        onSelectTemplate={setSelectedTemplate}
        onAutoSelectTemplate={setSelectedTemplate}
        onDeleteTemplate={handleDeleteTemplate}
      />
      {selectedTemplate && <SelectedTemplate template={selectedTemplate} />}
    </main>
  );
}

export default App;
