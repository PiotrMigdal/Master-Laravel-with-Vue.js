<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BookableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(Bookable::class, 100)->create();
    }
}
