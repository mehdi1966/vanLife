import React from "react"
import { Link,useSearchParams} from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const filteredVans = typeFilter ?
    vans?.filter(van=>van.type.toLowerCase() === typeFilter) :
    vans

    const vanElements = filteredVans?.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={`/vans/${van.id}`} 
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

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div>
            <Link to='?type=simple' className= "van-type simple" >simple</Link>
            <Link to='?type=luxury' className= "van-type luxury" >luxury</Link>
            <Link to='?type=rugged' className= "van-type rugged">rugged</Link>
            <Link to='.' className= "van-type clear-filters">clear</Link>
            </div>
           { vans && <div className="van-list">
                {vanElements}
            </div>
            }
        </div>
    )
}