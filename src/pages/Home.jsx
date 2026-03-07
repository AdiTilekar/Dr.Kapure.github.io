import Hero from '../components/Hero';
import EventBanner from '../components/EventBanner';
import TrustMarquee from '../components/TrustMarquee';
import ConcernCards from '../components/ConcernCards';
import WhyUs from '../components/WhyUs';
import Treatments from '../components/Treatments';
import PreWedding from '../components/PreWedding';
import DoctorProfile from '../components/DoctorProfile';
import Testimonials from '../components/Testimonials';
import BeforeAfter from '../components/BeforeAfter';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <EventBanner />
      <Hero />
      <PreWedding />
      <TrustMarquee />
      <ConcernCards />
      <WhyUs />
      <Treatments />
      <DoctorProfile />
      <Testimonials />
      <BeforeAfter />
      <FAQ />
    </>
  );
}
