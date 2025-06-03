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
  const {
    query,
    page = 1,
    pageSize = 10,
    searchTerm = "",
  } = await request.json();

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    let data = [] as any[];

    // Get mock data from CSV files based on query
    if (query.toLowerCase().includes("from products")) {
      data = parseCSVFile("products.csv");
    } else if (query.toLowerCase().includes("from suppliers")) {
      data = parseCSVFile("suppliers.csv");
    } else if (query.toLowerCase().includes("from customers")) {
      data = parseCSVFile("customers.csv");
    } else {
      return NextResponse.json(
        { error: "Unsupported query or table" },
        { status: 400 },
      );
    }

    // Apply search filter if searchTerm is provided
    if (searchTerm) {
      data = data.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }

    // Calculate pagination
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = data.slice(startIndex, endIndex);

    return NextResponse.json({
      data: paginatedData,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        pageSize,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Error processing query:", error);
    return NextResponse.json(
      { error: "Error processing query" },
      { status: 500 },
    );
  }
};
