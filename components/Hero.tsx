import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AiChat from '@/components/AiChat';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
      <div className="container mx-auto px-4 py-29 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content & Chat */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Find Your Perfect{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Credit Card
                </span>{' '}
                Match
              </h1>
              <p>
              <TextGenerateEffect className="text-xl text-gray-300 leading-relaxed" words="Discover the best credit cards tailored to your lifestyle. Compare rewards, benefits, and offers from top banks." />
              </p>
            </div>
            {/* Glowing Credit Card */}
            <div className='relative ml-2 md:ml-30 md:mt-13 items-center w-[400px]'>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-3xl opacity-60 animate-pulse" />
              <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-xl p-1 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-white">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-sm opacity-80">CREDIT CARD</p>
                        <p className="text-lg font-semibold">Premium Rewards</p>
                      </div>
                      <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded opacity-80" />
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded opacity-40" />
                      <div className="font-mono text-xl tracking-wider">
                        •••• •••• •••• 1234
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <p className="opacity-60">VALID THRU</p>
                          <p>12/28</p>
                        </div>
                        <div>
                          <p className="opacity-60">CARDHOLDER</p>
                          <p>JOHN DOE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - AI Assistant Chat */}
          <AiChat />
        </div>
      </div>
    </section>
  )
}

export default Hero