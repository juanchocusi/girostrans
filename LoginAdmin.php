<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>Modulo Administrativo</title>

        <link rel="stylesheet" type="text/css" href="css/css_LoguinAdmin_Style.css" />
                <!--<script src="js/modernizr.custom.63321.js"></script>-->
                <!--[if lte IE 7]><style>.main{display:none;} .support-note .note-ie{display:block;}</style><![endif]-->
    </head>
    <body>
        <div class="container">
            <section class="main">
                <form class="form-1" action="controles/LoginSistemaGerencial.php" method='post'>
                    <p class="field">                          
                        <select  id="empresa" name="empresa" >
                            <option value="M">Money</option> 
                            <option value="P">Pantera</option> 
                        </select>
                        <i class="icon-home icon-large"></i>
                    </p>

                    <p class="field">
                        <input type="text" id="nusuario" name="nusuario" placeholder="Usuario" onkeyup='javascript:this.value = this.value.toUpperCase();'>
                        <i class="icon-user icon-large"></i>
                    </p>
                    <p class="field">
                        <input type="password" id="pass" name="pass" placeholder="Password">
                        <i class="icon-lock icon-large"></i>
                    </p>
                    <input id="sucursal" name="sucursal" type="hidden" value="MFS"  />
                    <!--<input id="empresa" name="sucursal" type="hidden" value="MFS"  />-->
                    <p class="submit">
                        <button type="submit" name="submit"><i class="icon-arrow-right icon-large"></i></button>
                    </p>

                    <div class="footer">    
                        <?php
                        if (isset($_SESSION['ERRMSG_ARR']) && is_array($_SESSION['ERRMSG_ARR']) && count($_SESSION['ERRMSG_ARR']) > 0) {
                            echo '<ul style="padding:0; color:red;">';
                            foreach ($_SESSION['ERRMSG_ARR'] as $msg) {
                                echo '<li>', $msg, '</li>';
                            }
                            echo '</ul>';
                            unset($_SESSION['ERRMSG_ARR']);
                        }
                        ?>                                                           
                    </div>

                </form>
            </section>
        </div>
    </body>
</html>