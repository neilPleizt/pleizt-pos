<?php

namespace api\tests\api;

use api\tests\ApiTester;
use Codeception\Util\HttpCode;
use Faker\Factory;

class RoomCest
{
    /**
     * List all rooms
     * 
     * @return void
     */
    public function listRoomTester(ApiTester $I)
    {
        $I->haveHttpHeader('Content-Type', 'application/json');
        $I->sendGet('/room');
        $I->seeResponseCodeIs(HttpCode::OK);
        $I->seeResponseContains('[]');
    }

    /**
     * Create a room
     * 
     * @return void
     */
    public function createRoomTester(ApiTester $I)
    {
        $faker = Factory::create();
        $I->haveHttpHeader('Content-type', 'application/json');
        $I->sendPost(
            '/room/create',
            ['name' => $faker->name()]
        );
        $I->seeResponseCodeIs(HttpCode::CREATED);
        $I->seeResponseIsJson();
        $I->seeResponseMatchesJsonType([
            'id' => 'integer',
            'name' => 'string'
        ]);
    }
}
