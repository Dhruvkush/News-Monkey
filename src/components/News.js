import { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

const News =(props)=> {

  const[articles,setArticles]=useState([])
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState()
  

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async ()=> {   
    props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    console.log("Total Results:", parsedData.totalResults);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
     props.setProgress(100);
  }

  useEffect( () => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();           //eslint-disable-next-line
  }, [])

  // const handlePreviousClick = async () => {
  // setPage(page-1)
  //     updateNews()
  // }

  // const handleNextClick = async () => {
  //     setPage(page+1)
  //     updateNews()
  // }

  const fetchMoreData = async () => {
    setPage(page+1)
    // const nextPage = page + 1;
    // setPage(nextPage);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
   
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
   
    console.log("PROPS:", props);

    return (
      <>
        <h1 className='text-center top-heading' style={{paddingTop:'90px',paddingBottom:'10px',fontFamily:"Montserrat",fontWeight:'300',letterSpacing:"3px"}}> Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {/* {loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData} 
          hasMore={articles.length < totalResults}
          loader={<Spinner/>} >

          <div className="container">
        
          <div className="row">
            {articles.map(element => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} mode={props.mode} description={element.description ? element.description.slice(0, 80) : ""} imageurl={element.urlToImage} author={element.author} date={element.publishedAt} newsUrl={element.url} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
           </InfiniteScroll>
        
        </>

    )
  }

export default News

