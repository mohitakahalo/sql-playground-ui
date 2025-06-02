import { useEffect, useState } from "react";
import { DatabaseType, SchemaType, TableType } from "@/types/database";
import { WorksheetConfigType } from "@/types/worksheet";

type DatabaseSidebarProps = {
  selectedConfig: WorksheetConfigType;
  setSelectedConfig: (config: WorksheetConfigType) => void;
};

const DatabaseSidebar = ({
  selectedConfig,
  setSelectedConfig,
}: DatabaseSidebarProps) => {
  const [databases, setDatabases] = useState<DatabaseType[]>([]);

  useEffect(() => {
    const fetchDatabases = async () => {
      const response = await fetch("/api/databases");
      const { databases } = (await response.json()) as {
        databases: DatabaseType[];
      };
      setDatabases(databases);
    };
    fetchDatabases();
  }, []);

  return (
    <div className="flex flex-col gap-2 p-4">
      {databases.map((db: DatabaseType) => (
        <div key={db.id}>
          <span className="text-sm font-bold">{db.name}</span>
          {db.schemas.map((schema: SchemaType) => (
            <div key={schema.id} className="pl-3">
              <span className="text-sm font-bold py-1">{schema.name}</span>
              {schema.tables.map((table: TableType) => (
                <div key={table.id} className="pl-3">
                  <span
                    className={`text-sm font-bold p-1 cursor-pointer rounded-sm ${
                      selectedConfig?.table === table.id
                        ? "bg-blue-500 text-white rounded-sm"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedConfig({
                        ...selectedConfig,
                        database: db.id,
                        schema: schema.id,
                        table: table.id,
                      });
                    }}
                  >
                    {table.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DatabaseSidebar;
