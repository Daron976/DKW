import PropTypes from 'prop-types';

const ProjectItem = (props) => {
  const {
    imgSrc, imgAlt, header, description, live, source,
  } = props;

  return (
    <article className="project-article mobile-border">
      <img src={imgSrc} alt={imgAlt} />
      <div className="article-details">
        <h2>{header}</h2>
        <p>{description}</p>
        <div className="btn-container">
          <a href={source} className="btn-link">
            <button
              type="button"
              id="source"
              className="btn"
              name="source"
            >
              Source
            </button>
          </a>
          <a href={live} className="btn-link">
            <button
              type="button"
              id="live"
              className="btn"
              name="live"
            >
              Live
            </button>
          </a>
        </div>
      </div>
    </article>
  );
};

ProjectItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default ProjectItem;
