import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
    mainNav: [
        {
            title: 'Home',
            href: '/',
            exact: true,
        },
        {
            title: 'Novel List',
            href: '/dashboard/novels',
        },
    ],
}