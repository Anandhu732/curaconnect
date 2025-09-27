'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart,
  Users,
  Award,
  Target,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Clock,
  Lightbulb
} from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Anandhu Rajagopal",
      role: "Founder & CEO",
      bio: "Healthcare technology enthusiast with 10+ years of experience in digital health solutions. Passionate about making quality healthcare accessible to everyone.",
      image: "/team/founder.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Head of Technology",
      bio: "Full-stack engineer with expertise in scalable healthcare platforms. Previously worked at leading healthtech companies.",
      image: "/team/tech-head.jpg",
    },
    {
      name: "Dr. Raj Patel",
      role: "Medical Director",
      bio: "Board-certified physician with 15+ years of clinical experience. Ensures medical accuracy and patient safety in all our processes.",
      image: "/team/medical-director.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Head of User Experience",
      bio: "UX expert focused on creating intuitive healthcare experiences. Believes technology should be human-centered and accessible.",
      image: "/team/ux-head.jpg",
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Patient-First Approach",
      description: "Every decision we make prioritizes patient well-being and healthcare accessibility."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Trust & Security",
      description: "We maintain the highest standards of data security and privacy protection."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Quality Care",
      description: "We partner only with verified, qualified healthcare professionals and institutions."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: "Innovation",
      description: "We continuously innovate to make healthcare more accessible and efficient."
    }
  ];

  const milestones = [
    { year: "2023", event: "CuraConnect founded with a vision to democratize healthcare access" },
    { year: "2023", event: "Partnered with 100+ hospitals across 5 major cities" },
    { year: "2024", event: "Reached 10,000+ successful appointments booked" },
    { year: "2024", event: "Expanded to 50+ cities with 1000+ healthcare partners" },
    { year: "2024", event: "Launched telemedicine services and mobile app" }
  ];

  const achievements = [
    { icon: <Award className="h-6 w-6" />, text: "Healthcare Innovation Award 2024" },
    { icon: <Star className="h-6 w-6" />, text: "4.8/5 Average User Rating" },
    { icon: <Users className="h-6 w-6" />, text: "100,000+ Happy Patients" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "ISO 27001 Certified" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Bridging the Gap Between
              <span className="block text-blue-600">Patients and Quality Care</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              CuraConnect is transforming healthcare access across India by connecting patients
              with trusted doctors and hospitals through a seamless digital platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-2xl h-auto">
                <Link href="/book">
                  Book an Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="px-8 py-4 text-lg rounded-2xl h-auto">
                <Link href="/hospitals">
                  Find Hospitals
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To make quality healthcare accessible, affordable, and convenient for every Indian,
                regardless of their location or economic status. We believe that finding the right
                doctor shouldn&#39;t be a challenge – it should be as simple as a few clicks.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By leveraging technology, we&#39;re eliminating barriers between patients and healthcare
                providers, ensuring that everyone has access to the care they deserve.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become India&#39;s most trusted healthcare platform, where every patient finds
                their perfect doctor match, and every healthcare provider reaches patients who need them most.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Healthcare for All</div>
                  <div className="text-gray-600">Making quality care accessible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to a platform serving thousands of patients across India
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{milestone.year}</span>
                          </div>
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at CuraConnect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate healthcare professionals and technology experts working together
              to revolutionize healthcare access
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Social Proof */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Recognition & Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Awards, certifications, and milestones that validate our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="flex justify-center mb-3 text-blue-600">
                  {achievement.icon}
                </div>
                <p className="font-medium text-gray-800">{achievement.text}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-4">
               &quot;CuraConnect made it incredibly easy to find and book an appointment with a specialist.
                  The entire process was smooth, and I received excellent care. Highly recommended!&quot;
                </blockquote>
                <cite className="font-medium">- Rajesh Kumar, Mumbai</cite>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or need support? We&#39;re here to help you navigate your healthcare journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Get help with bookings and account issues</p>
                <Button variant="outline" asChild className="w-full">
                  <a href="mailto:support@curaconnect.in">support@curaconnect.in</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak with our support team directly</p>
                <Button variant="outline" asChild className="w-full">
                  <a href="tel:+911800123456">1800-123-456</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Office Location</h3>
                <p className="text-gray-600 mb-4">Visit our headquarters</p>
                <address className="text-gray-700 not-italic text-sm">
                  CuraConnect Technologies<br />
                  123 Healthcare Avenue<br />
                  Bangalore, Karnataka 560001
                </address>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-xl">
              <CardContent className="p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Experience Better Healthcare?
                </h3>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of satisfied patients who trust CuraConnect for their healthcare needs
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl h-auto">
                    <Link href="/book">
                      Find Your Doctor
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-2xl h-auto">
                    <Link href="/signup">
                      Create Account
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}