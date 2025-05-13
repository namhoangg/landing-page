// next13 using fetch to fetching api in server component (ssr, ssg, isr)
export const fetchUsers = async () => {
  // ssg
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // isr
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {
  //   next: {
  //     revalidate: 5000 //5s
  //   }
  // })

  //ssr
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });

  return res.json();
};
