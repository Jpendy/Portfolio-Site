import React from 'react';
import styles from './HomePage.css';
import ProjectList from '../projectList/ProjectList';


export default function HomePage() {
  return (
    <main className={styles.Main} >
      <ProjectList />
        
    </main>
  );
}
