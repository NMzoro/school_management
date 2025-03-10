<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
             'name' => 'Bouhaddou Mohammed ',
             'email' => 'med@gmail.com',
             'password'=>'12345678'
         ]);
         \App\Models\Admin::factory()->create([
             'first_name' => 'Oussama ',
             'last_name' => 'El bakri ',
             'birth_date'=>fake()->date(),
             'email' => 'admin@gmail.com',
             'address'=>fake()->address(),
             'phone'=>fake()->phoneNumber(),
             'password'=>'12345678'
         ]);
         \App\Models\Teacher::factory()->create([
             'first_name' => 'Bouaabid ',
             'last_name' => 'Mourad',
             'birth_date'=>fake()->date(),
             'email' => 'teacher@gmail.com',
             'address'=>fake()->address(),
             'phone'=>fake()->phoneNumber(),
             'password'=>'12345678'
         ]);
    }
}
