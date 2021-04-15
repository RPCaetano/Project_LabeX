import React from 'react';
import styles from '../LoginPage/styles.css'

function LoginPage() {
  return (
    <section class="form-section">
      <h1>Área do administrador</h1>

      <div class="form-wrapper">
        <form action="">
          <div class="input-block">
            <label for="login-email">Email</label>
            <input type="email" id="login-email" />
          </div>
          <div class="input-block">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" />
          </div>
          <button type="submit" class="btn-login">Login</button>
        </form>
      </div>
    </section>
);
}

export default LoginPage;