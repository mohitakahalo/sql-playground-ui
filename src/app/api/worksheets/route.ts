import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    worksheets: [
      {
        id: 1,
        name: "Worksheet 1",
        config: {
          database: "DATABASE_1",
          schema: "SCHEMA_1",
          table: "products",
          queryInput: "SELECT * FROM products",
        },
      },
      {
        id: 2,
        name: "Worksheet 2",
        config: {
          database: "DATABASE_2",
          schema: "SCHEMA_3",
          table: "suppliers",
          queryInput: "SELECT * FROM suppliers",
        },
      },
    ],
  });
};
