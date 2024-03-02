const LoginForm = ({ value, handleChange, handleSubmit }) => {

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" value={value.login} onChange={handleChange} />
        <input type="password" name="password" value={value.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  };
  

export default LoginForm