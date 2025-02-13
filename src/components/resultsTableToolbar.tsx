import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import { counties } from "@/lib/data";
import { ResultsTableFacetedFilter } from "./resultsTableFacetedFilter";
import { ResultsTableViewOptions } from "./resultsTableViewOptions";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function ResultsTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {table.getColumn("county") && (
          <ResultsTableFacetedFilter
            column={table.getColumn("county")}
            title="Select Counties"
            options={counties}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <ResultsTableViewOptions table={table} />
    </div>
  );
}
