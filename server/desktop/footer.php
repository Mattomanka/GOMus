    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-3">
                    <h3><?=$GlobalLocal['need-help'][$qmcLang]?></h3>
                    <a href="tel://00380487619290" id="phone">+38(048)761-92-90</a>
                    <a href="mailto:help@gomus.com.ua" id="email_footer">help@gomus.com.ua</a>
                </div>
                <div class="col-md-3 col-sm-3">
                    <h3><?=$GlobalLocal['about'][$qmcLang]?></h3>
                    <ul>
                        <li><a href="#"><?=$GlobalLocal['about-us'][$qmcLang]?></a></li>
                        <li><a href="#"><?=$GlobalLocal['faq'][$qmcLang]?></a></li>
                        <li><a href="#"><?=$GlobalLocal['login'][$qmcLang]?></a></li>
                        <li><a href="#"><?=$GlobalLocal['register'][$qmcLang]?></a></li>
                         <li><a href="#"><?=$GlobalLocal['terms'][$qmcLang]?></a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-3">
                   
                </div>
                <div class="col-md-2 col-sm-3">
                    <h3><?=$GlobalLocal['settings'][$qmcLang]?></h3>
                    <div class="styled-select">
                        <select class="form-control" name="lang" id="lang">
                            <option value="en" <? if(getCurrentLang() == 'en') echo ' selected'; ?> ><?=$GlobalLocal['en-lang'][$qmcLang]?></option>
                            <option value="ru" <? if(getCurrentLang() == 'ru') echo ' selected'; ?>><?=$GlobalLocal['ru-lang'][$qmcLang]?></option>
                        </select>
                    </div>
                    
                </div>
            </div><!-- End row -->
            <div class="row">
                <div class="col-md-12">
                    <div id="social_footer">
                        <ul>
                            <li><a href="#"><i class="icon-facebook"></i></a></li>
                            <li><a href="#"><i class="icon-twitter"></i></a></li>
                            <li><a href="#"><i class="icon-google"></i></a></li>
                            <li><a href="#"><i class="icon-instagram"></i></a></li>
                            <li><a href="#"><i class="icon-vimeo"></i></a></li>
                            <li><a href="#"><i class="icon-youtube-play"></i></a></li>
                        </ul>
                        <p>© GOMus 2015</p>
                    </div>
                </div>
            </div><!-- End row -->
        </div><!-- End container -->
    </footer><!-- End footer -->

<div id="toTop"></div><!-- Back to top button -->

    <!-- Common scripts -->
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/common_scripts_min.js"></script>
    <script src="js/functions.js"></script>

    <!-- SLIDER REVOLUTION 4.x SCRIPTS  -->
    <script src="resources/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
    <script src="resources/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
    <script src="js/revolution_func.js"></script>
	<script src="js/main.js"></script>
</body>

</html>