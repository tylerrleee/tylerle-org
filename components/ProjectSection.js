import ProjectCard from './ProjectCard'

export default function ProjectSection() {
  const projects = [
    {
      date: "Sept 2025",
      title: "HackMIT AR Surgical Guidance Platform",
      description: " a real-time augmented reality (AR) system developed as a HackMIT project to enable remote surgical experts to assist on-site medics via live vision, voice, and spatial tracking. The system uses XREAL glasses, a Raspberry Pi, an Auduicam, microphone input, and remote UI & data server components. ",
      image: "/images/hackmit-project.jpg",
      imageAlt: "glasses-demo",
      link: "https://github.com/tylerrleee/AR-Surgical-Guidance-Platform",
      techStack: ["Raspberry Pi", "OpenCV", "ML", "RestAPI", "ngrok"],
      className: "project-box-1"
    },
    {
      date: "In-progress",
      title: "Mentor-Mentee Recommendation System",
      description: "I am building a mentor–mentee recommendation system using a two-tower neural retrieval architecture, TF-IDF, and Sentence BERT. The data comes from my organization, Vietnamese Student Organization, where I am helping them reduce manual matching by reading mentor/mentee applications.   ",
      image: "/images/vsologo.png",
      imageAlt: "MentorMentee",
      link: "https://github.com/tylerrleee/two-tower-recommender",
      techStack: ["Transformers", "Data Embedding", "PyTorch"],
      className: "project-box-2"
    },
    {
      date: "July 2025",
      title: "FinInsightsDash: Financial Data Pipeline",
      description: "A financial data pipeline that fetches real-time OHLC (Open, High, Low, Close) data from Polygon.io API, processes it through Apache Kafka and Apache Spark for advanced anomaly detection, and provides actionable insights through a real-time dashboard. The entire system is containerized using Docker and orchestrated with Apache Airflow.",
      image: "/images/techstack-ETL.png",
      imageAlt: "etl-diagram",
      link: "https://github.com/tylerrleee/end-to-end-ETL?tab=readme-ov-file",
      techStack: ["Airflow", "PostgreSQL", "Kafka", "Spark", "Docker"],
      className: "project-box-3"
    },
    {
      date: "June 2025",
      title: "Black Scholes Option Pricing Dashboard",
      description: "An interactive Streamlit dashboard that visualizes European call and put option prices under the Black-Scholes model. Users can tweak key inputs (spot price, strike, volatility, risk-free rate, time to maturity) and immediately see pricing heatmaps and P/L surfaces",
      image: "/images/blackscholes.png",
      imageAlt: "black-scholes",
      link: "https://tleblackschole.streamlit.app/",
      techStack: ["Python OOP", "RestAPI", "Streamlit"],
      className: "project-box-4"
    },
    {
      date: "May 2025",
      title: "NYC Residential Property Sales Analysis",
      description: "The findings reveal distinct patterns in the types of residential buildings sold per borough and highlight significant variations in sale prices and transaction density, especially in Manhattan.",
      image: "/images/nycdata.png",
      imageAlt: "nyc-data",
      link: "https://github.com/tylerrleee/NYC-Residential-Property-Sales-Analysis/blob/LAB5/NYCPropertySales.pdf",
      techStack: ["R", "ggplot2", "tidyr", "dplyr"],
      className: "project-box-5"
    },
    {
      date: "December 2023",
      title: "NBA MVP Predictor",
      description: "We scraped real-time data from Basketball-Reference.com, processed and cleaned it, and built both a statistical regression model and a user-friendly GUI to: \n 1. predict potential future MVPs based on their performance \n 2. Analyze which stats are most significant for MVP selection \n 3. Compare player-to-player performance and efficiency",
      image: "/images/lebron.jpg",
      imageAlt: "ETLTechStack",
      link: "https://github.com/tylerrleee/BasketballModel-Python",
      techStack: ["Python", "BeautifulSoup", "pandas"],
      className: "project-box-6"
    }
  ]

  return (
    <section id="project">
      <div className="project-signage">
        <h1>My Projects</h1>
      </div> 
      <div className="project-section-container">
        <div className="my-project">
          <div className="project-shop">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                date={project.date}
                title={project.title}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                link={project.link}
                techStack={project.techStack}
                className={project.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}