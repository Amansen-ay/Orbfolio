import {Plus} from 'lucide-react';
import {FilterButtons} from './ui/FilterButtons';
import {SearchBar} from './ui/Searchbar';
import {LinkItemsCard} from './ui/LinksItemsCard';

export function MyLinksContent() {
    return (
        <>
            <main className="flex flex-col w-full p-5">
                <header className="flex justify-between w-full">
                    <div>
                        <p className="text-2xl font-bold text-zinc-900">
                            My Links
                        </p>
                        <p className="text-sm text-zinc-700">Manage every destination on your page.</p>
                    </div>
        
                    <button
                        className="
            flex
            items-center
            gap-2
            rounded-md
            bg-orange-500
            h-10
            px-3
            py-1
            font-medium
            text-white
            transition
            hover:bg-orange-600
          "
                    >
                        <Plus size={18} />

                        Add Link
                    </button>
                </header>

                <section className="flex justify-between mt-5">
                    <SearchBar/>
                    <FilterButtons/>
                </section>
                <section>
                    <LinkItemsCard/>
                </section>
            </main>
        </>
    )
}