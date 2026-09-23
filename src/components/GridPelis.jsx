import { GridCards } from "./GridCards"

export const GridPelis = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <GridCards/>
      <GridCards/>
      <GridCards/>
      <GridCards/>
      <GridCards/>
      <GridCards/>
      <GridCards/>
    </div>
  )
}
