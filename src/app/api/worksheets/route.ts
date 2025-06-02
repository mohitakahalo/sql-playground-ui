import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    worksheets: [
      {
        id: 1,
        name: "Worksheet 1",
        description: "Worksheet 1 description",
        config: {
          database: "test",
          schema: "public",
          table: "users",
        },
      },
    ],
  });
};
