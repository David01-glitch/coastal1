// Central business identity — used in JSON-LD, footer, contact page, SEO.
export const site = {
  name: 'Coastal Retirement Life',
  tagline: 'Coastal living & beach retirement, beautifully unhurried.',
  description:
    'Coastal Retirement Life is an editorial lifestyle blog for adults over 50 who dream of the shore — featuring beach retirement guides, oceanfront travel, coastal home design, and wellness for a calmer, brighter second act.',
  url: 'https://www.coastalretirementlife.com',
  email: 'coastalretirementlife@gmail.com',
  phone: '(843) 618-5401',
  phoneHref: '+18436185401',
  address: {
    street: '511 Ocean Harbor Blvd',
    city: 'Charleston',
    region: 'SC',
    postalCode: '29403',
    country: 'US',
  },
  founded: '2019',
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    pinterest: 'https://www.pinterest.com/',
  },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/coastal-living', label: 'Coastal Living' },
  { to: '/beach-retirement-guides', label: 'Retirement Guides' },
  { to: '/oceanfront-travel', label: 'Travel' },
  { to: '/retirement-wellness', label: 'Wellness' },
  { to: '/tropical-home-design', label: 'Home Design' },
  { to: '/active-senior-lifestyle', label: 'Active Living' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];
