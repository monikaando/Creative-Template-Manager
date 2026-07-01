import { templates } from "../data/templates";
import TemplateCard from "./TemplateCard";
import { useState } from "react";

export default function TemplateList() {
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLowerCase();
  const filteredTemplates = templates.filter((template) =>
    template.name.toLowerCase().startsWith(normalizedSearch),
  );
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
          <TemplateCard key={template.id} template={template} />
        ))}
      </ul>
    </section>
  );
}
