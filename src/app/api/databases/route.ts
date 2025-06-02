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
              },
              {
                name: "customers",
                id: "customers",
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
              },
            ],
          },
        ],
      },
    ],
  });
};
