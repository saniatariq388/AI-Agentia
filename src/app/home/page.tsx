"use client"


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Cpu,
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Cloud,
  Shield,
  Database,
  Brain,
  Code,
  HeadsetIcon,
  Users,
  Rocket,
} from "lucide-react"
import { useState } from "react"
import AILogo from "@/components/AILogo"
import { UserRound } from 'lucide-react';
import Contact from "@/components/contact"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B0014] text-white">
      {/* Navigation */}
      <header className="border-b border-white/10  sticky top-0 z-10 bg-[#0B0014]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
             <AILogo />
              {/* <Image src="/placeholder.svg?height=32&width=32" alt="Agentia Logo" width={32} height={32} /> */}
              <span className="text-2xl font-bold text-white">Agentia</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="text-sm text-white/70 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#features" className="text-sm text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
                Get Started
              </Button>
            </nav>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-[#0B0014] border-b border-white/10">
            <Link href="#services" className="text-sm text-white/70 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#features" className="text-sm text-white/70 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
              Get Started
            </Button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 text-center lg:gap-12">
          <div className="space-y-6">
            <h1 className="text-xl font-bold leading-tight md:text-5xl lg:text-4xl">
              Delivering IT solutions that enable you to work smarter
            </h1>
            <p className="text-2xl text-white/70">
              Agentia provides cutting-edge IT services to transform your business operations
            </p>
            <Button className=" bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
              Learn More
            </Button>
          </div>
          {/* <div className="relative">
            <Image
              src="/AI.webp || 'placeholder.svg'?height=600&width=800"
              alt="Agentia IT Solutions"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {[
            { title: "Cloud Infrastructure", icon: Cloud, description: "Scalable and secure cloud solutions" },
            { title: "Cybersecurity Solutions", icon: Shield, description: "Protect your digital assets" },
            { title: "Data Analytics", icon: Database, description: "Insights from your data" },
            { title: "AI & Machine Learning", icon: Brain, description: "Intelligent automation solutions" },
            { title: "Custom Software Development", icon: Code, description: "Tailored software for your needs" },
            { title: "IT Consulting", icon: HeadsetIcon, description: "Expert guidance for your IT strategy" },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <CardHeader className="flex justify-around items-center">
                <service.icon className="h-12 w-12 mb-4 text-pink-500" />
                <CardTitle className='text-[#ec4899] '>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Agentia</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Cutting-edge Technology",
              icon: Cpu,
              description: "We leverage the latest tech to drive your business forward",
            },
            { title: "Expert Team", icon: Users, description: "Our skilled professionals deliver top-notch solutions" },
            {
              title: "Rapid Implementation",
              icon: Rocket,
              description: "Quick deployment to keep your business agile",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <CardHeader className="flex flex-col items-center">
                <feature.icon className="h-12 w-12 mb-4 text-pink-500" />
                <CardTitle className="text-[#ec4899]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Proven Process</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Consultation", icon: Users, description: "We discuss your needs and goals" },
            { title: "Strategy", icon: Cpu, description: "We develop a tailored IT strategy" },
            { title: "Implementation", icon: Rocket, description: "We deploy solutions efficiently" },
            { title: "Support", icon: HeadsetIcon, description: "We provide ongoing maintenance and support" },
          ].map((step, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <CardHeader className="flex flex-row items-center space-x-6">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Clients Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              position: "CTO, TechCorp",
              content: "Agentia transformed our IT infrastructure, boosting our productivity significantly.",
            },
            {
              name: "Michael Chen",
              position: "CEO, InnovateCo",
              content: "Their AI solutions have given us a competitive edge in our market.",
            },
            {
              name: "Emily Rodriguez",
              position: "COO, DataDrive",
              content: "The cybersecurity measures implemented by Agentia have been invaluable to our operations.",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
               <div className=" rounded-full  bg-gradient-to-r from-pink-500 to-purple-600 p-6"> <UserRound className="h-10 w-10 text-white" /></div>
                  {/* <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  /> */}
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-white/70">{testimonial.position}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your IT Infrastructure?</h2>
          <p className="mb-8 text-lg">Let Agentia guide you towards a smarter, more efficient future.</p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started Now</Button>
        </div>
      </section>

        <Contact/>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
            <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
             <AILogo />
              {/* <Image src="/placeholder.svg?height=32&width=32" alt="Agentia Logo" width={32} height={32} /> */}
              <span className="text-xl font-bold text-white">Agentia</span>
            </Link>
            </div>
              <p className="mb-4 text-sm text-white/70">Empowering businesses with innovative IT solutions</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white/70 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; {new Date().getFullYear()} Agentia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

