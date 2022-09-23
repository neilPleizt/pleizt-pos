<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%rooms}}`.
 */
class m220920_041721_create_rooms_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%rooms}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(),
            'status' => $this->boolean(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%rooms}}');
    }
}
