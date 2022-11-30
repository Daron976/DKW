
const ProjectItem = (props) =>  {

  const { imgSrc, imgAlt, header, discription } = props;

  return (
    <article className="project-article">
      <img src={imgSrc} alt={imgAlt}/>
      <div className="article-details">
        <h2>{header}</h2>
        <p>{discription}</p>
      </div>
    </article>
  )
}

export default ProjectItem;