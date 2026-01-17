import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wine, Sun, Camera, Heart, Star, Utensils, Music, Sparkles } from 'lucide-react';

export default function CaliforniaTrip() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const slides = [
    // Slide 0: Hero
    {
      type: 'hero',
      bg: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=80',
      content: (
        <div className="h-full flex flex-col items-center justify-center text-center px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
          <div className="relative z-10">
            <div className="text-white/80 text-lg tracking-widest mb-4 animate-pulse">✦ A PROPOSAL FOR US ✦</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg" style={{fontFamily: 'Georgia, serif'}}>
              California Dreaming
            </h1>
            <p className="text-2xl text-white/90 mb-8 max-w-xl">7 unforgettable days along the Pacific Coast</p>
            <div className="flex gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1"><Wine size={16}/> Wine Country</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Sun size={16}/> Beaches</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Heart size={16}/> Romance</span>
            </div>
            <div className="mt-12 text-white/60 text-sm animate-bounce">Swipe to explore →</div>
          </div>
        </div>
      )
    },
    // Slide 1: Overview
    {
      type: 'overview',
      bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col relative">
          <div className="absolute inset-0 bg-slate-900/85"></div>
          <div className="relative z-10 flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-2 text-amber-400">The Journey</h2>
            <p className="text-slate-400 mb-6">March 2026 • 7 Days • 500 Miles of Pacific Coast Magic</p>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-pink-400 to-purple-400"></div>
                
                {[
                  { day: '1-2', place: 'Napa Valley', icon: Wine, desc: 'World-class wine tasting' },
                  { day: '3', place: 'San Francisco', icon: Camera, desc: 'Golden Gate & city charm' },
                  { day: '4', place: 'Carmel-by-the-Sea', icon: Heart, desc: 'Romantic coastal village' },
                  { day: '5', place: 'Big Sur', icon: Star, desc: 'America\'s most scenic drive' },
                  { day: '6', place: 'Santa Barbara', icon: Sun, desc: 'Beach + wine country' },
                  { day: '7', place: 'Los Angeles', icon: Music, desc: 'Hollywood & shows' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 mb-4 relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center z-10 shadow-lg">
                      <item.icon size={20} className="text-white"/>
                    </div>
                    <div className="flex-1 bg-slate-800/50 rounded-lg p-3 backdrop-blur">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white">{item.place}</span>
                        <span className="text-xs text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded">Day {item.day}</span>
                      </div>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 2: Napa
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col text-white relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-amber-300 text-sm tracking-widest mb-2">DAYS 1-2</div>
            <h2 className="text-4xl font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>Napa Valley</h2>
            <p className="text-amber-200 mb-6">Wine Country Paradise</p>
            
            <div className="flex-1 flex flex-col justify-end gap-4 pb-4">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <Wine size={20}/>
                  </div>
                  <div className="font-bold">World-Class Tastings</div>
                </div>
                <p className="text-sm text-amber-100 leading-relaxed">
                  Sparkling wine on French château terraces at Domaine Carneros. Medieval castle vibes at Castello di Amorosa. Private cave tours at Far Niente.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <Utensils size={20}/>
                  </div>
                  <div className="font-bold">Incredible Dining</div>
                </div>
                <p className="text-sm text-amber-100 leading-relaxed">
                  Bouchon Bistro by Thomas Keller. Press steakhouse with 1,000+ wine list. Vineyard picnics with local cheese & charcuterie.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mt-2">
                <div className="bg-amber-500/40 backdrop-blur rounded-xl p-3 text-center border border-amber-400/30">
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-xs text-amber-200">Wineries</div>
                </div>
                <div className="bg-amber-500/40 backdrop-blur rounded-xl p-3 text-center border border-amber-400/30">
                  <div className="text-2xl font-bold">3-4</div>
                  <div className="text-xs text-amber-200">Tastings/Day</div>
                </div>
                <div className="bg-amber-500/40 backdrop-blur rounded-xl p-3 text-center border border-amber-400/30">
                  <div className="text-2xl font-bold">$0</div>
                  <div className="text-xs text-amber-200">Driving*</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: San Francisco
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col text-white relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-orange-900/30"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-orange-300 text-sm tracking-widest mb-2">DAY 3</div>
            <h2 className="text-4xl font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>San Francisco</h2>
            <p className="text-orange-200 mb-6">The Golden City</p>
            
            <div className="flex-1 flex flex-col justify-end pb-4">
              <div className="bg-black/50 backdrop-blur-md rounded-3xl p-5 mb-4 border border-white/10">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌉</span> Golden Gate Bridge
                </h3>
                <p className="text-sm text-orange-100">
                  THE iconic California photo. We'll stop at Battery Spencer for the perfect shot with fog rolling under the bridge.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                  <div className="text-2xl mb-1">🚋</div>
                  <div className="font-bold text-sm">Cable Car</div>
                  <div className="text-xs text-orange-200">Historic ride</div>
                </div>
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                  <div className="text-2xl mb-1">🦀</div>
                  <div className="font-bold text-sm">Fisherman's Wharf</div>
                  <div className="text-xs text-orange-200">Fresh seafood</div>
                </div>
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                  <div className="text-2xl mb-1">🛍️</div>
                  <div className="font-bold text-sm">Union Square</div>
                  <div className="text-xs text-orange-200">Designer shops</div>
                </div>
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                  <div className="text-2xl mb-1">🍝</div>
                  <div className="font-bold text-sm">North Beach</div>
                  <div className="text-xs text-orange-200">Italian dining</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: Carmel
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col text-white relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-cyan-900/20"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-cyan-300 text-sm tracking-widest mb-2">DAY 4</div>
            <h2 className="text-4xl font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>Carmel-by-the-Sea</h2>
            <p className="text-cyan-200 mb-6">Fairytale Coastal Village</p>
            
            <div className="flex-1 flex flex-col justify-end pb-4 gap-4">
              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <div className="text-lg font-bold mb-2 flex items-center gap-2">
                  <Heart className="text-pink-400" size={20}/>
                  European Charm in California
                </div>
                <p className="text-sm text-cyan-100 mb-3">
                  No street addresses—houses have names! Storybook cottages, white sand beach, world-class art galleries, cozy wine bars.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-500/30 text-xs px-2 py-1 rounded-full border border-cyan-400/30">Art Galleries</span>
                  <span className="bg-pink-500/30 text-xs px-2 py-1 rounded-full border border-pink-400/30">Wine Tasting</span>
                  <span className="bg-amber-500/30 text-xs px-2 py-1 rounded-full border border-amber-400/30">Fine Dining</span>
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="font-bold mb-2">Where to Stay</div>
                <p className="text-sm text-cyan-200">L'Auberge Carmel (boutique luxury) or Cypress Inn (Doris Day's charming hotel)</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/30 to-pink-500/30 backdrop-blur rounded-2xl p-4 border border-white/10 text-center">
                <div className="text-sm text-cyan-200">Dinner at</div>
                <div className="font-bold">Aubergine (Michelin ⭐) or La Bicyclette</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: Big Sur
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1558128364-8c5eedfeab08?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col text-white relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-blue-900/20"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-blue-300 text-sm tracking-widest mb-2">DAY 5</div>
            <h2 className="text-4xl font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>Big Sur</h2>
            <p className="text-blue-200 mb-4">America's Most Beautiful Drive</p>
            
            <div className="flex-1 flex flex-col justify-end pb-4 gap-3">
              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 border-l-4 border-l-cyan-400">
                <div className="font-bold mb-1">Bixby Creek Bridge</div>
                <p className="text-sm text-blue-100">THE iconic photo spot. 714-foot span over the canyon. Pull off before the bridge for best shots.</p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 border-l-4 border-l-pink-400">
                <div className="font-bold mb-1">McWay Falls</div>
                <p className="text-sm text-blue-100">80-foot waterfall cascading onto a pristine beach. 5-minute walk from parking. No hiking needed!</p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 border-l-4 border-l-amber-400">
                <div className="font-bold mb-1">Lunch at Nepenthe</div>
                <p className="text-sm text-blue-100">Legendary restaurant with 800-foot ocean views. Get the Ambrosiaburger. Trust me.</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur rounded-2xl p-4 flex items-center gap-4 border border-white/10">
                <div className="text-3xl">🚗</div>
                <div>
                  <div className="font-bold">Convertible Weather</div>
                  <div className="text-sm text-blue-200">Top down, PCH cruising, zero hiking required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Santa Barbara
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col text-white relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-amber-900/20"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-amber-300 text-sm tracking-widest mb-2">DAY 6</div>
            <h2 className="text-4xl font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>Santa Barbara</h2>
            <p className="text-amber-200 mb-6">The American Riviera</p>
            
            <div className="flex-1 flex flex-col justify-end pb-4 gap-4">
              <div className="flex gap-3">
                <div className="flex-1 bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🏖️</div>
                  <div className="font-bold">Beach</div>
                  <p className="text-xs text-amber-100">Butterfly Beach in Montecito—gorgeous, uncrowded, celeb-spotting</p>
                </div>
                <div className="flex-1 bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🍷</div>
                  <div className="font-bold">Wine</div>
                  <p className="text-xs text-amber-100">Funk Zone urban tasting rooms, walkable from downtown</p>
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <div className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Sparkles className="text-amber-400" size={20}/> 
                  Santa Ynez Valley Detour
                </div>
                <p className="text-sm text-amber-100 mb-3">
                  The <em>Sideways</em> wine region! Charming Los Olivos village, Solvang Danish town, and Hitching Post II (from the movie).
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-pink-500/40 text-xs px-2 py-1 rounded-full">Pinot Noir</span>
                  <span className="bg-amber-500/40 text-xs px-2 py-1 rounded-full">Chardonnay</span>
                  <span className="bg-purple-500/40 text-xs px-2 py-1 rounded-full">Danish Pastries</span>
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                <div className="text-sm text-amber-200">Dinner at</div>
                <div className="font-bold">Bouchon • The Lark • Loquita</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 7: Los Angeles
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80',
      bgAlt: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col text-white relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-purple-900/60 to-pink-900/40"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-pink-300 text-sm tracking-widest mb-2">DAY 7</div>
            <h2 className="text-4xl font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>Los Angeles</h2>
            <p className="text-pink-200 mb-6">Grand Finale</p>
            
            <div className="flex-1 flex flex-col justify-end pb-4 gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="text-xl mb-1">🎬</div>
                  <div className="font-bold text-sm">Hollywood</div>
                  <p className="text-xs text-pink-200">Walk of Fame, handprints, Hollywood Sign photo</p>
                </div>
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="text-xl mb-1">🛍️</div>
                  <div className="font-bold text-sm">Rodeo Drive</div>
                  <p className="text-xs text-pink-200">Gucci, Prada, Louis Vuitton</p>
                </div>
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="text-xl mb-1">🎡</div>
                  <div className="font-bold text-sm">Santa Monica</div>
                  <p className="text-xs text-pink-200">Iconic pier, beach, sunset cocktails</p>
                </div>
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="text-xl mb-1">🎭</div>
                  <div className="font-bold text-sm">Broadway Show</div>
                  <p className="text-xs text-pink-200">Six: The Musical or concert</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-500/40 to-pink-500/40 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="font-bold mb-1 flex items-center gap-2">
                  <Star size={18} className="text-amber-400"/> Perfect Ending
                </div>
                <p className="text-sm text-white/90">
                  Sunset dinner at Catch LA rooftop or Nobu Malibu. Toast to an incredible week together. 🥂
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Summary
    {
      type: 'summary',
      bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col text-white relative">
          <div className="absolute inset-0 bg-slate-900/90"></div>
          <div className="relative z-10 flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              Why This Trip?
            </h2>
            
            <div className="flex-1 flex flex-col justify-center gap-3">
              {[
                { emoji: '🍷', title: 'Wine', desc: 'Napa + Santa Barbara = World-class tasting without pretense' },
                { emoji: '🏖️', title: 'Beach', desc: 'Carmel, Santa Barbara, Malibu—no crowded tourist beaches' },
                { emoji: '🍽️', title: 'Food', desc: 'Farm-to-table California cuisine, Michelin stars, seafood' },
                { emoji: '🛍️', title: 'Shopping', desc: 'Union Square, Rodeo Drive, boutique villages' },
                { emoji: '🎭', title: 'Shows', desc: 'Broadway in LA, concerts, world-class entertainment' },
                { emoji: '🚗', title: 'The Drive', desc: 'Convertible on PCH = bucket list memory' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-800/70 backdrop-blur rounded-xl p-3 border border-slate-700">
                  <div className="text-2xl">{item.emoji}</div>
                  <div>
                    <div className="font-bold text-amber-400">{item.title}</div>
                    <div className="text-sm text-slate-300">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Slide 9: CTA
    {
      type: 'cta',
      bg: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80',
      content: (
        <div className="h-full p-8 flex flex-col text-white items-center justify-center text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 via-purple-700/80 to-indigo-800/80"></div>
          <div className="relative z-10">
            <div className="text-5xl mb-6">💕</div>
            <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              Let's Do This
            </h2>
            <p className="text-purple-200 mb-8 max-w-sm">
              7 days, just us. Wine, beaches, incredible food, and one of the world's most beautiful drives.
            </p>
            
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 w-full max-w-sm border border-white/20">
              <div className="text-sm text-purple-200 mb-2">Estimated Budget</div>
              <div className="text-4xl font-bold mb-2">$5,500 - $6,500</div>
              <div className="text-xs text-purple-200">
                Includes: Hotels, car, wine, dining, shows
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-purple-200">
              <div>✓ No hiking, museums, or tourist traps</div>
              <div>✓ Adult-only vibes, zero crowds</div>
              <div>✓ Memories that last forever</div>
            </div>
            
            <div className="mt-8 text-2xl animate-pulse">
              What do you say? ✨
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col overflow-hidden">
      {/* Main slide area */}
      <div className="flex-1 relative overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="w-full h-full flex-shrink-0"
              style={slide.bg ? {
                backgroundImage: `url(${slide.bgAlt || slide.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : {}}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="bg-slate-900/95 backdrop-blur px-4 py-3 flex items-center justify-between border-t border-slate-800">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2 rounded-full transition-all ${currentSlide === 0 ? 'text-slate-600' : 'text-white bg-white/10 hover:bg-white/20'}`}
        >
          <ChevronLeft size={24}/>
        </button>
        
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? 'bg-amber-400 w-6' : 'bg-slate-600 hover:bg-slate-500 w-2'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-2 rounded-full transition-all ${currentSlide === slides.length - 1 ? 'text-slate-600' : 'text-white bg-white/10 hover:bg-white/20'}`}
        >
          <ChevronRight size={24}/>
        </button>
      </div>
    </div>
  );
}
