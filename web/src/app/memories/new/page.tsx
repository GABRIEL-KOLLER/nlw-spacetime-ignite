import { NewMemoryForm } from "@/app/components/NewMemoryForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory(){
  return <div className="flex flex-1 flex-col gap-4 p-16">
    <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100 font-alt">
      <ChevronLeft className="h-4 w-4 font-alt" />
      Back to timeline
    </Link>

    <NewMemoryForm />
    
  </div>
}