<?php
require_once 'Model.php';
require_once 'View.php';
require_once 'Controller.php';

$model = new Model();
$view = new View();
$controller = new Controller($model, $view);

$controller->handleRequest();
