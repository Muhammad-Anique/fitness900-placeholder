import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

// Page-specific metadata
export const metadata: Metadata = {
  title: 'Coming Soon - Fitness900',
  description: 'Fitness900 is launching soon! Join the waitlist for exclusive early access to our premium fitness platform featuring professional training, nutrition guidance, and wellness tracking.',
  alternates: {
    canonical: 'https://fitness900.com',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Preview Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Coming
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fitness900 is building the ultimate platform for your fitness journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Personal Training
                </h3>
                <p className="text-gray-600">
                  Work with certified trainers to create personalized workout plans tailored to your goals
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Progress Tracking
                </h3>
                <p className="text-gray-600">
                  Monitor your fitness journey with detailed analytics and achievement milestones
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  Connect with like-minded individuals and stay motivated with our supportive community
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup Section */}
        <section className="py-16 bg-white" aria-labelledby="newsletter-heading">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Be the first to know when Fitness900 launches. Get exclusive early access and special offers.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" aria-label="Newsletter signup">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 outline-none transition-colors"
                    aria-describedby="email-description"
                  />
                  <p id="email-description" className="sr-only">
                    Enter your email address to receive updates about Fitness900
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors whitespace-nowrap"
                  aria-describedby="submit-description"
                >
                  Notify Me
                </button>
                <p id="submit-description" className="sr-only">
                  Click to subscribe to Fitness900 updates
                </p>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                No spam. Unsubscribe at any time. Read our{' '}
                <a href="#" className="text-primary hover:text-primary-dark underline">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}