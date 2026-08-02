import { Sidebar } from '@/widgets/Sidebar/Sidebar';
import { TopNavbar } from '@/widgets/TopNavbar/TopNavbar';
import { DashboardContent } from '@/widgets/DashboardContent/DashboardContent';
import { useState } from "react";

export function DashboardPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    console.log(isSidebarOpen);
    return (
        <section className='flex'>
            <aside>
                <Sidebar isOpen={isSidebarOpen} />
            </aside>
            <main className="flex h-screen flex-1 flex-col overflow-hidden">

                <header>
                    <TopNavbar onToggleSidebar={() =>
                        setIsSidebarOpen((prev) => !prev)
                    } />
                </header>

                <section className="flex-1 overflow-y-auto">
                    <DashboardContent />
                </section>
            </main>
        </section>

    )
}