import { worksheetStore } from "@/stores/worksheet.store";
import { useCallback } from "react";
import { useStore } from "@nanostores/react";
import { WorksheetConfigType } from "@/types/worksheet";

export const useWorksheetCard = () => {
  const { queryInput } = useStore(worksheetStore);

  const fetchQueryOutput = useCallback(async () => {
    const response = await fetch("/api/query", {
      method: "POST",
      body: JSON.stringify({ query: queryInput }),
    });
    const { output } = (await response.json()) as { output: string };
    worksheetStore.setKey("output", output);
  }, [queryInput]);

  const setSelectedConfig = useCallback(
    (worksheetId: number) => (config: WorksheetConfigType) => {
      const currentWorksheets = worksheetStore.get().worksheets;
      const currentWorksheetConfig = currentWorksheets.find(
        (worksheet) => worksheet.id === worksheetId,
      );

      if (!currentWorksheetConfig) {
        return;
      }

      const updatedWorksheets = currentWorksheets.map((worksheet) =>
        worksheet.id === worksheetId ? { ...worksheet, config } : worksheet,
      );

      worksheetStore.setKey("worksheets", updatedWorksheets);
    },
    [],
  );

  return { fetchQueryOutput, setSelectedConfig };
};
