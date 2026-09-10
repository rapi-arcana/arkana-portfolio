import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SelectedWork from '../components/SelectedWork'
import ExperienceSection from '../components/ExperienceSection'
import SkillsToolsSection from '../components/SkillsToolsSection'
import DesignProcessSection from '../components/DesignProcessSection'
import CollaborationCTA from '../components/CollaborationCTA'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SelectedWork />
      <ExperienceSection />
      <SkillsToolsSection />
      <DesignProcessSection />
      <CollaborationCTA />
      <ContactSection />
    </>
  )
}

export default Home

