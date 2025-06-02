import { worksheetStore } from "@/stores/worksheet.store";
import { WorksheetType } from "@/types/worksheet";

type WorksheetTabsProps = {
  worksheets: WorksheetType[];
  selectedWorksheetId: number | null;
};

const WorksheetTabs = ({
  worksheets,
  selectedWorksheetId,
}: WorksheetTabsProps) => {
  return (
    <>
      {worksheets.map((worksheet: WorksheetType) => {
        return (
          <li
            key={worksheet.id}
            className={`px-4 cursor-pointer rounded-md rounded-b-none p-2 text-black border border-b-0 border-r-0 border-gray-300 font-[family-name:var(--font-geist-mono)] ${
              selectedWorksheetId === worksheet.id
                ? "font-semibold bg-gray-200"
                : ""
            }`}
            onClick={() => {
              worksheetStore.setKey("selectedWorksheetId", worksheet?.id);
              worksheetStore.setKey(
                "queryInput",
                worksheet.config.queryInput || "",
              );
            }}
          >
            {worksheet.name}
          </li>
        );
      })}
    </>
  );
};

export default WorksheetTabs;
