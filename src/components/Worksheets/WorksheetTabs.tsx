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
            className={`cursor-pointer p-2 rounded-md text-black  ${
              selectedWorksheetId === worksheet.id
                ? "bg-blue-500 font-bold"
                : "bg-gray-200"
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
