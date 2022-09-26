<?php

namespace api\controllers;

use Yii;
use api\models\LoginForm;
use api\models\User;
use yii\rest\ActiveController;

class UserController extends ActiveController
{
    public $modelClass = User::class;

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['index']);
        unset($actions['create']);
        unset($actions['update']);
        unset($actions['delete']);
    }

    public function actionIndex()
    {
        return [
            'status' => 'ok',
            'message' => 'success'
        ];
    }

    public function actionTest()
    {
        return [
            'status' => 'okk',
            'message' => 'success'
        ];
    }

    /**
     * Log in
     * 
     * @return Array
     */
    public function actionLogin()
    {
        $model = new LoginForm();
        if ($model->load(Yii::$app->getRequest()->getBodyParams(), '') && $model->login()) {
            return [
                'access_token' => $model->login()
            ];
        }

        return $model->getFirstErrors();
    }
}
