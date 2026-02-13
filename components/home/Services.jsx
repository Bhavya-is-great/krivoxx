import React from 'react';
import styles from '@/css/components/home/Services.module.css';
import Card from '@/ui/Card';

const Services = () => {

  const servicesData = [
    {
      icon: "📦",
      title: "Digital Presence & Branding",
      subtitle: "Make Your Brand Impossible to Ignore",
      description:
        "Build a strong online presence that attracts attention and builds trust instantly.",
      services: [
        "Website Creation",
        "Graphic Design",
        "Content Writing",
      ],
      moreText: "+ more growth tools",
      buttonText: "Build My Brand",
    },
    {
      icon: "📈",
      title: "Lead Generation & Growth",
      subtitle: "Turn Attention Into Revenue",
      description:
        "We build predictable growth systems designed to bring consistent customers.",
      services: [
        "Meta & Paid Ads",
        "YouTube Marketing",
        "Lead Generation Systems",
      ],
      moreText: "+ scale strategies",
      buttonText: "Get More Customers",
    },
    {
      icon: "⚙️",
      title: "Business Automation & Operations",
      subtitle: "Work Less. Scale More.",
      description:
        "Automate repetitive workflows and create systems that save time and money.",
      services: [
        "Smart Automations",
        "Business Management Systems",
        "Bulk Data Management",
      ],
      moreText: "+ efficiency upgrades",
      buttonText: "Automate My Business",
    },
    {
      icon: "💻",
      title: "Tech & Advanced Solutions",
      subtitle: "Built for Serious Growth",
      description:
        "Custom technology solutions for businesses ready to scale with precision.",
      services: [
        "App Development",
        "Custom Dashboards",
        "Advanced Integrations",
      ],
      moreText: "+ tailored builds",
      buttonText: "Create Something Powerful",
    },
  ];

  return (
    <section id='services' className={styles.service}>
      <h1 className={styles.head}>How we Serve Your Brand</h1>
      <p className={styles.subhead}>Stop Competing. Start Dominating.</p>

      <div className={styles.cards}>
        {servicesData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            services={card.services}
            moreText={card.moreText}
            buttonText={card.buttonText}
          />
        ))}
      </div>

    </section>
  )
}

export default Services
