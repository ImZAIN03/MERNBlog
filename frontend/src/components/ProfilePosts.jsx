

const ProfilePosts = () => {
  return (
    <div className='w-full flex mt-8 space-x-4'>
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UB6ji3eVlR--4KruNaEXUX_Pr1XIpK2GMw&usqp=CAU" alt="" className="h-full w-full object-cover"/>
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses for AI in Real Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between space-x-4 md:mb-4">
          <p>@chatswithfolks</p>
          <div className="flex space-x-2">
            <p>13/11/2023</p>
            <p>4:00</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is also the field of study in computer science that develops and studies intelligent machines. "AI" may also refer to the machines themselves.</p>
      </div>
    
    </div>
  )
}

export default ProfilePosts