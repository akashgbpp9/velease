import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Office Interior Design in Pune | Flexible Leasing by VeLease",
  description = "Discover modern office interior design in Pune with VeLease. We transform bare shells into plug-and-play workspaces with flexible leasing and no upfront cost.",
  keywords = "office interior design, Pune, flexible leasing, workspace design, office furniture, veLease, plug-and-play office, modern office interiors, office fit-out, furniture as a service",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "/images/hero-bg-1.jpg",
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage = "/images/hero-bg-1.jpg",
  noIndex = false,
}) => {
  const siteUrl = "https://velease.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;
  const fullTwitterImage = twitterImage.startsWith("http")
    ? twitterImage
    : `${siteUrl}${twitterImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="veLease" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullOgUrl} />
      <meta property="twitter:title" content={twitterTitle || title} />
      <meta
        property="twitter:description"
        content={twitterDescription || description}
      />
      <meta property="twitter:image" content={fullTwitterImage} />

      {/* Additional SEO Tags */}
      <meta name="author" content="veLease" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#192324" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "veLease",
          url: siteUrl,
          logo: `${siteUrl}/images/veLease-logo.svg`,
          description: description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "101-B, Gamma-1, Giga Space IT Park, Viman Nagar",
            addressLocality: "Pune",
            addressCountry: "India",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-989-090-7614",
            contactType: "sales",
            email: "sales@velease.com",
          },
          sameAs: [
            "https://www.linkedin.com/company/velease",
            "https://www.facebook.com/velease",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
