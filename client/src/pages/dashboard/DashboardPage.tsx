import {Sidebar} from '@/widgets/Sidebar/Sidebar';
import {TopNavbar} from '@/widgets/TopNavbar/TopNavbar';
import {DashboardContent} from '@/widgets/DashboardContent/DashboardContent';

export function DashboardPage() {
    return (
        <section className='flex'>
            <aside>
                <Sidebar/>
            </aside>
            <main className="flex flex-col  w-full h-screen">
                
                <header>
                    <TopNavbar/>
                </header>

                <section className="w-full">
                    <DashboardContent/>
                </section>
            </main>
        </section>

    )
}