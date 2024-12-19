exports.handler = async (event, context) => {
    const { username, password } = JSON.parse(event.body);
  
    // Lógica para guardar el registro en la base de datos
    // Ejemplo básico
    if (!username || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Username and password are required.' }),
      };
    }
  
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'User registered successfully!' }),
    };
  };