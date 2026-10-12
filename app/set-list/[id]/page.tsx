import CardGridAndModal from "@/components/set-list/CardGridAndModal";
import SetHeader from "@/components/set-list/SetHeader";
import getSet from "@/lib/apis/getSet";

export default async function SetIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const setData = await getSet(id);
  console.log(setData);
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main>
        <SetHeader set={setData} />
        <CardGridAndModal setData={setData} />
      </main>
    </div>
  );
}
