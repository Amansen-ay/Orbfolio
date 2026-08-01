import {ProfileOverviewCard} from './ui/ProfileOverviewCard';
import {LinksCard} from './ui/LinksCard';
import {QuickActionsCard} from './ui/QuickActionsCard';

export function DashboardContent() {
    return (
        <>
            <main className="flex flex-row w-full">

                {/* left section  */}

                <section className="w-[65%] p-5 flex flex-col gap-5">
                    <ProfileOverviewCard/>
                    <LinksCard/>
                    <QuickActionsCard/>
                </section>

                {/* section right  */}
                <section className="w-[35%] bg-pink-500 p-5 ">
                    card y
                </section>
            </main>
        </>
    )
}