<?php

$file = "data/registrations.csv";

$name = $_POST['childName'];
$school = $_POST['school'];
$grade = $_POST['grade'];
$mobile = $_POST['mobile'];

$data = [
date("Y-m-d H:i:s"),
$name,
$school,
$grade,
$mobile
];

$fp = fopen($file,'a');

fputcsv($fp,$data);

fclose($fp);

echo "saved";

?>