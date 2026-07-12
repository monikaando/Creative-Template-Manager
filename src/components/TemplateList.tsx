import { templates } from "../data/templates";
import TemplateCard from "./TemplateCard";
import { useState, useEffect, useMemo } from "react";
import type { Template } from "../types/Template";

type TemplateListProps = {
  onSelectTemplate: (template: Template) => void;
  onAutoSelectTemplate: (template: Template | null) => void;
};

export default function TemplateList({
  onSelectTemplate,
  onAutoSelectTemplate,
}: TemplateListProps) {
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLowerCase();
  const filteredTemplates = useMemo(() => {return templates.filter((template) =>
    template.name.toLowerCase().startsWith(normalizedSearch),
  )}, [normalizedSearch]);
  
  useEffect(() => {
    if (filteredTemplates.length === 1) {
      onAutoSelectTemplate(filteredTemplates[0]);
    } else if (filteredTemplates.length === 0) {
      onAutoSelectTemplate(null);
    }
  }, [filteredTemplates, onAutoSelectTemplate]);

  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Search templates"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {filteredTemplates.length === 0 && <li>No templates found</li>}
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onSelectTemplate={onSelectTemplate}
          />
        ))}
      </ul>
    </section>
  );
}
