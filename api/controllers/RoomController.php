<?php

namespace api\controllers;

use app\models\Room;
use Yii;
use yii\web\UnauthorizedHttpException;

class RoomController extends \yii\rest\ActiveController
{
    public $modelClass = Room::class;

    public function beforeAction($action)
    {
        $user = Yii::$app->user->identity;
        if (!$user) {
            throw new UnauthorizedHttpException("Error Processing Request", 1);
        }
    }
}
