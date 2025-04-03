import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaFacebook } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Pathwei Coaching</span>
              <img
                className="h-12 w-auto"
                src="/logo.png"
                alt="Pathwei Coaching"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded-md px-2 py-1 transition-colors duration-200">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Pathwei Coaching</span>
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Pathwei Coaching"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* Decorative background elements */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".2"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#60A5FA" />
                  <stop offset={1} stopColor="#93C5FD" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-630c-4062-ae8c-9a834f634ff0)"
                fillOpacity=".2"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-630c-4062-ae8c-9a834f634ff0"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#60A5FA" />
                  <stop offset={1} stopColor="#93C5FD" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Japanese symbols */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[10%] top-[20%] text-6xl text-brand/10 rotate-12">和</div>
            <div className="absolute right-[15%] top-[40%] text-7xl text-brand/10 -rotate-12">道</div>
            <div className="absolute left-[20%] bottom-[30%] text-5xl text-brand/10 rotate-45">心</div>
            <div className="absolute right-[25%] bottom-[20%] text-6xl text-brand/10 -rotate-30">禅</div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Find Your Path to Wellness with Pathwei Coaching
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover holistic healing through sound therapy, meditation, and personalized coaching. Transform your life with ancient wisdom and modern techniques.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Book a Session
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services section */}
        <div id="services" className="bg-gray-100 py-24 sm:py-32 relative overflow-hidden">
          {/* Mountain silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-48">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path
                fill="#60A5FA"
                fillOpacity="0.2"
                d="M0,320L48,293.3C96,267,192,213,288,181.3C384,149,480,139,576,154.7C672,171,768,213,864,234.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Comprehensive healing solutions tailored to your unique journey
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Sound Therapy</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Experience deep relaxation and healing through the power of sound vibrations and frequencies.
                </p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Meditation Guidance</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Learn effective meditation techniques to calm your mind and enhance your spiritual journey.
                </p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Personal Coaching</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Receive personalized guidance to overcome challenges and achieve your wellness goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div id="about" className="bg-white py-24 sm:py-32 relative overflow-hidden">
          {/* Mountain silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-64">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path
                fill="#60A5FA"
                fillOpacity="0.2"
                d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
          {/* Japanese symbols */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[5%] top-[10%] text-8xl text-brand/5 rotate-12">静</div>
            <div className="absolute right-[10%] top-[30%] text-9xl text-brand/5 -rotate-12">美</div>
            <div className="absolute left-[15%] bottom-[20%] text-7xl text-brand/5 rotate-45">和</div>
            <div className="absolute right-[20%] bottom-[10%] text-8xl text-brand/5 -rotate-30">平</div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Pathwei Coaching</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Pathwei Coaching, we believe in the transformative power of holistic healing. Our approach combines ancient wisdom with modern techniques to help you achieve balance and wellness in your life.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Our founder brings years of experience in sound therapy, meditation, and personal development. We understand that each person's journey is unique, and we tailor our services to meet your specific needs and goals.
                </p>
                <p className="mt-6">
                  Whether you're seeking stress relief, spiritual growth, or personal transformation, our holistic approach addresses the mind, body, and spirit. We create a safe and nurturing environment where you can explore, heal, and grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Begin your journey to wellness today
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://www.facebook.com/PathWeiSounds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand/80"
                >
                  <FaFacebook className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Pathwei Coaching. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App