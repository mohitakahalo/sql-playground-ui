import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    databases: [
      {
        name: "Database 1",
        id: "db-1",
        schemas: [
          {
            name: "Schema 1",
            id: "schema-1",
            tables: [
              {
                name: "Table 1",
                id: "table-1",
                columns: [
                  {
                    name: "Column 1",
                    type: "string",
                  },
                  {
                    name: "Column 2",
                    type: "string",
                  },
                ],
              },
              {
                name: "Table 2",
                id: "table-2",
                columns: [
                  {
                    name: "Column 3",
                    type: "string",
                  },
                  {
                    name: "Column 4",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "Schema 2",
            id: "schema-2",
            tables: [
              {
                name: "Table 3",
                id: "table-3",
                columns: [
                  {
                    name: "Column 1",
                    type: "string",
                  },
                  {
                    name: "Column 2",
                    type: "string",
                  },
                ],
              },
              {
                name: "Table 4",
                id: "table-4",
                columns: [
                  {
                    name: "Column 3",
                    type: "string",
                  },
                  {
                    name: "Column 4",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Database 2",
        id: "db-2",
        schemas: [
          {
            name: "Schema 3",
            id: "schema-3",
            tables: [
              {
                name: "Table 5",
                id: "table-5",
                columns: [
                  {
                    name: "Column 1",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "Schema 4",
            id: "schema-4",
            tables: [
              {
                name: "Table 6",
                id: "table-6",
                columns: [
                  {
                    name: "Column 1",
                    type: "string",
                  },
                ],
              },
              {
                name: "Table 7",
                id: "table-7",
                columns: [
                  {
                    name: "Column 1",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
};
