"use client";

import { useEffect, useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import DatabaseSidebar from "../DatabaseSidebar";
import WorksheetOutput from "./WorksheetOutput";
import WorksheetInput from "./WorksheetInput";
import { useWorksheetCard } from "@/hooks/useWorksheetCard";
import { useStore } from "@nanostores/react";
import { worksheetStore } from "@/stores/worksheet.store";
import { WorksheetType } from "@/types/worksheet";

type WorksheetCardProps = {
  isLoading: boolean;
};

const WorksheetCard = ({ isLoading }: WorksheetCardProps) => {
  const [worksheet, setWorksheet] = useState<WorksheetType | null>(null);
  const { worksheets, selectedWorksheetId } = useStore(worksheetStore);
  const { fetchQueryOutput, setSelectedConfig } = useWorksheetCard();

  useEffect(() => {
    const currentWorksheet = worksheets.find(
      (worksheet) => worksheet.id === selectedWorksheetId,
    );
    setWorksheet(currentWorksheet || null);
  }, [worksheets, selectedWorksheetId]);

  useEffect(() => {
    fetchQueryOutput();
  }, [fetchQueryOutput]);

  return (
    <>
      {isLoading ? (
        <div className="flex-1 flex place-content-center place-items-center uppercase text-gray-900 font-[family-name:var(--font-geist-mono)]">
          Loading...
        </div>
      ) : (
        <div className="flex-1 bg-gray-200 text-gray-900 flex flex-col gap-2 h-full">
          <div className="flex-1 flex gap-2">
            <PanelGroup direction="horizontal">
              <Panel defaultSize={20}>
                <DatabaseSidebar
                  selectedConfig={
                    worksheet?.config || {
                      database: "",
                      schema: "",
                      table: "",
                      queryInput: "",
                    }
                  }
                  setSelectedConfig={setSelectedConfig(worksheet?.id ?? 0)}
                />
              </Panel>
              <PanelResizeHandle className="bg-gray-300 w-[2px] h-full" />
              <Panel>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={25} className="flex flex-col gap-2 p-4">
                    <WorksheetInput fetchQueryOutput={fetchQueryOutput} />
                  </Panel>
                  <PanelResizeHandle className="bg-gray-300 w-full h-[2px]" />
                  <Panel>
                    <WorksheetOutput />
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </div>
        </div>
      )}
    </>
  );
};

export default WorksheetCard;
