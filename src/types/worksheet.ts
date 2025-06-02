export type WorksheetConfigType = {
  database: string;
  schema: string;
  table: string;
};

export type WorksheetType = {
  id: number;
  name: string;
  description?: string;
  config: WorksheetConfigType & { queryInput?: string };
};
