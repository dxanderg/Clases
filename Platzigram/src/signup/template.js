var yo = require('yo-yo');
var landing = require('../landing')

var signupForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="platzigram">Platzigram</h1>
                                <form action="" class="signup-form">
                                    <h2>Registrate Para Ver Fotos de tus amiguis.</h2>
                                    <div class="section">
                                        <a href="" class="btn btn-fb hide-on-small-only">Inicia Sesion en Facebook</a>
                                        <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>Iniciar Sesion</a>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="section">
                                        <input type="email" name="email" id="" placeholder="Correo Electronico"/>
                                        <input type="text" name="name" id="" placeholder="Nombre Completo"/>
                                        <input type="text" name="username" id="" placeholder="Nombre de Usuario"/>
                                        <input type="password" name="password" id="" placeholder="Contraseña"/>
                                        <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                                ¿Tienes Una Cuenta? <a href="/signin">Entrar</a>
                            </div>
                        </div>
                    </div>`;
module.exports = landing(signupForm);