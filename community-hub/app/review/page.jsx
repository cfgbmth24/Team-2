// import {useState} from "react"
export default function HomePage() {

    // const [ rating, setRating ] = useState(1)

    return (
        <body className="p-6 px-12">

        <div className="px-6 py-10 bg-gray-200 shadow-lg border rounded-lg" style={{ height: '1000px' }}>

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
        
        <div class="flex justify-left h-100" >

        <span class="text-yellow-500 text-3xl">&#9734;</span>
        <span class="text-yellow-500 text-3xl">&#9734;</span>
        <span class="text-yellow-500 text-3xl">&#9734;</span>
        <span class="text-yellow-500 text-3xl">&#9734;</span>
        <span class="text-yellow-500 text-3xl">&#9734;</span>

        </div>



        <p className="mb-2">Any comments on the event:</p>
        <textarea className="bg-white w-full h-40 p-4 border border-gray-300 rounded-md" placeholder="Enter your text here..."></textarea>


        <label for="upload" class="cursor-pointer inline-block bg-blue-500 text-black rounded-m-md border border-black px-4 py-2 rounded-md shadow-md">
        Upload Pictures
        </label>
        <input id="upload" type="file" class="hidden" />

        </div>


        </body>
    )
}