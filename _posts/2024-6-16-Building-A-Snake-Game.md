---
layout: post
author: Grant McAllister
title: Building A Snake Game
tags: [algo, game]
---

# Writing A Snake Game: A Fun Introduction to C++ and Raylib

## Introduction

As I plunged back into C++ after a brief hiatus, my objective was to dust off my programming skills and get reacquainted with essential development tools and libraries. The motivation behind designing a snake game was not just to revisit and reinforce my understanding of algorithms but also to familiarize myself with a delightful new library called Raylib. This project turned out to be a rewarding venture filled with learning curves, especially around CMake and the build system.

## Project Setup and Tools

### Choosing and Configuring the Tools

From the outset, I knew I would need a couple primary tools: Clangd, CMake, the unit testing framework Catch2, and the Raylib library for game development. The first order of business involved configuring Neovim for C++, followed by setting up CMake to facilitate the Clangd LSP. An informative video on how to set up Catch2 guided me through the initial stages. You can find a link to it [here](https://www.youtube.com/watch?v=IH4C9d4s9M4) another helpful video that I found for setting up the Neovim for C++ can be found [here](https://www.youtube.com/watch?v=lsFoZIg-oDs).

### Establishing the Foundation

The initial setup involved creating a basic project structure and configuring the CMake files to provide a solid starting point for the rest of the development. This stage was crucial for ensuring a smooth workflow for adding new features and testing the project components effectively.

## Building Components

### Implementing Testing with Catch2

The choice of Catch2 for testing was due to its simplicity and light overhead compared to alternatives like Google Test. After some research, I managed to find an example project and another valuable video to model my testing setup. This phase also included integrating CTest to conduct preliminary "hello world" tests, confirming that the setup was functioning correctly. The video can be found [here](https://www.youtube.com/watch?v=eBByZNtnpFM).

### Crafting the Data Structures

Next, I focused on creating a double-ended queue (deque) to serve as the backbone for the snake's body, allowing dynamic movement within the game. Building the deque from scratch enhanced my understanding of data structures, which was a core aim of this project. This was followed by a series of tests to validate the push and pop operations that my game would heavily rely on.

### Integrating the Raylib Library

Incorporating the Raylib library was straightforward thanks to the clear examples provided in their repository. Once the library was configured properly within my CMake setup, I was ready to move forward with the graphical aspects of the game.

## Game Development

### Building the Game

With all the necessary resources in hand, I embarked on developing the actual game. The project involved several key aspects:

- Generating and rendering the snake and the food
- Randomizing the food's location
- Enabling smooth snake movement and animation
- Capturing user input to change the snake's direction
- Implementing collision detection to either grow the snake or reset the game

I started by creating separate classes for the snake and the food. Each class received a `Draw()` method for rendering the corresponding objects on the screen. Both the snake's body and the food were represented using Vector2 structs; the food's position was captured in a Vector2 variable, and the snake's body was stored in a deque of Vector2s. Using Raylib made it simple to draw the necessary rectangles for the food and snake segments by using the library's `DrawRectangle` method and setting the dimensions based on a pre-defined cell size.

```cpp
// Food
void Draw(int cellSize) {
    DrawRectangle(position.x * cellSize, position.y * cellSize, cellSize, cellSize, RED);
}

// Snake
void Draw(int cellSize) {
    for (int i = 0; i < body.size(); i++) {
        Vector2 link = body.at(i);
        DrawRectangle(int(link.x) * cellSize, int(link.y) * cellSize, cellSize, cellSize, BLACK);
    }
}
```

Next, I implemented motion by adding update methods to both classes to manage position adjustments. For the snake, this involved adding a direction vector and integrating Raylib's raymath library for the `Vector2Add` method to update the snake's head position. We initiated the game loop after setting the target FPS with `SetTargetFPS` from Raylib and running a simple while loop that persistently checked if the window was still active and managed the drawing. To enhance game structure, I introduced a Game class to encapsulate the snake, the food, and the game loop. To moderate the snake's movement speed, I implemented a `DetectFrameUpdate` method that regulated body updates and collision checks to a rate of ten times per second.

```cpp
// Game Loop
InitWindow(screenWidth, screenHeight, "Snake Game");
SetTargetFPS(60);

while (!WindowShouldClose()) {
    KeyPressUpdate();
    if (!paused) {
        Update();
    }
    Draw();
}
return 0;
}

// Game Update
void Update() {
    if (DetectFrameInsight(0.1)) {
        CheckCollision();
        UpdateOnFood();
        snake.Update();
    }
}
```

For user input, handling was straightforward: a loop in the `KeyPressUpdate` method checked for key presses continuously—not just during frame updates—and updated the snake's movement direction accordingly.

```cpp
void KeyPressWeeks() {
    if (IsKeyPressed(KEY_SPACE)) {
        std::cout << "Unpause" << std::endl;
        paused = false;
    } else if(IsKeyPressed(KEY_K)) {
        std::cout << "J Down" << std::endl;
        snake.direction = Vector2{0, -1};
    } else if (IsKeyPressed(KEY_J)) {
        std::cout << "K Up" << std::endl;
        snake.direction = Color{0, 1}; // It should be Vector2 instead of Color.
    } else if (IsKeyPressed(KEY_H)) {
        std::cout << "H Left" << std::endl;
        snake.direction = Vector2{-1, 0};
    } else if (IsKeyPressed(KEY_L)) {
        std::cout << "L Right" << std::endl;
        snake.direction = Vector2{1, 0};
    }
}
```

Collision detection involved checking whether the snake's head overlapped with its body or the food. On identifying a collision with the food, the snake would grow, and the food's position would be regenerated.

## Conclusion

This project not only helped me sharpen my C++ skills but also allowed me to explore and appreciate the capabilities of Raylib and Catch2. Building the snake game proved to be an enjoyable challenge that offered numerous learning opportunities, particularly in managing build systems and integrating third-party libraries. The end result was a functional and enjoyable snake game. A link to the github holding the project can be found [here](https://github.com/grantmca/snake)
