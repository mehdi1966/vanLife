import React from "react"
import { Link,useSearchParams,useLoaderData} from "react-router-dom"
import getVans from "../../functions/getVans";

export function loader(){
    return getVans()
}
export default function Vans() {
    const vans = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const filteredVans = typeFilter ?
    vans?.filter(van=>van.type.toLowerCase() === typeFilter) :
    vans

    const vanElements = filteredVans?.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={`${van.id}`} 
                state={{
                    search: searchParams.toString(),
                    type:typeFilter
                    }}
                aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="van-info">
                    <p>{van.name}</p>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    // helper function to concat the search params if needed and not erase the other searchParam keys 
    // it should be called in link ==> <Link to = {genNewSearchParamString("key","value")}></Link>
    // function genNewSearchParamString(key, value) {
    //     const sp = new URLSearchParams(searchParams)
    //     if (value === null) {
    //       sp.delete(key)
    //     } else {
    //       sp.set(key, value)
    //     }
    //     return `?${sp.toString()}`
    //   }
        const handleFilterChange = (key,value)=>{
            setSearchParams(prevParams=>{
                if (value === null){
                    prevParams.delete(key)
                }else{
                    prevParams.set(key,value)
                }
                return prevParams
            })
        }
    
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter &&
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                }

            </div>
           { vans && <div className="van-list">
                {vanElements}
            </div>
            }
        </div>
    )
}