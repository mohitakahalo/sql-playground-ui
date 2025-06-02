import { map } from "nanostores";
import { WorksheetType } from "@/types/worksheet";

export const worksheetStore = map({
  worksheets: [] as WorksheetType[],
  selectedWorksheetId: null as number | null,
  queryInput: "",
  output: {},
});
