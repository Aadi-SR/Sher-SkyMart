import React from 'react'
import WelcomeBanner from '../components/WelcomeBanner'
import DashboardStats from '../components/DashboardStats';
import ShopByCategory from '../components/ShopByCategory';
import ProductHighlights from '../components/ProductHighlights';
import FeatureStrip from '../components/FeatureStrip';

const Home = () => {
  return (
    <div className='bg-black'>
      <WelcomeBanner />
      <DashboardStats />
      <ShopByCategory />
      <ProductHighlights />
      <FeatureStrip />
    </div>
  )
}

export default Home