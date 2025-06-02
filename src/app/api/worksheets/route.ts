import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    worksheets: [
      {
        id: 1,
        name: "Worksheet 1",
        description: "Worksheet 1 description",
        config: {
          database: "db-1",
          schema: "schema-2",
          table: "table-2",
          queryInput: "SELECT * FROM table-2",
        },
      },
      {
        id: 2,
        name: "Worksheet 2",
        description: "Worksheet 2 description",
        config: {
          database: "db-2",
          schema: "schema-3",
          table: "table-4",
          queryInput: "SELECT * FROM table-4",
        },
      },
    ],
  });
};
