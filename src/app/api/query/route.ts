/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { parse } from "csv-parse/sync";
import { readFileSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), "src", "_data");

function parseCSVFile(filename: string) {
  const filePath = join(DATA_DIR, filename);
  const fileContent = readFileSync(filePath, "utf-8");
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}

export const POST = async (request: Request) => {
  const { query } = await request.json();

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  let response = [] as any[];

  // MOCK API query to database
  try {
    if (query.toLowerCase().includes("from products")) {
      response = parseCSVFile("products.csv");
    } else if (query.toLowerCase().includes("from suppliers")) {
      response = parseCSVFile("suppliers.csv");
    } else if (query.toLowerCase().includes("from customers")) {
      response = parseCSVFile("customers.csv");
    } else {
      return NextResponse.json(
        { error: "Unsupported query or table" },
        { status: 400 },
      );
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error processing query:", error);
    return NextResponse.json(
      { error: "Error processing query" },
      { status: 500 },
    );
  }
};
