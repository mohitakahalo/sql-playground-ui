import { WorksheetType } from "@/types/worksheet";

type WorksheetCardProps = {
  worksheet: WorksheetType;
};

const WorksheetCard = ({ worksheet }: WorksheetCardProps) => {
  return (
    <div>
      <h2>{worksheet.name}</h2>
      <div className="flex flex-col gap-2">
        <p>Database: {worksheet.config.database}</p>
        <p>Schema: {worksheet.config.schema}</p>
        <p>Table: {worksheet.config.table}</p>
      </div>
    </div>
  );
};

export default WorksheetCard;
