import { useEffect, useState } from "react"
import Loading from "./Loading"
import axios from "axios"
import toast from "react-hot-toast"

const Community = () => {

const [images , setImages] = useState([])
const [loading , setLoading] = useState(true)

const fetchImages = async() => {
  try {
    const {data} = await axios.get("/api/user/published-images")
    if(data.success) {
    setImages(data.images)
    }
 else {
  toast.error("Failed to fetch community images")
 }
     setLoading(false)
  } catch (error) {
    toast.error(error.message)
  }
}

useEffect(() => {
  fetchImages()
} , [])

if(loading) 
 return <Loading/>

  return (
    <div className="p-6 pt-12 xl:px-12 2xl:px-20 w-full mx-auto h-full overflow-y-scroll">
<h2 className="text-xl font-semibold mb-6 text-foreground dark:text-purple-100">Community Images</h2>
{ 
  images.length > 0 ? (
    <div className="flex flex-wrap max-sm:justify-center gap-5">
{
  images.map((item , index) => (
<a key={index} href={item.imageUrl} target="_blank" className="relative group block rounded-lg overflow-hidden border border-gray-200 dark:border-purple-700 shadow-sm hover:shadow-md transition-shadow duration-300">
  <img src={item.imageUrl} alt="" className="w-full md:w-50 h-40 md:h-50 2xl:w-62 2xl:h-62 object-cover hover:shadow-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"/>
</a>
  ))
}
    </div>
  ) : (
    <p className="text-center text-gray-600 dark:text-purple-200 mt-10">No images Available.</p>
  )
}
    </div>
  )
}

export default Community