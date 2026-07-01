export type TemplateStatus = "draft" | "published" | "archived";

export type Template = {
  id: number;
  name: string;
  category: string;
  status: TemplateStatus;
};
