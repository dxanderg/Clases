var yo = require('yo-yo');
var landing = require('../landing')

var signinForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="platzigram">Platzigram</h1>
                                <form action="" class="signup-form">
                                    
                                    <div class="section">
                                        <a href="" class="btn btn-fb hide-on-small-only">Inicia Sesion en Facebook</a>
                                        <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>Iniciar Sesion</a>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="section">
                                        
                                        <input type="text" name="username" id="" placeholder="Nombre de Usuario"/>
                                        <input type="password" name="password" id="" placeholder="Contraseña"/>
                                        <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia Sesion</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                                ¿No Tienes Una Cuenta? <a href="/signup">Registrate</a>
                            </div>
                        </div>
                    </div>`;
module.exports = landing(signinForm);