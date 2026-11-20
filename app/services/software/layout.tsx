import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تطوير وتصميم مواقع الويب | معيار',
  description: 'تصميم وبرمجة مواقع ويب احترافية: متاجر إلكترونية، مواقع شركات، بورتفوليو، منصات تعليمية، وصفحات هبوط عالية التحويل.',
  openGraph: {
    title: 'تطوير وتصميم مواقع الويب | معيار',
    description: 'تصميم وبرمجة مواقع ويب احترافية: متاجر إلكترونية، مواقع شركات، بورتفوليو، منصات تعليمية، وصفحات هبوط عالية التحويل.',
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 800,
        alt: 'معيار | تطوير وتصميم مواقع الويب',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'تطوير وتصميم مواقع الويب | معيار',
    description: 'تصميم وبرمجة مواقع ويب احترافية: متاجر إلكترونية، مواقع شركات، بورتفوليو، منصات تعليمية، وصفحات هبوط عالية التحويل.',
    images: ['/og-image.jpg'],
  },
};

export default function SoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
