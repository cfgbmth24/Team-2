export default function HomePage() {
    return (
        <body className="p-6 px-12">

        <div className="px-6 py-10 bg-gray-200 shadow-lg border rounded-lg" style={{ height: '2000px' }}>

        <h1 className="text-lg font-bold mb-4 text-center">Review Form</h1>

        <div className="px-6 py-6 bg-white shadow-lg border rounded-lg" style = {{ height: "300px" }}>
            <div className="grid grid-cols-2 gap-4">
            <img src={"logo.jpg"} alt="Description of the image" style={{width: "300px"}} />
                <div className="w-2/3 ml-4">
                    <h2 className="text-lg font-bold mb-1">Name: </h2>
                    <p className="text-lg font-bold mb-1">Date: </p>
                    <p className="text-lg font-bold mb-1">Location: </p>
                </div>
            </div>

        </div>






        <p className="mb-2">Any comments on the event:</p>
        <textarea className="bg-white w-full h-40 p-4 border border-gray-300 rounded-md" placeholder="Enter your text here..."></textarea>

        This is a box with 10px padding on each side.
        </div>
        </body>
    )
}