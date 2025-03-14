<?php
require_once 'Model.php';
require_once 'View.php';

class Controller
{
    private $model;
    private $view;

    public function __construct($model, $view)
    {
        $this->model = $model;
        $this->view = $view;
    }

    public function handleRequest()
    {
        $resultado = null;
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $num1 = isset($_POST['num1']) ? (int) $_POST['num1'] : 0;
            $num2 = isset($_POST['num2']) ? (int) $_POST['num2'] : 0;
            $resultado = $this->model->somar($num1, $num2);
        }
        $this->view->render($resultado);
    }
}
