<div id="contact" class="contact">
    <div class="section secondary-section">
        <div class="container">
            <div class="title">
                <h1>Contactenos</h1>
                <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
            </div>
        </div>
        <div class="map-wrapper">
            <div class="map-canvas" id="map-canvas">Loading map...</div>
            <div class="container">
                <div class="row-fluid">
                    <div class="span5 contact-form centered">
                        <h3>Mandanos tu mensaje</h3>
                        <div id="successSend" class="alert alert-success invisible">
                            <strong>Well done!</strong>Your message has been sent.</div>
                        <div id="errorSend" class="alert alert-error invisible">There was an error.</div>
                        <form id="contact-form" action="php/mail.php">
                            <div class="control-group">
                                <div class="controls">
                                    <input class="span12" type="text" id="name" name="name" placeholder="* Tu nombre..." />
                                    <div class="error left-align" id="err-name">Please enter name.</div>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
                                    <input class="span12" type="email" name="email" id="email" placeholder="* Tu email..." />
                                    <div class="error left-align" id="err-email">Please enter valid email adress.</div>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
                                    <textarea class="span12" name="comment" id="comment" placeholder="* Commentarios..."></textarea>
                                    <div class="error left-align" id="err-comment">Please enter your comment.</div>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
                                    <button id="send-mail" class="message-btn">Enviar Mensaje</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="span9 center contact-info">
                <p>Arequipa, Calle 7458-A</p>
                <p class="info-mail">atencion_cliente@grupo-pantera.com</p>
<!--                <p>+11 234 567 890</p>
                <p>+11 286 543 850</p>-->
                <div class="title">
                    <h3>Redes Sociales</h3>
                </div>
            </div>
            <div class="row-fluid centered">
                <ul class="social">
                    <li>
                        <a href="">
                            <span class="icon-facebook-circled"></span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon-twitter-circled"></span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon-linkedin-circled"></span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon-pinterest-circled"></span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon-dribbble-circled"></span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon-gplus-circled"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>