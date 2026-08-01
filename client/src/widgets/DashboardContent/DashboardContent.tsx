import {ProfileOverviewCard} from './ui/ProfileOverviewCard';
import {LinksCard} from './ui/LinksCard';

export function DashboardContent() {
    return (
        <>
            <main className="flex flex-row w-full">

                {/* left section  */}

                <section className="w-[65%] p-5 flex flex-col gap-5">

                    
                    <ProfileOverviewCard/>
                    

                    <LinksCard/>

                    <div className="w-full h-40 bg-white p-3 flex justify-between gap-3">
                        <div className="w-40 h-full bg-gray-500">Box</div>
                        <div className="w-40 h-full bg-gray-500">Box</div>
                        <div className="w-40 h-full bg-gray-500">Box</div>
                        <div className="w-40 h-full bg-gray-500">Box</div>
                    </div>
                </section>

                {/* section right  */}
                <section className="w-[35%] bg-pink-500 p-5 ">
                    card y
                </section>
            </main>
        </>
    )
}