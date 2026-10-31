export default function Skills() {
  const skillCategories = [
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: 'bi-code-slash',
      skills: [
        { name: 'Java', icon: 'bi-cup-hot' },
        { name: 'Go (Golang)', icon: 'bi-code-square' },
        { name: 'JavaScript (ES6+)', icon: 'bi-filetype-js' },
        { name: 'TypeScript', icon: 'bi-filetype-tsx' },
        { name: 'C#', icon: 'bi-filetype-cs' },
        { name: 'C', icon: 'bi-cpu' },
        { name: 'C++', icon: 'bi-cpu-fill' },
        { name: 'Python', icon: 'bi-filetype-py' },
        { name: 'SQL', icon: 'bi-database' },
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend Technologies',
      icon: 'bi-window-fullscreen',
      skills: [
        { name: 'HTML5', icon: 'bi-filetype-html' },
        { name: 'CSS3', icon: 'bi-filetype-css' },
        { name: 'React', icon: 'bi-code' },
        { name: 'Vite', icon: 'bi-lightning-charge' },
        { name: 'Tailwind CSS', icon: 'bi-palette' },
        { name: 'Bootstrap', icon: 'bi-bootstrap' },
        { name: 'Zustand', icon: 'bi-layers' },
        { name: 'React Router', icon: 'bi-signpost-split' },
        { name: 'Axios', icon: 'bi-arrow-left-right' },
        { name: 'Responsive Design', icon: 'bi-phone' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend Technologies',
      icon: 'bi-server',
      skills: [
        { name: 'Spring Boot', icon: 'bi-gear-wide-connected' },
        { name: 'Spring Security', icon: 'bi-shield-lock' },
        { name: 'Spring Data JPA', icon: 'bi-database-fill-gear' },
        { name: 'Hibernate', icon: 'bi-arrow-repeat' },
        { name: 'ASP.NET Core', icon: 'bi-boxes' },
        { name: 'ADO.NET', icon: 'bi-hdd-stack' },
        { name: 'Node.js', icon: 'bi-hexagon' },
        { name: 'REST APIs', icon: 'bi-link-45deg' },
        { name: 'JWT Authentication', icon: 'bi-key' },
        { name: 'Role-Based Access Control', icon: 'bi-person-badge' },
      ],
    },
    {
      id: 'databases',
      name: 'Databases & Storage',
      icon: 'bi-database-check',
      skills: [
        { name: 'MySQL', icon: 'bi-database' },
        { name: 'PostgreSQL', icon: 'bi-database-fill' },
        { name: 'SQL Server', icon: 'bi-server' },
        { name: 'Azure Blob Storage', icon: 'bi-cloud-arrow-down' },
        { name: 'Database Design', icon: 'bi-diagram-3' },
        { name: 'SQL Query Optimization', icon: 'bi-speedometer2' },
      ],
    },
    {
      id: 'cloud',
      name: 'Cloud Technologies',
      icon: 'bi-cloud',
      isGrouped: true,
      subgroups: [
        {
          label: 'AWS',
          skills: [
            { name: 'EC2', icon: 'bi-cpu' },
            { name: 'S3', icon: 'bi-bucket' },
            { name: 'ECS', icon: 'bi-box' },
            { name: 'ECR', icon: 'bi-archive' },
            { name: 'VPC', icon: 'bi-diagram-2' },
            { name: 'IAM', icon: 'bi-shield-check' },
            { name: 'Elastic Beanstalk', icon: 'bi-cloud-upload' },
          ],
        },
        {
          label: 'Azure',
          skills: [
            { name: 'Container Apps', icon: 'bi-box-seam' },
            { name: 'Container Registry', icon: 'bi-folder-symlink' },
            { name: 'Azure SQL Database', icon: 'bi-database-gear' },
            { name: 'Azure Functions', icon: 'bi-lightning' },
            { name: 'Azure Monitor', icon: 'bi-graph-up' },
            { name: 'Azure CLI', icon: 'bi-terminal' },
          ],
        },
      ],
    },
    {
      id: 'devops',
      name: 'DevOps & Deployment',
      icon: 'bi-terminal-fill',
      skills: [
        { name: 'Git', icon: 'bi-git' },
        { name: 'GitHub', icon: 'bi-github' },
        { name: 'GitHub Actions', icon: 'bi-play-circle' },
        { name: 'CI/CD', icon: 'bi-infinity' },
        { name: 'Docker', icon: 'bi-boxes' },
        { name: 'Docker Compose', icon: 'bi-grid-1x2' },
        { name: 'Railway', icon: 'bi-hdd-network' },
        { name: 'Netlify', icon: 'bi-globe2' },
        { name: 'Nginx', icon: 'bi-arrow-left-right' },
        { name: 'Linux', icon: 'bi-terminal' },
        { name: 'Bash', icon: 'bi-command' },
        { name: 'PowerShell', icon: 'bi-terminal-split' },
      ],
    },
    {
      id: 'testing',
      name: 'Testing & Quality',
      icon: 'bi-shield-check',
      skills: [
        { name: 'xUnit', icon: 'bi-check2-circle' },
        { name: 'JUnit', icon: 'bi-check-circle' },
        { name: 'Selenium WebDriver', icon: 'bi-globe' },
        { name: 'Postman', icon: 'bi-send-check' },
        { name: 'Swagger / OpenAPI', icon: 'bi-file-earmark-code' },
        { name: 'Apache JMeter', icon: 'bi-speedometer' },
        { name: 'ESLint', icon: 'bi-shield' },
        { name: 'SonarQube', icon: 'bi-search' },
      ],
    },
    {
      id: 'architecture',
      name: 'Architecture & Engineering',
      icon: 'bi-diagram-3-fill',
      skills: [
        { name: 'Apache Kafka', icon: 'bi-broadcast-pin' },
        { name: 'Microservices', icon: 'bi-grid-3x3' },
        { name: 'Distributed Systems', icon: 'bi-share' },
        { name: 'Event-Driven Architecture', icon: 'bi-lightning-charge' },
        { name: 'Design Patterns', icon: 'bi-puzzle' },
        { name: 'SOLID Principles', icon: 'bi-check2-square' },
      ],
    },
    {
      id: 'game-dev',
      name: 'Game Development',
      icon: 'bi-controller',
      skills: [
        { name: 'Unity', icon: 'bi-unity' },
        { name: 'Unity Physics', icon: 'bi-activity' },
        { name: 'A* Pathfinding', icon: 'bi-compass' },
      ],
    },
    {
      id: 'tools',
      name: 'Development & Collaboration Tools',
      icon: 'bi-tools',
      skills: [
        { name: 'VS Code', icon: 'bi-window-sidebar' },
        { name: 'Visual Studio', icon: 'bi-window-stack' },
        { name: 'IntelliJ IDEA', icon: 'bi-terminal' },
        { name: 'MySQL Workbench', icon: 'bi-database' },
        { name: 'GitHub Projects', icon: 'bi-kanban' },
        { name: 'Jira', icon: 'bi-check-all' },
        { name: 'Figma', icon: 'bi-vector-pen' },
        { name: 'Maven', icon: 'bi-box' },
        { name: 'Gradle', icon: 'bi-gear' },
        { name: 'npm', icon: 'bi-box-seam' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-section-alt border-t border-[#2A3B52] overflow-hidden text-left">
      {/* Background Watermark */}
      <div className="section-watermark">SKILLS</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#67D4ED] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#162338]/60 border border-[#2A3B52]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#67D4ED]" />
            <span>03 / Technical Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F9] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto mt-4 leading-relaxed">
            Comprehensive technical inventory across full-stack engineering, cloud infrastructure, and systems
          </p>
        </div>

        {/* Vertically Stacked Continuous List */}
        <div className="divide-y divide-[#2A3B52] border-y border-[#2A3B52]">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start"
            >
              {/* Category Title & Icon on the Left */}
              <div className="md:col-span-4 flex items-center gap-3">
                <i className={`bi ${category.icon} skill-category-icon text-base shrink-0`} />
                <h3 className="text-base sm:text-lg font-bold text-[#F1F5F9] tracking-tight">
                  {category.name}
                </h3>
              </div>

              {/* Technology Chips on the Right */}
              <div className="md:col-span-8">
                {category.isGrouped ? (
                  <div className="space-y-3">
                    {category.subgroups.map((subgroup) => (
                      <div
                        key={subgroup.label}
                        className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3"
                      >
                        <span className="text-xs font-mono font-semibold text-[#67D4ED] uppercase tracking-wider shrink-0 sm:w-16 sm:py-1">
                          {subgroup.label}:
                        </span>
                        <div className="flex flex-wrap gap-2 flex-1 min-w-0">
                          {subgroup.skills.map((skill) => (
                            <span
                              key={skill.name}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[#162338]/60 border border-[#2A3B52] text-[#CBD5E1] hover:border-[#67D4ED]/50 hover:text-[#F1F5F9] transition-colors leading-tight"
                            >
                              <i className={`bi ${skill.icon} skill-chip-icon text-[11px] shrink-0`} />
                              <span>{skill.name}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[#162338]/60 border border-[#2A3B52] text-[#CBD5E1] hover:border-[#67D4ED]/50 hover:text-[#F1F5F9] transition-colors leading-tight"
                      >
                        <i className={`bi ${skill.icon} skill-chip-icon text-[11px] shrink-0`} />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
