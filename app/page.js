import BlogList from './components/blog/blog-list';
import Partners from './components/partners';
import PricingSection from './components/pricing';
import HeroSection from './components/hero-section/layout-1';
import Benefits from './components/benefits';
import Features from './components/features';
import fetchGraphQL from './utils';

export default async function Home() {
  const query = `
    query HomePage {
      heroSectionCollection(where:{ 
        sectionName_contains: "Home"} ) {
        items{
          title
          subTitle
          ctaButton{
            text
            url
          }
          heroImage{
            imageAlt
            image {
              url(transform:{
                format: AVIF
              })
            }
          }
        }
      }

      partnersHomePageSectionCollection{
        items{
          title
          partnerLogoCollection{
            items{
              imageAlt
              image {
                url(transform:{
                  format: AVIF
                })
                width
                height
              }
            }
          }
        }
      }

      benefitsHomeSectionCollection{
        items{
          title
          description
          benefitsCollection{
            items{
              title
              subtitle
              icon{
                image{
                 url(transform:{
                    format: AVIF
                  })
                width
                height
                }
                imageAlt
              }
            }
          }
        }
      }

      keyFeaturesSectionCollection{
        items{
          title
          description
          featuresCollection{
            items{
              title
              subtitle
              icon{
                image{
                 url(transform:{
                    format: AVIF
                  })
                width
                height
                }
                imageAlt
              }
            }
          }
        }
      }

      pricingSectionCollection{
        items{
          title
          action
          sectionButton {
            text
            url
          }
          personalUse{
            hook
            description
            annualPrice
            ctaButton{
              text
              url
            }
          }
          teamUse{
            monthlyPrice
            hook
            description
            annualPrice
            ctaButton{
              text
              url
            }
          }
        }
      }

      recentBlogsSectionCollection{
        items{
          sectionTitle
          blogPostsCollection{
            items{
              title
              postImage{
                imageAlt
                image{
                  url(transform:{
                    format: AVIF
                  })
                  width
                  height
                }
              }
              description
              author
              publishedDate
            }
          }
        }
      }

    }`;
  const data = await fetchGraphQL(query);
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <HeroSection
        imgSrc={data.data.heroSectionCollection.items[0].heroImage.image.url}
        imgAlt={data.data.heroSectionCollection.items[0].heroImage.imageAlt}
        title={data.data.heroSectionCollection.items[0].title}
        ctaText={data.data.heroSectionCollection.items[0].ctaButton.text}
        ctaUrl={data.data.heroSectionCollection.items[0].ctaButton.url}
        subTitle={data.data.heroSectionCollection.items[0].subTitle}
      />
      <Partners
        sectionTitle={
          data.data.partnersHomePageSectionCollection.items[0].title
        }
        partnersLogo={
          data.data.partnersHomePageSectionCollection.items[0]
            .partnerLogoCollection.items
        }
      />
      <Benefits
        sectionTitle={data.data.benefitsHomeSectionCollection.items[0].title}
        description={
          data.data.benefitsHomeSectionCollection.items[0].description
        }
        benefits={
          data.data.benefitsHomeSectionCollection.items[0].benefitsCollection
            .items
        }
      />
      <Features
        sectionTitle={data.data.keyFeaturesSectionCollection.items[0].title}
        description={
          data.data.keyFeaturesSectionCollection.items[0].description
        }
        features={
          data.data.keyFeaturesSectionCollection.items[0].featuresCollection
            .items
        }
      />
      <PricingSection
        sectionTitle={data.data.pricingSectionCollection.items[0].title}
        sectionButton={
          data.data.pricingSectionCollection.items[0].sectionButton
        }
        personalUse={data.data.pricingSectionCollection.items[0].personalUse}
        teamUse={data.data.pricingSectionCollection.items[0].teamUse}
      />
      <BlogList
        sectionTitle={
          data.data.recentBlogsSectionCollection.items[0].sectionTitle
        }
        blogPosts={
          data.data.recentBlogsSectionCollection.items[0].blogPostsCollection
            .items
        }
      />
    </main>
  );
}
