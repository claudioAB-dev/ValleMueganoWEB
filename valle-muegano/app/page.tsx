import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ValueSection from '@/components/ValueSection'
import SpecsSection from '@/components/SpecsSection'
import QuoteSection from '@/components/QuoteSection'
import AmazonSection from '@/components/AmazonSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueSection />
      <SpecsSection />
      <QuoteSection />
      <AmazonSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
