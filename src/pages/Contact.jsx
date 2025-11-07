import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setFormStatus('sending');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form data:', data);
      setFormStatus('success');
      reset();

      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={32} />,
      title: 'Email Us',
      info: 'info@baabadvertising.com',
      link: 'mailto:info@baabadvertising.com',
      color: '#E63946',
    },
    {
      icon: <Phone size={32} />,
      title: 'Call Us',
      info: '+971 (0) 4 227 8894',
      link: 'tel:+97142278894',
      color: '#4ECDC4',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Visit Us',
      info: 'Dubai Digital Park, DSO',
      link: '#',
      color: '#8B5CF6',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-yellow">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-black/70 text-sm font-bold uppercase tracking-wider">
                Get In Touch
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-black mt-4 mb-6">
                Let's Work Together
              </h1>
              <p className="text-xl text-black/80 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message and
                we'll respond as soon as possible.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((item, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.a
                  href={item.link}
                  className="block bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{ borderTop: `4px solid ${item.color}` }}
                >
                  <div
                    className="mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.info}</p>
                </motion.a>
              </FadeInWhenVisible>
            ))}
          </div>

          {/* Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <FadeInWhenVisible>
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-yellow focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-yellow focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-yellow focus:outline-none transition-colors"
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-yellow focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="design">Design & Creations</option>
                      <option value="print">Print & Publishing</option>
                      <option value="packaging">Packaging & Labelling</option>
                      <option value="branding">Branding & Promotions</option>
                      <option value="advertising">Advertising & Signage</option>
                      <option value="gifts">Gifts & Premium</option>
                      <option value="framing">Framing & Canvas</option>
                      <option value="carpet">Carpet & Curtains</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-yellow focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-primary-yellow text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-2 border-green-500 text-green-800 px-4 py-3 rounded-xl"
                    >
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border-2 border-red-500 text-red-800 px-4 py-3 rounded-xl"
                    >
                      Oops! Something went wrong. Please try again.
                    </motion.div>
                  )}
                </form>
              </div>
            </FadeInWhenVisible>

            {/* Additional Info */}
            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-8">
                {/* Office Hours */}
                <div className="bg-gray-50 p-8 rounded-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock size={32} className="text-primary-yellow" />
                    <h3 className="text-2xl font-bold text-black">Office Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">{item.day}</span>
                        <span className="text-gray-600">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gray-50 p-8 rounded-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin size={32} className="text-primary-yellow" />
                    <h3 className="text-2xl font-bold text-black">Our Location</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold">Offices 2013, Building A5-D</p>
                    <p>Dubai Digital Park, DSO</p>
                    <p>POBox 341887</p>
                    <p>Dubai - UAE</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-primary-yellow p-8 rounded-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe size={32} className="text-black" />
                    <h3 className="text-2xl font-bold text-black">Follow Us</h3>
                  </div>
                  <p className="text-black/80 mb-4">
                    Stay connected with us on social media for updates and inspiration
                  </p>
                  <div className="flex gap-4">
                    {['LinkedIn', 'Instagram', 'Facebook', 'Behance'].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social[0]}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <div className="bg-gray-200 h-96 rounded-3xl flex items-center justify-center">
              <p className="text-gray-500 text-lg">Map Integration Coming Soon</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}
