import { useEffect } from "react"

export default function useInfiniteScroll(loadMore){

useEffect(()=>{

const observer = new IntersectionObserver((entries)=>{

if(entries[0].isIntersecting){

loadMore()

}

})

const el=document.querySelector("#scroll-end")

if(el) observer.observe(el)

},[])

}