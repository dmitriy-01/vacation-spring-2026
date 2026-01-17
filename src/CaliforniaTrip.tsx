import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wine, Sun, Heart, Music, MapPin, Car, Clock, Bed } from 'lucide-react';

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
              <span className="text-amber-300 font-bold">$9,000 - $11,000 CAD</span>
              <span className="text-white/60 text-sm ml-2">all-inclusive</span>
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
            <p className="text-slate-400 mb-4 text-sm">March 2026 • Only 3 Hotels • 800km Pacific Coast</p>

            {/* Visual Route */}
            <div className="flex-1 flex flex-col gap-2">
              {[
                { from: '✈️ SFO Airport', to: 'Napa Valley', time: '1 hr', km: '80 km', stay: '2 nights' },
                { from: 'Napa Valley', to: 'San Francisco', time: '1 hr', km: '65 km', stay: 'Day trip' },
                { from: 'Napa → Carmel', to: 'Carmel-by-the-Sea', time: '2.5 hrs', km: '200 km', stay: '2 nights' },
                { from: 'Carmel', to: 'Big Sur', time: '1 hr', km: '50 km', stay: 'Day trip' },
                { from: 'Carmel → SB', to: 'Santa Barbara', time: '4.5 hrs', km: '350 km', stay: '2 nights' },
                { from: 'Santa Barbara', to: 'Los Angeles', time: '2 hrs', km: '150 km', stay: 'Day trip' },
                { from: 'Los Angeles', to: '✈️ LAX Airport', time: '30 min', km: '—', stay: 'Fly home' },
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
                    <div className={`text-xs font-medium ${route.stay.includes('night') ? 'text-pink-400' : 'text-slate-500'}`}>{route.stay}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 bg-gradient-to-r from-pink-500/20 to-amber-500/20 rounded-xl p-3 border border-pink-400/20">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">Only 3 Hotels!</div>
                  <div className="text-slate-400 text-xs">No constant packing/unpacking</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-pink-400">6 nights</div>
                  <div className="text-slate-400 text-xs">2+2+2 split</div>
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
            <p className="text-slate-400 mb-4 text-sm">3 bases, 7 days of adventure</p>

            <div className="flex-1 flex flex-col justify-center gap-3">
              {/* Hotel 1: Napa */}
              <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-xl p-4 border border-amber-400/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                      <Wine size={20} className="text-white"/>
                    </div>
                    <div>
                      <div className="font-bold text-white">Napa Valley</div>
                      <div className="text-xs text-amber-300">Days 1-2 • Bardessono</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-bold">2 nights</div>
                    <div className="text-xs text-slate-400">$850/nt</div>
                  </div>
                </div>
                <div className="text-xs text-slate-300">Wine tastings, SF day trip, gourmet dining</div>
              </div>

              {/* Hotel 2: Carmel */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 rounded-xl p-4 border border-cyan-400/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                      <Heart size={20} className="text-white"/>
                    </div>
                    <div>
                      <div className="font-bold text-white">Carmel-by-the-Sea</div>
                      <div className="text-xs text-cyan-300">Days 3-4 • L'Auberge Carmel</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold">2 nights</div>
                    <div className="text-xs text-slate-400">$750/nt</div>
                  </div>
                </div>
                <div className="text-xs text-slate-300">Fairytale village, Big Sur day trip, beach walks</div>
              </div>

              {/* Hotel 3: Santa Barbara */}
              <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/10 rounded-xl p-4 border border-pink-400/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                      <Sun size={20} className="text-white"/>
                    </div>
                    <div>
                      <div className="font-bold text-white">Santa Barbara</div>
                      <div className="text-xs text-pink-300">Days 5-7 • Belmond El Encanto</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-pink-400 font-bold">2 nights</div>
                    <div className="text-xs text-slate-400">$900/nt</div>
                  </div>
                </div>
                <div className="text-xs text-slate-300">Beach, wine, LA day trip, farewell dinner</div>
              </div>
            </div>

            <div className="mt-3 text-center text-slate-500 text-xs">
              Total hotel cost: ~$5,000 CAD for 6 nights
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: Napa Days 1-2
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-amber-300 text-xs tracking-widest mb-1">DAYS 1-2 • BASE 1</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Napa Valley</h2>
            <div className="flex items-center gap-2 text-amber-200 text-sm mb-4">
              <Bed size={14}/> 2 nights at Bardessono • <span className="text-amber-400">$850 CAD/nt</span>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Hotel Info */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-amber-400/30">
                <p className="text-xs text-amber-100">LEED Platinum luxury in Yountville. Private balconies, in-room fireplaces, rooftop pool. Walk to restaurants.</p>
                <div className="text-xs text-slate-400 mt-1">Alt: Carneros Resort ($700) • Meadowood ($1,200)</div>
              </div>

              {/* Day 1 */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-2 text-amber-400 text-sm">Day 1: Arrival</div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-amber-400">AM:</span> Arrive SFO, pick up convertible (~$180/day)</div>
                  <div><span className="text-pink-400">PM:</span> Drive to Napa (1hr), check in, explore Yountville</div>
                  <div><span className="text-purple-400">EVE:</span> Dinner at Bottega (~$200 for two)</div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-2 text-amber-400 text-sm">Day 2: Wine + SF Day Trip</div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-amber-400">AM:</span> Domaine Carneros sparkling wine (~$80)</div>
                  <div><span className="text-pink-400">PM:</span> Drive to SF (1hr) - Golden Gate, Fisherman's Wharf, shopping</div>
                  <div><span className="text-purple-400">EVE:</span> Return to Napa, dinner at Press (~$350)</div>
                </div>
              </div>

              <div className="bg-amber-500/20 backdrop-blur rounded-xl p-3 border border-amber-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Days 1-2 Total</span>
                  <span className="text-amber-400 font-bold">~$2,500 CAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: Carmel Days 3-4
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-cyan-900/30"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-cyan-300 text-xs tracking-widest mb-1">DAYS 3-4 • BASE 2</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Carmel-by-the-Sea</h2>
            <div className="flex items-center gap-2 text-cyan-200 text-sm mb-4">
              <Bed size={14}/> 2 nights at L'Auberge • <span className="text-cyan-400">$750 CAD/nt</span>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Hotel Info */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-cyan-400/30">
                <p className="text-xs text-cyan-100">Relais & Châteaux boutique hotel. 20 rooms, wine cellar, Michelin-starred Aubergine on-site.</p>
                <div className="text-xs text-slate-400 mt-1">Alt: Cypress Inn ($400) • La Playa ($500)</div>
              </div>

              {/* Day 3 */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-2 text-cyan-400 text-sm">Day 3: Scenic Drive + Village</div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-amber-400">AM:</span> Drive Napa → Carmel via coast (2.5hrs, stunning!)</div>
                  <div><span className="text-pink-400">PM:</span> Beach walk, art galleries, wine bars on Ocean Ave</div>
                  <div><span className="text-purple-400">EVE:</span> Aubergine tasting menu (~$500 for two)</div>
                </div>
              </div>

              {/* Day 4 */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-2 text-cyan-400 text-sm">Day 4: Big Sur Day Trip</div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-amber-400">AM:</span> Drive to Big Sur - Bixby Bridge photos 📸</div>
                  <div><span className="text-pink-400">NOON:</span> McWay Falls, lunch at Nepenthe (~$100)</div>
                  <div><span className="text-purple-400">PM:</span> Return to Carmel, sunset beach walk</div>
                  <div><span className="text-purple-400">EVE:</span> Casual dinner at La Bicyclette (~$150)</div>
                </div>
              </div>

              <div className="bg-cyan-500/20 backdrop-blur rounded-xl p-3 border border-cyan-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Days 3-4 Total</span>
                  <span className="text-cyan-400 font-bold">~$2,400 CAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: Big Sur highlights
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1558128364-8c5eedfeab08?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-blue-900/30"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-blue-300 text-xs tracking-widest mb-1">DAY 4 HIGHLIGHT</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Big Sur</h2>
            <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
              <Car size={14}/> Day trip from Carmel • 1 hr each way
            </div>

            <div className="flex-1 flex flex-col gap-3">
              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 border-l-4 border-l-cyan-400">
                <div className="font-bold mb-1">📸 Bixby Creek Bridge</div>
                <p className="text-sm text-blue-100">THE iconic California photo. 714-foot span over the canyon. Pull off just before for best shots.</p>
              </div>

              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 border-l-4 border-l-pink-400">
                <div className="font-bold mb-1">🌊 McWay Falls</div>
                <p className="text-sm text-blue-100">80-foot waterfall onto pristine beach. 5-minute walk from parking. Zero hiking!</p>
              </div>

              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 border-l-4 border-l-amber-400">
                <div className="font-bold mb-1">🍔 Nepenthe Restaurant</div>
                <p className="text-sm text-blue-100">Legendary 800-foot ocean views. Get the Ambrosiaburger. ~$100 CAD for two.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur rounded-2xl p-4 flex items-center gap-4 border border-white/10">
                <div className="text-3xl">🚗</div>
                <div>
                  <div className="font-bold">Convertible Weather</div>
                  <div className="text-sm text-blue-200">Top down, PCH cruising, back to Carmel by sunset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Santa Barbara Days 5-7
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-amber-900/30"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-pink-300 text-xs tracking-widest mb-1">DAYS 5-7 • BASE 3</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Santa Barbara</h2>
            <div className="flex items-center gap-2 text-pink-200 text-sm mb-4">
              <Bed size={14}/> 2 nights at Belmond El Encanto • <span className="text-pink-400">$900 CAD/nt</span>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* Hotel Info */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-pink-400/30">
                <p className="text-xs text-pink-100">Hilltop sanctuary with Pacific views. Bungalow suites, infinity pool, award-winning dining.</p>
                <div className="text-xs text-slate-400 mt-1">Alt: Kimpton Canary ($450) • Hotel Californian ($500)</div>
              </div>

              {/* Day 5 */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-2 text-pink-400 text-sm">Day 5: Arrival + Beach</div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-amber-400">AM:</span> Scenic drive Carmel → Santa Barbara (4.5hrs)</div>
                  <div><span className="text-pink-400">PM:</span> Check in, Butterfly Beach in Montecito</div>
                  <div><span className="text-purple-400">EVE:</span> Dinner at The Lark (~$300 for two)</div>
                </div>
              </div>

              {/* Day 6 */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-2 text-pink-400 text-sm">Day 6: Wine + Relaxation</div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-amber-400">AM:</span> Funk Zone wine tasting (~$60)</div>
                  <div><span className="text-pink-400">PM:</span> Pool time, spa, or Santa Ynez Valley trip</div>
                  <div><span className="text-purple-400">EVE:</span> Sunset drinks, dinner at Loquita (~$250)</div>
                </div>
              </div>

              <div className="bg-pink-500/20 backdrop-blur rounded-xl p-3 border border-pink-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Days 5-6 Total</span>
                  <span className="text-pink-400 font-bold">~$2,600 CAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 7: LA Day Trip + Departure
    {
      type: 'destination',
      bg: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=1200&q=80',
      content: (
        <div className="h-full p-6 flex flex-col text-white relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-purple-900/60 to-pink-900/40"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-purple-300 text-xs tracking-widest mb-1">DAY 7 • GRAND FINALE</div>
            <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Georgia, serif'}}>Los Angeles</h2>
            <div className="flex items-center gap-2 text-purple-200 text-sm mb-4">
              <Car size={14}/> Day trip from SB (2hrs) • Fly out from LAX
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {/* No hotel needed */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-3 border border-purple-400/30">
                <div className="flex items-center gap-2">
                  <Music size={18} className="text-purple-400"/>
                  <div>
                    <span className="font-bold">No hotel needed!</span>
                    <p className="text-xs text-purple-200">Day trip to LA, fly home that evening</p>
                  </div>
                </div>
              </div>

              {/* Day 7 Schedule */}
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="font-bold mb-2 text-purple-400 text-sm">Day 7: LA Highlights + Departure</div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-amber-400">8 AM:</span> Check out SB, drive to LA (2hrs)</div>
                  <div><span className="text-amber-400">10:30:</span> Rodeo Drive shopping/browsing 🛍️</div>
                  <div><span className="text-pink-400">12:30:</span> Lunch in Beverly Hills (~$150)</div>
                  <div><span className="text-pink-400">2 PM:</span> Hollywood Sign photo from Griffith Observatory</div>
                  <div><span className="text-purple-400">4 PM:</span> Santa Monica Pier, beach walk</div>
                  <div><span className="text-purple-400">6 PM:</span> Early dinner at Catch LA rooftop (~$400)</div>
                  <div><span className="text-slate-400">8 PM:</span> Drop car at LAX, fly home ✈️</div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-3 border border-purple-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Day 7 Total</span>
                  <span className="text-purple-400 font-bold">~$600 CAD</span>
                </div>
                <div className="text-xs text-slate-400">Meals, gas (no hotel!)</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Budget Breakdown
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
                { item: '🏨 Hotels (6 nights, 3 hotels)', cost: '$5,000', note: 'Bardessono + L\'Auberge + Belmond' },
                { item: '🍽️ Dining & Wine', cost: '$2,000 - $2,500', note: 'Incl. tastings & nice dinners' },
                { item: '⛽ Gas & Parking', cost: '$300 - $400', note: '~900km total' },
                { item: '🎭 Activities', cost: '$300 - $500', note: 'Tours, experiences' },
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
                  <div className="text-3xl font-bold text-amber-400">$9,000 - $11,000</div>
                  <div className="text-xs text-slate-400">CAD</div>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center text-slate-500 text-xs">
              💡 Only 3 hotel check-ins = less hassle, more relaxation
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
        <div className="h-full p-6 flex flex-col text-white items-center justify-center text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 via-purple-700/80 to-indigo-800/80"></div>
          <div className="relative z-10">
            <div className="text-5xl mb-6">💕</div>
            <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              Let's Do This
            </h2>
            <p className="text-purple-200 mb-6 max-w-sm text-sm">
              7 days of wine, beaches, incredible food, and the world's most beautiful coastal drive. Just us.
            </p>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 mb-6 w-full max-w-sm border border-white/20">
              <div className="text-xs text-purple-200 mb-1">March 2026</div>
              <div className="text-3xl font-bold mb-2">$9,000 - $11,000 CAD</div>
              <div className="text-xs text-purple-200">
                All-inclusive for two
              </div>
            </div>

            <div className="space-y-2 text-sm text-purple-200 mb-6">
              <div>✓ Only 3 hotels (2 nights each)</div>
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
