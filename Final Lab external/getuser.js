async function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    users.slice(0, 5).forEach(user => {
      console.log(user.name);
    });

  } catch (error) {
    console.error('Failed to fetch users:');
  }
}

getUsers();
