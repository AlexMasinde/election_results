import { AggregationFn } from "@tanstack/react-table";
import { CountyResult } from "./types";

export const sumRows: AggregationFn<CountyResult> = (columnId, leafRows) => {
  leafRows.reduce((acc, row) => {
    return acc + Number((row as any).values[columnId]);
  }, 0);
};
