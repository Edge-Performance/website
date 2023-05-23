import HeroSection from '../components/hero-section/layout-2';
import Leaders from '../components/leadership/leaders';
import AdvisoryBoard from '../components/leadership/advisory-board';
import ContactSection from '../components/leadership/contact-section';
import fetchGraphQL from '../utils';

export default async function Leadership() {
  const query = `
  query {
    leadershipHeroSection : heroSectionCollection(where:{ 
      sectionName_contains: "Leadership"} ) {
      items{
        title
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
    LeadersSection: leadersSectionCollection {
      items{
        sectionTitle
        leadersCollection{
          items{
            name
            position
            avatar{
              image{
                url(transform:{
                format: AVIF
                })
                width
                height
              }
              imageAlt
            }
            description{
              json
            }
            socialLinksCollection{
              items{
                url
                text
              }
            }
          }
        }
      }
    } 

    AdvisoryBoardSection :	advisoryBoardSectionCollection{
      items{
        sectionTitle
        advisorsCollection{
          items{
            name
            position
            avatar {
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

}
  `;

  const data = await fetchGraphQL(query);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection {...data.data.leadershipHeroSection.items[0]} />
      <Leaders
        sectionTitle={data.data.LeadersSection.items[0].sectionTitle}
        leaders={data.data.LeadersSection.items[0].leadersCollection.items}
      />
      <AdvisoryBoard
        sectionTitle={data.data.AdvisoryBoardSection.items[0].sectionTitle}
        advisors={
          data.data.AdvisoryBoardSection.items[0].advisorsCollection.items
        }
      />
      <ContactSection />
    </main>
  );
}
