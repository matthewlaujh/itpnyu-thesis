// UMAP Animation data
#ifndef UMAP_ANIMATION_H
#define UMAP_ANIMATION_H

#define NUM_FRAMES 775
#define MATRIX_SIZE 8

struct AnimationFrame {
  uint8_t pixels[MATRIX_SIZE][MATRIX_SIZE][3];
};

const AnimationFrame animationFrames[NUM_FRAMES] = {
  // Animation frames would be formatted here
};

#endif