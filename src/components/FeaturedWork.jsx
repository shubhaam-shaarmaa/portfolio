import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/projectsData';

export default function FeaturedWork() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filteredProjects = selectedFilter === 'ALL'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.status === selectedFilter);

  return (
    <section id="projects" className="featured-work-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Execution & Deliverables</span>
          <h2 className="section-title">
            Featured <span>Work & Systems</span>
          </h2>
          <p className="section-desc max-w-700">
            Real enterprise case studies and structured technical projects spanning Business Analysis, Capital Markets workflows, and AI enablement.
          </p>
        </div>

        {/* Filter Bar with Status System */}
        <div className="project-status-filter-bar">
          <button
            className={`filter-btn ${selectedFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('ALL')}
          >
            All Initiatives ({FEATURED_PROJECTS.length})
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'COMPLETED' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('COMPLETED')}
          >
            <span className="status-indicator status-completed"></span>
            Completed ({FEATURED_PROJECTS.filter(p => p.status === 'COMPLETED').length})
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'IN PROGRESS' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('IN PROGRESS')}
          >
            <span className="status-indicator status-in-progress"></span>
            In Progress ({FEATURED_PROJECTS.filter(p => p.status === 'IN PROGRESS').length})
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'PLANNED' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('PLANNED')}
          >
            <span className="status-indicator status-planned"></span>
            Planned ({FEATURED_PROJECTS.filter(p => p.status === 'PLANNED').length})
          </button>
        </div>

        {/* Structured Projects Grid */}
        <div className="projects-grid mt-3">
          {filteredProjects.map((proj) => {
            const statusClass =
              proj.status === 'COMPLETED' ? 'badge-completed' :
              proj.status === 'IN PROGRESS' ? 'badge-in-progress' : 'badge-planned';

            return (
              <div key={proj.id} className="project-card">
                {/* Header */}
                <div className="project-card-header">
                  <div className="project-header-top">
                    <span className="project-category">{proj.category}</span>
                    <span className={`project-status-badge ${statusClass}`}>
                      <span className="badge-dot"></span>
                      {proj.status}
                    </span>
                  </div>
                  <h3 className="project-title">{proj.title}</h3>
                  <div className="project-type-tag">
                    <i className="fa-solid fa-tag text-dim"></i> {proj.projectType}
                  </div>
                </div>

                {/* Structured Body: Problem, Approach, Contribution */}
                <div className="project-card-body">
                  <div className="project-field">
                    <span className="project-field-label">
                      <i className="fa-solid fa-triangle-exclamation text-gold"></i> Problem:
                    </span>
                    <p className="project-field-text">{proj.problem}</p>
                  </div>

                  <div className="project-field">
                    <span className="project-field-label">
                      <i className="fa-solid fa-compass text-cyan"></i> Approach:
                    </span>
                    <p className="project-field-text">{proj.approach}</p>
                  </div>

                  <div className="project-field">
                    <span className="project-field-label">
                      <i className="fa-solid fa-user-check text-emerald"></i> My Contribution:
                    </span>
                    <p className="project-field-text">{proj.contribution}</p>
                  </div>

                  <div className="project-field">
                    <span className="project-field-label">
                      <i className="fa-solid fa-chart-line text-gold"></i> Business Value:
                    </span>
                    <p className="project-field-text">{proj.businessValue}</p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="project-tech-strip">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">{tech}</span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="project-card-actions">
                  {proj.specPreview && (
                    <button
                      className="btn btn-outline-cyan btn-sm"
                      onClick={() => setActiveModalProject(proj)}
                    >
                      <i className="fa-solid fa-file-lines"></i> Inspect Spec Artifact
                    </button>
                  )}
                  {proj.caseStudyId === 'trade-lifecycle' && (
                    <a href="#case-studies" className="btn btn-outline-gold btn-sm">
                      <i className="fa-solid fa-arrow-down"></i> View Case Study
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label="GitHub Repository"
                    >
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Interactive Deliverable Inspection */}
        {activeModalProject && activeModalProject.specPreview && (
          <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <div className="modal-top-meta">
                    <span className="project-category">{activeModalProject.category}</span>
                    <span className="modal-status-tag">{activeModalProject.status}</span>
                  </div>
                  <h3 className="modal-title">{activeModalProject.title}</h3>
                  <span className="modal-sub">{activeModalProject.projectType}</span>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close modal"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-artifact-header">
                  <h4 className="modal-heading">
                    <i className="fa-solid fa-code text-cyan"></i> {activeModalProject.specPreview.title}
                  </h4>
                  <span className="artifact-type-badge">
                    Format: {activeModalProject.specPreview.type.toUpperCase()}
                  </span>
                </div>

                <div className="spec-code-preview">
                  <pre>
                    <code>{activeModalProject.specPreview.code}</code>
                  </pre>
                </div>

                <div className="modal-context-box mt-3">
                  <span className="context-label">
                    <i className="fa-solid fa-circle-info text-gold"></i> Specification Context:
                  </span>
                  <p className="context-text">
                    This technical deliverable artifact demonstrates how functional business requirements are mapped into rigorous, testable constraints for software engineering squads.
                  </p>
                </div>
              </div>

              <div className="modal-footer">
                <span className="text-muted text-xs">
                  Portfolio Specification Sample · Structured for Enterprise Delivery
                </span>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveModalProject(null)}
                >
                  Close Artifact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
