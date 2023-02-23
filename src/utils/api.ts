import { NextPageContext } from 'next';

function setHeader(uri: string, no_content_type?: boolean, ctx?: NextPageContext) {
  const header: { [key: string]: string } = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (no_content_type) {
    delete header['Content-Type'];
  }

  return header;
}


// Fetch POST
export const fetchPostApi = async function (uri: string, args: object) {
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      ...setHeader(uri),
    },
    body: JSON.stringify(args),
  });
  const responseJson = await response.json();
  return responseJson;
};

// Fetch GET
export const fetchGetApi = async function (uri: string, ctx?: NextPageContext) {
  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      ...setHeader(uri, false, ctx),
    },
  });
  const responseJson = await response.json();
  return responseJson;
};


