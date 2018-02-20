<?php

use Illuminate\Database\Seeder;

class ConditionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('conditions')->insert([
            'title'       => 'todo',
            'full_title'   => 'To Do',
            'created_at' => '2018-01-01 00:00:00',
            'updated_at' => '2018-01-01 00:00:00',
        ]);

        DB::table('conditions')->insert([
            'title'       => 'in-progress',
            'full_title'   => 'In Progress',
            'created_at' => '2018-01-01 00:00:00',
            'updated_at' => '2018-01-01 00:00:00',
        ]);

        DB::table('conditions')->insert([
            'title'       => 'done',
            'full_title'   => 'Done',
            'created_at' => '2018-01-01 00:00:00',
            'updated_at' => '2018-01-01 00:00:00',
        ]);
    }
}
