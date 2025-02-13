import { columns } from "@/components/columns";
import { ResultsTable } from "@/components/resultsTable";
import { electionResults } from "@/lib/electionResults";

export default function Home() {
  return (
    <div className="container mx-auto py-4">
      <p className="text-center text-lg font-semibold mt-4">
        2022 Presidential Election Results
      </p>
      <ResultsTable columns={columns} data={electionResults} />
    </div>
  );
}
