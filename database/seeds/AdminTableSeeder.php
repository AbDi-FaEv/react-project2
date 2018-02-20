<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'       => 'admin',
            'email'      => 'admin@local.host',
            'password'   => Hash::make('qwe123'),
            'created_at' => '2018-01-01 00:00:00',
            'updated_at' => '2018-01-01 00:00:00',
        ]);
    }
}
