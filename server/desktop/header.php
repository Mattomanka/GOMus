<? require_once ('functions.php'); ?>
<? require_once ('local.php'); 
	$qmcLang = getCurrentLang(); ?>

<!DOCTYPE html>
<!--[if IE 8]><html class="ie ie8"> <![endif]-->
<!--[if IE 9]><html class="ie ie9"> <![endif]-->
<!--[if gt IE 9]><!-->
<html>
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="author" content="Ansonika">
    <title><?=$GlobalLocal['title'][$qmcLang]?></title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
  

    <!-- BASE CSS -->
    <link href="css/base.css" rel="stylesheet">

    <!-- Google web fonts -->
   <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
   <link href='http://fonts.googleapis.com/css?family=Gochi+Hand' rel='stylesheet' type='text/css'>
   <link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>

    <!-- REVOLUTION SLIDER CSS -->
    <link href="resources/rs-plugin/css/settings.css" rel="stylesheet">
    <link href="css/extralayers.css" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->

</head>

<body>
<!--[if lte IE 8]>
    <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a>.</p>
<![endif]-->

    <div id="preloader">
        <div class="sk-spinner sk-spinner-wave">
            <div class="sk-rect1"></div>
            <div class="sk-rect2"></div>
            <div class="sk-rect3"></div>
            <div class="sk-rect4"></div>
            <div class="sk-rect5"></div>
        </div>
    </div>
    <!-- End Preload -->

    <div class="layer"></div>
    <!-- Mobile menu overlay mask -->

    <!-- Header================================================== -->
    <header>
        
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-3">
                    <div id="logo">
                        <a href="index.php"><img src="img/logo_GOMus.png" width="200" height="74" alt="GOMus" data-retina="true" class="logo_normal"></a>
                        <a href="index.php"><img src="img/logo_GOMus_sticky.png" width="163" height="19" alt="GOMus" data-retina="true" class="logo_sticky"></a>
                    </div>
                </div>
                <nav class="col-md-9 col-sm-9 col-xs-9">
                    <a class="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span><?=$GlobalLocal['menu'][$qmcLang]?></span></a>
                    <div class="main-menu">
                        <div id="header_menu">
                            <img src="img/logo_GOMus_sticky.png" width="160" height="34" alt="City tours" data-retina="true">
                        </div>
                        <a href="#" class="open_close" id="close_in"><i class="icon_set_1_icon-77"></i></a>
                        <ul>
                            <li class="submenu">
                                <a href="/desktop" class="show-submenu"><?=$GlobalLocal['home'][$qmcLang]?></a>
                                
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);" class="show-submenu"><?=$GlobalLocal['tours'][$qmcLang]?> <i class="icon-down-open-mini"></i></a>
                                <ul>
                                    <li><a href="tours.php"><?=$GlobalLocal['tours-list'][$qmcLang]?></a></li>
                                </ul>
                            </li>
                             <li class="submenu">
                                <a href="javascript:void(0);" class="show-submenu"><?=$GlobalLocal['locations'][$qmcLang]?> <i class="icon-down-open-mini"></i></a>
                                <ul>
                                    <li><a href="locations.php"><?=$GlobalLocal['locations-list'][$qmcLang]?></a></li>
                                    
                                </ul>
                            </li>
                            <li><a href="about.php"><?=$GlobalLocal['about-us'][$qmcLang]?></a></li>
                            
                        </ul>
                    </div><!-- End main-menu -->
                </nav>
            </div>
        </div><!-- container -->
    </header><!-- End Header -->