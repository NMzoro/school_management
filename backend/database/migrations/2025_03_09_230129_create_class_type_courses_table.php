<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('class_type_courses', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\ClassType::class)->nullable()->constrained()->nullOnDelete();
            $table->foreignIdFor(\App\Models\Course::class)->nullable()->constrained()->nullOnDelete();
            $table->unsignedBigInteger('coefficient');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_type_courses');
    }
};
