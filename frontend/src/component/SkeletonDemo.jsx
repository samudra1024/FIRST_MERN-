import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center">
      <div >
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
        <Skeleton className="h-4 w-[5000px] animate-pulse" /><br></br>
      </div>
    </div>
  )
}
