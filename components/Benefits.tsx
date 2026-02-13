'use client';
import Image from 'next/image';
import secureicon from './Assets/securegreen.png';
import boltgreenicon from './Assets/boltgreen.png';
import verifygreenicon from './Assets/verifygreen.png';
import safegreenicon from './Assets/safe.png';
import packagegreenicon from './Assets/packagegreen.png';
import startgreenicon from './Assets/startgreen.png';
import happycustomericon from './Assets/happycustomer.png';
import satifyicon from './Assets/satisfy.png';
import experienceicon from './Assets/experience.png';
import clockicon from './Assets/clock.png';

export default function Benefits() {
  const benefits = [
    {
      icon: secureicon,
      title: 'Medical-Grade Quality',
      desc: 'All products manufactured in certified facilities following strict pharmaceutical standards',
      green: false
    },
    {
      icon: boltgreenicon,
      title: 'Fast-Acting Formula',
      desc: 'Advanced absorption technology for rapid results and maximum effectiveness',
      green: false
    },
    {
      icon: verifygreenicon,
      title: 'Certified & Tested',
      desc: 'Third-party lab tested for purity, potency, and safety. No banned substances',
      green: false
    },
    {
      icon: safegreenicon,
      title: 'Safe & Natural',
      desc: 'Premium natural ingredients with no harmful additives or fillers',
      green: false
    },
    {
      icon: packagegreenicon,
      title: '30 Day Supply',
      desc: '60 capsules per bottle - complete monthly supply for optimal results',
      green: true
    },
    {
      icon: startgreenicon,
      title: '100% Sustainable',
      desc: '30-day money-back guarantee. Love it or get a full refund',
      green: false
    }
  ];

  const stats = [
    { img:happycustomericon,number: '50K+', label: 'Happy Customers' },
    { img:satifyicon,number: '98%', label: 'Satisfaction' },
    { img:experienceicon ,number: '15+', label: 'Years Experience' },
    { img:clockicon ,number: '24x7', label: 'Support' }
  ];

  return (
    <section id="benefits" style={{padding:'80px 0'}}>
      <div className="container">
        <div className="row mb-4 align-items-end">
          <div className="col-lg-6">
            <h2 className="title">
              Why Choose<br/>
              <span className="text-bright-green">Flash Muscle?</span>
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-black text-xs">
              Medical-grade quality meets<br/>
              advanced performance
            </p>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="row g-4 mb-5">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className={`benefit-card`}>
                <div className="benefit-icon">
                  <Image src={benefit.icon} alt=""/>
                </div>
                <h5 className="benefit-title">{benefit.title}</h5>
                <p className="benefit-desc mb-0">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Cards */}
        <div className="row g-4 pt-5">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-sm-6 col-lg-3 col-12 h-100">
              <div className="stat-card">
                <Image src={stat.img} alt=""/>
                <span className="stat-card-number">{stat.number}</span>
                <div className="stat-card-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
