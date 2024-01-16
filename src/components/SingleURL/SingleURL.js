import './SingleURL.css';

export default function SingleURL({long_url, short_url, title}) {
    return (
        <div>
            <h3>{title}</h3>
            <a href={short_url} target="blank">{short_url}</a>
            <p>{long_url}</p> 
        </div>
    )
}