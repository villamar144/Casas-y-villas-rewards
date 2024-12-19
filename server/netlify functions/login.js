exports.handler = async (event, context) => {
    const { username, password } = JSON.parse(event.body);
  
    // Lógica para verificar credenciales
    if (username === "user" && password === "pass") {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Login successful!', token: 'example-token' }),
      };
    }
  
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid credentials.' }),
    };
  };