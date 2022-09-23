<?php

namespace api\tests\api;

use api\tests\ApiTester;

class BasicCest
{
    // test
    public function productTester(ApiTester $I)
    {
        $I->haveHttpHeader('Content-Type', 'application/json');
        $I->sendGet('/product');
        $I->seeResponseCodeIs(200);
        $I->seeResponseContains('[]');
    }
}
