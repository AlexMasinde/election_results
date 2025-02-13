import { Row } from "@tanstack/react-table";

export type CountyResult = {
  county: string;
  odinga: string;
  ruto: string;
  mwaure: string;
  wajackoyah: string;
  registeredVoters: string;
  valid: string;
  odingaPercentage: string;
  rutoPercentage: string;
  wajackoyahPercentage: string;
  mwaurePercentage: string;
};

export type AggregationFn<TData extends CountyResult> = (
  getLeafRows: () => Row<TData>[],
  getChildRows: () => Row<TData>[]
) => any;
