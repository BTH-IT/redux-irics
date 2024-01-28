import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";
import ComponentC from "@/components/ComponentC";
import { EditProvider } from "@/context/toggleEditContext";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 max-w-[1500px] mx-auto p-3 max-h-screen overflow-y-hidden">
      <EditProvider>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </EditProvider>
    </div>
  );
}
