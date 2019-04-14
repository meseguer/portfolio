import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
     query ProjectsQueryQuery {
        allProjectsJson {
            edges {
                node {
                    title,
                    description,
                    thumbnail,
                    link
                }
            }
        }
    }
    `}
    render={data => (
      <section className="work" style={{ width: '90%', margin: '100px auto' }}>
        <h2 className="subtitle text-center">Our work</h2>
        <ul>
          {
              data.allProjectsJson.edges.map((project, i) => (
                <li className="row" key={i}>
                  <div className="col-sm" style={{ marginTop: '25px' }}>
                    <div className="card work__card-body" style={{ height: '100%' }}>
                      <img className="card-img-top mx-auto" src={project.node.thumbnail} style={{ height: '178px', width: 'auto ' }} />
                      <div className="card-body">
                        <h5 className="card-title">{project.node.title}</h5>
                        <p className="card-text">{project.node.description}</p>
                        <a href={project.node.link} className="btn btn-primary">Check it out</a>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            }
        </ul>
      </section>
    )}
  />
);
