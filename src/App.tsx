import SelectedTemplate from "./components/SelectedTemplate";
import TemplateList from "./components/TemplateList";
import type { Template } from "./types/Template";
import { useState } from "react";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  return (
    <main>
      <h1>Creative Template Manager</h1>
      <TemplateList
        onSelectTemplate={setSelectedTemplate}
        onAutoSelectTemplate={setSelectedTemplate}
      />
      {selectedTemplate && <SelectedTemplate template={selectedTemplate} />}
    </main>
  );
}

export default App;
