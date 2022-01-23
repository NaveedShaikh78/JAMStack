//import contentful from 'contentful'
import got from 'got'
// var client = contentful.createClient({
//   space: 'xd01elyp3p3e',
//   accessToken: 'Jp8IqNNCZqI2SwtlsLRyeJLhJf4UBhBpjkoo4VMttj8',
// });
const spaceID = "xd01elyp3p3e";
const accessToken = "Jp8IqNNCZqI2SwtlsLRyeJLhJf4UBhBpjkoo4VMttj8";
const endpoint = "https://graphql.contentful.com/content/v1/spaces/" + spaceID;

export function getServerURL(path = "") {
  return "http://localhost:1337" + path
  // const url = `${process.env.API_URL || "https://strapi-vercel-webinar.herokuapp.com"
  //   }${path}`;
  //return url;
}

export async function fetchAPI(query) {
  const requestUrl = getServerURL("/graphql");
  //const response = await fetch(requestUrl);

  const options = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  const out = await got
    .post(endpoint, options)
    .then((response) => {
      console.log(response.body);
      return JSON.parse(response.body);
    })
    .catch((error) => {
      console.log(error);
    });
  return out.data;

}
export async function getHeroes() {
  const heroQuery = `{
    heroCollection {
      items {
        image {
          id
          description
          url
        }
      }
    }
  }`;
  const out = await fetchAPI(heroQuery)
  return out.heroCollection.items
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