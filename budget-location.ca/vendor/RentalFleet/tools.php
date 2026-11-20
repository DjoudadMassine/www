<?php

function createHeader(string $header, ...$values) : string {

    return $header . ': ' . join(',', $values);

}