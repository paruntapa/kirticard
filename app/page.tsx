'use client';

import { useState, useEffect } from 'react';
import { Send, Sparkles, CreditCard, Star, Gift, Fuel, Plane, Shield, Banknote, ChevronLeft, ChevronRight, Globe, Building2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CategoryCardCarousel from '@/components/CategoryCardCarousel';
import BankCardCarousel from '@/components/BankCardCarousel';
import { Cards } from '@/types';
import Hero from '@/components/Hero';

const categories = [
  { id: 'BEST', name: 'Best Credit Cards', icon: Star, color: 'from-purple-500 to-pink-500' },
  { id: 'REWARDS', name: 'Rewards', icon: Gift, color: 'from-blue-500 to-cyan-500' },
  { id: 'CASHBACK', name: 'Cash Back', icon: Banknote, color: 'from-green-500 to-emerald-500' },
  { id: 'FUEL', name: 'Fuel', icon: Fuel, color: 'from-orange-500 to-red-500' },
  { id: 'LIFETIME_FREE', name: 'Lifetime Free', icon: Shield, color: 'from-teal-500 to-green-500' },
  { id: 'FOREX', name: 'Forex Credit Cards', icon: Globe, color: 'from-indigo-500 to-purple-500' },
  { id: 'RUPAY', name: 'RuPay Credit Cards', icon: CreditCard, color: 'from-rose-500 to-pink-500' },
  { id: 'INTERNATIONAL_TRAVEL', name: 'International Travel', icon: Plane, color: 'from-cyan-500 to-blue-500' },
  { id: 'TRAVEL', name: 'Travel', icon: Plane, color: 'from-violet-500 to-purple-500' },
  { id: 'DOMESTIC_LOUNGE', name: 'Domestic Lounge', icon: Building2, color: 'from-amber-500 to-orange-500' },
  { id: 'INTERNATIONAL_LOUNGE', name: 'International Lounge', icon: Building2, color: 'from-emerald-500 to-teal-500' },
  { id: 'FINTECH', name: 'Fintech Cards', icon: Zap, color: 'from-pink-500 to-rose-500' },
];

const banks = [
  'HDFC', 'SBI', 'IDFC', 'BOB', 'AXIS', 'AU',
  'RBL', 'KOTAK', 'ICICI', 'IDBI', 'HSBC', 'YES',
  'AMEX', 'INDUSIND', 'SC_BANK', 'FEDERAL'
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  
  const [categoryCardIndex, setCategoryCardIndex] = useState(0);
  const [bankCardIndex, setBankCardIndex] = useState(0);
  
  const [categoryFilteredCards, setCategoryFilteredCards] = useState<Cards[]>([]);
  const [bankFilteredCards, setBankFilteredCards] = useState<Cards[]>([]);

  useEffect(() => {
    const fetchCategoryCards = async () => {
      if (selectedCategory) {
        try {
          const response = await fetch(`/api/cards?category=${selectedCategory}`);
          if (response.status !== 200) throw new Error('Failed to fetch cards');
          const data = await response.json();
          setCategoryFilteredCards(data);
          setCategoryCardIndex(0);
        } catch (error) {
          console.error('Error fetching category cards:', error);
          setCategoryFilteredCards([]);
        }
      } else {
        setCategoryFilteredCards([]);
      }
    };

    fetchCategoryCards();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchBankCards = async () => {
      if (selectedBank) {
        try {
          const response = await fetch(`/api/cards?bank=${selectedBank}`);
          if (response.status !== 200) throw new Error('Failed to fetch cards');
          const data = await response.json();
          setBankFilteredCards(data);
          setBankCardIndex(0);
        } catch (error) {
          console.error('Error fetching bank cards:', error);
          setBankFilteredCards([]);
        }
      } else {
        setBankFilteredCards([]);
      }
    };

    fetchBankCards();
  }, [selectedBank]);

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const handleBankClick = (bankName: string) => {
    if (selectedBank === bankName) {
      setSelectedBank('');
    } else {
      setSelectedBank(bankName);
    }
  };

  const nextCategoryCard = () => {
    if (categoryFilteredCards.length > 0) {
      setCategoryCardIndex((prev) => (prev + 1) % Math.min(categoryFilteredCards.length, 5));
    }
  };

  const prevCategoryCard = () => {
    if (categoryFilteredCards.length > 0) {
      setCategoryCardIndex((prev) => (prev - 1 + Math.min(categoryFilteredCards.length, 5)) % Math.min(categoryFilteredCards.length, 5));
    }
  };

  const nextBankCard = () => {
    if (bankFilteredCards.length > 0) {
      setBankCardIndex((prev) => (prev + 1) % Math.min(bankFilteredCards.length, 5));
    }
  };

  const prevBankCard = () => {
    if (bankFilteredCards.length > 0) {
      setBankCardIndex((prev) => (prev - 1 + Math.min(bankFilteredCards.length, 5)) % Math.min(bankFilteredCards.length, 5));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse Credit Cards by Category</h2>
              <p className="text-gray-600 text-lg">Find the perfect card for your specific needs</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card
                    key={category.id}
                    className={`group cursor-pointer transition-all duration-500 hover:scale-110 border-0 overflow-hidden backdrop-blur-sm
                      shadow-lg hover:shadow-2xl
                      ${selectedCategory === category.id 
                        ? `ring-2 ring-purple-400 shadow-purple-500/50 shadow-2xl scale-105` 
                        : 'hover:shadow-purple-500/30'
                      }`}
                    style={{
                      boxShadow: selectedCategory === category.id 
                        ? '0 0 30px rgba(168, 85, 247, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)' 
                        : '0 10px 30px rgba(0, 0, 0, 0.2)'
                    }}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <div className={`bg-gradient-to-br ${category.color} p-6 text-white relative overflow-hidden`}>
                      {/* Glowing overlay */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-6 h-6 drop-shadow-sm" />
                        </div>
                        <h3 className="font-semibold text-sm drop-shadow-sm">{category.name}</h3>
                      </div>
                      
                      {/* Animated glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </div>
                  </Card>
                );
              })}
            </div>
            {/* Category Cards Carousel */}
            {categoryFilteredCards.length > 0 && (
              <CategoryCardCarousel
                cards={categoryFilteredCards}
                title={`${categories.find(c => c.id === selectedCategory)?.name} Credit Cards`}
                currentIndex={categoryCardIndex}
                onNext={nextCategoryCard}
                onPrev={prevCategoryCard}
              />
            )}
          </div>

          {/* Banks Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Bank</h2>
              <p className="text-gray-600 text-lg">Choose from India's leading banks</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
              {banks.map((bank, index) => (
                <Card 
                  key={index} 
                  className={`group cursor-pointer transition-all duration-500 hover:scale-110 border-0 backdrop-blur-sm bg-white/70 hover:bg-white/80
                    shadow-lg hover:shadow-2xl relative overflow-hidden
                    ${selectedBank === bank 
                      ? 'ring-2 ring-purple-400 shadow-purple-500/50 shadow-2xl scale-105 bg-white/90' 
                      : 'hover:shadow-purple-500/20'
                    }`}
                  style={{
                    boxShadow: selectedBank === bank 
                      ? '0 0 25px rgba(168, 85, 247, 0.3), 0 15px 35px rgba(0, 0, 0, 0.2)' 
                      : '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }}
                  onClick={() => handleBankClick(bank)}
                >
                  <CardContent className="p-6 text-center relative z-10">
                    {/* Glowing background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 relative z-10">
                      <CreditCard className="w-6 h-6 text-purple-600 drop-shadow-sm" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-800 whitespace-nowrap drop-shadow-sm relative z-10">{bank}</h3>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-purple-100/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-lg"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bank Cards Carousel */}
            { bankFilteredCards.length > 0 && (
              <BankCardCarousel
                cards={bankFilteredCards}
                title={`${selectedBank} Credit Cards`}
                currentIndex={bankCardIndex}
                onNext={nextBankCard}
                onPrev={prevBankCard}
              />
            )}
          </div>
        </div>
      </section>

      {/* New Cards Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">New Cards with Exciting Offers</h2>
            <p className="text-gray-300 text-lg">Don't miss out on the latest launches</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white overflow-hidden">
              <div className="grid lg:grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold">YES Bank Wellness Credit Card</h3>
                      <Badge className="bg-red-500 text-white">NEW</Badge>
                    </div>
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Joining Fee</span>
                        <span className="text-green-400">₹499</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Annual Fee</span>
                        <span>Get Waived on spends of ₹1L</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-6">
                      Get complimentary Zygne Cult fit membership worth ₹10,000 and 20% off on annual health checkups.
                    </p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Apply Now
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 flex items-center justify-center">
                  <div className="w-32 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-800 to-purple-900 border-blue-700 text-white overflow-hidden">
              <div className="grid  h-full">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold">ICICI Neo Digital Credit Card</h3>
                      <Badge className="bg-green-500 text-white">HOT</Badge>
                    </div>
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Joining Fee</span>
                        <span className="text-green-400">Nil</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Annual Fee</span>
                        <span className="text-green-400">Nil</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-6">
                      Get 5% cashback on all online transactions for the first 4 months (up to ₹5,000) and zero forex markup fees.
                    </p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    Apply Now
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-blue-600 p-6 flex items-center justify-center">
                  <div className="w-32 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">KirtiCard</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4 max-w-md">
                Your trusted AI-powered credit card comparison platform. Find the perfect card tailored to your financial needs with expert recommendations.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Globe className="w-4 h-4 text-gray-300" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Sparkles className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best Cards</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Cards</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cashback Cards</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compare Cards</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 KirtiCard. All rights reserved. Made with ❤️ for smart financial decisions.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-400">Powered by</span>
                <div className="flex items-center gap-1 text-purple-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold">AI Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}