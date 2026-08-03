import { Sidebar } from '@/widgets/Sidebar/Sidebar';
import { TopNavbar } from '@/widgets/TopNavbar/TopNavbar';
import { useState } from "react";
import {MyLinksContent} from '@/widgets/MyLinksContent/MyLinksContent';

export function MyLinksPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
                    <MyLinksContent/>
                </section>
            </main>
        </section>

    )
}