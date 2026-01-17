import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wine, Sun, Camera, Heart, Star, Music, MapPin, Car, Clock, Bed, Coffee } from 'lucide-react';

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
            <div className="flex gap-4 text-white/80 text-sm flex-wrap justify-center">
              <span className="flex items-center gap-1"><Wine size={16}/> Wine Country</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Sun size={16}/> Beaches</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Heart size={16}/> Romance</span>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur rounded-xl px-6 py-3 inline-block">
              <span className="text-amber-300 font-bold">$10,500 - $12,600 CAD</span>
              <span className="text-white/60 text-sm ml-2">all-inclusive estimate</span>
            </div>
            <div className="mt-8 text-white/60 text-sm animate-bounce">Swipe to explore →</div>
          </div>
        </div>
      )
    },
    // Slide 1: Route Map & Overview
    {
      type: 'map',
      bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col relative">
          <div className="absolute inset-0 bg-slate-900/95"></div>
          <div className="relative z-10 flex flex-col h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-1 text-amber-400 flex items-center gap-2">
              <MapPin size={24}/> The Route
            </h2>
            <p className="text-slate-400 mb-4 text-sm">March 2026 • 800km of Pacific Coast Magic</p>

            {/* Visual Route */}
            <div className="flex-1 flex flex-col gap-2">
              {[
                { from: '✈️ SFO Airport', to: 'Napa Valley', time: '1 hr', km: '80 km', day: 'Day 1' },
                { from: 'Napa Valley', to: 'San Francisco', time: '1 hr', km: '65 km', day: 'Day 3' },
                { from: 'San Francisco', to: 'Carmel-by-the-Sea', time: '2 hrs', km: '190 km', day: 'Day 4' },
                { from: 'Carmel', to: 'Big Sur (scenic)', time: '1.5 hrs', km: '65 km', day: 'Day 5' },
                { from: 'Big Sur', to: 'Santa Barbara', time: '4 hrs', km: '320 km', day: 'Day 5-6' },
                { from: 'Santa Barbara', to: 'Los Angeles', time: '2 hrs', km: '150 km', day: 'Day 7' },
                { from: 'Los Angeles', to: '✈️ LAX Airport', time: '30 min', km: '25 km', day: 'Departure' },
              ].map((route, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-800/60 rounded-lg p-2 border border-slate-700/50">
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">{route.from}</div>
                    <div className="text-slate-500 text-xs">↓</div>
                    <div className="text-amber-400 text-sm font-medium">{route.to}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-cyan-400 text-xs">
                      <Clock size={12}/> {route.time}
                    </div>
                    <div className="text-slate-500 text-xs">{route.km}</div>
                    <div className="text-amber-400/60 text-xs">{route.day}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 bg-gradient-to-r from-amber-500/20 to-pink-500/20 rounded-xl p-3 border border-amber-400/20">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">Total Drive Time</div>
                  <div className="text-slate-400 text-xs">Spread over 7 days</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-amber-400">~12 hrs</div>
                  <div className="text-slate-400 text-xs">895 km total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 2: Overview Timeline
    {
      type: 'overview',
      bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col relative">
          <div className="absolute inset-0 bg-slate-900/90"></div>
          <div className="relative z-10 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-1 text-amber-400">The Journey</h2>
            <p className="text-slate-400 mb-4 text-sm">Your day-by-day adventure</p>

            <div className="flex-1 flex flex-col justify-center">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-pink-400 to-purple-400"></div>

                {[
                  { day: '1-2', place: 'Napa Valley', icon: Wine, desc: 'Wine tastings & gourmet dining', hotel: 'Bardessono', price: '$850/nt' },
                  { day: '3', place: 'San Francisco', icon: Camera, desc: 'Golden Gate & city exploration', hotel: 'Fairmont SF', price: '$550/nt' },
                  { day: '4', place: 'Carmel-by-the-Sea', icon: Heart, desc: 'Fairytale village & beach', hotel: "L'Auberge Carmel", price: '$750/nt' },
                  { day: '5', place: 'Big Sur', icon: Star, desc: 'Scenic drive & oceanside lunch', hotel: 'Drive-through', price: '—' },
                  { day: '6', place: 'Santa Barbara', icon: Sun, desc: 'Beach & wine country', hotel: 'Belmond El Encanto', price: '$900/nt' },
                  { day: '7', place: 'Los Angeles', icon: Music, desc: 'Hollywood & farewell dinner', hotel: 'Waldorf Astoria BH', price: '$800/nt' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3 relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center z-10 shadow-lg flex-shrink-0">
                      <item.icon size={18} className="text-white"/>
                    </div>
                    <div className="flex-1 bg-slate-800/50 rounded-lg p-2 backdrop-blur">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-white text-sm">{item.place}</span>
                          <p className="text-xs text-slate-400">{item.desc}</p>
                        </div>
                        <span className="text-xs text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded">Day {item.day}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                        <Bed size={10}/> {item.hotel} <span className="text-cyan-400">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: Napa Valley Day 1
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-amber-300 text-xs tracking-widest mb-1">DAY 1 • ARRIVAL</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Napa Valley</h2>
            <div className="flex items-center gap-2 text-amber-200 text-sm mb-4">
              <Car size={14}/> 1 hr from SFO • <MapPin size={14}/> Yountville
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Hotel */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-amber-400/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-amber-400"/>
                    <span className="font-bold">Bardessono Hotel & Spa</span>
                  </div>
                  <span className="text-amber-400 font-bold">$850 CAD/nt</span>
                </div>
                <p className="text-xs text-amber-100">LEED Platinum certified luxury. Private balconies, in-room fireplaces, rooftop pool. Walking distance to Yountville restaurants.</p>
                <div className="text-xs text-slate-400 mt-1">Alt: Meadowood ($1,200) • Carneros Resort ($700)</div>
              </div>

              {/* Daily Schedule */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-amber-400"/> Day 1 Schedule
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">MORNING</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">✈️ Arrive SFO, Pick up Convertible</div>
                      <div className="text-xs text-slate-400">Hertz/Avis - Ford Mustang GT ~$180 CAD/day</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">AFTERNOON</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🏨 Check in, Explore Yountville</div>
                      <div className="text-xs text-slate-400">Walk the charming main street, pop into tasting rooms</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-purple-400 text-xs font-bold w-16">EVENING</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍽️ Dinner at Bottega</div>
                      <div className="text-xs text-slate-400">Michael Chiarello's Italian • ~$200 CAD for two</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: Napa Valley Day 2
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-amber-300 text-xs tracking-widest mb-1">DAY 2 • WINE DAY</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Napa Valley</h2>
            <div className="text-amber-200 text-sm mb-4">Full day of tastings & exploration</div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Daily Schedule */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <Coffee size={16} className="text-amber-400"/> Day 2 Schedule
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">9:00 AM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🥐 Breakfast at Bouchon Bakery</div>
                      <div className="text-xs text-slate-400">Thomas Keller's famous pastries • ~$50 CAD</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">10:30 AM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍾 Domaine Carneros</div>
                      <div className="text-xs text-slate-400">Sparkling wine on château terrace • ~$80 CAD tasting</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">1:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🏰 Castello di Amorosa</div>
                      <div className="text-xs text-slate-400">13th-century Tuscan castle, cave tour • ~$100 CAD</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">3:30 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍷 Far Niente or Opus One</div>
                      <div className="text-xs text-slate-400">Premium tasting experience • ~$150-200 CAD</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-purple-400 text-xs font-bold w-16">7:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍽️ The French Laundry or Press</div>
                      <div className="text-xs text-slate-400">Michelin 3⭐ ($700 CAD) or steakhouse ($350 CAD)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 Cost Summary */}
              <div className="bg-amber-500/20 backdrop-blur rounded-xl p-3 border border-amber-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Day 2 Estimate</span>
                  <span className="text-amber-400 font-bold">~$1,100 - $1,500 CAD</span>
                </div>
                <div className="text-xs text-slate-400">Tastings, meals, hotel</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: San Francisco Day 3
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-orange-900/30"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-orange-300 text-xs tracking-widest mb-1">DAY 3</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>San Francisco</h2>
            <div className="flex items-center gap-2 text-orange-200 text-sm mb-4">
              <Car size={14}/> 1 hr from Napa • <MapPin size={14}/> Union Square
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Hotel */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-orange-400/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-orange-400"/>
                    <span className="font-bold">Fairmont San Francisco</span>
                  </div>
                  <span className="text-orange-400 font-bold">$550 CAD/nt</span>
                </div>
                <p className="text-xs text-orange-100">Iconic Nob Hill hotel. Classic elegance, stunning city views, central location.</p>
                <div className="text-xs text-slate-400 mt-1">Alt: Palace Hotel ($600) • Proper Hotel ($450)</div>
              </div>

              {/* Schedule */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-orange-400"/> Day 3 Schedule
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">MORNING</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🌉 Golden Gate & Battery Spencer</div>
                      <div className="text-xs text-slate-400">Best photo spot, stop for fog shots • Free</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">11:00 AM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🚋 Cable Car to Fisherman's Wharf</div>
                      <div className="text-xs text-slate-400">Historic ride, $8 each • Clam chowder at Boudin</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">AFTERNOON</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🛍️ Union Square Shopping</div>
                      <div className="text-xs text-slate-400">Neiman Marcus, Saks, Westfield Centre</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-purple-400 text-xs font-bold w-16">EVENING</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍝 North Beach Italian Dinner</div>
                      <div className="text-xs text-slate-400">Cotogna or Tosca Cafe • ~$250 CAD for two</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-3 border border-orange-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Day 3 Estimate</span>
                  <span className="text-orange-400 font-bold">~$900 - $1,100 CAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Carmel Day 4
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-cyan-900/30"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-cyan-300 text-xs tracking-widest mb-1">DAY 4</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Carmel-by-the-Sea</h2>
            <div className="flex items-center gap-2 text-cyan-200 text-sm mb-4">
              <Car size={14}/> 2 hrs from SF via Highway 1 • <MapPin size={14}/> Ocean Ave
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Hotel */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-cyan-400/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-cyan-400"/>
                    <span className="font-bold">L'Auberge Carmel</span>
                  </div>
                  <span className="text-cyan-400 font-bold">$750 CAD/nt</span>
                </div>
                <p className="text-xs text-cyan-100">Relais & Châteaux boutique hotel. 20 rooms, wine cellar, Aubergine restaurant on-site.</p>
                <div className="text-xs text-slate-400 mt-1">Alt: Cypress Inn ($400) • La Playa ($500)</div>
              </div>

              {/* Schedule */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-cyan-400"/> Day 4 Schedule
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">MORNING</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🚗 Scenic Drive via Half Moon Bay</div>
                      <div className="text-xs text-slate-400">Stop at Pigeon Point Lighthouse for photos</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">1:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🏖️ Arrive Carmel, Beach Walk</div>
                      <div className="text-xs text-slate-400">White sand beach, no crowds, stunning cliffs</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">3:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🎨 Art Galleries & Wine Bars</div>
                      <div className="text-xs text-slate-400">Stroll Ocean Ave, Scheid tasting room</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-purple-400 text-xs font-bold w-16">7:30 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍽️ Aubergine (Michelin ⭐)</div>
                      <div className="text-xs text-slate-400">Tasting menu ~$500 CAD for two • Reserve ahead!</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-500/20 backdrop-blur rounded-xl p-3 border border-cyan-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Day 4 Estimate</span>
                  <span className="text-cyan-400 font-bold">~$1,400 - $1,600 CAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 7: Big Sur Day 5
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1558128364-8c5eedfeab08?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-blue-900/30"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-blue-300 text-xs tracking-widest mb-1">DAY 5 • THE DRIVE</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Big Sur</h2>
            <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
              <Car size={14}/> 90 min scenic drive • <MapPin size={14}/> Highway 1
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* No hotel - driving day */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur rounded-xl p-3 border border-blue-400/30">
                <div className="flex items-center gap-2">
                  <Car size={18} className="text-blue-400"/>
                  <div>
                    <span className="font-bold">Scenic Drive Day</span>
                    <p className="text-xs text-blue-200">No hotel needed - continue to Santa Barbara</p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-blue-400"/> Day 5 Schedule
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">8:00 AM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">☕ Early start from Carmel</div>
                      <div className="text-xs text-slate-400">Coffee at Carmel Belle, hit the road fresh</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">9:00 AM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">📸 Bixby Creek Bridge</div>
                      <div className="text-xs text-slate-400">THE iconic photo stop • Pull off before bridge</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">10:30 AM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🌊 McWay Falls Overlook</div>
                      <div className="text-xs text-slate-400">80ft waterfall onto beach • 5-min walk from lot</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">12:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍔 Lunch at Nepenthe</div>
                      <div className="text-xs text-slate-400">Legendary views, Ambrosiaburger • ~$100 CAD</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">2:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🚗 Continue to Santa Barbara</div>
                      <div className="text-xs text-slate-400">4-hour scenic coastal drive south</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-purple-400 text-xs font-bold w-16">6:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🏨 Arrive Santa Barbara</div>
                      <div className="text-xs text-slate-400">Check in, sunset at Butterfly Beach</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-3 border border-blue-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Day 5 Estimate</span>
                  <span className="text-blue-400 font-bold">~$200 CAD</span>
                </div>
                <div className="text-xs text-slate-400">Lunch, gas, snacks (driving day)</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Santa Barbara Day 6
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-amber-900/30"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-amber-300 text-xs tracking-widest mb-1">DAY 6</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Santa Barbara</h2>
            <div className="flex items-center gap-2 text-amber-200 text-sm mb-4">
              <MapPin size={14}/> The American Riviera
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Hotel */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-amber-400/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-amber-400"/>
                    <span className="font-bold">Belmond El Encanto</span>
                  </div>
                  <span className="text-amber-400 font-bold">$900 CAD/nt</span>
                </div>
                <p className="text-xs text-amber-100">Hilltop sanctuary with Pacific views. Bungalow suites, infinity pool, award-winning dining.</p>
                <div className="text-xs text-slate-400 mt-1">Alt: Kimpton Canary ($450) • Hotel Californian ($500)</div>
              </div>

              {/* Schedule */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-amber-400"/> Day 6 Schedule
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">MORNING</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🏖️ Butterfly Beach</div>
                      <div className="text-xs text-slate-400">Montecito's celeb beach, coffee at Lucky's</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">11:00 AM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍷 Funk Zone Wine Tasting</div>
                      <div className="text-xs text-slate-400">Urban tasting rooms - Riverbench, Carr • ~$60 CAD</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">AFTERNOON</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🚗 Optional: Santa Ynez Valley</div>
                      <div className="text-xs text-slate-400">Sideways country! Los Olivos, Solvang (45 min each way)</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-purple-400 text-xs font-bold w-16">7:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍽️ Dinner at The Lark</div>
                      <div className="text-xs text-slate-400">Best restaurant in SB, shareable plates • ~$300 CAD</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/20 backdrop-blur rounded-xl p-3 border border-amber-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Day 6 Estimate</span>
                  <span className="text-amber-400 font-bold">~$1,400 - $1,600 CAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 9: Los Angeles Day 7
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-purple-900/60 to-pink-900/40"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-pink-300 text-xs tracking-widest mb-1">DAY 7 • GRAND FINALE</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Los Angeles</h2>
            <div className="flex items-center gap-2 text-pink-200 text-sm mb-4">
              <Car size={14}/> 2 hrs from SB • <MapPin size={14}/> Beverly Hills
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Hotel */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-pink-400/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-pink-400"/>
                    <span className="font-bold">Waldorf Astoria Beverly Hills</span>
                  </div>
                  <span className="text-pink-400 font-bold">$800 CAD/nt</span>
                </div>
                <p className="text-xs text-pink-100">Rooftop pool with city views, La Prairie spa, steps from Rodeo Drive.</p>
                <div className="text-xs text-slate-400 mt-1">Alt: The Beverly Hills Hotel ($1,100) • SLS ($550)</div>
              </div>

              {/* Schedule */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-pink-400"/> Day 7 Schedule
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-amber-400 text-xs font-bold w-16">MORNING</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🚗 Drive to LA, Check in</div>
                      <div className="text-xs text-slate-400">2-hour coastal drive, arrive by noon</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">1:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🛍️ Rodeo Drive Shopping</div>
                      <div className="text-xs text-slate-400">Gucci, Louis Vuitton, Prada window shopping</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-pink-400 text-xs font-bold w-16">4:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🎬 Hollywood Sign Photo</div>
                      <div className="text-xs text-slate-400">Griffith Observatory viewpoint</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-purple-400 text-xs font-bold w-16">7:00 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🍽️ Farewell Dinner at Catch LA</div>
                      <div className="text-xs text-slate-400">Rooftop, sunset views, seafood • ~$400 CAD</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-purple-400 text-xs font-bold w-16">9:30 PM</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">🎭 Optional: Broadway Show</div>
                      <div className="text-xs text-slate-400">Pantages Theatre • ~$300 CAD for two</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-500/20 backdrop-blur rounded-xl p-3 border border-pink-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Day 7 Estimate</span>
                  <span className="text-pink-400 font-bold">~$1,500 - $2,000 CAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 10: Budget Breakdown
    {
      type: 'budget',
      bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-slate-900/95"></div>
          <div className="relative z-10 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-amber-400" style={{fontFamily: 'Georgia, serif'}}>
              💰 Budget Breakdown (CAD)
            </h2>

            <div className="flex-1 flex flex-col gap-2">
              {[
                { item: '✈️ Flights (YYZ→SFO, LAX→YYZ)', cost: '$1,200 - $1,800', note: 'per person, book early' },
                { item: '🚗 Convertible Rental (7 days)', cost: '$1,200 - $1,500', note: 'Mustang GT or similar' },
                { item: '🏨 Hotels (6 nights)', cost: '$4,300 - $5,500', note: 'Mix of luxury & boutique' },
                { item: '🍽️ Dining & Wine', cost: '$2,500 - $3,000', note: 'Incl. tastings & Michelin meals' },
                { item: '⛽ Gas & Parking', cost: '$300 - $400', note: '~900km total' },
                { item: '🎭 Activities & Shows', cost: '$500 - $800', note: 'Broadway, tours, etc.' },
                { item: '🛍️ Shopping Buffer', cost: '$500 - $1,000', note: 'Optional treats' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800/70 rounded-lg p-3 border border-slate-700">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.item}</div>
                    <div className="text-xs text-slate-400">{item.note}</div>
                  </div>
                  <div className="text-amber-400 font-bold text-sm">{item.cost}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-gradient-to-r from-amber-500/30 to-pink-500/30 rounded-xl p-4 border border-amber-400/30">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg">Total Estimated</div>
                  <div className="text-xs text-slate-400">For two people, all-inclusive</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-400">$10,500 - $14,000</div>
                  <div className="text-xs text-slate-400">CAD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 11: CTA
    {
      type: 'cta',
      bg: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white items-center justify-center text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 via-purple-700/80 to-indigo-800/80"></div>
          <div className="relative z-10">
            <div className="text-5xl mb-6">💕</div>
            <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              Let's Do This
            </h2>
            <p className="text-purple-200 mb-6 max-w-sm text-sm">
              7 days of wine, beaches, incredible food, and one of the world's most beautiful drives. Just us.
            </p>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 mb-6 w-full max-w-sm border border-white/20">
              <div className="text-xs text-purple-200 mb-1">March 2026</div>
              <div className="text-3xl font-bold mb-2">$10,500 - $14,000 CAD</div>
              <div className="text-xs text-purple-200">
                All-inclusive for two
              </div>
            </div>

            <div className="space-y-2 text-sm text-purple-200 mb-6">
              <div>✓ 6 nights in luxury hotels</div>
              <div>✓ 895km scenic coastal drive</div>
              <div>✓ World-class wine & dining</div>
              <div>✓ Zero hiking required 😉</div>
            </div>

            <div className="text-2xl animate-pulse">
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
                backgroundImage: `url(${slide.bg})`,
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

        {/* Slide counter */}
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-sm">{currentSlide + 1} / {slides.length}</span>
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlide ? 'bg-amber-400 w-4' : 'bg-slate-600 hover:bg-slate-500 w-1.5'
                }`}
              />
            ))}
          </div>
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
