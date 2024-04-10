'use client'

export default function HomePage() {
    return (
        <section className="flex gap-6">

            {/* Left col             */}
            <div className="flex-1 flex flex-col gap-6">

                <div className="p-6 bg-green-300">
                    <h1>Stats herez</h1>
                    <p>Community size</p>
                </div>

                <div className="p-6 bg-green-300">
                    Revirews
                </div>

                <div className="p-6 bg-green-300">
                    Events list
                </div>

            </div>


            {/* Right col */}
            <div className="w-72 flex flex-col gap-8">

                <div className="p-6 bg-green-300">
                    <h1>Leaderboard</h1>
                </div>

                <div className="p-6 bg-green-300">
                    Your tickets
                </div>

            </div>

        </section>
    )
}