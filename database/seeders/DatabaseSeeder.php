<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'mark',
            'username' => 'developer',
            'email' => 'markarvinvalenzuela@gmail.com.com',
            'password' => 'P@ssword1!',
            'role' => 'developer',
        ]);
    }
}
