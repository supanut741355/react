import ImageShow from "./ImageShow"
function ImageList({searchData}) {

  const renderedImages = searchData.map((item) => {
    return <ImageShow key={item.id} image={item.urls.small}/>
  })

  return (
    <>
      {renderedImages}
    </>
  )
}

export default ImageList
