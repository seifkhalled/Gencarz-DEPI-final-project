export const brands = [
  { id: 'bmw', name: 'BMW', logo: '/src/brand_logos/BMW.png' },
  { id: 'mercedes', name: 'Mercedes', logo: '/src/brand_logos/Mercedes.png' },
  { id: 'toyota', name: 'Toyota', logo: '/src/brand_logos/Toyota.png' },
  { id: 'hyundai', name: 'Hyundai', logo: '/src/brand_logos/Hyundai.png' },
  { id: 'kia', name: 'Kia', logo: '/src/brand_logos/Kia.png' },
  { id: 'audi', name: 'Audi', logo: '/src/brand_logos/Audi.png' },
  { id: 'tesla', name: 'Tesla', logo: '/src/brand_logos/Tesla.png' },
];

export const cars = [
  {
    id: 1,
    brand: 'Tesla',
    model: 'Model S Plaid',
    price: 89990,
    year: 2024,
    km: 0,
    fuelType: 'Electric',
    transmission: 'Automatic',
    condition: 'New',
    image: 'https://placehold.co/800x600/png?text=Tesla+Model+S',
    aiInsight: 'High demand: Prices expected to hold steady for the next 6 months.'
  },
  {
    id: 2,
    brand: 'BMW',
    model: 'M4 Competition',
    price: 78500,
    year: 2023,
    km: 5200,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    condition: 'Used',
    image: 'https://placehold.co/800x600/png?text=BMW+M4',
    aiInsight: 'Great Value: 5% below average market price for this configuration.'
  },
  {
    id: 3,
    brand: 'Mercedes',
    model: 'AMG GT',
    price: 155000,
    year: 2024,
    km: 0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    condition: 'New',
    image: 'https://placehold.co/800x600/png?text=Mercedes+AMG',
    aiInsight: 'Investment Grade: Likely to appreciate in value over time.'
  },
  {
    id: 4,
    brand: 'Audi',
    model: 'RS e-tron GT',
    price: 147000,
    year: 2024,
    km: 0,
    fuelType: 'Electric',
    transmission: 'Automatic',
    condition: 'New',
    image: 'https://placehold.co/800x600/png?text=Audi+RS+e-tron',
    aiInsight: 'Future Proof: Top-tier battery health and tech stack.'
  },
  {
    id: 5,
    brand: 'Toyota',
    model: 'Land Cruiser 300',
    price: 95000,
    year: 2023,
    km: 12000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    condition: 'Used',
    image: 'https://placehold.co/800x600/png?text=Toyota+Land+Cruiser',
    aiInsight: 'Reliability King: Exceptional resale value in your region.'
  }
];

export const aiFeatures = [
  {
    title: 'AI Price Estimator',
    description: 'Get accurate market valuations based on real-time data and vehicle condition.',
    icon: 'Calculator'
  },
  {
    title: 'AI Car Recommendation',
    description: 'Our AI analyzes your lifestyle and budget to find your perfect automotive match.',
    icon: 'Sparkles'
  },
  {
    title: 'AI Car Comparison',
    description: 'Deep technical and value comparison between multiple models.',
    icon: 'ArrowLeftRight'
  },
  {
    title: 'AI Market Insights',
    description: 'Understand depreciation trends and the best time to buy or sell.',
    icon: 'TrendingUp'
  }
];
