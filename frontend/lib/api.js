export function getServerURL(path = "") {
  return "http://localhost:1337" + path
  // const url = `${process.env.API_URL || "https://strapi-vercel-webinar.herokuapp.com"
  //   }${path}`;
  //return url;
}

export async function fetchAPI(query) {
  const requestUrl = getServerURL("/graphql");
  //const response = await fetch(requestUrl);

  const res = await fetch(requestUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    });

  const out = await res.json();

  return out.data;

}
export async function getHeroes() {
  const out = await fetchAPI(`query Heroes {
      heroes {
        data {
            id
          attributes {
            Image1 {
              data {
                attributes {
                  url
                }
              }
            }
            Description
          }
        }
      }
    }`)
  return out.heroes.data
}
export async function getPolicies() {
  const out = await fetchAPI(`query privacy {
      privacies{
        data{
          id 
          attributes
          {
            Heading
            paragraph
          }
        }
      }
    }
  `)
  return out.privacies.data
}