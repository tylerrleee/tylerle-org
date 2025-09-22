import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectSection from '../components/ProjectSection'

export default function Home() {
  return (
    <Layout title="Tyler Le" >
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
    </Layout>
  )
}