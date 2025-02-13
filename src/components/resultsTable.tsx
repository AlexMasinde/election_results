"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "./ui/table";
import { useState } from "react";
import { ResultsTableToolbar } from "./resultsTableToolbar";
import formatNumberWithCommas from "@/lib/formatValues";

interface ResultsTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function ResultsTable<TData, TValue>({
  columns,
  data,
}: ResultsTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    initialState: {
      pagination: { pageSize: 49 },
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const totals = {
    registeredVoters: table.getFilteredRowModel().rows.reduce((acc, row) => {
      return acc + Number(row.getValue("registeredVoters"));
    }, 0),
    odinga: table.getFilteredRowModel().rows.reduce((acc, row) => {
      return acc + Number(row.getValue("odinga"));
    }, 0),
    ruto: table.getFilteredRowModel().rows.reduce((acc, row) => {
      return acc + Number(row.getValue("ruto"));
    }, 0),
    wajackoyah: table.getFilteredRowModel().rows.reduce((acc, row) => {
      return acc + Number(row.getValue("wajackoyah"));
    }, 0),
    mwaure: table.getFilteredRowModel().rows.reduce((acc, row) => {
      return acc + Number(row.getValue("mwaure"));
    }, 0),
    valid: table.getFilteredRowModel().rows.reduce((acc, row) => {
      return acc + Number(row.getValue("valid"));
    }, 0),
  };

  const percentages = {
    odingaPercentage: (function () {
      return (totals.odinga / totals.valid) * 100;
    })(),
    rutoPercentage: (function () {
      return (totals.ruto / totals.valid) * 100;
    })(),
    mwaurePercentage: (function () {
      return (totals.mwaure / totals.valid) * 100;
    })(),
    wajackoyahPercentage: (function () {
      return (totals.wajackoyah / totals.valid) * 100;
    })(),
  };

  const totalKeys = [
    "registeredVoters",
    "odinga",
    "ruto",
    "wajackoyah",
    "mwaure",
    "valid",
  ] as const;

  const percentagesKeys = [
    "odingaPercentage",
    "rutoPercentage",
    "mwaurePercentage",
    "wajackoyahPercentage",
  ] as const;

  return (
    <div className="space-y-4">
      <ResultsTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No Counties.
                </TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell className="font-semibold">TOTAL</TableCell>
              {totalKeys.map((key) => (
                <TableCell className="font-semibold" key={key}>
                  {formatNumberWithCommas(totals[key].toLocaleString())}
                </TableCell>
              ))}
              {percentagesKeys.map((key) => (
                <TableCell className="font-semibold" key={key}>
                  {percentages[key].toFixed(2)}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
