import React from 'react';
import { useParams } from 'react-router-dom';
import projectArray from '../../../data/data';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { name, image, summary, body, siteLink, gitHubLink } = projectArray.find(item => item.id === id);

  return (
    <section>
      <img src={image} />
      <h3>{name}</h3>
      <a href={siteLink} >{siteLink}</a>
      <a href={gitHubLink} >{gitHubLink}</a>
      <p>{summary}</p>
      <p>{body}</p>           
    </section>
  );
}
