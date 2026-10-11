import SetHeaderSkeleton from "@/components/set-list/SetHeaderSkeleton";

function Loading() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main>
        <SetHeaderSkeleton />
        <div className="grid place-items-center py-16">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      </main>
    </div>
  );
}

export default Loading;
