<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// Migração preparatória para a futura seção de "jardim digital" (notas em
// markdown, inspirada em docs.forestry.md / garden.bradwoods.io).
// Ainda não há Model nem Controller usando esta tabela — só o esqueleto.
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('body_markdown');
            $table->enum('status', ['seedling', 'growing', 'evergreen'])
                ->default('seedling'); // maturidade da nota, ao estilo "digital garden"
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};
