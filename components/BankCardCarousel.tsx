import React from 'react'
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Card = {
    id: number;
    category: string;
    bankName: string;
    cardName: string;
    description: string;
    image: string;
    joiningFee: number;
    renewalFee: number;
    bestSuitedFor: string;
    rewardType: string;
    welcomeBenefits: string;
    starRating: number;
};

const bankCardCarousel = ({ cards, title, currentIndex, onNext, onPrev }: {
    cards: Card[];
    title: string;
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
  }) => {
    const visibleCards = cards.slice(0, 5);
  
    if (visibleCards.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No cards found for this bank.</p>
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
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-lg">{card.cardName}</h4>
                          <p className="text-sm opacity-90">{card.bankName}</p>
                        </div>
                        <Badge className="bg-white/20 text-white">Premium</Badge>
                      </div>
                      <div className="w-full h-24 hover:scale-105 transition-all  rounded-lg mb-4 flex items-center justify-center">
                        <img 
                          src={card.image} 
                          alt={card.cardName}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4 flex-1">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Joining Fee</p>
                        <p className="font-semibold text-green-600">₹{card.joiningFee}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Renewal Fee</p>
                        <p className="font-semibold text-green-600">₹{card.renewalFee}</p>
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
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white mt-auto">
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

export default bankCardCarousel