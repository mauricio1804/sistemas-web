<?php
class View
{
    public function render($resultado = null)
    {
        echo "<form method='POST' action='index.php'>
                <input type='number' name='num1' placeholder='Número 1' required>
                <input type='number' name='num2' placeholder='Número 2' required>
                <button type='submit'>Somar</button>
              </form>";

        if ($resultado !== null) {
            echo "<p>Resultado: $resultado</p>";
        }
    }
}
