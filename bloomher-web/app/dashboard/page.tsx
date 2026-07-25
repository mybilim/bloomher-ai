import DashboardCard from "@/components/dashboard/DashboardCard";

export default function Dashboard(){

return(
<main className="p-10 grid gap-5">

<DashboardCard
title="Health Score"
value="85%"
/>

<DashboardCard
title="Cycle"
value="28 days"
/>

<DashboardCard
title="Water"
value="2L"
/>

</main>
)

}
