import { Search } from "lucide-react";

function SetFilter({
  searchTerm,
  setSearchTerm,
  placeholder = "Search sets",
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="border-line bg-surface focus-within:border-secondary/60 flex h-10 w-full items-center gap-2 rounded-lg border px-3 transition-colors sm:w-80">
      <Search className="text-muted size-4 shrink-0" />
      <input
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
        className="placeholder:text-muted w-full bg-transparent text-sm outline-none focus-visible:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </label>
  );
}

export default SetFilter;
