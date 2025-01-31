"use client"

import { useState } from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-12">Contact Us</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="md:w-1/3 bg-[#F5F5F5] p-8 text-black">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-4">We'd love to hear from you. Here's how you can reach us...</p>
              <div className="flex items-center mb-4">
                <FaPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-2" />
                <span>support@example.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Market St, San Francisco, CA 94105</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F5F5F5] focus:ring-[#F5F5F5]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F5F5F5] focus:ring-[#F5F5F5]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F5F5F5] focus:ring-[#F5F5F5]"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#F5F5F5] hover:bg-[#E5E5C2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5F5F5] transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
