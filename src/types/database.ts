export type DatabaseType = {
  name: string;
  id: string;
  schemas: SchemaType[];
};

export type SchemaType = {
  name: string;
  id: string;
  tables: TableType[];
};

export type TableType = {
  name: string;
  id: string;
  columns: ColumnType[];
};

export type ColumnType = {
  name: string;
  type: string;
};
