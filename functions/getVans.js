const getVans = async ()=>{
const res = await fetch("/api/vans")
if(!res.ok){
    throw{
        message: "error fetching vans",
        status : res.status,
        statusText : res.statusText
    }
}
const data = await res.json()
return data.vans;

}
export default getVans;