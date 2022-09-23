<?php

namespace api\controllers;

use api\models\Product;

class ProductController extends \yii\rest\ActiveController
{
    public $modelClass = Product::class;
}
