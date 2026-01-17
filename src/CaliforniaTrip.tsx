import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wine, Sun, Heart, MapPin, Car, Bed, Plane } from 'lucide-react';

export default function CaliforniaTrip() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const slides = [
    // Slide 0: Cover
    {
      content: (
        <div className="h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col p-6">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="text-white/60 text-sm tracking-widest mb-4">✦ A PROPOSAL FOR US ✦</div>
            <h1 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>
              California Dreaming
            </h1>
            <p className="text-xl text-white/80 mb-6">7 days along the Pacific Coast</p>

            <div className="flex gap-6 text-white/70 text-sm mb-8">
              <span className="flex items-center gap-1"><Wine size={16}/> Wine</span>
              <span className="flex items-center gap-1"><Sun size={16}/> Beach</span>
              <span className="flex items-center gap-1"><Heart size={16}/> Romance</span>
            </div>

            {/* Route Preview */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 w-full max-w-sm mb-6">
              <div className="flex items-center justify-between text-sm text-white/80 mb-3">
                <span>SFO ✈️</span>
                <span className="text-white/40">→→→</span>
                <span>✈️ LAX</span>
              </div>
              <div className="flex justify-between text-xs text-white/60">
                <div className="text-center">
                  <div className="text-amber-400 font-bold">Napa</div>
                  <div>2 nights</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-bold">Carmel</div>
                  <div>2 nights</div>
                </div>
                <div className="text-center">
                  <div className="text-pink-400 font-bold">Santa Barbara</div>
                  <div>2 nights</div>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/20 border border-amber-400/30 rounded-xl px-6 py-3">
              <span className="text-amber-300 font-bold text-xl">$9,000 - $11,000 CAD</span>
              <span className="text-white/60 text-sm ml-2">total for two</span>
            </div>
          </div>

          <div className="text-center text-white/40 text-sm animate-bounce">
            Swipe to see our adventure →
          </div>
        </div>
      )
    },
    // Day 1: Arrival + Napa
    {
      content: (
        <div className="h-full bg-slate-900 flex flex-col">
          {/* Photo Section */}
          <div className="h-2/5 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80"
              alt="Bardessono Hotel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                <div className="text-amber-400 text-xs font-bold">📍 Bardessono Hotel & Spa, Yountville</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-5 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-amber-400 text-xs font-bold tracking-wider">DAY 1</div>
                <h2 className="text-2xl font-bold text-white">Arrival → Napa Valley</h2>
              </div>
              <div className="bg-amber-500/20 rounded-full px-3 py-1">
                <span className="text-amber-400 text-xs font-bold">BASE 1 of 3</span>
              </div>
            </div>

            {/* Drive Info */}
            <div className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Plane size={16}/>
                <span className="text-sm">SFO</span>
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-1 text-white/60 text-xs">
                <Car size={14}/> 1 hr
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-2 text-amber-400">
                <MapPin size={16}/>
                <span className="text-sm">Napa</span>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-3 flex-1">
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">MORNING</div>
                <div className="flex-1 text-white text-sm">
                  ✈️ Arrive SFO, pick up convertible
                  <div className="text-slate-400 text-xs">Ford Mustang GT • ~$180 CAD/day</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">AFTERNOON</div>
                <div className="flex-1 text-white text-sm">
                  🏨 Check into Bardessono, explore Yountville
                  <div className="text-slate-400 text-xs">Walk main street, pop into tasting rooms</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-purple-400 text-xs font-bold">EVENING</div>
                <div className="flex-1 text-white text-sm">
                  🍽️ Dinner at Bottega
                  <div className="text-slate-400 text-xs">Michael Chiarello's Italian • ~$200</div>
                </div>
              </div>
            </div>

            {/* Hotel & Cost */}
            <div className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bed size={16} className="text-amber-400"/>
                  <div>
                    <div className="text-white text-sm font-bold">Bardessono</div>
                    <div className="text-slate-400 text-xs">Night 1 of 2 • $850 CAD/night</div>
                  </div>
                </div>
                <div className="text-amber-400 font-bold">~$1,200</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Day 2: Napa Wine + SF Day Trip
    {
      content: (
        <div className="h-full bg-slate-900 flex flex-col">
          {/* Photo Grid */}
          <div className="h-2/5 flex gap-1 p-1">
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Domaine Carneros"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                <div className="text-amber-400 text-xs">🍾 Domaine Carneros</div>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80"
                alt="Golden Gate Bridge"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                <div className="text-orange-400 text-xs">🌉 Golden Gate</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-amber-400 text-xs font-bold tracking-wider">DAY 2</div>
                <h2 className="text-2xl font-bold text-white">Wine + SF Day Trip</h2>
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <Car size={14}/> SF is 1hr from Napa
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-3 flex-1">
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">9:00 AM</div>
                <div className="flex-1 text-white text-sm">
                  🥐 Bouchon Bakery breakfast
                  <div className="text-slate-400 text-xs">Thomas Keller's pastries • ~$50</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">10:30 AM</div>
                <div className="flex-1 text-white text-sm">
                  🍾 Domaine Carneros tasting
                  <div className="text-slate-400 text-xs">Sparkling wine on château terrace • ~$80</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">1:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🚗 Drive to San Francisco
                  <div className="text-slate-400 text-xs">Golden Gate, Fisherman's Wharf, Union Square</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-purple-400 text-xs font-bold">7:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🍽️ Return to Napa, dinner at Press
                  <div className="text-slate-400 text-xs">Steakhouse with 1,000+ wine list • ~$350</div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bed size={16} className="text-amber-400"/>
                  <div>
                    <div className="text-white text-sm font-bold">Bardessono</div>
                    <div className="text-slate-400 text-xs">Night 2 of 2</div>
                  </div>
                </div>
                <div className="text-amber-400 font-bold">~$1,400</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Day 3: Drive to Carmel
    {
      content: (
        <div className="h-full bg-slate-900 flex flex-col">
          {/* Photo Section */}
          <div className="h-2/5 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?w=800&q=80"
              alt="Carmel-by-the-Sea"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                <div className="text-cyan-400 text-xs font-bold">📍 L'Auberge Carmel, Ocean Avenue</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-cyan-400 text-xs font-bold tracking-wider">DAY 3</div>
                <h2 className="text-2xl font-bold text-white">Napa → Carmel</h2>
              </div>
              <div className="bg-cyan-500/20 rounded-full px-3 py-1">
                <span className="text-cyan-400 text-xs font-bold">BASE 2 of 3</span>
              </div>
            </div>

            {/* Drive Info */}
            <div className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 text-amber-400">
                <MapPin size={16}/>
                <span className="text-sm">Napa</span>
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-1 text-white/60 text-xs">
                <Car size={14}/> 2.5 hrs scenic
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-2 text-cyan-400">
                <MapPin size={16}/>
                <span className="text-sm">Carmel</span>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-3 flex-1">
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">MORNING</div>
                <div className="flex-1 text-white text-sm">
                  🚗 Scenic coastal drive
                  <div className="text-slate-400 text-xs">Via Half Moon Bay, stop at Pigeon Point Lighthouse</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">1:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🏖️ Arrive Carmel, beach walk
                  <div className="text-slate-400 text-xs">White sand, stunning cliffs, no crowds</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">3:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🎨 Explore Ocean Avenue
                  <div className="text-slate-400 text-xs">Art galleries, wine bars, fairytale cottages</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-purple-400 text-xs font-bold">7:30 PM</div>
                <div className="flex-1 text-white text-sm">
                  🍽️ Aubergine (Michelin ⭐)
                  <div className="text-slate-400 text-xs">Tasting menu at the hotel • ~$500</div>
                </div>
              </div>
            </div>

            {/* Hotel & Cost */}
            <div className="mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bed size={16} className="text-cyan-400"/>
                  <div>
                    <div className="text-white text-sm font-bold">L'Auberge Carmel</div>
                    <div className="text-slate-400 text-xs">Night 1 of 2 • $750 CAD/night</div>
                  </div>
                </div>
                <div className="text-cyan-400 font-bold">~$1,300</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Day 4: Big Sur Day Trip
    {
      content: (
        <div className="h-full bg-slate-900 flex flex-col">
          {/* Photo Grid */}
          <div className="h-2/5 flex gap-1 p-1">
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1609942072337-c3370f17cfc2?w=600&q=80"
                alt="Bixby Bridge"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                <div className="text-blue-400 text-xs">📸 Bixby Bridge</div>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1571687949921-1306bfb24b72?w=600&q=80"
                alt="McWay Falls"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                <div className="text-cyan-400 text-xs">🌊 McWay Falls</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-blue-400 text-xs font-bold tracking-wider">DAY 4</div>
                <h2 className="text-2xl font-bold text-white">Big Sur Day Trip</h2>
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <Car size={14}/> 1hr each way from Carmel
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-3 flex-1">
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">8:00 AM</div>
                <div className="flex-1 text-white text-sm">
                  ☕ Coffee at Carmel Belle, hit the road
                  <div className="text-slate-400 text-xs">Top down, camera ready</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">9:00 AM</div>
                <div className="flex-1 text-white text-sm">
                  📸 Bixby Creek Bridge
                  <div className="text-slate-400 text-xs">THE iconic photo • pull off before bridge</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">10:30 AM</div>
                <div className="flex-1 text-white text-sm">
                  🌊 McWay Falls overlook
                  <div className="text-slate-400 text-xs">80ft waterfall onto beach • 5-min walk</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">12:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🍔 Lunch at Nepenthe
                  <div className="text-slate-400 text-xs">800-ft views, famous Ambrosiaburger • ~$100</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-purple-400 text-xs font-bold">EVENING</div>
                <div className="flex-1 text-white text-sm">
                  🌅 Return to Carmel, sunset beach walk
                  <div className="text-slate-400 text-xs">Casual dinner at La Bicyclette • ~$150</div>
                </div>
              </div>
            </div>

            {/* Hotel & Cost */}
            <div className="mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bed size={16} className="text-cyan-400"/>
                  <div>
                    <div className="text-white text-sm font-bold">L'Auberge Carmel</div>
                    <div className="text-slate-400 text-xs">Night 2 of 2</div>
                  </div>
                </div>
                <div className="text-cyan-400 font-bold">~$1,100</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Day 5: Drive to Santa Barbara
    {
      content: (
        <div className="h-full bg-slate-900 flex flex-col">
          {/* Photo Section */}
          <div className="h-2/5 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80"
              alt="Belmond El Encanto"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                <div className="text-pink-400 text-xs font-bold">📍 Belmond El Encanto, Santa Barbara</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-pink-400 text-xs font-bold tracking-wider">DAY 5</div>
                <h2 className="text-2xl font-bold text-white">Carmel → Santa Barbara</h2>
              </div>
              <div className="bg-pink-500/20 rounded-full px-3 py-1">
                <span className="text-pink-400 text-xs font-bold">BASE 3 of 3</span>
              </div>
            </div>

            {/* Drive Info */}
            <div className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <MapPin size={16}/>
                <span className="text-sm">Carmel</span>
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-1 text-white/60 text-xs">
                <Car size={14}/> 4.5 hrs coastal
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-2 text-pink-400">
                <MapPin size={16}/>
                <span className="text-sm">Santa Barbara</span>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-3 flex-1">
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">MORNING</div>
                <div className="flex-1 text-white text-sm">
                  🚗 Scenic drive south on Highway 1
                  <div className="text-slate-400 text-xs">Dramatic coastline, stop for photos</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">2:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🏨 Arrive Santa Barbara, check in
                  <div className="text-slate-400 text-xs">Hilltop bungalow with Pacific views</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">4:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🏖️ Butterfly Beach, Montecito
                  <div className="text-slate-400 text-xs">Gorgeous, uncrowded, celeb-spotting</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-purple-400 text-xs font-bold">7:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🍽️ Dinner at The Lark
                  <div className="text-slate-400 text-xs">Best restaurant in SB • ~$300</div>
                </div>
              </div>
            </div>

            {/* Hotel & Cost */}
            <div className="mt-4 bg-pink-500/10 border border-pink-500/30 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bed size={16} className="text-pink-400"/>
                  <div>
                    <div className="text-white text-sm font-bold">Belmond El Encanto</div>
                    <div className="text-slate-400 text-xs">Night 1 of 2 • $900 CAD/night</div>
                  </div>
                </div>
                <div className="text-pink-400 font-bold">~$1,300</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Day 6: Santa Barbara
    {
      content: (
        <div className="h-full bg-slate-900 flex flex-col">
          {/* Photo Grid */}
          <div className="h-2/5 flex gap-1 p-1">
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&q=80"
                alt="Santa Barbara Beach"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                <div className="text-pink-400 text-xs">🏖️ American Riviera</div>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80"
                alt="Funk Zone Wine"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                <div className="text-amber-400 text-xs">🍷 Funk Zone</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-pink-400 text-xs font-bold tracking-wider">DAY 6</div>
                <h2 className="text-2xl font-bold text-white">Beach + Wine Day</h2>
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <Sun size={14}/> Relaxation day
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-3 flex-1">
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">MORNING</div>
                <div className="flex-1 text-white text-sm">
                  🏖️ Beach time at Butterfly Beach
                  <div className="text-slate-400 text-xs">Coffee at Lucky's, oceanfront lounging</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">11:00 AM</div>
                <div className="flex-1 text-white text-sm">
                  🍷 Funk Zone wine tasting
                  <div className="text-slate-400 text-xs">Urban tasting rooms - Riverbench, Carr • ~$60</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">AFTERNOON</div>
                <div className="flex-1 text-white text-sm">
                  🌊 Pool time or spa at El Encanto
                  <div className="text-slate-400 text-xs">Or optional: Santa Ynez Valley (Sideways country!)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-purple-400 text-xs font-bold">7:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🍽️ Sunset drinks + dinner at Loquita
                  <div className="text-slate-400 text-xs">Spanish tapas, great vibe • ~$250</div>
                </div>
              </div>
            </div>

            {/* Hotel & Cost */}
            <div className="mt-4 bg-pink-500/10 border border-pink-500/30 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bed size={16} className="text-pink-400"/>
                  <div>
                    <div className="text-white text-sm font-bold">Belmond El Encanto</div>
                    <div className="text-slate-400 text-xs">Night 2 of 2</div>
                  </div>
                </div>
                <div className="text-pink-400 font-bold">~$1,300</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Day 7: LA + Departure
    {
      content: (
        <div className="h-full bg-slate-900 flex flex-col">
          {/* Photo Grid */}
          <div className="h-2/5 flex gap-1 p-1">
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600&q=80"
                alt="Rodeo Drive"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                <div className="text-purple-400 text-xs">🛍️ Rodeo Drive</div>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=600&q=80"
                alt="Santa Monica"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                <div className="text-cyan-400 text-xs">🎡 Santa Monica</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-purple-400 text-xs font-bold tracking-wider">DAY 7</div>
                <h2 className="text-2xl font-bold text-white">LA Day Trip → Home</h2>
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <Plane size={14}/> Fly out from LAX
              </div>
            </div>

            {/* Drive Info */}
            <div className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 text-pink-400">
                <MapPin size={16}/>
                <span className="text-sm">SB</span>
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-1 text-white/60 text-xs">
                <Car size={14}/> 2 hrs
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-2 text-purple-400">
                <MapPin size={16}/>
                <span className="text-sm">LA</span>
              </div>
              <div className="flex-1 border-t border-dashed border-slate-600"></div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Plane size={16}/>
                <span className="text-sm">LAX</span>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-3 flex-1">
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">8:00 AM</div>
                <div className="flex-1 text-white text-sm">
                  🚗 Check out, drive to LA
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-amber-400 text-xs font-bold">10:30 AM</div>
                <div className="flex-1 text-white text-sm">
                  🛍️ Rodeo Drive, Beverly Hills
                  <div className="text-slate-400 text-xs">Gucci, Louis Vuitton window shopping</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">12:30 PM</div>
                <div className="flex-1 text-white text-sm">
                  🍽️ Lunch in Beverly Hills • ~$150
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-pink-400 text-xs font-bold">2:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  📸 Hollywood Sign from Griffith Observatory
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-purple-400 text-xs font-bold">4:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🎡 Santa Monica Pier, beach walk
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-purple-400 text-xs font-bold">6:00 PM</div>
                <div className="flex-1 text-white text-sm">
                  🥂 Farewell dinner at Catch LA
                  <div className="text-slate-400 text-xs">Rooftop sunset views • ~$400</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 text-slate-500 text-xs font-bold">8:30 PM</div>
                <div className="flex-1 text-slate-400 text-sm">
                  ✈️ Drop car at LAX, fly home
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white text-sm font-bold">Day 7 Total</div>
                  <div className="text-slate-400 text-xs">No hotel (flying home!)</div>
                </div>
                <div className="text-purple-400 font-bold">~$600</div>
              </div>
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
            <div key={index} className="w-full h-full flex-shrink-0">
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-t border-slate-800">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2 rounded-full transition-all ${currentSlide === 0 ? 'text-slate-600' : 'text-white bg-white/10 hover:bg-white/20'}`}
        >
          <ChevronLeft size={24}/>
        </button>

        {/* Slide indicator */}
        <div className="flex items-center gap-2">
          {currentSlide === 0 ? (
            <span className="text-white/60 text-sm">Cover</span>
          ) : (
            <span className="text-white/60 text-sm">Day {currentSlide} of 7</span>
          )}
          <div className="flex gap-1 ml-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? 'bg-amber-400 w-4'
                    : i === 0
                      ? 'bg-purple-500 w-2'
                      : 'bg-slate-600 hover:bg-slate-500 w-2'
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
