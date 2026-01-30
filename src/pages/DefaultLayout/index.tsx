import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topar";
import { useState } from "react";

export default function DefaultLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <section className="flex min-h-screen text-white bg-[#6571a1]/90 dark:bg-[#050C28]/90">

            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col ">
                <Topbar onMenu={() => setSidebarOpen(true)} />
                <main className="p-6 grid gap-6 text-black">
                    <Outlet />
                </main>
            </div>

        </section>
    );
}