

export const pages = [
    {
        name: "Dashboard",
        route: "/",
        Component: <Dashboard />
    },
    {
        name: "Dashboard",
        route: "/people/:id",
        Component: <Detail/>
    },
    {
        name: "Dashboard",
        route: "/planet/:id",
        Component: <Detail/>
    },

]