import HeroSection from '../components/hero-section/layout-2';
import AmFocus from '../components/features/am-focus';
import PmFocus from '../components/features/pm-focus';
import Empowerment from '../components/features/empowerment';
import DownloadFeaturesSection from '../components/features/download-feature';
import fetchGraphQL from '../utils';

export default async function Features() {
  const query = `
  query {
    FeaturesHeroSection : heroSectionCollection(where:{ 
        sectionName_contains: "Features"} ) {
        items{
          title
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

      featureSection1:featureSection1Collection {
        items{
          headerSection{
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
           bodySectionCollection{
          items{
            name
            description
          }
        }
          sectionImage {
            url(transform:{
              format: AVIF
            })
            width
            height
          }
        }
      }

      featuresSection2:featureSection2Collection{
        items{
          headerSection {
            title
            subtitle
            icon {
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
          bodySectionCollection{
            items{
              name
              description
            }
          }
          imageSection {
            url(transform:{
              format: AVIF
            })
            width
            height
          }
        }
      }

      featuresSection3 : featureSection3Collection{
        items{
          title
          subtitle
          imageSection{
            width
            height
            url(transform:{
              format: AVIF
            })
          }
          bodySectionCollection{
            items{
              name
              description
            }
          }
        }
      }
     
  }
  `;
  const data = await fetchGraphQL(query);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection {...data.data.FeaturesHeroSection.items[0]} />
      <AmFocus {...data.data.featureSection1.items[0]} />
      <PmFocus {...data.data.featuresSection2.items[0]} />
      <Empowerment {...data.data.featuresSection3.items[0]} />
      <DownloadFeaturesSection />
    </main>
  );
}
