import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { Home, TentTree,  MapPinCheckInside,BrainCircuit  } from 'lucide-react';

const Hero = () => {
  return (
     <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 pt-[90px] mt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 "></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your Next Adventure with AI:{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
         Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Plans</h3>
              <p className="text-sm text-gray-600">Plan your trip with AI</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Hotels Analysis</h3>
              <p className="text-sm text-gray-600"> Get Hotels According To Your Budget</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TentTree className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Day Planning</h3>
              <p className="text-sm text-gray-600">Let AI Plan Your Days Smartly</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                < MapPinCheckInside className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Locations</h3>
              <p className="text-sm text-gray-600">Get Locations With Google Maps </p>
            </div>
          </div>
          <Link to={'/createtrip'}><Button>Get Started, It's free</Button></Link>
        </div>
        
      </div>
        

      </div>
      )
}

export default Hero