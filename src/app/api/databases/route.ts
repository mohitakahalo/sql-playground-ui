import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    databases: [
      {
        name: "DATABASE_1",
        id: "DATABASE_1",
        schemas: [
          {
            name: "SCHEMA_1",
            id: "SCHEMA_1",
            tables: [
              {
                name: "products",
                id: "products",
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
                name: "customers",
                id: "customers",
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
              {
                name: "orders",
                id: "orders",
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
            name: "SCHEMA_2",
            id: "SCHEMA_2",
            tables: [
              {
                name: "employees",
                id: "employees",
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
            ],
          },
        ],
      },
      {
        name: "DATABASE_2",
        id: "DATABASE_2",
        schemas: [
          {
            name: "SCHEMA_3",
            id: "SCHEMA_3",
            tables: [
              {
                name: "suppliers",
                id: "suppliers",
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
