import SetGrid from "@/components/set-list/SetGrid";

export default async function SetListPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>Set List</h1>
        <SetGrid />
      </main>
    </div>
  );
}
