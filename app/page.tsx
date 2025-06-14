'use client';

import { useState, useEffect } from 'react';
import { Send, Sparkles, CreditCard, Star, Gift, Fuel, Plane, Shield, Banknote, ChevronLeft, ChevronRight, Globe, Building2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: 'best', name: 'Best Credit Cards', icon: Star, color: 'from-purple-500 to-pink-500' },
  { id: 'rewards', name: 'Rewards', icon: Gift, color: 'from-blue-500 to-cyan-500' },
  { id: 'cashback', name: 'Cash Back', icon: Banknote, color: 'from-green-500 to-emerald-500' },
  { id: 'fuel', name: 'Fuel', icon: Fuel, color: 'from-orange-500 to-red-500' },
  { id: 'lifetime', name: 'Lifetime Free', icon: Shield, color: 'from-teal-500 to-green-500' },
  { id: 'forex', name: 'Forex Credit Cards', icon: Globe, color: 'from-indigo-500 to-purple-500' },
  { id: 'rupay', name: 'RuPay Credit Cards', icon: CreditCard, color: 'from-rose-500 to-pink-500' },
  { id: 'international-travel', name: 'International Travel', icon: Plane, color: 'from-cyan-500 to-blue-500' },
  { id: 'travel', name: 'Travel', icon: Plane, color: 'from-violet-500 to-purple-500' },
  { id: 'domestic-lounge', name: 'Domestic Lounge', icon: Building2, color: 'from-amber-500 to-orange-500' },
  { id: 'international-lounge', name: 'International Lounge', icon: Building2, color: 'from-emerald-500 to-teal-500' },
  { id: 'fintech', name: 'Fintech Cards', icon: Zap, color: 'from-pink-500 to-rose-500' },
];

const banks = [
  'HDFC Bank', 'SBI Card', 'IDFC Bank', 'BOBCARD', 'Axis Bank', 'AU Bank',
  'RBL', 'Kotak Mahindra', 'ICICI Bank', 'IDBI Bank', 'HSBC', 'YES Bank',
  'AmEx', 'IndusInd Bank', 'Standard Chartered', 'Federal Bank'
];

const allCards = [
  {
    id: 1,
    name: 'HDFC Millennia Credit Card',
    bank: 'HDFC Bank',
    image: '/api/placeholder/300/180',
    joiningFee: 'Nil',
    renewalFee: 'Nil',
    bestSuitedFor: 'Food & Entertainment',
    rewardType: 'Reward Points',
    welcomeBenefits: '3-Month EazyDiner Prime Membership and 500 Bonus EazyPoints',
    gradient: 'from-purple-600 to-blue-600',
    rating: 4.8,
    category: 'best'
  },
  {
    id: 2,
    name: 'SBI SimplyCLICK',
    bank: 'SBI Card',
    image: '/api/placeholder/300/180',
    joiningFee: '₹999',
    renewalFee: '₹999',
    bestSuitedFor: 'Online Shopping',
    rewardType: 'Cashback',
    welcomeBenefits: '₹500 Amazon Gift Card on joining and 2000 Bonus Reward Points',
    gradient: 'from-orange-500 to-red-500',
    rating: 4.6,
    category: 'cashback'
  },
  {
    id: 3,
    name: 'Axis Vistara Credit Card',
    bank: 'Axis Bank',
    image: '/api/placeholder/300/180',
    joiningFee: '₹1,500',
    renewalFee: '₹1,500',
    bestSuitedFor: 'Travel',
    rewardType: 'Air Miles',
    welcomeBenefits: '1,500 Bonus Vistara Points and Complimentary Club Vistara membership',
    gradient: 'from-blue-500 to-cyan-500',
    rating: 4.7,
    category: 'travel'
  },
  {
    id: 4,
    name: 'ICICI Amazon Pay Credit Card',
    bank: 'ICICI Bank',
    image: '/api/placeholder/300/180',
    joiningFee: 'Nil',
    renewalFee: 'Nil',
    bestSuitedFor: 'Amazon Shopping',
    rewardType: 'Cashback',
    welcomeBenefits: '₹500 Amazon Pay Gift Card on first transaction',
    gradient: 'from-green-500 to-emerald-500',
    rating: 4.5,
    category: 'cashback'
  },
  {
    id: 5,
    name: 'Kotak 811 #Dream Different Credit Card',
    bank: 'Kotak Mahindra',
    image: '/api/placeholder/300/180',
    joiningFee: 'Nil',
    renewalFee: 'Nil',
    bestSuitedFor: 'First-time users',
    rewardType: 'Cashback',
    welcomeBenefits: '1% cashback on all spends for first 6 months',
    gradient: 'from-teal-500 to-green-500',
    rating: 4.2,
    category: 'lifetime'
  },
  {
    id: 6,
    name: 'HDFC Regalia Credit Card',
    bank: 'HDFC Bank',
    image: '/api/placeholder/300/180',
    joiningFee: '₹2,500',
    renewalFee: '₹2,500',
    bestSuitedFor: 'Premium lifestyle',
    rewardType: 'Reward Points',
    welcomeBenefits: '10,000 bonus reward points on spending ₹1L in first 90 days',
    gradient: 'from-purple-600 to-indigo-600',
    rating: 4.9,
    category: 'best'
  },
  {
    id: 7,
    name: 'SBI Card PRIME',
    bank: 'SBI Card',
    image: '/api/placeholder/300/180',
    joiningFee: '₹2,999',
    renewalFee: '₹2,999',
    bestSuitedFor: 'Dining & Movies',
    rewardType: 'Reward Points',
    welcomeBenefits: '5,000 bonus reward points on first transaction',
    gradient: 'from-red-500 to-orange-500',
    rating: 4.4,
    category: 'rewards'
  }
];

// Carousel Component
const CardCarousel = ({ cards, title, currentIndex, onNext, onPrev }: {
  cards: typeof allCards;
  title: string;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}) => {
  const visibleCards = cards.slice(0, 5);

  if (visibleCards.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No cards found for the selected criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={onPrev}
            disabled={visibleCards.length <= 1}
            className="text-purple-600 border-purple-600 hover:bg-purple-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onNext}
            disabled={visibleCards.length <= 1}
            className="text-purple-600 border-purple-600 hover:bg-purple-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-8"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {visibleCards.map((card) => (
            <div key={card.id} className="flex-none w-full md:w-1/2 lg:w-1/3">
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`bg-gradient-to-br ${card.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-lg">{card.name}</h4>
                        <p className="text-sm opacity-90">{card.bank}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">{card.rating}</span>
                      </div>
                    </div>
                    <div className="w-full h-24 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                      <CreditCard className="w-8 h-8 opacity-60" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4 flex-1">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Joining Fee</p>
                      <p className="font-semibold text-green-600">{card.joiningFee}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Renewal Fee</p>
                      <p className="font-semibold text-green-600">{card.renewalFee}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Best Suited For</p>
                      <p className="font-semibold">{card.bestSuitedFor}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Reward Type</p>
                      <p className="font-semibold">{card.rewardType}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Welcome Benefits</p>
                    <p className="text-sm text-gray-700">{card.welcomeBenefits}</p>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${card.gradient} hover:opacity-90 text-white mt-auto`}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      message: "Hi there! I'm CardGuru, your AI assistant. Looking for a specific type of card or have questions about benefits?"
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState('best');
  const [selectedBank, setSelectedBank] = useState('');
  
  // Separate states for category and bank carousels
  const [categoryCardIndex, setCategoryCardIndex] = useState(0);
  const [bankCardIndex, setBankCardIndex] = useState(0);
  
  const [categoryFilteredCards, setCategoryFilteredCards] = useState(allCards.filter(card => card.category === 'best'));
  const [bankFilteredCards, setBankFilteredCards] = useState<typeof allCards>([]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = allCards.filter(card => card.category === selectedCategory);
      setCategoryFilteredCards(filtered);
      setCategoryCardIndex(0);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedBank) {
      const filtered = allCards.filter(card => card.bank === selectedBank);
      setBankFilteredCards(filtered);
      setBankCardIndex(0);
    }
  }, [selectedBank]);

  const handleSendMessage = async () => {
    if (!chatMessage.trim()) return;

    const newMessage = { type: 'user', message: chatMessage };
    setChatHistory(prev => [...prev, newMessage]);
    setChatMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        message: `I can help you find the perfect credit card! Based on your query about "${chatMessage}", I'd recommend checking our ${categories[Math.floor(Math.random() * categories.length)].name.toLowerCase()} section. Would you like me to show you specific cards?`
      };
      setChatHistory(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedBank(''); // Clear bank selection
  };

  const handleBankClick = (bankName: string) => {
    setSelectedBank(bankName);
    setSelectedCategory(''); // Clear category selection
  };

  const nextCategoryCard = () => {
    setCategoryCardIndex((prev) => (prev + 1) % Math.min(categoryFilteredCards.length, 5));
  };

  const prevCategoryCard = () => {
    setCategoryCardIndex((prev) => (prev - 1 + Math.min(categoryFilteredCards.length, 5)) % Math.min(categoryFilteredCards.length, 5));
  };

  const nextBankCard = () => {
    setBankCardIndex((prev) => (prev + 1) % Math.min(bankFilteredCards.length, 5));
  };

  const prevBankCard = () => {
    setBankCardIndex((prev) => (prev - 1 + Math.min(bankFilteredCards.length, 5)) % Math.min(bankFilteredCards.length, 5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="container mx-auto px-4 py-16 relative">
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
                <p className="text-xl text-gray-300 leading-relaxed">
                  Discover the best credit cards tailored to your lifestyle. Compare rewards, benefits, and offers from top banks.
                </p>
              </div>

              {/* AI Assistant Chat */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">CardGuru AI Assistant</CardTitle>
                      <p className="text-sm text-gray-300">Ask me anything about credit cards</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="max-h-40 overflow-y-auto space-y-3">
                    {chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg text-sm ${
                            chat.type === 'user'
                              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                              : 'bg-white/20 text-gray-100'
                          }`}
                        >
                          {chat.message}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="What credit cards are you looking for?"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Glowing Credit Card */}
            <div className="relative flex justify-center">
              <div className="relative">
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
          </div>
        </div>
      </section>

      {/* Categories and Banks Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* Categories */}
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
                    className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 overflow-hidden ${
                      selectedCategory === category.id && !selectedBank ? `ring-2 ring-purple-500 shadow-xl` : ''
                    }`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-sm">{category.name}</h3>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Category Cards Carousel */}
            {selectedCategory && !selectedBank && (
              <CardCarousel
                cards={categoryFilteredCards}
                title={`${categories.find(c => c.id === selectedCategory)?.name} Credit Cards`}
                currentIndex={categoryCardIndex}
                onNext={nextCategoryCard}
                onPrev={prevCategoryCard}
              />
            )}
          </div>

          {/* Banks */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Bank</h2>
              <p className="text-gray-600 text-lg">Choose from India's leading banks</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
              {banks.map((bank, index) => (
                <Card 
                  key={index} 
                  className={`group cursor-pointer transition-all hover:scale-105 hover:shadow-lg border border-gray-200 ${
                    selectedBank === bank && !selectedCategory ? 'ring-2 ring-purple-500 shadow-lg' : ''
                  }`}
                  onClick={() => handleBankClick(bank)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-800">{bank}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bank Cards Carousel */}
            {selectedBank && !selectedCategory && (
              <CardCarousel
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
              <div className="grid md:grid-cols-2 h-full">
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
              <div className="grid md:grid-cols-2 h-full">
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
    </div>
  );
}