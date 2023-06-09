const fetcher = async ({ url, method, body, json = true }: { url: string, method: string, body: any, json?: boolean }) => {
  const options = {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }
 
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data;  
  }
};

// FIXME user
export const register = async (user: any) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
  });
};

export const signin = async (user: any) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
  });
};