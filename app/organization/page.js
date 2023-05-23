import HeroSection from '../components/hero-section/layout-2';
import IntroSection from '../components/organization';
import fetchGraphQL from '../utils';

export default async function Organization() {
  const query = `
  query {
    OrganizationHeroSection : heroSectionCollection(where:{ 
        sectionName_contains: "Organization"} ) {
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

      organizationSection1:organizationSection1Collection{
        items{
          title
          description{
            json
          }
          sectionImage{
            image {
              url
              width
              height
            }
            imageAlt
          }
        }
      } 

  } 
  `;
  const data = await fetchGraphQL(query);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection {...data.data.OrganizationHeroSection.items[0]} />
      <IntroSection {...data.data.organizationSection1.items[0]} />
    </main>
  );
}
