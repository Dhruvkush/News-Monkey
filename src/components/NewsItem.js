const NewsItem =(props)=> {


    let { title, description, imageurl, newsUrl, author, date, source } = props;    //destructioring
  
    return (

      <div className='my-3'>
        <div className="card">
          <div style={{ 
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:10,
            top:-10
          }}>
          <span className=" badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>{source}</span>
          </div>
          <img   className="news-card-img" src={!imageurl ? "https://techcrunch.com/wp-content/uploads/2024/12/GettyImages-2169079907_27e720-e1734690817769.jpg?resize=1200,800" : imageurl} alt='imgNotfound' />
          <div className="card-body">
            <h5 className="card-title" style={{fontFamily:"staatliches",fontSize:"23px",fontWeight:500}}>{title}...</h5>
            <p className="card-text" style={{fontFamily:"geist mono"}}>{description}...</p>
            <p className="card-text text-muted" style={{ fontFamily:"arial fatface",fontSize: "12px" }}>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" style={{ fontFamily:"Fredoka",fontSize: "12px", }} className={`btn btn-sm ${props.mode === "dark" ? "btn-light" : "btn-dark"}`}>Read more</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem
