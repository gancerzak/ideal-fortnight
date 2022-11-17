async function getUsers()
{
    const connection = await mysql.createConnection( config );
    const query = "SELECT * FROM tabela";
    const results = await connection.execute(query);
    console.log(results[0]);
    connection.end();
    return results;
}
const config = {
    host     : 'localhost',
    user     : 'tadek',
    password : 'Z6X5T*ZyVtkv9FIK',
    database : 'tadek',
}
async function createUsers()
{
    const connection = await mysql.createConnection( config );
    const query = "INSERT INTO tabela (id,nazwa) values (null,michalek)";
    const results = await connection.execute(query);
    console.log(results[0]);
    connection.end();
    return results;
}
