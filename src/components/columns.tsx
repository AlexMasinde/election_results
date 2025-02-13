"use client";
import { CountyResult } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { ColumnHeader } from "./columnHeader";
import { sumRows } from "@/lib/aggregationFunctions";
import formatNumberWithCommas from "@/lib/formatValues";

export const columns: ColumnDef<CountyResult>[] = [
  {
    accessorKey: "county",
    header: ({ column }) => <ColumnHeader title="County" column={column} />,
    cell: ({ row }) => <div>{row.getValue("county")}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "registeredVoters",
    header: ({ column }) => (
      <ColumnHeader title="Registered Voters" column={column} />
    ),
    cell: ({ row }) => (
      <div>{formatNumberWithCommas(row.getValue("registeredVoters"))}</div>
    ),
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "odinga",
    header: ({ column }) => (
      <ColumnHeader title="Raila Odinga" column={column} />
    ),
    cell: ({ row }) => (
      <div>{formatNumberWithCommas(row.getValue("odinga"))}</div>
    ),
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "ruto",
    header: ({ column }) => (
      <ColumnHeader title="William Ruto" column={column} />
    ),
    cell: ({ row }) => (
      <div>{formatNumberWithCommas(row.getValue("ruto"))}</div>
    ),
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "mwaure",
    header: ({ column }) => (
      <ColumnHeader title="David Mwaure" column={column} />
    ),
    cell: ({ row }) => (
      <div>{formatNumberWithCommas(row.getValue("mwaure"))}</div>
    ),
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "wajackoyah",
    header: ({ column }) => (
      <ColumnHeader title="George Wajackoyah" column={column} />
    ),
    cell: ({ row }) => (
      <div>{formatNumberWithCommas(row.getValue("wajackoyah"))}</div>
    ),
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "valid",
    header: ({ column }) => (
      <ColumnHeader title="Valid Votes" column={column} />
    ),
    cell: ({ row }) => (
      <div>{formatNumberWithCommas(row.getValue("valid"))}</div>
    ),
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "odingaPercentage",
    header: ({ column }) => <ColumnHeader title="Odinga (%)" column={column} />,
    cell: ({ row }) => <div>{row.getValue("odingaPercentage")}</div>,
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "rutoPercentage",
    header: ({ column }) => <ColumnHeader title="Ruto (%)" column={column} />,
    cell: ({ row }) => <div>{row.getValue("rutoPercentage")}</div>,
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "mwaurePercentage",
    header: ({ column }) => <ColumnHeader title="Mwaure (%)" column={column} />,
    cell: ({ row }) => <div>{row.getValue("mwaurePercentage")}</div>,
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
  {
    accessorKey: "wajackoyahPercentage",
    header: ({ column }) => (
      <ColumnHeader title="Wajackoyah (%)" column={column} />
    ),
    cell: ({ row }) => <div>{row.getValue("wajackoyahPercentage")}</div>,
    enableSorting: true,
    enableHiding: true,
    aggregationFn: sumRows,
  },
];
