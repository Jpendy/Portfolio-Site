import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projectArray from '../../../data/data';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { name, image, summary, body, siteLink, gitHubLink } = projectArray.find(item => item.id === +id);

  return (
    <section>
      <img src={image} />
      <h3>{name}</h3>
      <Link to={siteLink} >{siteLink}</Link>
      <Link to={gitHubLink} >{gitHubLink}</Link>
      <p>{summary}</p>
      <p>{body}</p>           
    </section>
  );
}
