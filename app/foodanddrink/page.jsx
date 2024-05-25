import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const ArticlePage = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">3 Best Areas to Stay in Kauai</h1>
        <p className="text-gray-600">By Charlene Fang • May 23, 2024 • 7 minutes read</p>
      </header>
      <section className="mb-8">
        <img src="/images/kauai-coastline.jpg" alt="Aerial view of Kauai island coastline and mountains" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
          When I was growing up, Kauai—the Garden Island—was where my family would head when Oahu felt too busy. It hasn’t changed much. 
          The most pristine of all the Hawaiian islands, it is also the oldest. The island’s landscape—often a backdrop for major films like 
          Jurassic Park and Pirates of the Caribbean—is mesmerizing. Think: deep verdant valleys, towering sea cliffs, neon rainforests, 
          and white-sand beaches.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">For beaches, sun-soaked luxury, and convenience: Poipu</h2>
        <img src="/images/poipu-resort.jpg" alt="Aerial view of oceanfront resort with pools and lush grounds" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
          Kauai’s lush landscape means it’s no stranger to rainfall. Poipu on the sunny south shore is known for its reliable weather—so I like 
          to stay here even though it can get busy. It’s also conveniently located for easy travel to other parts of the island.
        </p>
        <h3 className="text-xl font-bold mb-2">Where to stay</h3>
        <p className="text-lg leading-relaxed">
          Couples on their honeymoon love the intimate and serene Koa Kea Hotel & Resort. With pretty coral-themed ocean-facing view rooms, 
          I like the resort’s adult vibes (no waterslides in sight). Plus, it’s walking distance to Kiahuna Beach and Poipu Beach. 
        </p>
        <p className="text-lg leading-relaxed">
          For a family-friendly option, the expansive Grand Hyatt Kauai Resort and Spa has an overwhelming amount of amenities including 
          10 restaurants, three pools, a salt-water lagoon, a massive spa, and a kid’s club—so be warned that you might not leave the resort.
        </p>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Travelers say</h3>
        <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
          “This was our 13th stay at the GHK. Always a wonderful check-in experience from the lei greeting pleasant front desk staff and impressive lobby. Our room was spacious and clean with some new furniture and a new carpet. The pool area is spectacular. You can hike a very scenic hike along the coast right from Shipwreck beach and see tons of turtles in the ocean.”—@turtlegirl
        </blockquote>
        <h3 className="text-xl font-bold mb-2">Where to eat</h3>
        <p className="text-lg leading-relaxed">
          Even if you’re not staying at Koa Kea, book a meal at the superb Red Salt, where chef Noelani Planas, a Kauai native, whips up one-of-a-kind dishes 
          like lemon pineapple souffle pancakes. Every week, Planas hosts a five-course wine-pairing Pa’Ina Dinner with dishes like blue crab-crusted monchong (a local fish).
        </p>
        <p className="text-lg leading-relaxed">
          For a more casual (but very Hawaiian) spot, there’s the beachside Puka Dog, where there's always a line—for good reason. I love the array of Hawaiian fruit 
          relish (coconut, banana, starfruit), and even if you think passionfruit has no place next to Polish sausage, you’ll change your mind after trying this combo.
        </p>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">What to do</h3>
        <img src="/images/poipu-beach.jpg" alt="Poipu Beach" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
          Poipu is all about starting and ending your day at the beach. Plan different activities at each local spot—snorkeling at Poipu Beach, spotting Hawaiian 
          monk seals at Kiahuna Beach, relaxing in the shallow waters of Baby Beach, and boogie boarding at Brennecke’s Beach.
        </p>
        <p className="text-lg leading-relaxed">
          For golfers, teeing off at Poipu Bay Golf Course is a treat. You'll want to play the whole 18 holes of this PGA course if only for the ocean views from 
          holes 15 and 16.
        </p>
        <p className="text-lg leading-relaxed">
          For a different kind of sunset activity, explore the Allerton Garden, which might look familiar: It was a major filming location in Jurassic Park. Be sure to 
          sign up for a botanical tour followed by an oceanfront lanai dinner.
        </p>
      </section>
      <footer className="text-center mt-8">
        <p className="text-xl font-bold mb-4">Related Stories</p>
        <ul>
          <li>
            <Link href="/5-perfect-days-in-kauai">
              <id className="text-blue-600">5 Perfect Days in Kauai</id>
            </Link>
          </li>
          <li>
            <Link href="/weekend-in-maui">
              <id className="text-blue-600">Weekend in Maui: Beaches, Brews, and Fresh Seafood</id>
            </Link>
          </li>
          <li>
            <Link href="/5-perfect-days-in-honolulu">
              <id className="text-blue-600">5 Perfect Days in Honolulu</id>
            </Link>
          </li>
          <li>
            <Link href="/first-timers-guide-big-island">
              <id className="text-blue-600">A First-Timer's Guide to the Island of Hawaii</id>
            </Link>
          </li>
          <li>
            <Link href="/honolulu-hotels-guide">
              <id className="text-blue-600">Our Go-to Guide to Honolulu Hotels</id>
            </Link>
          </li>
        </ul>
        </footer>
</div>
<Footer />
</>
);
};

export default ArticlePage
