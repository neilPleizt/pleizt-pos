<?php

namespace api\controllers;

use app\models\Room;

class RoomController extends \yii\rest\ActiveController
{
    public $modelClass = Room::class;
}
