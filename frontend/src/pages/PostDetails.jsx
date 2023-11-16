import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"

const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl ">10 Uses for AI in Real Life</h1>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
            </div>  
            <div className="flex items-center justify-between mt-2 md:mt-4">
                <p>@chatswithfolks</p>
            <div className="flex space-x-2">
                <p>13/11/2023</p>
                <p>4:00</p>
            </div>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UB6ji3eVlR--4KruNaEXUX_Pr1XIpK2GMw&usqp=CAU" className="w-full mx-auto mt-8" alt=""/>
            <p className="mx-auto mt-8">Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
                <div className="flex justify-center items-center space-x-2">
                    <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                    <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
                </div>
            </div>
        
        <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments: </h3>
            {/* Comment */}
            <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@Zain</h3>
                <div className="flex justify-center items-center space-x-4">
                    <p className="text-gray-600 text-sm">16/09/2023</p>
                    <p className="text-gray-600 text-sm">3:30</p>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit/></p>
                        <p><MdDelete/></p>
                    </div>
                </div>
            </div>
            <p className="px-4 mt-2">Nice Information..</p>

            </div>  

            {/* Comment */}
            <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@Zain</h3>
                <div className="flex justify-center items-center space-x-4">
                    <p className="text-gray-600 text-sm">16/09/2023</p>
                    <p className="text-gray-600 text-sm">3:30</p>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit/></p>
                        <p><MdDelete/></p>
                    </div>
                </div>
            </div>
            <p className="px-4 mt-2">Nice Information..</p>
            
            </div>        
        </div>
        {/* Write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
            <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
            <button className="rounded-md bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails