"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Leaf, Shield, Star } from "lucide-react";

export default function MediCarePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="MediCare Cannabis"
          navItems={[
            { name: "Products", id: "products" },
            { name: "Education", id: "education" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Quality Medical Cannabis for Your Health"
          description="Access professionally curated cannabis products designed for therapeutic wellness. Licensed, tested, and recommended by healthcare professionals."
          tag="Medical Cannabis"
          tagIcon={Leaf}
          buttons={[
            { text: "Browse Products", href: "products" },
            { text: "Learn More", href: "education" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003084466-u0ms6afh.jpg"
          imageAlt="Medical cannabis plant and products"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About Us"
          title="Your Trusted Medical Cannabis Partner"
          description="We provide evidence-based cannabis products for patients seeking natural therapeutic solutions. Our mission is to make quality medical cannabis accessible, safe, and properly educated."
          tagIcon={Shield}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003092132-p5lkijxr.jpg",
            imageAlt: "Medical professional consultation"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003092132-p5lkijxr.jpg",
            imageAlt: "Healthcare environment"
          }}
          buttons={[
            { text: "Our Mission", href: "#" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Premium Product Selection"
          description="Professionally formulated and lab-tested medical cannabis products"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "MediCare",
              name: "CBD Tincture 1000mg",
              price: "$45.00",
              rating: 5,
              reviewCount: "128",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003086124-9agm7ws2.jpg",
              imageAlt: "CBD Tincture bottle"
            },
            {
              id: "2",
              brand: "MediCare",
              name: "THC/CBD Capsules",
              price: "$50.00",
              rating: 5,
              reviewCount: "94",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003087705-h15kuonc.jpg",
              imageAlt: "Cannabis capsules"
            },
            {
              id: "3",
              brand: "MediCare",
              name: "Full Spectrum Oil",
              price: "$55.00",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003089184-3b83wqy6.jpg",
              imageAlt: "Full spectrum cannabis oil"
            },
            {
              id: "4",
              brand: "MediCare",
              name: "Therapeutic Edibles",
              price: "$35.00",
              rating: 5,
              reviewCount: "87",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003090816-9ppytxqh.jpg",
              imageAlt: "Medical cannabis edibles"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="education" data-section="education">
        <FeatureCardEight
          title="Understanding Medical Cannabis"
          description="Learn about therapeutic benefits and proper usage"
          tag="Education"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "CBD Benefits",
              description: "Non-psychoactive cannabinoid known for anti-inflammatory and pain relief properties",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003084466-u0ms6afh.jpg",
              imageAlt: "CBD information"
            },
            {
              id: 2,
              title: "THC Therapy",
              description: "Psychoactive compound effective for symptom management and therapeutic use",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003084466-u0ms6afh.jpg",
              imageAlt: "THC information"
            },
            {
              id: 3,
              title: "Proper Dosing",
              description: "Start low and go slow. Personalized recommendations based on individual needs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003084466-u0ms6afh.jpg",
              imageAlt: "Dosing guide"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Patient Success Stories"
          description="Real testimonials from our valued patients"
          tag="Testimonials"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Chronic Pain Patient",
              company: "Verified Customer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003093244-6492bjew.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Anxiety Management",
              company: "Verified Customer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003094557-kthfybgy.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Sleep Improvement",
              company: "Verified Customer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003095499-ji7whukj.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Inflammation Relief",
              company: "Verified Customer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003096363-11odw6z4.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about medical cannabis"
          tag="Help & Support"
          textboxLayout="default"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003097333-bqndrtjr.jpg"
          imageAlt="Medical professional"
          faqs={[
            {
              id: "1",
              title: "Is medical cannabis legal?",
              content: "Medical cannabis is legal in many states for patients with qualifying conditions. Check your local regulations and consult with a healthcare provider."
            },
            {
              id: "2",
              title: "Do I need a prescription?",
              content: "Requirements vary by location. Many states require a medical marijuana card or recommendation from a licensed healthcare provider."
            },
            {
              id: "3",
              title: "What conditions qualify for treatment?",
              content: "Qualifying conditions typically include chronic pain, anxiety, insomnia, epilepsy, and other medical conditions. Consult your physician for eligibility."
            },
            {
              id: "4",
              title: "Are products lab-tested?",
              content: "Yes, all our products are third-party lab-tested for potency, purity, and safety. Test results are available upon request."
            },
            {
              id: "5",
              title: "What is the difference between CBD and THC?",
              content: "CBD is non-psychoactive and focuses on therapeutic benefits. THC is psychoactive and provides different therapeutic effects. Both have medical applications."
            },
            {
              id: "6",
              title: "How should I store my products?",
              content: "Store cannabis products in a cool, dark place away from direct sunlight. Proper storage maintains potency and prevents degradation."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Schedule Your Consultation"
          description="Connect with our healthcare professionals to discuss your medical cannabis needs and find the right products for your wellness journey."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764003092132-p5lkijxr.jpg"
          imageAlt="Medical consultation"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Request Consultation"
          termsText="We respect your privacy and comply with all HIPAA regulations. Your information is secure."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="MediCare Cannabis"
          copyrightText="© 2025 MediCare Cannabis. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Tinctures", href: "#" },
                { label: "Capsules", href: "#" },
                { label: "Oils", href: "#" },
                { label: "Edibles", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Compliance", href: "#" },
                { label: "Disclaimer", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}