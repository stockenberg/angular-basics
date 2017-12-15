<?php

use Illuminate\Database\Seeder;

class TaskTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		for ($i = 0; $i < 10; $i++) {
			DB::table('tasks')->insert([
				'taskTitle'       => str_random(10),
				'taskDescription' => str_random(400),
			]);
		}
	}
}
