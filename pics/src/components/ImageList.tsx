import '../style/imageList.css'
import ImageShow from "./ImageShow"
function ImageList({searchData}) {

  const renderedImages = searchData.map((item) => {
    return <ImageShow key={item.id} image={item.urls.small}/>
  })

  return (
    <div className="image-list">
      {renderedImages}
    </div>
  )
}

export default ImageList
