import React from 'react';
import { Link } from 'react-router-dom';
import projectArray from '../../../data/data';

export default function ProjectList() {

  const listElements = projectArray.map(({ name, image, summary, id }, i) => {
    return (
       
      <li key={i} >
        <Link to={`/${id}`} >
          <img src={image} />
          <h3>{name}</h3>
        </Link>
        <p>{summary}</p>
      </li>
     
    );
  });

  return (
    <ul>
      {listElements}      
    </ul>
  );
}
