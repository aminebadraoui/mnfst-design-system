import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Sidebar } from '@mnfst-kit/shared-components';

// Import or create your component pages
import AppLayoutPage from './pages/AppLayoutPage';
import FontSizesDemoPage from './pages/FontSizesDemoPage';
import SectionPage from './pages/SectionPage';
import SpacingDemoPage from './pages/SpacingDemoPage';
import AvatarPage from './pages/AvatarPage';
import ButtonPage from './pages/ButtonPage';
import InputPage from './pages/InputPage';
import LoadingSpinnerPage from './pages/LoadingSpinnerPage';
import LogoPage from './pages/LogoPage';
import MenuItemPage from './pages/MenuItemPage';
import PrimaryColorsPage from './pages/PrimaryColorsPage';
import MenuPage from './pages/MenuPage';
import ModalPage from './pages/ModalPage';
import NavbarPage from './pages/NavbarPage';
import SidebarPage from './pages/SidebarPage';
import HeroPage from './pages/HeroPage';
import FeatureCardPage from './pages/FeatureCardPage';
import LeftImageSectionPage from './pages/LeftImageSectionPage';
import RightImageSectionPage from './pages/RightImageSectionPage';
import CarouselPage from './pages/CarouselPage';
import ImageCarouselPage from './pages/ImageCarouselPage';
import ImageUploadPage from './pages/ImageUploadPage';
import MultistepFormPage from './pages/MultistepFormPage';

function App() {
  const [activePage, setActivePage] = useState('');

  const sidebarLinks = [
    { section: 'Layout', items: ['AppLayout', 'FontSizesDemo', 'Section', 'SpacingDemo'] },
    { section: 'Core', items: ['Avatar', 'Button', 'Input', 'Loading Spinner', 'Logo', 'Menu Item', 'Primary Colors'] },
    {
      section: 'Blocks',
      items: ['Menu', 'Modal', 'Navbar', 'Sidebar'],
      subsections: [
        { name: 'Landing', items: ['Hero', 'Feature Card', 'Left Image Section', 'Right Image Section'] }
      ]
    },
    { section: 'Templates', items: ['Carousel', 'Image Carousel', 'Image Upload', 'Multistep Form'] },
  ];

  return (
    <Router>
      <div className="App flex h-screen overflow-hidden">
        <Sidebar className="w-1/4 overflow-y-auto">
          <div className="pl-lg">
            <section id="sidebar-header" className='border-b-2 border-gray-200 my-md'>
              <h1 className='text-2xl font-bold'> MNFST Design System </h1>
            </section>
            <section id="sidebar-content">
              {sidebarLinks.map(({ section, items, subsections }) => (
                <section key={section} id={section.toLowerCase()}>
                  <h2 className='text-lg font-bold mb-sm mt-md'>{section}</h2>
                  <ul>
                    {items.map(item => (
                      <li key={item}>
                        <Link
                          to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`block py-1 ${activePage === item ? 'text-primary font-bold' : ''}`}
                          onClick={() => setActivePage(item)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {subsections && subsections.map(subsection => (
                    <section key={subsection.name} id={subsection.name.toLowerCase()} className='px-md mb-sm'>
                      <h3 className='text-md font-bold mb-sm mt-md'>{subsection.name}</h3>
                      <ul>
                        {subsection.items.map(item => (
                          <li key={item}>
                            <Link
                              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              className={`block py-1 ${activePage === item ? 'text-primary font-bold' : ''}`}
                              onClick={() => setActivePage(item)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </section>
              ))}
            </section>
          </div>
        </Sidebar>

        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Routes>
            <Route path="/applayout" element={<AppLayoutPage />} />
            <Route path="/fontsizesdemo" element={<FontSizesDemoPage />} />
            <Route path="/section" element={<SectionPage />} />
            <Route path="/spacingdemo" element={<SpacingDemoPage />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/loading-spinner" element={<LoadingSpinnerPage />} />
            <Route path="/logo" element={<LogoPage />} />
            <Route path="/menu-item" element={<MenuItemPage />} />
            <Route path="/primary-colors" element={<PrimaryColorsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/navbar" element={<NavbarPage />} />
            <Route path="/sidebar" element={<SidebarPage />} />
            <Route path="/hero" element={<HeroPage />} />
            <Route path="/feature-card" element={<FeatureCardPage />} />
            <Route path="/left-image-section" element={<LeftImageSectionPage />} />
            <Route path="/right-image-section" element={<RightImageSectionPage />} />
            <Route path="/carousel" element={<CarouselPage />} />
            <Route path="/image-carousel" element={<ImageCarouselPage />} />
            <Route path="/image-upload" element={<ImageUploadPage />} />
            <Route path="/multistep-form" element={<MultistepFormPage />} />
            <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to MNFST Design System</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
