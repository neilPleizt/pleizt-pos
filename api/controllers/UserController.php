<?php

namespace api\controllers;

use api\models\User;

class UserController extends \yii\rest\ActiveController
{
    public $modelClass = User::class;

    public function actionIndex()
    {
        return [
            'status' => 'ok',
            'message' => 'success'
        ];
    }
}
