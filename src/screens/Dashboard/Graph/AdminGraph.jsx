import { RiBarChartFill, RiMailFill } from "@remixicon/react";
// import DashboardCards from '../../../components/DashboardCards'

export default function AdminGraph() {
  return (
    <>
      {/* <DashboardCards /> */}
      <main className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4 p-4 max-sm:grid-cols-1 max-sm:justify-items-center">
        <article className="w-full grid grid-cols-[1fr_1.5fr] items-center bg-gradient-to-br from-teal-100 to-teal-50 border rounded-md p-6 max-w-xs shadow-md">
          <RiBarChartFill size={36} className="text-teal-400" />

          <div>
            <h2 className="text-lg text-neutral-500 font-medium">Earnings</h2>
            <p className="text-3xl text-neutral-700 font-bold">$ 371</p>
          </div>
        </article>
        <article className="w-full grid grid-cols-[1fr_1.5fr] items-center bg-gradient-to-br from-teal-100 to-teal-50 border rounded-md p-6 max-w-xs shadow-md">
          <RiMailFill size={36} className="text-teal-400" />

          <div>
            <h2 className="text-lg text-neutral-500 font-medium">Sales</h2>
            <p className="text-3xl text-neutral-700 font-bold">$ 371</p>
          </div>
        </article>
        <article className="w-full grid grid-cols-[1fr_1.5fr] items-center bg-gradient-to-br from-teal-100 to-teal-50 border rounded-md p-6 max-w-xs shadow-md">
          <RiBarChartFill size={36} className="text-teal-400" />

          <div>
            <h2 className="text-lg text-neutral-500 font-medium">Earnings</h2>
            <p className="text-3xl text-neutral-700 font-bold">$ 371</p>
          </div>
        </article>
      </main>
    </>
  )
}


