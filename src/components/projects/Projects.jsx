import React from 'react';
import './Projects.css';
import Works from './Works';

const Projects = () => {
  return (
    <section className="work section" id="portfolio">
       <h2 className="section__title">Projects</h2>
       <p className="section__subtitle">Most recent projects</p>

       <Works/>
    </section>
  )
}

export default Projects