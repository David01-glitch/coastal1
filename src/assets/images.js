// All imagery imported as ES modules so Vite fingerprints + bundles them locally.
// No external/CDN hotlinking anywhere on the site.

// Hero
import heroOceanfront from './images/hero/oceanfront-hero.jpg';
import heroSunsetWalk from './images/hero/sunset-walk.jpg';
import heroBalcony from './images/hero/coastal-balcony.jpg';

// Beaches
import beachCharleston from './images/beaches/charleston-shore.jpg';
import beachWaves from './images/beaches/morning-waves.jpg';
import beachPalm from './images/beaches/palm-shoreline.jpg';
import beachCove from './images/beaches/quiet-cove.jpg';
import beachBoardwalk from './images/beaches/boardwalk.jpg';

// Wellness
import wellnessYoga from './images/wellness/beach-yoga.jpg';
import wellnessStretch from './images/wellness/seaside-stretch.jpg';
import wellnessWalking from './images/wellness/walking-couple.jpg';
import wellnessTea from './images/wellness/wellness-tea.jpg';

// Homes
import homeBeachHouse from './images/homes/beach-house.jpg';
import homeInterior from './images/homes/coastal-interior.jpg';
import homeAiry from './images/homes/airy-living.jpg';
import homePatio from './images/homes/oceanfront-patio.jpg';
import homeKitchen from './images/homes/white-kitchen.jpg';

// Community
import communityMarina from './images/community/marina-club.jpg';
import communityCafe from './images/community/seaside-cafe.jpg';
import communityDock from './images/community/friends-dock.jpg';
import communityGarden from './images/community/garden-gathering.jpg';

// Blog
import blogCities from './images/blog/best-coastal-cities.jpg';
import blogDownsizing from './images/blog/downsizing.jpg';
import blogWellness from './images/blog/wellness-routine.jpg';
import blogHomeDesign from './images/blog/coastal-home-design.jpg';
import blogActive from './images/blog/active-living.jpg';
import blogBudget from './images/blog/budgeting.jpg';
import blogTowns from './images/blog/beach-towns.jpg';
import blogPacking from './images/blog/packing-tips.jpg';
import blogRoutine from './images/blog/daily-routine.jpg';
import blogThrive from './images/blog/community-thrive.jpg';
import blogDining from './images/blog/sunset-dining.jpg';
import blogGarden from './images/blog/coastal-garden.jpg';

// Travel
import travelYacht from './images/travel/yacht-marina.jpg';
import travelTown from './images/travel/seaside-town.jpg';
import travelIsland from './images/travel/island-road.jpg';
import travelHarbor from './images/travel/harbor-view.jpg';

// Lifestyle
import lifeCouple from './images/lifestyle/couple-relaxing.jpg';
import lifeReading from './images/lifestyle/reading-porch.jpg';
import lifeCoffee from './images/lifestyle/coffee-ocean.jpg';
import lifeLounge from './images/lifestyle/sunset-lounge.jpg';

export const img = {
  hero: { oceanfront: heroOceanfront, sunsetWalk: heroSunsetWalk, balcony: heroBalcony },
  beaches: {
    charleston: beachCharleston,
    waves: beachWaves,
    palm: beachPalm,
    cove: beachCove,
    boardwalk: beachBoardwalk,
  },
  wellness: { yoga: wellnessYoga, stretch: wellnessStretch, walking: wellnessWalking, tea: wellnessTea },
  homes: {
    beachHouse: homeBeachHouse,
    interior: homeInterior,
    airy: homeAiry,
    patio: homePatio,
    kitchen: homeKitchen,
  },
  community: { marina: communityMarina, cafe: communityCafe, dock: communityDock, garden: communityGarden },
  blog: {
    cities: blogCities,
    downsizing: blogDownsizing,
    wellness: blogWellness,
    homeDesign: blogHomeDesign,
    active: blogActive,
    budget: blogBudget,
    towns: blogTowns,
    packing: blogPacking,
    routine: blogRoutine,
    thrive: blogThrive,
    dining: blogDining,
    garden: blogGarden,
  },
  travel: { yacht: travelYacht, town: travelTown, island: travelIsland, harbor: travelHarbor },
  lifestyle: { couple: lifeCouple, reading: lifeReading, coffee: lifeCoffee, lounge: lifeLounge },
};

export default img;
