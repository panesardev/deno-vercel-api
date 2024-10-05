export default (request: Request) => {
  console.log(request);
  
	return new Response(`Hello, from Deno v${Deno.version.deno}!`);
};
