/* 
  TODO:
    - Start using the city parameter in getEventsFor
    - Create types
*/

export async function getEventsFor(city: string) {
  const query = `
    {
      eventCollection(where: {location: {city: "Milan"}}) { 
        items { 
          name 
          slug 
          poster { 
            url 
          } 
          price 
          date 
          location { 
            name 
          } 
          description 
          lineupCollection { 
            items { 
              name 
            } 
          }
        } 
      } 
    }  
  `;

  const response = await fetchContentful(query);
  const result = await response.json();
  return result.data.eventCollection.items;
}

export async function getEvent(slug: string) {
  const query = `
  {
    eventCollection(where: {slug: "${slug}"}, limit: 1) {
      items {
        name
        slug
        poster {
          url
        }
        price
        date
        location {
          name
        }
        description
        lineupCollection {
          items {
            name
          }
        }
      }
    }
  } 
`;

  const response = await fetchContentful(query);
  const result = await response.json();
  const events = result.data.eventCollection.items;
  return events[0];
}

async function fetchContentful(graphQlQuery: string) {
  const space = process.env.CONTENTFUL_SPACE;
  const environment = process.env.CONTENTFUL_ENVIRONMENT;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const url = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`;

  const query = {
    query: graphQlQuery,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(query),
  });
}
