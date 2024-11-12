import './GridCard.scss'

function GridCard({col, row, imgUrl, children}) {

    return (

        <div className="skill-card" style={{gridColumn: col, gridRow: row}}>
            <div className="card-logo" style={{backgroundImage: `url(${imgUrl})`}}></div>
            <div className="skill-card-content">
                <p>{children}</p>
            </div>
        </div>
    )
}

export default GridCard